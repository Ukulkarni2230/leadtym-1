"use client";

import React, { useState } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import PrimaryButton from "../../reuseable/primaryButton";
import ToggleSwitch from "../../reuseable/ToggleSwitch";

const ConnectedAccount = () => {
  const [instagramEnabled, setInstagramEnabled] = useState(false);
  const [facebookEnabled, setFacebookEnabled] = useState(false);
  return (
    <div className="p-2 sm:p-6 w-full ">
      <div className="bg-white shadow-lg w-full  rounded-md sm:p-4 p-2 md:p-6">
        <p className="text-[#0E0E0E] text-[14px] sm:text-[16px] 2xl:text-[18px] font-bold">
          Connected Account
        </p>
        <div className="sm:px-6 px-2 py-4 my-4 border rounded-md bg-[#F3F3F3] border-gray-300">
          <div className="sm:flex  space-x-3 w-full sm:w-[75%] md:w-[65%]">
            <MdVerifiedUser className="text-[#FFA043] flex mx-auto sm:block w-7 h-7  sm:w-8 sm:h-8" />
            <div className="text-sm text-gray-800 ">
              <h3 className="font-medium text-[14px] mt-[2px] sm:text-[16px] 2xl:text-[18px]  text-[#0E0E0E]">
                Secure Your Account
              </h3>
              <p className="font-normal text-[#666666] text-[12px] mt-1.5 sm:text-[14px] 2xl:text-[16px]">
                Two-factor authentication adds an extra layer of security to
                your account. To log in, in addition you’ll need to provide a 6
                digit code
              </p>
            </div>
          </div>
        </div>
        <div className="sm:p-4 p-2 bg-white">
          {/* Instagram Toggle */}
          <div className="flex items-center justify-between py-4 border-y border-[#E0E0E0]">
            <div className="flex items-center space-x-3 sm:space-x-5">
              <FaInstagram className="text-pink-500 w-8 h-8 sm:w-12 sm:h-12" />
              <div>
                <span className="font-normal text-[#0E0E0E] text-[16px] sm:text-[18px] 2xl:text-[20px]">
                  Instagram
                </span>
                <p className="text-[#666666] text-[12px] font-normal sm:text-[14px] 2xl:text-[16px]">
                  https://instagram.com/
                </p>
              </div>
            </div>

            <PrimaryButton
              // onClick={()=> console.log("happu")}
              py="py-[7px]"
              className="sm:max-w-[130px] px-2 max-w-[90px] truncate  py-1.5 hover:bg-purple-500 flex justify-center  font-normal text-[14px] sm:text-[16px] 2xl:text-[18px] whitespace-nowrap"
            >
              Disconnect
            </PrimaryButton>
          </div>
          {/* Facebook Toggle */}
          <div className="flex items-center justify-between py-4 border-b border-[#E0E0E0]">
            <div className="flex items-center space-x-3 sm:space-x-5">
              <FaFacebook className="text-[#0866FF] w-8 h-8 sm:w-12 sm:h-12" />
              <div>
                <span className="font-normal text-[#0E0E0E] text-[16px] sm:text-[18px] 2xl:text-[20px]">
                  Facebook
                </span>
                <p className="text-[#666666] text-[12px] font-normal sm:text-[14px] 2xl:text-[16px]">
                  https://facebook.com/
                </p>
              </div>
            </div>
            <PrimaryButton
              // onClick={()=> console.log("happu")}
              py="py-[7px]"
              className="sm:max-w-[130px] truncate px-2 max-w-[90px]  py-1.5 hover:bg-purple-500 flex justify-center  font-normal text-[14px] sm:text-[16px] 2xl:text-[18px] whitespace-nowrap"
            >
              Connect
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedAccount;
