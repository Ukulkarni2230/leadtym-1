// WalletActivity.jsx
import React from "react";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import DateDropdown from "./date-dropdown";

const activityData = [
  { type: "Withdraw", time: "06:24:45 AM", amount: -542, status: "Pending" },
  { type: "Topup", time: "06:24:45 AM", amount: 5553, status: "Completed" },
  { type: "Withdraw", time: "06:24:45 AM", amount: -912, status: "Canceled" },
  { type: "Topup", time: "06:24:45 AM", amount: 7762, status: "Completed" },
  { type: "Topup", time: "06:24:45 AM", amount: 5553, status: "Completed" },
];

const timeframes = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
];

const WalletActivity = () => {
  const [timeframe, setTimeframe] = React.useState("weekly");

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <div className="bg-white shadow-lg py-3 shadow-[#5E17EB26] border border-[#D8D9D4] rounded-xl w-full h-full">
      <div className="flex justify-between items-start mb-1 sm:px-4 px-2 py-2">
        <div>
          <p className="2xl:text-xl text-base sm:text-lg font-extrabold text-[#000000]">
            Wallet Activity
          </p>
          <p className="text-[#000000] text-[10px] sm:text-[12px] 2xl:text-sm">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <DateDropdown
          options={timeframes}
          value={timeframe}
          onChange={handleTimeframeChange}
        />
      </div>

      <div className="w-full overflow-x-auto rounded-b-xl border-b border-transparent">
        {activityData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white py-2 px-4 w-full min-w-[350px]"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 border-[3px] border-[#EBEBEB] rounded-lg flex items-center justify-center">
                {item.type === "Withdraw" ? (
                  <FaArrowDownLong className="text-[#61C277] text-xl" />
                ) : (
                  <FaArrowUpLong className="text-[#7661F5] text-xl" />
                )}
              </div>
              <div className="flex flex-col">
                <p className="text-[#000000] text-xs sm:text-sm 2xl:text-base font-semibold">
                  {item.type}
                </p>
                <p className="text-[#000000] text-xs sm:text-sm 2xl:text-base">
                  {item.time}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p
                className={`text-xs sm:text-sm 2xl:text-base  font-medium ${
                  item.amount < 0 ? "text-[#FF3E3E]" : "text-[#2BC155]"
                }`}
              >
                {item.amount < 0 ? "-" : "+"}${Math.abs(item.amount)}
              </p>
              <p
                className={`text-xs sm:text-sm 2xl:text-base  font-medium  ${
                  item.status === "Pending"
                    ? "text-[#9C9C9C]"
                    : item.status === "Completed"
                    ? "text-[#2BC155]"
                    : "text-[#FF3E3E]"
                }`}
              >
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletActivity;
