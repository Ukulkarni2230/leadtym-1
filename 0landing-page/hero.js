// src/components/Hero.jsx

import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const router = useRouter();
  const navigate = () => {
    router.push("/contact-us");
  };
  return (
    <section className=" h-full py-10 xl:py-0 flex items-center ">
      <div className=" md:pb-24 py-8 sm:py-0 pt-0 left-0 2xl:pt-16  md:top-[8%] 2xl:top-[14%]  flex flex-col justify-center text-left  z-10 md:w-[60%] lg:w-1/2 w-full">
        <h1 className="text-4xl lg:text-[38px] 2xl:text-[70px] responsive-text leading-tight text-left  moreextrabold mb-4 text-black dark:text-white">
          Empower Your
          <span className="block lg:inline">
            {" "}
            <br className="hidden lg:block" />{" "}
          </span>
          Marketing
          <span className="block lg:inline">
            {" "}
            <br className="hidden lg:block" />{" "}
          </span>
          with LeadTym’s
          <span className="block lg:inline">
            {" "}
            <br className="hidden lg:block" />{" "}
          </span>
          AI-Driven Precision
        </h1>

        <p className="text-lg hidden sm:block sm:text-xl 2xl:text-2xl font-normal mb-8 text-black dark:text-white">
          Discover the power of automation, analytics, and personalized
          <br />
          engagement. Elevate your brand's visibility, boost affiliate
          <br /> earnings, and enhance influencer campaigns—all with Leadtym.
        </p>
        <p className="text-lg sm:hidden sm:text-xl 2xl:text-2xl font-normal mb-8 text-black dark:text-white">
          Discover the power of automation, analytics, and personalized
          engagement. Elevate your brand's visibility, boost affiliate earnings,
          and enhance influencer campaigns—all with Leadtym.
        </p>
        <div className="flex justify-start space-x-4 w-full ">
          <button
            onClick={navigate}
            className="gradient-bg border border-transparent w-1/2 text-white px-6 py-3 sm:w-[165px] h-[46px] 2xl:w-[175px]  font-bold sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg  rounded-full"
          >
            Request a demo
          </button>
          <button
            onClick={() => router.push("/log")}
            className="bg-transparent  hover:bg-gray-100 w-1/2 px-6 py-3 sm:w-[165px] h-[46px] 2xl:w-[175px] font-bold sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg border-[#5e17eb] text-[#5e17eb] dark:border-[#FFFFFF1A] border   dark:bg-[#FFFFFF1A] dark:hover:bg-[#FFFFFF2A] dark:text-white rounded-full"
          >
            Get Started Today
          </button>
        </div>
      </div>
      <div className=" hidden md:block  right-0 top-0 md:w-1/2 w-full ">
        <img src={"/assets/landing/herow.svg"} className="w-full h " />
      </div>
    </section>
  );
};

export default Hero;
