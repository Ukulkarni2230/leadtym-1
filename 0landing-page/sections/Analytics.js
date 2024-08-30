// src/components/Analytics.jsx

import { useRouter } from "next/navigation";
import React from "react";
import { PiNotepadBold } from "react-icons/pi";

const Analytics = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/contact-us");
  };
  return (
    <section className="flex flex-col lg:flex-row items-center bg-white dark:bg-black sm:py-12 py-8 ">
      <div className="lg:w-1/2 w-full text-left mb-8 lg:mb-0">
        <h2 className=" text-black dark:text-white mb-5 flex items-center gap-2">
          <div className="w-[36px] h-[36px] text-white text-xl bg-[#F12052] rounded-md flex justify-center items-center">
            <PiNotepadBold />
          </div>
          <span className="text-xs 2xl:text-sm moreextrabold">ANALYTICS</span>
        </h2>
        <h3 className="text-3xl md:text-[46px] moreextrabold 2xl:text-[56px] leading-tight md:leading-[1.18] text-black dark:text-white mb-4">
          Discover,
          <br /> LeadTym's Advanced
          <br /> Attribution Reports
        </h3>
        <p className="text-lg sm:text-xl 2xl:text-2xl font-normal xl:max-w-lg text-black dark:text-white mb-4 md:mb-8">
          LeadTym’s attribution reports empower you to allocate resources
          effectively, ensuring every dollar contributes to your goals. Optimize
          your ROI with precision like never before.
        </p>
        <button
          onClick={navigate}
          className="gradient-bg border border-transparent w-1/2 text-white px-6 py-3 sm:w-[165px] h-[46px] 2xl:w-[175px]  font-bold sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg  rounded-full"
        >
          Request a demo
        </button>
      </div>
      <div className="lg:w-auto w-full flex justify-center lg:justify-end">
        <img
          src={"/assets/landing/analytics-dashboard.svg"}
          alt="Analytics Dashboard"
          className="rounded-lg w-full lg:w-auto"
        />
      </div>
    </section>
  );
};

export default Analytics;
