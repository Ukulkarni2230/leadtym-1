import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { encrypt } from "@/src/utils/crypto"; // Adjust the import based on your file structure
import onboardRoutes from "../onBoardRoutes";

const BackBtn = ({ previousStep, currentStep, value, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    const currentPath = window.location.pathname;
    if (currentPath === "/who-are-you") {
      Cookies.remove("onboard-step");
    } else if (currentStep) {
      const currentIndex = onboardRoutes.indexOf(currentStep);
      if (currentIndex >= 0) {
        const newSteps = onboardRoutes.slice(0, currentIndex + 1);
        const newStep = newSteps[newSteps.length - 1];
        const encryptedStep = encrypt(newStep);
        Cookies.set("onboard-step", encryptedStep, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          path: "/",
        });
      }
    } else {
      Cookies.remove("onboard-step");
    }

    router.back(); // Default to navigating back
  };

  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      if (currentPath === "/who-are-you") {
        Cookies.remove("onboard-step");
      } else if (previousStep && currentPath !== previousStep) {
        const currentIndex = onboardRoutes.indexOf(previousStep);
        if (currentIndex >= 0) {
          const newSteps = onboardRoutes.slice(0, currentIndex + 1);
          const newStep = newSteps[newSteps.length - 1];
          const encryptedStep = encrypt(newStep);
          Cookies.set("onboard-step", encryptedStep, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            path: "/",
          });
        }
      } else {
        Cookies.remove("onboard-step");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [previousStep]);

  return (
    <button
      className="bg-[#F4F4F4] gap-1 text-[#666666] text-[12px] sm:text-[16px] 2xl:text-[18px] font-bold px-5 sm:py-[12px] py-[9px] rounded-full text-center items-center flex  justify-center hover:bg-gray-300 cursor-pointer"
      onClick={onClick || handleClick}
    >
      <IoChevronBackOutline className="text-lg" />
      <span>{value ? value : "Back"}</span>
    </button>
  );
};

export default BackBtn;
