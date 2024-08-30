'use client'
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Cell
} from "recharts";
import { MdCircle } from "react-icons/md";
const data = [
  { name: "1L-2L", income: 80000, color: "#62B2FD" },
  { name: "2L-4L", income: 90000, color: "#9BDFC4" },
  { name: "4L-6L", income: 50000, color: "#F99BAB" },
  { name: "6L-8L", income: 30000, color: "#FFB44F" },
  { name: "8L-10L", income: 20000, color: "#9F97F7" },
  { name: "10L-20L", income: 40000, color: "#CED6DE" },
  { name: "20L-40L", income: 70000, color: "#0D7FE9" }
];


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="gradient-bg text-white p-4 rounded-md shadow-lg">
        <p>{`${label}: $${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const Barchartcard = ({title}) => {
  return (
    <div className="w-full border-[1px] rounded-md flex flex-col justify-between border-[#D8D9D4] bg-white h-full">
        <div className='w-full items-center justify-between flex py-5 border-b-[1px] border-[#E1E7EC] px-6'>
    <p className='text-[#222529] text-base sm:text-lg 2xl:text-xl font-bold' >{title}</p>
    <select class="border text-[#2E335B] font-[900] text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[85px] bg-transparent justify-center text-center border-[#E1E7EC] rounded-md h-[30px] items-center flex py-1 px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none">
                    <option value="">Today</option>
                   
                    </select>
</div>
    <div className='flex flex-col p-6 w-full'>
     
    <div className='flex flex-col p-2 w-full'>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={data} margin={{ top: 0, right: 5, left: 5, bottom: 2 }}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="income" name="Income">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='flex flex-row flex-wrap gap-y-5 gap-x-3'>
        {/* <p key={index} className="text-[#8C97A7] flex items-center justify-start gap-x-1 font-normal text-[10px] sm:text-xs 2xl:text-sm"><MdCircle/>1L-2L</p> */}
      {data.map((item, index) => (
          <p key={index} className="text-[#8C97A7] flex items-center justify-start gap-x-1 font-normal text-[10px] sm:text-xs 2xl:text-sm"><MdCircle style={{color:item.color}} />{item.name}</p>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Barchartcard
