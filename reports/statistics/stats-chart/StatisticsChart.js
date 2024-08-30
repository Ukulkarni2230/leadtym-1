"use client";
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

const data = [
  {
    name: "10",
    Clicks: 400,
    UniqueClicks: 240,
    Conversions: 240,
    ClickRatio: 60,
    Revenue: 2400,
    Profit: 240,
  },
  {
    name: "11",
    Clicks: 300,
    UniqueClicks: 139,
    Conversions: 221,
    ClickRatio: 45,
    Revenue: 2210,
    Profit: 229,
  },
  {
    name: "12",
    Clicks: 200,
    UniqueClicks: 980,
    Conversions: 229,
    ClickRatio: 65,
    Revenue: 2290,
    Profit: 200,
  },
  {
    name: "13",
    Clicks: 278,
    UniqueClicks: 390,
    Conversions: 200,
    ClickRatio: 30,
    Revenue: 2000,
    Profit: 218,
  },
  {
    name: "14",
    Clicks: 189,
    UniqueClicks: 480,
    Conversions: 218,
    ClickRatio: 50,
    Revenue: 2181,
    Profit: 250,
  },
  {
    name: "15",
    Clicks: 239,
    UniqueClicks: 380,
    Conversions: 250,
    ClickRatio: 70,
    Revenue: 2500,
    Profit: 210,
  },
  {
    name: "16",
    Clicks: 349,
    UniqueClicks: 430,
    Conversions: 210,
    ClickRatio: 55,
    Revenue: 2100,
    Profit: 230,
  },
  {
    name: "17",
    Clicks: 440,
    UniqueClicks: 380,
    Conversions: 300,
    ClickRatio: 80,
    Revenue: 3000,
    Profit: 260,
  },
  {
    name: "18",
    Clicks: 500,
    UniqueClicks: 500,
    Conversions: 290,
    ClickRatio: 75,
    Revenue: 2900,
    Profit: 300,
  },
  {
    name: "19",
    Clicks: 350,
    UniqueClicks: 250,
    Conversions: 200,
    ClickRatio: 40,
    Revenue: 2000,
    Profit: 190,
  },
  {
    name: "20",
    Clicks: 400,
    UniqueClicks: 300,
    Conversions: 240,
    ClickRatio: 60,
    Revenue: 2400,
    Profit: 240,
  },
  {
    name: "21",
    Clicks: 300,
    UniqueClicks: 139,
    Conversions: 221,
    ClickRatio: 45,
    Revenue: 2210,
    Profit: 229,
  },
  {
    name: "22",
    Clicks: 200,
    UniqueClicks: 980,
    Conversions: 229,
    ClickRatio: 65,
    Revenue: 2290,
    Profit: 200,
  },
  {
    name: "23",
    Clicks: 278,
    UniqueClicks: 390,
    Conversions: 200,
    ClickRatio: 30,
    Revenue: 2000,
    Profit: 218,
  },
  {
    name: "24",
    Clicks: 189,
    UniqueClicks: 480,
    Conversions: 218,
    ClickRatio: 50,
    Revenue: 2181,
    Profit: 250,
  },
];

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="gradient-bg text-white  p-1.5 px-3 rounded-xl">
        {payload.map((data, index) => (
          <p
            key={index}
            className="text-[12px] sm:text-sm 2xl:text-base"
            // style={{ color: data.stroke }}
          >{`${data.name}: ${data.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};

const StatisticsChart = () => {
  const [visibility, setVisibility] = useState({
    Clicks: true,
    UniqueClicks: false,
    Conversions: false,
    ClickRatio: false,
    Revenue: false,
    Profit: false,
  });

  const toggleVisibility = (key) => {
    const visibleKeys = Object.keys(visibility).filter((k) => visibility[k]);
    if (visibleKeys.length === 1 && visibility[visibleKeys[0]]) {
      if (key === visibleKeys[0]) return; // Prevent hiding the last visible line
    }
    setVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const CustomAxisTick = ({ x, y, payload, axisType }) => {
    const isXAxis = axisType === "xAxis";
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={isXAxis ? 0 : 2}
          dy={isXAxis ? 16 : 0}
          textAnchor={isXAxis ? "middle" : "end"}
          fill="#35353A"
          fontSize={12}
          fontWeight="normal"
        >
          {payload.value}
        </text>
      </g>
    );
  };
  const formatPercentage = (value) => {
    const roundedValue = Number(value).toFixed(2); // Rounds the number to 2 decimal places
    const isNegative = roundedValue < 0;
    const sign = isNegative ? "" : "+"; // If negative, no sign is added since the negative sign is included by default
    const color = isNegative
      ? "text-red-700 font-semibold "
      : "text-green-500 font-semibold ";

    return { roundedValue, sign, color };
  };

  return (
    <div className="w-full">
      <div className="bg-white shadow-md shadow-[#5E17EB26] border border-[#D8D9D4] mx-2 mt-2 sm:mt-6   sm:mx-6 rounded-md overflow-x-auto">
        <div className="navbar grid grid-cols-1 mb-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          <div
            onClick={() => toggleVisibility("Clicks")}
            className={`flex-grow w-full min-h-[81px] ${
              visibility.Clicks && "bg-[#3498DB]  text-white"
            }  rounded-tl-md sm:rounded-tr-none rounded-tr-md items-center px-4  py-3 border-[1px] border-[#D8D9D4] cursor-pointer`}
          >
            <div className="flex flex-col">
              <p
                className={`text-sm sm:text-base 2xl:text-lg  font-normal ${
                  visibility.Clicks ? " text-white" : "text-[#101018]"
                }`}
              >
                Clicks
              </p>
              <div className="flex items-center justify-between">
                <h3
                  className={`text-sm sm:text-base 2xl:text-lg font-semibold ${
                    visibility.Clicks ? " text-white" : "text-[#35353A] "
                  }`}
                >
                  7779
                </h3>
                <div
                 className={`text-center rounded-full flex items-center flex items-center text-xs sm:text-sm 2xl:text-base bg-[#f3f3f3] px-3 h-[24px] ${
                    formatPercentage(1292).color
                  }`}
                >
                  {formatPercentage(2388).sign}
                  {formatPercentage(99).roundedValue}%
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => toggleVisibility("UniqueClicks")}
            className={`flex-grow w-full ${
              visibility.UniqueClicks ? "bg-[#9B59B6]" : "bg-transparent"
            }   min-h-[81px] items-center px-4 py-3 border-[1px] border-[#D8D9D4] cursor-pointer`}
          >
            <div className="flex flex-col">
              <p
                className={`text-sm sm:text-base 2xl:text-lg  font-normal ${
                  visibility.UniqueClicks ? " text-white" : "text-[#101018]"
                }`}
              >
                Unique Clicks
              </p>
              <div className="flex items-center justify-between">
                <h3
                  className={`text-sm sm:text-base 2xl:text-lg font-semibold ${
                    visibility.UniqueClicks ? " text-white" : "text-[#35353A] "
                  }`}
                >
                  7777
                </h3>
                <div
                 className={`text-center rounded-full flex items-center text-xs sm:text-sm 2xl:text-base bg-[#f3f3f3] px-3 h-[24px] ${
                    formatPercentage(89).color
                  }`}
                >
                  {formatPercentage(88).sign}
                  {formatPercentage(78).roundedValue}%
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => toggleVisibility("Conversions")}
            className={`flex-grow w-full ${
              visibility.Conversions ? "bg-[#29AF62]" : "bg-transparent"
            }  min-h-[81px] items-center px-4 py-3 border-[1px] border-[#D8D9D4] cursor-pointer`}
          >
            <div className="flex flex-col">
              <p
                className={`text-sm sm:text-base 2xl:text-lg  font-normal ${
                  visibility.Conversions ? " text-white" : "text-[#101018]"
                }`}
              >
                Conversion
              </p>
              <div className="flex items-center justify-between">
                <h3
                  className={`text-sm sm:text-base 2xl:text-lg font-semibold ${
                    visibility.Conversions ? " text-white" : "text-[#35353A] "
                  }`}
                >
                  72772
                </h3>
                <div
                 className={`text-center rounded-full flex items-center text-xs sm:text-sm 2xl:text-base bg-[#f3f3f3] px-3 h-[24px] ${
                    formatPercentage(10).color
                  }`}
                >
                  {formatPercentage(8).sign}
                  {formatPercentage(81).roundedValue}%
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => toggleVisibility("ClickRatio")}
            className={`flex-grow w-full ${
              visibility.ClickRatio ? "bg-[#E67E22]" : "bg-transparent"
            }  min-h-[81px] items-center px-4 py-3 border-[1px] border-[#D8D9D4] cursor-pointer`}
          >
            <div className="flex flex-col">
              <p
                className={`text-sm sm:text-base 2xl:text-lg  font-normal ${
                  visibility.ClickRatio ? " text-white" : "text-[#101018]"
                }`}
              >
                Click ratio
              </p>
              <div className="flex items-center justify-between">
                <h3
                  className={`text-sm sm:text-base 2xl:text-lg font-semibold ${
                    visibility.ClickRatio ? " text-white" : "text-[#35353A] "
                  }`}
                >
                  9 %
                </h3>
                <div
                 className={`text-center rounded-full flex items-center text-xs sm:text-sm 2xl:text-base bg-[#f3f3f3] px-3 h-[24px] ${
                    formatPercentage(288).color
                  }`}
                >
                  {formatPercentage(8).sign}
                  {formatPercentage(89).roundedValue}%
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => toggleVisibility("Revenue")}
            className={`flex-grow w-full ${
              visibility.Revenue ? "bg-[#F39C12]" : "bg-transparent"
            }  min-h-[81px] items-center px-4 py-3 border-[1px] border-[#D8D9D4] cursor-pointer`}
          >
            <div className="flex flex-col">
              <p
                className={`text-sm sm:text-base 2xl:text-lg  font-normal ${
                  visibility.Revenue ? " text-white" : "text-[#101018]"
                }`}
              >
                Revenue
              </p>
              <div className="flex items-center justify-between">
                <h3
                  className={`text-sm sm:text-base 2xl:text-lg font-semibold ${
                    visibility.Revenue ? " text-white" : "text-[#35353A] "
                  }`}
                >
                  19919
                </h3>
                <div
                 className={`text-center rounded-full flex items-center text-xs sm:text-sm 2xl:text-base bg-[#f3f3f3] px-3 h-[24px] ${
                    formatPercentage(29).color
                  }`}
                >
                  {formatPercentage(28).sign}
                  {formatPercentage(28).roundedValue}%
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => toggleVisibility("Profit")}
            className={`flex-grow w-full ${
              visibility.Profit ? "bg-[#E74C3C]" : "bg-transparent"
            }    min-h-[81px] items-center px-4 py-3 sm:rounded-tr-md border-[1px] border-[#D8D9D4] cursor-pointer`}
          >
            <div className="flex flex-col">
              <p
                className={`text-sm sm:text-base 2xl:text-lg  font-normal ${
                  visibility.Profit ? " text-white " : "text-[#101018]"
                }`}
              >
                Profit
              </p>
              <div className="flex items-center justify-between">
                <h3
                  className={`text-sm sm:text-base 2xl:text-lg font-semibold ${
                    visibility.Profit ? " text-white" : "text-[#35353A] "
                  }`}
                >
                  8281
                </h3>
                <div
                 className={`text-center rounded-full flex items-center text-xs sm:text-sm 2xl:text-base bg-[#f3f3f3] px-3 h-[24px] ${
                    formatPercentage(28).color
                  }`}
                >
                  {formatPercentage(28).sign}
                  {formatPercentage(8).roundedValue}%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-wrap pr-8 gap-4 sm:pl-[28px] pl-3 mb-4">
          <h1 className="text-[#101018]  font-semibold text-lg sm:text-xl 2xl:text-[22px]">
            Reports
          </h1>
          {/* clicks guide */}
          <div className="flex gap-4  justify-center sm:justify-start flex-wrap items-center">
            {visibility.Clicks && (
              <div className="flex items-center gap-1 ">
                <p className="text-[#3498DB] bg-[#3498DB] h-3 w-3 rounded-full"></p>
                <p className="text-[#101018] text-[10px] sm:text-[12px] 2xl:text-sm">
                  Clicks
                </p>
              </div>
            )}
            {visibility.UniqueClicks && (
              <div className="flex items-center gap-1 ">
                <p className="text-[#9B59B6] bg-[#9B59B6] h-3 w-3 rounded-full"></p>
                <p className="text-[#101018] text-[10px] sm:text-[12px] 2xl:text-sm">
                  Unique Clicks
                </p>
              </div>
            )}
            {visibility.Conversions && (
              <div className="flex items-center gap-1 ">
                <p className="text-[#2ECC71] bg-[#2ECC71] h-3 w-3 rounded-full"></p>
                <p className="text-[#101018] text-[10px] sm:text-[12px] 2xl:text-sm">
                  Conversions
                </p>
              </div>
            )}
            {visibility.ClickRatio && (
              <div className="flex items-center gap-1 ">
                <p className="text-[#E67E22] bg-[#E67E22] h-3 w-3 rounded-full"></p>
                <p className="text-[#101018] text-[10px] sm:text-[12px] 2xl:text-sm">
                  Click Ratio
                </p>
              </div>
            )}
            {visibility.Revenue && (
              <div className="flex items-center gap-1 ">
                <p className="text-[#F39C12] bg-[#F39C12] h-3 w-3 rounded-full"></p>
                <p className="text-[#101018] text-[10px] sm:text-[12px] 2xl:text-sm">
                  Revenue
                </p>
              </div>
            )}
            {visibility.Profit && (
              <div className="flex items-center gap-1 ">
                <p className="text-[#E74C3C] bg-[#E74C3C] h-3 w-3 rounded-full"></p>
                <p className="text-[#101018] text-[10px] sm:text-[12px] 2xl:text-sm">
                  Profit
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-auto pr-8 py-4">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={<CustomAxisTick axisType="xAxis" />}
              />
              <YAxis tick={<CustomAxisTick axisType="yAxis" />} />
              <Tooltip content={<CustomTooltip />} />
              {visibility.Clicks && (
                <Line
                  type="linear"
                  dataKey="Clicks"
                  stroke="#3498DB"
                  activeDot={{ r: 5 }}
                  dot={false}
                  strokeWidth={2}
                />
              )}
              {visibility.UniqueClicks && (
                <Line
                  type="linear"
                  dataKey="UniqueClicks"
                  stroke="#9B59B6"
                  dot={false}
                  activeDot={{ r: 5 }}
                  strokeWidth={2}
                />
              )}
              {visibility.Conversions && (
                <Line
                  type="linear"
                  dataKey="Conversions"
                  stroke="#2ECC71"
                  activeDot={{ r: 5 }}
                  dot={false}
                  strokeWidth={2}
                />
              )}
              {visibility.ClickRatio && (
                <Line
                  type="linear"
                  dataKey="ClickRatio"
                  stroke="#E67E22"
                  dot={false}
                  strokeWidth={2}
                />
              )}
              {visibility.Revenue && (
                <Line
                  type="linear"
                  dataKey="Revenue"
                  stroke="#F39C12"
                  dot={false}
                  strokeWidth={2}
                />
              )}
              {visibility.Profit && (
                <Line
                  type="linear"
                  dataKey="Profit"
                  stroke="#E74C3C"
                  dot={false}
                  strokeWidth={2}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
