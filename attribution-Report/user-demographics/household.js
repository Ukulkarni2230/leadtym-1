'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GiPlainCircle } from "react-icons/gi";
const data = [
  { name: '1 member', Members: 10000 },
  { name: '2 members', Members: 20000 },
  { name: '3 members', Members: 30000 },
  { name: '4 members', Members: 40000 },
  { name: '5 members', Members: 50000 }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="gradient-bg text-white p-4 rounded-md shadow-lg">
        <p>{`${label}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Household = ({title}) => {
  return (
    <div className="w-full md:w-[60%] border-[1px] rounded-md flex flex-col justify-between border-[#D8D9D4] bg-white h-full">
        <div className='w-full items-center justify-between flex py-5 border-b-[1px] border-[#E1E7EC] px-6'>
    <p className='text-[#222529] text-base sm:text-lg 2xl:text-xl font-bold' >{title}</p>
    <p className='flex items-center text-[#4B5157] font-normal text-xs sm:text-base 2xl:text-lg justify-start gap-x-2'><GiPlainCircle className='text-[#4592FF]' size={14} />Family</p>
</div>
        <div className='flex flex-col p-6 w-full'>
        <ResponsiveContainer width="100%" height={325}>
                <BarChart
                  layout="vertical"
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barCategoryGap="20%"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="Members" fill="#7661F5" barSize={30} radius={[0, 20, 20, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
};

export default Household;
