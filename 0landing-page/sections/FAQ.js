import { faqData } from "@/src/exportData/staticData";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const themeMode = useSelector((state) => state.theme.mode);
  const dark = themeMode === "dark";

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const tabData = ["General", "Features", "Solutions", "How It Works"];

  return (
    <div className="py-8">
      <div className="">
        <div className="flex flex-col md:flex-row md:items-center justify-between flex-wrap mb-6">
          <div className="relative mb-4 md:mb-0">
            <p className="text-lg mb-2 sm:text-xl 2xl:text-2xl text-black dark:text-white font-bold">
              Get Answers For
            </p>
            <h3 className="text-3xl md:text-[46px] moreextrabold 2xl:text-[56px] leading-tight md:leading-none text-black dark:text-white mb-4">
              Frequently Asked
              <br /> Questions
            </h3>
            <img
              src={dark ? "/assets/landing/fb.svg" : "/assets/landing/fw.svg"}
              className="md:-right-16 sm:right-1/2 right-0  top-0 absolute"
              alt="FAQ"
            />
          </div>
          <div className="flex justify-center mb-8 md:mb-0 space-x-4 sm:space-x-8">
            {tabData.map((tab, index) => (
              <button
                key={index}
                className={`px-1 pt-2 pb-0.5 text-sm sm:text-base 2xl:text-lg ${
                  activeTab === index
                    ? "border-b-4 font-bold border-[#5e17eb] text-black dark:text-white"
                    : "text-gray-600 font-normal dark:text-gray-400 border-b-4 border-transparent"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="">
          {faqData[tabData[activeTab]].map((item, index) => (
            <div key={index} className="sm:mb-6 mb-4 last:mb-0 ">
              <button
                className={`w-full shadow-lg  sm:px-6 px-4  text-left text-black dark:text-white font-semibold border border-black dark:border-none dark:bg-[#101010] bg-white  ${
                  activeIndex === index
                    ? "rounded-[30px] py-3 "
                    : "rounded-full py-5"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm sm:text-xl  font-semibold">
                    {item.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-[#5e17eb]"
                        : "rotate-0 text-[#1C1C1C] dark:text-white"
                    }`}
                  >
                    <BsChevronDown />
                  </span>
                </div>

                {activeIndex === index && (
                  <div className=" text-[#1C1C1C] font-normal text-xs sm:text-lg  dark:text-[#C6C6C6]    mt-2  sm:mt-4">
                    {item.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
