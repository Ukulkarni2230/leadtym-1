// Cashflow.jsx
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DateDropdown from "./date-dropdown";
import { CustomTooltip } from "../reports/statistics/stats-chart/StatisticsChart";
import { BiSolidUpArrow } from "react-icons/bi";

const data = {
  weekly: [
    { name: "06", deposited: 900, expense: 600 },
    { name: "07", deposited: 900, expense: 700 },
    { name: "08", deposited: 900, expense: 800 },
    { name: "09", deposited: 778, expense: 722 },
    { name: "10", deposited: 689, expense: 811 },
    { name: "11", deposited: 939, expense: 761 },
    { name: "12", deposited: 649, expense: 651 },
    { name: "13", deposited: 900, expense: 800 },
    { name: "14", deposited: 378, expense: 722 },
    { name: "15", deposited: 589, expense: 811 },
    { name: "16", deposited: 739, expense: 761 },
    { name: "17", deposited: 349, expense: 651 },
  ],
  monthly: [
    { name: "Jan", deposited: 400, expense: 600 },
    { name: "Feb", deposited: 300, expense: 700 },
    { name: "Mar", deposited: 200, expense: 800 },
    { name: "Apr", deposited: 278, expense: 722 },
    { name: "May", deposited: 189, expense: 811 },
    { name: "Jun", deposited: 239, expense: 761 },
    { name: "Jul", deposited: 349, expense: 651 },
    { name: "Aug", deposited: 400, expense: 600 },
    { name: "Sep", deposited: 300, expense: 700 },
    { name: "Oct", deposited: 200, expense: 800 },
    { name: "Nov", deposited: 278, expense: 722 },
    { name: "Dec", deposited: 349, expense: 651 },
  ],
  quarterly: [
    { name: "Q1", deposited: 1000, expense: 1400 },
    { name: "Q2", deposited: 1200, expense: 1300 },
    { name: "Q3", deposited: 1400, expense: 1200 },
    { name: "Q4", deposited: 1500, expense: 1100 },
  ],
};

const timeframes = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
];

const Cashflow = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <div className="flex-1 bg-white shadow-lg py-3 shadow-[#5E17EB26] border w-full border-[#D8D9D4] rounded-xl sm:p-4 p-2 h-full">
      <div className="flex justify-between items-start ">
        <div>
          <h2 className="2xl:text-xl text-base sm:text-lg text-[#131313] font-semibold">
            Cashflow
          </h2>
          <div className="flex justify-between items-center gap-2 mb-4">
            <div className="text-[#425466] text-[8px] sm:text-[10px] flex items-center">
              <span className="inline-block w-2 h-2 gradient-bg rounded-full mr-1"></span>{" "}
              Deposited
            </div>
            <div className="text-[#425466] text-[8px] sm:text-[10px]  flex items-center">
              <span className="inline-block w-2 h-2 bg-[#EEEEEE] rounded-full mr-1"></span>{" "}
              Expense
            </div>
          </div>
        </div>
        <DateDropdown
          options={timeframes}
          value={timeframe}
          onChange={handleTimeframeChange}
        />
      </div>
      <div className="mb-3 w-full flex items-center justify-between">
        <div className="text-[#000000] font-normal text-xs sm:text-sm 2xl:text-base">
          Last Week <span className="text-[#37D159]">$5633</span>
        </div>
        <div className="text-[#000000] flex items-center gap-1 sm:text-2xl text-xl 2xl:text-2xl font-semibold">
          <span>$557,23</span>
          <span className="text-[#37D159] gap-0.5 sm:text-lg text-base flex items-center">
            7% <BiSolidUpArrow size={14} />
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data[timeframe]}
          margin={{ top: 0, right: 30, left: -10, bottom: 0 }}
          barSize={12}
        >
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, color: "#7D7D7D" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, color: "#7D7D7D" }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
          />
          <Bar dataKey="expense" stackId="a" fill="#EEEEEE" />
          <Bar
            dataKey="deposited"
            stackId="a"
            fill="#7661F5"
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Cashflow;
