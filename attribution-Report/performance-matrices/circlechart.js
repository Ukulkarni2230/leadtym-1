'use client'
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { FaSquare } from "react-icons/fa";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

// Data for the donut chart
const data = [
  { name: 'Event Completed', value: 51, fill: '#7661F5' },  // Purple segment
  { name: 'Event Bounced', value: 49, fill: '#BAAEFF' }    // Light blue segment
];

// Calculate the total value of events
const total = data.reduce((sum, current) => sum + current.value, 0);

// Custom tooltip for hovering over segments
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="text-white gradient-bg p-2 rounded-md shadow-lg">
        <p>{`${payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

const Circlechart = () => {
  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <div style={{ color: '#333', fontSize: '20px', lineHeight: '24px' }}>
            100%<br/>Total Rate
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-3'>
        {data.map((item, index) => (
          <div key={index} className='w-full items-center flex justify-between gap-x-4 px-4'>
            <p style={{ color: item.fill }} className='text-[#8C97A7] text-[10px] sm:text-xs 2xl:text-sm font-normal flex items-center gap-x-2'>
              <FaSquare className={item.fill} size={14} /> {item.name}
            </p>
            <p style={{ color: item.fill }} className=' text-[10px] sm:text-xs 2xl:text-sm font-normal flex items-center gap-x-2'>
              {`${((item.value / total) * 100).toFixed(0)}%`} 
              {item.value / total > 0.5 ? <IoIosArrowRoundUp className='text-[#27AE60] rotate-45' size={20} /> : <IoIosArrowRoundDown className='text-[#EB5757] -rotate-45' size={20} />}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Circlechart;
