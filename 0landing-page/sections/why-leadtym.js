// src/components/WhyLeadtym.jsx

import { useRouter } from "next/navigation";
import React from "react";

const WhyLeadtym = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/contact-us");
  };
  return (
    <section className="flex flex-col lg:flex-row gap-4  items-center bg-white dark:bg-black sm:py-12 py-8 ">
      <div className="lg:w-auto  w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
        <img
          src={"/assets/landing/whyleadtym.svg"}
          alt="Illustration"
          className="rounded-lg w-full lg:w-auto"
        />
      </div>
      <div className="lg:w-1/2 w-full text-left lg:px-8 xl:px-14">
        <h2 className="text-lg sm:text-xl 2xl:text-2xl font-bold text-black dark:text-white mb-2 sm:mb-5">
          About Leadtym
        </h2>
        <h3 className="text-3xl md:text-[46px]  moreextrabold leading-tight md:leading-none  text-black dark:text-white mb-4">
          Move fast, stay aligned, <br className="hidden lg:inline" /> and build
          better -{" "}
          <span className="text-[#735CFF] dark:text-[#735CFF]">together</span>
        </h3>
        <p className="text-lg xl:max-w-lg text-black dark:text-white mb-4 md:mb-8">
          At Leadtym, we're dedicated to transforming the landscape of
          influencer and affiliate marketing. Our innovative platform combines
          automation, deep linking, ad fraud detection, and comprehensive
          analytics to deliver unparalleled results. Whether you're a brand,
          agency, affiliate, or influencer, Leadtym empowers you to achieve your
          marketing goals more effectively and efficiently.
        </p>
        <button
          onClick={navigate}
          className="gradient-bg border border-transparent w-1/2 text-white px-6 py-3 sm:w-[165px] h-[46px] 2xl:w-[175px]  font-bold sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg  rounded-full"
        >
          Request a demo
        </button>
      </div>
    </section>
  );
};

export default WhyLeadtym;
