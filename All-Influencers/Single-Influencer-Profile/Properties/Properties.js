import { Tooltip } from "@mui/material";
import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

const Properties = () => {
  const metrics = [
    {
      title: "Avg. Engagement",
      value: "20%",
      change: 10,
      tooltip: "This is the average engagement rate.",
    },
    {
      title: "Sponsored Content",
      value: "20%",
      change: 10,
      tooltip: "This is the performance of sponsored content.",
    },
    {
      title: "Paid Post Performance",
      value: "20%",
      change: -10,
      tooltip: "This is the performance of paid posts.",
    },
  ];

  const pricing = [
    {
      title: "Avg Likes/Comments",
      value: "1M/850",
    },
    {
      title: "Est. Post Price",
      value: "₹800-₹2000",
    },
    {
      title: "Est. Story Price",
      value: "₹500-₹1500",
    },
    {
      title: "Est. Reel Price",
      value: "₹1000-₹2500",
    },
  ];

  const ArrowIcon = ({ change }) => {
    return change >= 0 ? (
      <IoCaretUpOutline className="text-[#2E7D32] text-lg" />
    ) : (
      <IoCaretDownOutline className="text-red-500 text-lg" />
    );
  };

  return (
    <div className="w-full mt-4 space-y-4">
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4 bg-white border border-[#D8D9D4] rounded-md p-3">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`flex flex-col border-b xl:border-b-transparent border-[#D8D9D4]  pb-2 xl:pb-0 items-center xl:items-start xl:text-start text-center w-full ${
              index < metrics.length - 1 ? "xl:border-r border-[#D8D9D4]" : ""
            } px-4`}
          >
            <div className="flex items-center  space-x-1 w-full justify-center xl:justify-start">
              <h3 className="sm:text-sm text-start text-[12px] 2xl:text-[16px] text-[#666666] font-normal">
                {metric.title}
              </h3>
              <GoQuestion
                className="text-[16px] text-[#666666] hover:text-black"
                data-tip={metric.tooltip}
                data-for={`tooltip-${index}`}
              />
              <Tooltip title={metric.tooltip} arrow placement="top">
                {metric.tooltip}
              </Tooltip>
            </div>
            <div className="flex items-center text-start space-x-2 mt-2 w-full justify-center xl:justify-start">
              <span className="text-[12px] text-start sm:text-sm 2xl:text-[16px] text-[#0E0E0E] font-semibold">
                {metric.value}
              </span>
              <ArrowIcon change={metric.change} />
              <span
                className={`sm:text-[12px] text-[10px] 2xl:text-sm text-[#666666]`}
              >
                {Math.abs(metric.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-4 gap-4 bg-white border border-[#D8D9D4] rounded-md p-3">
        {pricing.map((price, index) => (
          <div
            key={index}
            className={`flex flex-col border-b xl:border-b-transparent border-[#D8D9D4] pb-2 xl:pb-0 items-center xl:items-start xl:text-start text-center w-full ${
              index < pricing.length - 1 ? "xl:border-r border-[#D8D9D4]" : ""
            } px-4`}
          >
            <div className="flex items-center space-x-1 w-full justify-center xl:justify-start">
              <h3 className="sm:text-sm text-[12px] xl:max-w-[100px] 2xl:max-w-none truncate 2xl:text-[16px] text-[#666666] font-normal">
                {price.title}
              </h3>
            </div>
            <div className="flex items-center text-start space-x-2 mt-2 w-full justify-center xl:justify-start">
              <span className="text-[14px] text-start sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-semibold">
                {price.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
