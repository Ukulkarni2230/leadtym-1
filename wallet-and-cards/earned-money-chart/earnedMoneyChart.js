"use client";
import useVisibility from "@/src/hooks/user-service/useVisibility";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";

const CustomTooltip = ({ active, payload, setActiveLabel }) => {
  if (active && payload && payload.length) {
    setActiveLabel(payload[0].payload.name); // Set active label on hover
    return (
      <div
        style={{
          backgroundColor: "#2E335B",
          padding: "5px 10px",
          borderRadius: "5px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {`₹${payload[0].value}`}
      </div>
    );
  }
  setActiveLabel(null); // Reset active label when not hovering
  return null;
};

const CustomDot = ({ cx, cy }) => (
  <g>
    <circle
      cx={cx}
      cy={cy}
      r={8}
      fill="#fff"
      stroke="#2E335B"
      strokeWidth={2}
    />
    <circle cx={cx} cy={cy} r={4} fill="#2E335B" />
  </g>
);

function EarnedMoneyChart() {
  const [activeLabel, setActiveLabel] = useState(null);
  const visible = useVisibility(["brand", "agency"]);

  // Fetch expenses or earnings from Redux based on visibility
  const expenses = useSelector((state) => state.expenses);
  const earnings = useSelector((state) => state.earnings);

  // Determine the data and loading state to use
  const dataToShow = visible ? expenses : earnings;
  const loading = dataToShow.loading;
  const chartData = (
    dataToShow.expensesHistory ||
    dataToShow.earningHistory ||
    []
  ).map((item) => ({
    name: new Date(item.date).toLocaleDateString("en-US", { weekday: "short" }),
    value: item.amount,
  }));

  return (
    <>
      <div className="bg-white shadow-lg  shadow-[#5E17EB26] border border-[#D8D9D4] sm:rounded-xl rounded-md  w-full p-4 sm:p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="2xl:text-xl text-base sm:text-lg font-bold text-[#111111] ">
            {visible ? "Expense" : "Earned"}
          </h2>
          <select className="border text-[#2E335B] font-[900] text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[85px] bg-transparent justify-center text-center border-[#D8D9D4] rounded-lg h-[30px] items-center flex px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none">
            <option value="">Week</option>
            <option value="sun">Sun</option>
            <option value="mon">Mon</option>
          </select>
        </div>
        <div className="bg-[#EEEDEB] border rounded-md sm:p-4 p-2 w-full">
          <div className="flex items-center mb-4 justify-between w-full">
            <div className="flex justify-between items-start gap-y-2 w-full">
              <p className="text-[#2E335B] text-sm sm:text-base 2xl:text-base font-[900] text-opacity-50">
               OverAll {visible ? "Expense" : "Earned"}
              </p>
              {loading ? (
                <Skeleton variant="text" width={80} height={24} />
              ) : (
                <p className="text-[#2E335B] text-[18px] sm:text-[24px] font-bold">
                  ₹
                  {chartData
                    .reduce((total, item) => total + item.value, 0)
                    .toFixed(2)}
                </p>
              )}
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={110} />
            ) : (
              <ResponsiveContainer width="100%" height={110}>
                <LineChart
                  data={chartData}
                  margin={{ top: 5, right: 0, left: -15, bottom: 0 }}
                >
                  <CartesianGrid
                    horizontal={true}
                    vertical={false}
                    strokeDasharray="3 3"
                  />
                  <XAxis
                    dataKey="name"
                    tick={({ payload, x, y }) => (
                      <g transform={`translate(${x},${y})`}>
                        <text
                          x={0}
                          y={0}
                          dy={16}
                          textAnchor="middle"
                          fill={
                            payload.value === activeLabel
                              ? "#2E335B"
                              : "rgba(46, 51, 91, 0.5)"
                          }
                          fontSize={12}
                          fontWeight={payload.value === activeLabel ? 900 : 500}
                        >
                          {payload.value}
                        </text>
                      </g>
                    )}
                    axisLine={false}
                    tickLine={false}
                    padding={{ left: 20 }}
                  />
                  <YAxis
                    tick={{
                      fontSize: 12,
                      fill: "rgba(46, 51, 91, 0.5)",
                      fontWeight: 900,
                    }}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, "dataMax"]}
                    padding={{ bottom: 10 }}
                  />
                  <Tooltip
                    content={<CustomTooltip setActiveLabel={setActiveLabel} />}
                    cursor={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2E335B"
                    strokeWidth={2}
                    dot={false}
                    activeDot={<CustomDot />}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EarnedMoneyChart;
