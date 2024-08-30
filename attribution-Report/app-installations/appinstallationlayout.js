'use client'
import React from 'react'
import Circlechartcard from '../user-demographics/circlechartcard';
import { IoIosArrowRoundDown,IoIosArrowRoundUp } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import Barcharinstall from './barcharinstall';
const Appinstallationlayout = () => {
    const data = [
  { name: 'App Open', value: 45.00, fill: '#7661F5' },  // Purple segment
  { name: 'App Updates', value: 32.00, fill: '#5CC8BE' },    // Light blue segment
  { name: 'App Uninstall', value: 23.00, fill: '#9C27B0' },    // Light blue segment
];
    const data1 = [
  { name: 'App Installations', value: 200, fill: '#7661F5' },  // Purple segment
  { name: 'App Uninstallations', value: 50, fill: '#5CC8BE' },    // Light blue segment
];

const total = data.reduce((sum, current) => sum + current.value, 0);
const total1 = data1.reduce((sum, current) => sum + current.value, 0);

const stats2 = [
    { name:"In-App Purchases", amount: "220", description: "since last month", trend: "3.46" },
    { name:"In-App Purchase Value",  amount: "220", description: "since last month", trend: "2.20" },
    { name:"In-App Events", amount: "220", description: "since last month", trend: "2.84" },
  ];
  return (
    <div className='flex flex-col p-2 gap-y-4 sm:gap-y-6 sm:p-6'>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
         <Circlechartcard data={data} title="App Performance" user="Total App" amt="100%" total={total}/>
         <Circlechartcard data={data1} title="App Install" user="Devices" amt="250" total={total1}/>
    
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {stats2.map((stat, index) => (
        <div key={index} className="bg-white w-full rounded-md border-[1px] relative border-[#D8D9D4] text-start p-6 flex flex-col items-center">
        <div className='w-full items-center pb-4 justify-between flex border-b-[1px] border-[#E1E7EC]'>
    <p className='text-[#00000080] text-opacity-50 text-base sm:text-lg 2xl:text-xl font-bold' >{stat.name}</p>
    <select class="border text-[#2E335B] font-[900] text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[85px] bg-transparent justify-center text-center border-[#E1E7EC] rounded-md h-[30px] items-center flex py-1 px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none">
                    <option value="">Today</option>
                   
                    </select>
</div>
        <MdErrorOutline className='absolute text-[#2196F3] bottom-5 right-5'  size={18} />
        <div className='flex flex-col text-start mt-4 w-full gap-y-2 mb-4'>

      <p className="2xl:text-4xl text-[30px] text-start sm:text-[32px] leading-9 font-normal text-[#000000BF] text-opacity-35">{stat.amount}</p>
      {/* <p className="2xl:text-[22px] text-lg text-start sm:text-xl leading-6 font-normal text-[#000000BF] text-opacity-55">{stat.title}</p> */}
        </div>
 
      <div className='text-xs sm:text-sm 2xl:text-base font-normal items-center justify-start flex w-full gap-x-3'>
                            {stat.trend < 3.46 ? (
                                <p className='text-[#EB5757] flex items-center flex-row'><IoIosArrowRoundDown className="-rotate-45"/> {Math.abs(stat.trend)}%</p>
                            ) : (
                                <p className='text-green-600 flex items-center flex-row'><IoIosArrowRoundUp className="rotate-45"/> {stat.trend}%</p>
                            )}
                            <p className='text-[#00000059] text-opacity-35'>{stat.description}</p>
                        </div>
    </div>
      ))}
    </div>

    <div className="grid grid-cols-1 rounded-md border-[1px] relative border-[#D8D9D4] bg-white py-6 gap-6">
    <div className='w-full items-center px-6 pb-4 justify-between flex border-b-[1px] border-[#E1E7EC]'>
    <p className='text-[#222529] text-base sm:text-lg 2xl:text-xl font-bold' >Session</p>
    <select class="border text-[#2E335B] font-[900] text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[85px] bg-transparent justify-center text-center border-[#E1E7EC] rounded-md h-[30px] items-center flex py-1 px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none">
                    <option value="">Today</option>
                   
                    </select>
</div>
        <div className='px-6'>
        <Barcharinstall/>

        </div>
    </div>
    <div>
    </div>
    
    </div>
  )
}

export default Appinstallationlayout