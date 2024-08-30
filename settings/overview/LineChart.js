import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", LeadTym: 960 },
  { month: "Feb", LeadTym: 800 },
  { month: "Mar", LeadTym: 800 },
  { month: "Apr", LeadTym: 803 },
  { month: "May", LeadTym: 608 },
  { month: "June", LeadTym: 605 },
  { month: "July", LeadTym: 545 },
  { month: "Aug", LeadTym: 405 },
  { month: "Sep", LeadTym: 599 },
  { month: "Oct", LeadTym: 0 },
  { month: "Nov", LeadTym: 0 },
  { month: "Dec", LeadTym: 0 },
];

const CustomAxisTick = ({ x, y, payload, axisType }) => {
  const isXAxis = axisType === "xAxis";
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={isXAxis ? 0 : 2}
        dy={isXAxis ? 16 : 0}
        textAnchor={isXAxis ? "middle" : "end"}
        fill="#949494"
        fontSize={11}
        fontWeight="normal"
      >
        {payload.value}
      </text>
    </g>
  );
};

const LineChart = () => {
  return (
    <div style={{ minWidth: "150px", width: "100%" }}>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={data}
          margin={{ top: 0, right: 5, left: -25, bottom: 2 }}
        >
          <XAxis dataKey="month" tick={<CustomAxisTick axisType="xAxis" />} />
          <YAxis tick={<CustomAxisTick axisType="yAxis" />} />
          <Tooltip />
          <Bar dataKey="LeadTym" fill="#7B61FF" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
