// DealRevenueChart.js
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DateDropdown from "./date-dropdown";

const data = {
  weekly: [
    { name: "Week 1", deals: 4000, revenue: 200 },
    { name: "Week 2", deals: 3000, revenue: 1398 },
    { name: "Week 3", deals: 200, revenue: 9800 },
    { name: "Week 4", deals: 2780, revenue: 3908 },
  ],
  monthly: [
    { name: "Jan", deals: 1880, revenue: 2400 },
    { name: "Feb", deals: 2500, revenue: 2200 },
    { name: "Mar", deals: 30, revenue: 3200 },
    { name: "Apr", deals: 2000, revenue: 1800 },
    { name: "May", deals: 3000, revenue: 260 },
    { name: "Jun", deals: 2800, revenue: 2400 },
    { name: "Jul", deals: 3500, revenue: 3200 },
    { name: "Aug", deals: 270, revenue: 2500 },
    { name: "Sep", deals: 3000, revenue: 2800 },
    { name: "Oct", deals: 3500, revenue: 3300 },
    { name: "Nov", deals: 3000, revenue: 290 },
    { name: "Dec", deals: 320, revenue: 5100 },
  ],
  quarterly: [
    { name: "Q1", deals: 400, revenue: 2400 },
    { name: "Q2", deals: 3000, revenue: 138 },
    { name: "Q3", deals: 2000, revenue: 9800 },
    { name: "Q4", deals: 2780, revenue: 908 },
  ],
};

const timeframes = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="gradient-bg text-white  p-1.5 px-3 rounded-xl">
        {payload.map((data, index) => (
          <p
            key={index}
            className="text-[12px] sm:text-sm 2xl:text-base"
          >{`${data.name}: ${data.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomActiveDot = ({ cx, cy, pass }) => {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={6} // Set radius to 6 to make it 12*12 in size
        stroke="#fff"
        strokeWidth={2}
        fill="#fff"
      />
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke={pass} // Use the passed color here
        strokeWidth={2}
        fill={pass}
      />
    </g>
  );
};

const DealRevenueChart = () => {
  const [timeframe, setTimeframe] = useState("monthly"); // Set default to "monthly"

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <div className="bg-white shadow-lg py-3 shadow-[#5E17EB26] border border-[#D8D9D4] rounded-xl sm:p-4 p-2 w-full">
      <div className="flex justify-between items-start mb-4">
        <h2 className="2xl:text-xl text-base sm:text-lg text-[#131313] font-semibold">
          Deals & Revenue
        </h2>
        <DateDropdown
          options={timeframes}
          value={timeframe}
          onChange={handleTimeframeChange}
        />
      </div>
      <ResponsiveContainer width="100%" height={193}>
        <LineChart
          data={data[timeframe]}
          margin={{ top: 0, right: 5, left: -15, bottom: 2 }}
        >
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="10"
                floodColor="rgba(136, 132, 216, 0.3)"
              />
            </filter>
            <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="10"
                floodColor="rgba(130, 202, 157, 0.3)"
              />
            </filter>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#D9D9D9"
          />
          <XAxis
            dataKey="name"
            style={{ fontSize: "12px", color: "#7D7D7D", fontWeight: "normal" }} // Customize text size, color, and font-weight
          />
          <YAxis
            style={{ fontSize: "12px", color: "#7D7D7D", fontWeight: "normal" }} // Customize text size, color, and font-weight
            x={0}
            y={2}
            dy={0}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="linear"
            dataKey="deals"
            stroke="#7661F5" // Change line color
            dot={false} // Hide default dots
            activeDot={<CustomActiveDot pass={"#7661F5"} />} // Show custom dot on hover
            strokeWidth={2}
            style={{ filter: "url(#shadow)" }}
          />
          <Line
            type="linear"
            dataKey="revenue"
            stroke="#25CD25" // Change line color
            dot={false} // Hide default dots
            activeDot={<CustomActiveDot pass={"#25CD25"} />} // Show custom dot on hover
            strokeWidth={2}
            style={{ filter: "url(#shadow2)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DealRevenueChart;
