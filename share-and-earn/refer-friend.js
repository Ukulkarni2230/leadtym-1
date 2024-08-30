import React from "react";
import { FaCopy } from "react-icons/fa6";

const ReferFriend = () => {
  return (
    <div className="bg-white rounded-md border-[#D8D9D4] border shadow p-2 sm:p-4 flex flex-col lg:flex-row  justify-between space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex-1 mt-4">
        <h2 className="text-base sm:text-lg 2xl:text-xl text-[#101018] font-semibold">
          Refer Friends
        </h2>
        <p className="text-xs sm:text-sm 2xl:text-basef  text-[#35353A] mt-4 xl:w-[90%]">
          This table shows the users that have access to this account. To manage
          users who manage billing, visit the{" "}
          <a href="#" className="text-blue-500 underline">
            Payments contacts
          </a>{" "}
          section of “Billing & payments” settings.
        </p>
        <div className="mt-6 flex items-center w-full lg:w-[85%] truncate border border-[#D8D9D4] rounded-full overflow-hidden">
          <div className="flex-grow flex items-center px-4 py-2 bg-white w-full truncate">
            <span className="text-[#101018] text-[12px] sm:text-sm 2xl:text-base w-[97%] truncate">
              https://a.refero.com/l/5faa2e470880c027d08ff24b
            </span>
          </div>
          <button className="gradient-bg font-semibold text-sm sm:text-base 2xl:text-lg text-white px-4 py-2 rounded-r-full flex items-center space-x-2">
            <FaCopy />
            <span>Copy</span>
          </button>
        </div>
      </div>
      <img
        src="/assets/shareandearn.svg"
        alt="Refer Friends"
        className="hidden w-60 xl:w-auto lg:block max-h-[297px] "
      />
    </div>
  );
};

export default ReferFriend;
