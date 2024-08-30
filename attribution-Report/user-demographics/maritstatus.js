'use client'
import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { MdCircle } from "react-icons/fa";
import { GiPlainCircle } from "react-icons/gi";

// Data for the donut chart
const data = [
  { name: 'Single', value: 50000, fill: '#7661F5' },  
  { name: 'Married', value: 40000, fill: '#9BDFC4' },
  { name: 'Divorced', value: 10000, fill: '#FFB44F' },
];

// Calculate the total value of events
// const total = data.reduce((sum, current) => sum + current.value, 0);

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


const Maritstatus = ({title}) => {
  return (
    <div className="w-full md:w-[40%] border-[1px] rounded-md flex flex-col justify-between border-[#D8D9D4] bg-white h-full">
        <div className='w-full items-center justify-between flex py-5 border-b-[1px] border-[#E1E7EC] px-6'>
    <p className='text-[#222529] text-base sm:text-lg 2xl:text-xl font-bold' >{title}</p>
    <select class="border text-[#2E335B] font-[900] text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[85px] bg-transparent justify-center text-center border-[#E1E7EC] rounded-md h-[30px] items-center flex py-1 px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none">
                    <option value="">Today</option>
                   
                    </select>
</div>
    <div className='flex flex-col p-6 w-full'>
 
      <div style={{ position: 'relative', width: '100%', height: 240 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="0%"
            outerRadius="100%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      </div>

      <div className='flex flex-col gap-y-3'>
        {data.map((item, id) => (
          <div key={id} className='w-full items-center flex justify-between gap-x-4 px-4'>
            <p className='text-[#2A2E33] text-[10px] sm:text-xs 2xl:text-sm font-normal flex items-center gap-x-2'>
              {/* <MdCircle style={{color:item.fill}} size={14} /> */}
              <GiPlainCircle style={{color:item.fill}} size={12} />
              {item.name}
            </p>
            <p className=' text-[10px] text-[#2A2E33]  sm:text-xs 2xl:text-sm font-bold flex items-center'>
             {item.value} <span className='text-[#939699]'>.00</span>
            </p>
          </div>
        ))}
      </div>

    </div>
    </div>
  )
}

export default Maritstatus