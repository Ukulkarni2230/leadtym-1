import React from 'react'
import { IoIosArrowRoundDown,IoIosArrowRoundUp } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
const Couponcard = ({stat,index}) => {
  return (
    <div key={index} className="bg-white w-full rounded-md border-[1px] relative border-[#D8D9D4] text-start p-6 flex flex-col items-center">
        <MdErrorOutline className='absolute text-[#2196F3] top-5 right-5'  size={18} />
        <div className='flex flex-col text-start w-full gap-y-2 mb-2'>

      <p className="2xl:text-4xl text-[30px] text-start sm:text-[32px] leading-9 font-normal text-[#000000BF] text-opacity-35">{stat.amount}</p>
      <p className="2xl:text-[22px] text-lg text-start sm:text-xl leading-6 font-normal text-[#000000BF] text-opacity-55">{stat.title}</p>
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
  )
}

export default Couponcard