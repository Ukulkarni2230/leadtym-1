import React from "react";
import LineChart from "./LineChart";
import TrafficChart from "./TrafficChart";

const DeviceTraffic = () => {
  return (
    <div className="bg-white shadow-lg shadow-[#5E17EB26] mt-4 sm:mt-0   rounded-md w-full ">
      <div className="flex justify-between items-center sm:px-4 pb-0  pt-2 sm:pt-4 px-2">
        <h2 className=" font-semibold text-[12px]  w-full sm:text-[14px] border-b-[1.6px] border-[#E0E0E0] pb-2  mb- 2xl:text-[16px] text-[#0E0E0E] ">
          Device Traffic
        </h2>
        {/* <select className="border-gray-300 border-none outline-none focus-none rounded">
        <option>Last 30 days</option>
        <option>Last 60 days</option>
        <option>Last 90 days</option>
      </select> */}
      </div>
      <div className="w-full p-2 sm:p-4">
        <TrafficChart />
      </div>
    </div>
  );
};

export default DeviceTraffic;
