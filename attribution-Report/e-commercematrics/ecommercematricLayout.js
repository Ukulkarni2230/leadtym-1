'use client'
import React from 'react'
import Couponcard from '../performance-matrices/couponcard';
import PerformanceChart from '../performance-matrices/prformacechart';
import Circlechartcard from '../user-demographics/circlechartcard';
import Echartcone from './Echartcone';
const EcommercematricLayout = () => {
 
    const stats = [
    { title: "First-Time Conversions", amount: "220", description: "since last month", trend: "3.46" },
    { title: "Repeat Conversions", amount: "220", description: "since last year", trend: "1.20" },
    { title: "Unique Visitors", amount: "220", description: "since last month", trend: "2.84" },
    { title: "Conversion Rate", amount: "22%", description: "since last week", trend: "3.46" }
  ];

  const data = [
    { name: 'Completed', value: 200, fill: '#7661F5' },  // Purple segment
    { name: 'Uncompleted', value: 50, fill: '#5CC8BE' },    // Light blue segment
  ];
  const data3 = [
    { name: 'Product Views', value: 200, fill: '#7661F5' },  // Purple segment
    { name: 'Add to Cart', value: 50, fill: '#917EFF' },    // Light blue segment
    { name: 'Checkout Initiations', value: 50, fill: '#AD9FFF' },  // Purple segment
    { name: 'Checkout Completed', value: 50, fill: '#CBC2FF' },    // Light blue segment
  ];
  
  const total1 = data3.reduce((sum, current) => sum + current.value, 0);
  const total = data.reduce((sum, current) => sum + current.value, 0);

  return (
    <div className='flex flex-col p-2 gap-y-4 sm:gap-y-6 sm:p-6'>
<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
          <Echartcone/>
         {/* <Circlechartcard data={data3} title="Product Funnel" user="Total amount" amt="250" total={total1}/> */}
         <Circlechartcard data={data} title="Transections" user="Total amount" amt="250" total={total}/>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-4 sm:gap-x-6">

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
       <Couponcard stat={stat} index={index} />
      ))}
    </div>

      <div className="w-full border-[1px] flex pb-4 rounded-md flex-col justify-between gap-y-4 border-[#D8D9D4] bg-white h-full">
      
    <div className='w-full items-center justify-between flex pt-4 py-2 border-b-[1px] border-[#E1E7EC] px-4'>
        <p className='text-[#222529] text-base sm:text-lg 2xl:text-xl font-bold' >Revenue</p>
        <select class="border text-[#2E335B] font-[900] text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[85px] bg-transparent justify-center text-center border-[#E1E7EC] rounded-md h-[30px] items-center flex py-1 px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none">
                    <option value="">1 month</option>
                   
                    </select>
    </div>
    <div className='w-full'>
        <PerformanceChart firstcolor="#7661F5" secondcolor="#9BDFC4" />
       
    </div>

      </div>
    </div>
         
 
    </div>
  )
}

export default EcommercematricLayout