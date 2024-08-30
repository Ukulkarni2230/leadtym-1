import React, { useState } from "react";
import Input from "@/src/components/reuseable/Input";

const UnityContent = () => {
  return (
    <div>
      <label className="block mb-4 text-[#666666] text-xs sm:text-sm 2xl:text-base">
        Enter Your Details
      </label>
      <div className="mb-4 w-full">
        <Input size="small" label="App name *" placeholder="My app name" />
      </div>
      <div className="mb-4 w-full">
        <Input size="small" label="App ID *" placeholder="id4387643398348" />
      </div>
      <div className="flex justify-end">
        <button className="gradient-bg border border-transparent text-white px-6 py-[6px] sm:w-[110px] h-[42px] 2xl:w-[120px] sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg rounded-full">
          Next
        </button>
      </div>
    </div>
  );
};

export default UnityContent;
