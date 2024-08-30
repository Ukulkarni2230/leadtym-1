import { NextResponse } from "next/server";
import cookie from "cookie";
import onboardRoutes from "@/src/components/pages/onBoard/onBoardRoutes";
import { decrypt, encrypt } from "@/src/utils/crypto";

const onboardSteps = [
  "/signup",
  "/verify-otp",
  "/who-are-you",
  "/info",
  "/login",
];

const userTypes = {
  1: "brand",
  2: "agency",
  3: "affiliate",
  4: "influencer",
  5: "individual",
};

export function middleware(req) {
  const url = req.nextUrl.clone();
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const token = cookies["token"];
  const onboardStep = cookies["onboard-step"];
  const userDetailsCookie = cookies["userDetails"];
  const currentPath = req.nextUrl.pathname;

  // Check if the current path is an auth page or a dynamic blog page
  const isAuthPage =
    ["/login", "/signup", "/contact-us", "/", "/blog", "/log"].includes(currentPath) ||
    /^\/blog\/\d+$/.test(currentPath);

  // Handle authenticated users trying to access auth pages
  if (token && isAuthPage) {
    if (userDetailsCookie) {
      try {
        const parsedUserDetails = JSON.parse(userDetailsCookie);
        const { userType, dynamicRoute } = parsedUserDetails;
        const userTypeString = userTypes[userType];
        const userTypeLower = userTypeString.toLowerCase();
        const userSpecificPath = `/${userTypeLower}/${
          dynamicRoute || "dashboard"
        }`;

        url.pathname = userSpecificPath;
        return NextResponse.redirect(url);
      } catch (err) {
        console.error("Failed to parse user details:", err);
      }
    }
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Clear the onboard-step cookie if at signup or login
  if (isAuthPage) {
    const res = NextResponse.next();
    res.cookies.delete("onboard-step", { path: "/" });
    return res;
  }

  // Manage onboarding steps
  if (onboardRoutes.includes(currentPath)) {
    let userStep = onboardStep ? decrypt(onboardStep) : "/signup";
    const currentIndex = onboardSteps.indexOf(currentPath);
    const userIndex = onboardSteps.indexOf(userStep);

    if (currentIndex < userIndex) {
      const newStep = onboardSteps[currentIndex];
      const encryptedStep = encrypt(newStep);
      const response = NextResponse.next();
      response.cookies.set("onboard-step", encryptedStep, {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        path: "/",
      });
      return response;
    }

    if (currentIndex > userIndex) {
      url.pathname = userStep;
      return NextResponse.redirect(url);
    }
  }

  // Redirect to login if not authenticated and not on the root path or an onboarding route
  if (!token) {
    if (
      currentPath !== "/" &&
      !onboardRoutes.includes(currentPath) &&
      !/^\/blog\/\d+$/.test(currentPath)
    ) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Handle user details and redirect to specific user type dashboard
  if (userDetailsCookie) {
    try {
      const parsedUserDetails = JSON.parse(userDetailsCookie);
      const { userType, dynamicRoute } = parsedUserDetails;
      const userTypeString = userTypes[userType];

      if (userTypeString) {
        const userTypeLower = userTypeString.toLowerCase();
        const userSpecificPath = `/${userTypeLower}/${
          dynamicRoute || "dashboard"
        }`;

        if (
          currentPath === "/" ||
          !currentPath.startsWith(`/${userTypeLower}/`)
        ) {
          url.pathname = userSpecificPath;
          return NextResponse.redirect(url);
        }

        return NextResponse.next();
      } else {
        console.error("Invalid user type:", userType);
      }
    } catch (err) {
      console.error("Failed to parse user details:", err);
    }
  }

  // Clear cookies and allow access to the main site if user is authenticated but not on a specific route
  if (currentPath === "/") {
    if (token && userDetailsCookie) {
      try {
        const parsedUserDetails = JSON.parse(userDetailsCookie);
        const { userType, dynamicRoute } = parsedUserDetails;
        const userTypeString = userTypes[userType];
        const userTypeLower = userTypeString.toLowerCase();
        const userSpecificPath = `/${userTypeLower}/${
          dynamicRoute || "dashboard"
        }`;

        url.pathname = userSpecificPath;
        return NextResponse.redirect(url);
      } catch (err) {
        console.error("Failed to parse user details:", err);
      }
    } else {
      const res = NextResponse.next();
      res.cookies.delete("token", { path: "/" });
      res.cookies.delete("userDetails", { path: "/" });
      res.cookies.delete("onboard-step", { path: "/" });
      return res;
    }
  }

  // Redirect authenticated users to their dashboard if trying to access protected routes
  if (token && !onboardRoutes.includes(currentPath)) {
    try {
      const parsedUserDetails = JSON.parse(userDetailsCookie);
      const { userType, dynamicRoute } = parsedUserDetails;
      const userTypeString = userTypes[userType];
      const userTypeLower = userTypeString.toLowerCase();
      const userSpecificPath = `/${userTypeLower}/${
        dynamicRoute || "dashboard"
      }`;

      if (!currentPath.startsWith(`/${userTypeLower}/`)) {
        url.pathname = userSpecificPath;
        return NextResponse.redirect(url);
      }
    } catch (err) {
      console.error("Failed to parse user details:", err);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|assets).*)"],
};
