"use client";

import React, { useState } from "react";
import { IoCopy } from "react-icons/io5";
import Input from "../../reuseable/Input";
import SelectInput from "../../reuseable/SelectInput";
import { options } from "../campaign/create/Create-Campaign-Steps/GoalPayout";

const TestPostback = () => {
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const [buttonBgColor, setButtonBgColor] = useState("gradient-bg");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`postback?click_id={REPLACE}`)
      .then(() => {
        setCopyButtonText("Copied!");
        setButtonBgColor("bg-green-700");
        setTimeout(() => {
          setCopyButtonText("Copy");
          setButtonBgColor(" bg-[#5E17EB] ");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full p-2 sm:p-6">
      <div className="flex flex-col w-full lg:flex-row lg:space-x-6">
  <div className="flex flex-col w-full lg:w-1/2">
    <div className="flex flex-col flex-1 rounded-md p-2 sm:p-3 shadow-md shadow-[#5E17EB26] border-[#D8D9D4] border bg-white">
      <h6 className="text-[#101018] font-semibold text-[16px] sm:text-lg 2xl:text-xl">
        Postback
      </h6>
      <h6 className="mt-3 text-[#35353A] text-[16px] sm:text-lg 2xl:text-xl">
        How to Set Up Test Postback:
      </h6>
      <div className="mt-4 flex-1">
        <Input
          label="Tracking URL"
          placeholder="Enter URL"
          size="small"
          padding="4px 0px"
        />
      </div>
      <div className="mt-4 flex-1">
        <SelectInput
          label="Geo Targeting Type"
          // value={selectedValue}
          // onChange={handleChange}
          placeholder="Geo Targeting Type"
          options={options}
          size="small"
        />
      </div>
      <div className="mt-4 flex-1">
        <SelectInput
          label="Device Targeting"
          // value={selectedValue}
          // onChange={handleChange}
          placeholder="Device Targeting"
          options={options}
          size="small"
        />
      </div>
      <div className="flex items-center gap-2 mt-8">
        <button className="py-1.5 border border-[#6E6E71] font-normal text-[#6E6E71] text-xs sm:text-sm 2xl:text-base rounded-full px-3 hover:border-[#5E17EB] hover:text-[#5E17EB] hover:bg-[#EDE9FE]">
          CLEAR
        </button>
        <button className="py-[7px] px-5 gradient-bg text-white rounded-full text-xs sm:text-sm 2xl:text-base font-medium">
          TEST
        </button>
      </div>
    </div>
  </div>

  <div className="flex flex-col w-full lg:w-1/2 mt-6 lg:mt-0">
    <div className="flex flex-col flex-1 rounded-md p-2 sm:p-3 shadow-md shadow-[#5E17EB26] border-[#D8D9D4] border bg-white">
      <h6 className="text-[#101018] font-semibold text-base sm:text-lg 2xl:text-xl">
        General Information
      </h6>
      <h6 className="mt-4 text-[#35353A] text-sm sm:text-base 2xl:text-lg font-semibold">
        What is a Test Postback?
      </h6>
      <p className="mt-2 text-[#6E6E71] text-[12px] sm:text-sm 2xl:text-base">
        A test postback URL is a single URL used to notify your affiliate
        network or tracking platform whenever a conversion occurs, regardless
        of the specific offer a user converts on. This simplifies the setup
        process and eliminates the need to create individual postback URLs for
        each offer.
      </p>
      <h6 className="mt-4 text-[#35353A] text-sm sm:text-base 2xl:text-lg font-semibold">
        Where and How to Use It:
      </h6>
      <p className="mt-2 text-[#35353A] text-sm sm:text-base 2xl:text-lg">
        Affiliate Networks:
      </p>
      <p className="text-[#6E6E71] text-xs sm:text-sm 2xl:text-base">
        Within your affiliate network interface, locate the section for
        managing postbacks or conversion tracking. Look for the option to set a
        global postback URL and paste the copied URL from Box 2.
      </p>
      <p className="mt-2 text-[#35353A] text-sm sm:text-base 2xl:text-lg">
        Tracking Platforms:
      </p>
      <p className="text-[#6E6E71] text-xs sm:text-sm 2xl:text-base">
        In your tracking platform settings, find the area for managing
        conversion tracking or postbacks. Locate the dedicated field for a
        global postback URL and paste the copied URL.
      </p>
    </div>
  </div>
</div>


      <div className="rounded-md mt-6 p-2 sm:p-3 shadow-md shadow-[#5E17EB26] border-[#D8D9D4] border bg-white">
        <h6 className="text-[#101018] font-semibold text-base 2xl:text-xl sm:text-lg">
          Redirections:
        </h6>
        <p className="mt-4 text-[#6E6E71] text-xs sm:text-sm 2xl:text-base  break-words">
          1. http://example.com/page.php?subid1={`{traffic_id}`}&subid2=
          {`{publisher_id}`}&cost={`{cost}`}
        </p>
        <p className="mt-4 text-[#6E6E71] text-xs sm:text-sm 2xl:text-base  break-words">
          2. Hey, check my AffilTest results -
          http://affiltest.com/#u=aW5xdXReXBlPXVYyBeLucHVoJlmAhlW5lbnBld1DodHRwcyUzQSUyRiUyRm5hcHBsaWVzdC5jb20lMkZ3d3clMkZ3aXpld29yazEwNDc3ODI5JTIzclVFYCTElTE5vcmFldmJlY2tlcnM9aW1rUyb2lkMmNvdW5kc3aW4=
        </p>
      </div>
    </div>
  );
};

export default TestPostback;
