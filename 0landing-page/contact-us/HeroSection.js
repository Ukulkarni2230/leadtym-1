// File: HeroSection.js
import React from "react";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mt-[32px] sm:mt-[82px] pb-8 px-2 md:flex justify-between content-between  dark:text-white">
      <div>
        <p className="raleway-font whitespace-nowrap text-[32px] font-semibold md:text-5xl md:leading-[55px] text-[#1C1C1C] dark:text-white mt-12">
          Let's Talk
        </p>
        <div className="flex flex-wrap-reverse items-center mt-10 sm:mt-20 md:mt-[200px] gap-2 xl:gap-8">
          <button
            onClick={() => scrollToSection("contact-us")}
            type="button"
            className="raleway-font whitespace-nowrap gradient-bg text-white flex items-center justify-center gap-4 gradient-button md:py-3.5 py-2.5 px-8  font-bold text-base duration-200 transition-all cursor-pointer rounded-full"
          >
            Collab With Us
          </button>
          <p className="text-[#1C1C1C]  dark:text-gray-100 text-[18px] sm:text-[25px]">
            We've got a good feeling about this
          </p>
        </div>
      </div>
      <div className="sm:max-w-[534px] md:ml-9 mt-20">
        <p className="font-normal text-[16px] text-black dark:text-[#FFFFFF] mt-8 sm:mt-10 sm:text-[25px] mb-5 md:mb-16">
          Do you have a project in mind? We’re all ears when it comes to hearing
          about your digital business goals. We’d love to hear from you.
        </p>
        <button className="inline-flex gap-2 xl:gap-8 items-center text-sm sm:text-[25px] text-black dark:text-[#FFFFFF] ">
          <img
            src="/assets/landing/become.svg"
            alt="Team"
            className="w-[51px] h-[51px] sm:w-[71px] sm:h-[71px] rounded-full mr-2"
          />
          Become a member of our team
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
