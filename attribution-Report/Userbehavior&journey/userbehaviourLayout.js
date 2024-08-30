'use client'
import React from 'react'
import CommonCirclechart from './commonCirclechart';
import DropOfChart from './dropOfChart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import TaskCompilationchart from './taskCompilationchart';

// Sample data
const data4 = [
  { name: 'Daily', value: 100 },
  { name: '2-3 Week', value: 80 },
  { name: 'Weekly', value: 60 },
  { name: '2-3 Month', value: 50 },
  { name: 'Once a Month', value: 40 },
  { name: 'once every 2-3 months', value: 30 },
  { name: '2 visit a year', value: 20 },
  { name: 'Once a year', value: 10 },
  { name: 'less than once a year', value: 5 }
];

const UserbehaviourLayout = () => {
  
  const data = [
    { name: "Returning Visitors", value: 200, fill: "#7661F5" }, // Purple segment
    { name: "First-Time Visitors", value: 50, fill: "#5CC8BE" }, // Light blue segment
  ];

  const total = data.reduce((sum, current) => sum + current.value, 0);
  return (
    <div className="flex flex-col p-2 gap-y-4 sm:gap-y-6 sm:p-6">
    <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-4 sm:gap-x-6">
       

       <div className="lg:w-1/4 w-full">
         <CommonCirclechart data={data} total={total} title="Visitors" amt="100%" subtil="User Visitors" />
       </div>
       <div className="lg:w-3/4 w-full p-6 border-[1px] rounded-md flex flex-col border-[#D8D9D4] bg-white">
      <TaskCompilationchart/>
</div>
     </div>
     <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-4 sm:gap-x-6">
       

       
     <div className="lg:w-3/4 p-6 w-full border-[1px] rounded-md flex flex-col border-[#D8D9D4] bg-white">
     <p className='text-base sm:text-lg 2xl:text-xl font-semibold pt-0 py-3 text-[#1C1C1E]'>Frequency of Visits</p>
    <ResponsiveContainer width="100%" height={310}>
      <BarChart
        layout="vertical"
        data={data4}
        margin={{
          top: 0, right: 0, left: 10, bottom: 5, // Increased left margin
        }}
        barCategoryGap="19"
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={150} /> {/* Optionally control the width */}
        <Tooltip />
        <Bar dataKey="value" fill="#7661F5" barSize={14}>
          <LabelList dataKey="value" position="insideRight" /> {/* Changed label position for clarity */}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
<div className="lg:w-1/4 w-full">
         <DropOfChart/>
       </div>
     </div>

      
    </div>
  )
}

export default UserbehaviourLayout