'use client'
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = {
  monthly: [
    { hour: "01am", AverageSessionDuration: 90, PagesPerSession: 70 },
    { hour: "02am", AverageSessionDuration: 120, PagesPerSession: 150 },
    { hour: "03am", AverageSessionDuration: 80, PagesPerSession: 130 },
    { hour: "04am", AverageSessionDuration: 110, PagesPerSession: 100 },
    { hour: "05am", AverageSessionDuration: 170, PagesPerSession: 150 },
    { hour: "06am", AverageSessionDuration: 150, PagesPerSession: 120 },
    { hour: "07am", AverageSessionDuration: 200, PagesPerSession: 160 },
  ],
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="gradient-bg text-white p-4 rounded-md shadow-lg">
        <p>{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index}>{`${entry.name}: ${entry.value}`}</p>
        ))}
      </div>
    );
  }

  return null;
};

const PerformanceChart = ({firstcolor="#7661F5",secondcolor="#BAAEFF"}) => {
  return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.monthly} margin={{ top: 0, right: 4, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="AverageSessionDuration" fill={firstcolor} name="Average Session Duration" />
          <Bar dataKey="PagesPerSession" fill={secondcolor} name="Pages per Session" />
        </BarChart>
      </ResponsiveContainer>
  );
};

export default PerformanceChart;
