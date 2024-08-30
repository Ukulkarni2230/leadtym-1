'use client'
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { FaSquare } from "react-icons/fa";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

// Data for the donut chart


// Calculate the total value of events


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

const Circlechartcard = ({data,title,user,amt,total}) => {
  return (
    <div className="w-full border-[1px] rounded-md flex flex-col justify-between border-[#D8D9D4] bg-white h-full">
        <div className='w-full items-center justify-between flex py-5 border-b-[1px] border-[#E1E7EC] px-4'>
    <p className='text-[#222529] text-base sm:text-lg 2xl:text-xl font-bold' >{title}</p>
    <select class="border text-[#2E335B] font-[900] text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[85px] bg-transparent justify-center text-center border-[#E1E7EC] rounded-md h-[30px] items-center flex py-1 px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none">
                    <option value="">Today</option>
                   
                    </select>
</div>
    <div className=' grid grid-cols-1 pb-6 lg:pb-0 lg:grid-cols-2 px-6 items-center w-full'>
      <div style={{ position: 'relative', width: '100%', height: 250 }}>
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
          <div style={{ color: '#333', fontSize: '20px', lineHeight: '24px',fontWeight:'700' }}>
            {amt}<br/><span style={{fontWeight:'400'}}>{user}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-3'>
        {data.map((item, index) => (
          <div key={index} className='w-full items-center flex justify-between gap-x-4 px-4'>
            <p className='text-[#101018] text-[10px] sm:text-xs 2xl:text-sm font-normal flex items-center gap-x-2'>
              <FaSquare style={{ color: item.fill }} size={14} /> {item.name}
            </p>
            <p style={{ color: '#101018' }} className=' text-[10px] sm:text-xs 2xl:text-sm font-bold flex items-center'>
              {item.value }<span className='text-[#e0e0e0] font-normal'>.00</span>
              {item.value / total < 0.5 ? <IoIosArrowRoundUp className='text-[#27AE60] ml-2 rotate-45' size={20} /> : <IoIosArrowRoundDown className='text-[#EB5757] -rotate-45' size={20} />}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default Circlechartcard;

