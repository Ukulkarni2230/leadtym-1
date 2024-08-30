import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import SignUp from "./signUp/signUp";
import { usePathname } from "next/navigation";
import VerifyOTP from "./signUp/verify-otp";
import WhoAreYou from "./whoAreYou/whoAreYou";
import onboardRoutes from "./onBoardRoutes";
import UserDetails from "./userDetails/userDetails";
import Link from "next/link";
import sign from "../../../../public/assets/onboard/signup.svg";
import login from "../../../../public/assets/onboard/login.svg";
import who from "../../../../public/assets/onboard/who.svg";
import info1 from "../../../../public/assets/onboard/info1.svg";
import useApi from "@/src/Apicalls/apiCalls";

export default function UserSelectionPage() {
  const section = usePathname();
  const dispatch = useDispatch();
  const { postApiCall } = useApi();
  const themeMode = useSelector((state) => state?.theme?.mode);
  const [selectedUserType, setSelectedUserType] = useState("");
  const pathname = section == "/login" ? true : false;
  const origin = useSelector((state) => state.onboarding.origin);

  const handleUserTypeChange = (userType) => {
    setSelectedUserType(userType);
  };

  useEffect(() => {
    // Apply the dark class to the body tag based on themeMode
    if (themeMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeMode]);

  const imageMap = {
    "/signup": sign,
    "/login": login,
    "/verify-otp": origin === "login" ? login : sign,
    "/who-are-you": who,
    "/info": info1,
  };

  const getContent = () => {
    if (!onboardRoutes.includes(section)) {
      return { component: <div>Page not found</div>, imagePath: null };
    }

    switch (section) {
      case "/signup":
        return { component: <SignUp />, imagePath: imageMap[section] };
      case "/login":
        return { component: <SignUp />, imagePath: imageMap[section] };
      case "/verify-otp":
        return { component: <VerifyOTP />, imagePath: imageMap[section] };
      case "/info":
        return { component: <UserDetails />, imagePath: imageMap[section] };
      case "/who-are-you":
        return {
          component: <WhoAreYou onUserTypeSelect={handleUserTypeChange} />,
          imagePath: imageMap[section],
        };
      default:
        return {
          component: <div>Home Page or Default Component</div>,
          imagePath: null,
        };
    }
  };

  const { component, imagePath } = getContent();

  return (
    <div className="h-screen bg-[#FFFEF9] dark:bg-gray-900 w-full flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between sm:px-6 px-2 pt-2 sm:pt-6 2xl:pl-10 h-full">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full">
          <div className="w-full h-10 md:h-[50px] 2xl:h-[55px]">
            <Link href="/" className="max-w-[228px]">
              <img
                src={"/assets/onboard/Logo.svg"}
                alt="LEADTYM"
                className="justify-start flex object-contain"
              />
            </Link>
          </div>
          <div className="w-full h-full md:overflow-y-auto flex justify-center items-center no-scrollbar ">
            <div className="space-y-4 w-full h-full flex justify-center items-center">
              {component}
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center w-full md:w-1/2 h-full  pb-5 ">
          {imagePath && (
            <Image
              src={imagePath}
              alt="Signup"
              width={"100%"}
              height={"100%"}
              className="h-full w-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
