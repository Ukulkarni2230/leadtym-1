// StatsCard.js
import React from "react";
import PropTypes from "prop-types";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const StatsCard = ({ title, value, performancePercentage }) => {
  const isPositive = performancePercentage >= 0;
  const performanceColor = isPositive ? "text-[#27AE60]" : "text-red-500";
  const arrow = isPositive ? <FaArrowTrendUp /> : <FaArrowTrendDown />;

  return (
    <div className="relative bg-white shadow-md shadow-[#0000000A] border border-[#D8D9D4] rounded-2xl sm:pl-4 pl-4 pr-2 sm:h-[140px] py-3 w-full flex items-center">
      <div className="absolute left-0 sm:top-1/3 top-1/2 transform -translate-y-1/2 bg-[#7661F5] h-[53px] w-[5px] rounded-r-full"></div>
      <div className="">
        {" "}
        {/* Adjust margin to accommodate the left line */}
        <p className="text-[#35353A] text-xs sm:text-sm font-bold mb-2">
          {title}
        </p>
        <p className="sm:text-2xl text-xl font-bold text-[#101018]">
          {value.toLocaleString()}
        </p>
        <div className={`flex items-center ${performanceColor} mt-2`}>
          <span className="text-sm mr-1">{arrow}</span>
          <span className="text-xs sm:text-sm 2xl:text-base ">
            {Math.abs(performancePercentage)}%
          </span>
          <span className="text-[#6E6E71] ml-1.5 text-[10px] sm:text-xs 2xl:text-sm">
            Since last month
          </span>
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  performancePercentage: PropTypes.number.isRequired,
};

export default StatsCard;
