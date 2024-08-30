import React from "react";
import PrimaryButton from "../../reuseable/primaryButton";
import { AiFillExclamationCircle } from "react-icons/ai";

const DeactivateAccount = () => {
  return (
    <div className="p-2 sm:p-6">
      <div className="bg-white shadow-lg  rounded-md sm:p-4 p-2 md:p-6">
        <p className="text-[#0E0E0E] text-[14px] sm:text-[16px] 2xl:text-[18px] font-bold">
          Deactivate Account
        </p>
        <div className="px-6 py-4 my-4 border rounded-md bg-white border-gray-300">
          <div className="flex  space-x-3 w-full sm:w-[75%] md:w-[65%]">
            <AiFillExclamationCircle className="text-[#C62828] w-7 h-7  sm:w-8 sm:h-8" />
            <div className="text-sm text-gray-800 sm:mt-[4px]">
              <h3 className="font-medium text-[14px]  sm:text-[16px] 2xl:text-[18px]  text-[#0E0E0E]">
                You Are Deactivating Your Account
              </h3>
              <p className="font-normal mt-3 text-[#666666] text-[12px] sm:text-[14px] 2xl:text-[16px]">
                For extra security, this requires you to confirm your email or
                phone number when you reset your sign in password.{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <PrimaryButton
            // onClick={()=> console.log("happu")}
            py="py-[7px]"
            className="sm:w-[200px] py-1.5 hover:bg-purple-500 flex justify-center  font-normal text-[14px] sm:text-[16px] 2xl:text-[18px] whitespace-nowrap"
          >
            Deactivate Account
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DeactivateAccount;
