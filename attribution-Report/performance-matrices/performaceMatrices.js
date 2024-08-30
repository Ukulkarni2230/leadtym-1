import React from 'react'
import { LuPrinter } from "react-icons/lu";
import { GrDownload } from "react-icons/gr";
import { IoIosArrowRoundDown,IoIosArrowRoundUp } from "react-icons/io";
import Prformacechart from './prformacechart';
import Chartcard from './chartcard';
import Couponcard from './couponcard';

const PerformaceMatrices = () => {
    const data=[
        {
            title:"Unique Clicks",
            imgsrc:"/assets/Chart.svg",
            amt:"1059",
            des:"since last week",
            perce:'2.84',
            bgcolor:"#FEFFE4",
            bordercolor:"#D9CF46"
        },
        {
            title:"Total Clicks",
            imgsrc:"/assets/Chart1.svg",
            amt:"1,643,983",
            des:"since last month",
            perce:'3.46',
            bgcolor:"#EDFFF6",
            bordercolor:"#27AE60"
        },
        {
            title:"Total Visits",
            imgsrc:"/assets/Chart2.svg",
            amt:"309,827",
            des:"since last month",
            perce:'3.46',
            bgcolor:"#FFF8F1",
            bordercolor:"#A9611E"
        },
        {
            title:"Total Conversions",
            imgsrc:"/assets/Chart3.svg",
            amt:"$150,967.64",
            des:"since last month",
            perce:'3.46',
            bgcolor:"#E8F0FF",
            bordercolor:"#1E4690"
        },
    ]
    const data1 = [
  { name: '01am', uv: 120, pv: 240 },
  { name: '02am', uv: 150, pv: 130 },
  // Add other data points as needed
];
    const stats = [
    { title: "First-Time Conversions", amount: "220", description: "since last month", trend: "3.46" },
    { title: "Repeat Conversions", amount: "220", description: "since last year", trend: "1.20" },
    { title: "Unique Visitors", amount: "220", description: "since last month", trend: "2.84" },
    { title: "Conversion Rate", amount: "22%", description: "since last week", trend: "3.46" }
  ];
    const stats2 = [
    { title: "Cost per Conversion", amount: "Rupees", description: "since last weak", trend: "3.46" },
    { title: "Return on Ad Spend", amount: "220", description: "since last month", trend: "1.20" },
    { title: "Lifetime Value", amount: "220", description: "since last month", trend: "2.84" },
  ];
  return (
    <div className='flex flex-col p-2 sm:p-6'>
        <div className='w-full items-center flex bg-white rounded-md justify-between p-4 border-[1px] border-[#D8D9D4]'>
            <p className='text-[#101018] font-normal text-xs sm:text-sm 2xl:text-base'>Performance Metrics:</p>
            <div className='flex flex-row gap-x-4'>
                <div className='flex items-center px-4 justify-start gap-x-3 border-x-[1px] border-[#D9D9DC]'>
                    <LuPrinter size={18} className='text-[#0e0e0e] hover:text-gray-500 cursor-pointer' />
                    <GrDownload size={18} className='text-[#0e0e0e] hover:text-gray-500 cursor-pointer' />
                </div>
                <div className='py-2 px-8 border-[1px] rounded-full border-[#C5C5C7]'>
                    calanderpending
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 lg:gap-y-0 sm:gap-x-6 mt-4 sm:mt-6">
        {data.map((item, index) => (
                <div style={{ backgroundColor: item.bgcolor, borderColor: item.bordercolor }} key={index} className="border rounded-md">
                    <div  style={{ borderColor: item.bordercolor }} className='flex items-center p-4 border-b justify-between'>
                        <p className='text-sm text-[#35353A] font-normal sm:text-base 2xl:text-lg leading-5'>{item.title}</p>
                        <img src={item.imgsrc} alt="Chart" />
                    </div>
                    <div className='flex flex-col text-center w-full gap-y-3 p-4 mt-2 items-center justify-center'>
                        <p className='sm:text-3xl 2xl:text-[32px] text-[28px] leading-9 font-normal text-[#101018]'>{item.amt}</p>
                        <div className='text-xs sm:text-sm 2xl:text-base font-normal items-center justify-start flex w-full gap-x-3'>
                            {item.perce < 3.46 ? (
                                <p className='text-[#EB5757] flex items-center flex-row'><IoIosArrowRoundDown className="-rotate-45"/> {Math.abs(item.perce)}%</p>
                            ) : (
                                <p className='text-green-600 flex items-center flex-row'><IoIosArrowRoundUp className="rotate-45"/> {item.perce}%</p>
                            )}
                            <p className='text-[#00000059] text-opacity-35'>{item.des}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>  

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-4 sm:gap-x-6 mt-4 sm:mt-6">

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
       <Couponcard stat={stat} index={index} />
      ))}
    </div>

      <div className="w-full border-[1px] flex pb-4 rounded-md flex-col justify-between gap-y-4 border-[#D8D9D4] bg-white h-full">
      
    <div className='w-full items-center justify-between flex pt-4 py-2 border-b-[1px] border-[#E1E7EC] px-4'>
        <p className='text-[#222529] text-base sm:text-lg 2xl:text-xl font-bold' >Session</p>
        <p className='text-[#8C97A7] text-[8px] sm:text-[10px] 2xl:text-xs font-normal'>Y - In Seconds</p>
    </div>
    <div className='w-full'>
        <Prformacechart/>
       
    </div>

      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 mt-6 gap-6">
      {stats2.map((stat, index) => (
        <Couponcard stat={stat} index={index} />
      ))}
    </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6'>
      <Chartcard title="Impression" />
      <Chartcard title="Bounced" />
      <Chartcard title="Churn" />
      </div>

    </div>
  )
}

export default PerformaceMatrices