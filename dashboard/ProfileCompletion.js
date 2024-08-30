// ProfileCompletion.js
import React, { useState, useEffect } from "react";
import ProgressBar from "../settings/kyc/ProgressBar";

const ProfileCompletion = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-white shadow-lg shadow-[#5E17EB26] border border-[#0000001A] rounded-lg p-2 sm:p-4 w-full">
      <div className="border-b border-[#0000001A] mb-4 pb-0.5 w-full">
        <h1 className="sm:text-lg text-base 2xl:text-xl font-bold mb-3">
          Complete your profile
        </h1>
        <div className="flex items-center mb-2 w-full">
          <img
            src="https://via.placeholder.com/150"
            alt="Devid Adams"
            className="w-12 h-12 sm:w-[62px] sm:h-[62px] rounded-full mr-3"
          />
          <div className="w-full">
            <p className="text-xl font-semibold sm:text-[26px] text-[#111111]">
              Devid Adams
            </p>
            <p className="text-[#666666] font-normal text-xs sm:text-sm 2xl:text-base ml-[1px] -mb-0.5">
              Keep Going almost done
            </p>
            <ProgressBar value={progress} fillColor="#FF6074" height={14} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-4">
        <div className="bg-white border relative border-[#0000001A] rounded-2xl sm:px-3 px-2 h-[91px] text-center shadow-sm">
          <p className="text-[#21272A] truncate-2-lines text-start text-xs sm:text-base 2xl:text-lg mt-1">
            user Info
          </p>
          <button className="gradient-bg h-[35px] absolute bottom-2 left-2 sm:left-3 sm:right-3 right-2 flex justify-center items-center text-white rounded-full text-sm sm:text-base 2xl:text-lg">
            Add 1
          </button>
        </div>
        <div className="bg-white border relative border-[#0000001A] rounded-2xl sm:px-3 px-2 h-[91px] text-center shadow-sm">
          <p className="text-[#21272A] text-start truncate-2-lines text-xs sm:text-base 2xl:text-lg mt-1">
            Company Info
          </p>
          <button className="gradient-bg h-[35px] truncate-2-lines absolute bottom-2 left-2 sm:left-3 sm:right-3 right-2 flex justify-center items-center text-white rounded-full text-sm sm:text-base 2xl:text-lg">
            Add 2
          </button>
        </div>
        <div className="bg-white border relative border-[#0000001A] rounded-2xl sm:px-3 px-2 h-[91px] text-center shadow-sm">
          <p className="text-[#21272A] text-start text-xs sm:text-base 2xl:text-lg mt-1">
            Billing Address
          </p>
          <button className="gradient-bg h-[35px] absolute bottom-2 left-2 sm:left-3 sm:right-3 right-2 flex justify-center items-center text-white rounded-full text-sm sm:text-base 2xl:text-lg">
            Add 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;
