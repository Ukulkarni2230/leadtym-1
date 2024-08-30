import React from 'react'
import Circlechart from './circlechart'

const Chartcard = ({title}) => {
  return (
    <>
         <div className="w-full border-[1px] rounded-md flex pb-8 flex-col justify-between gap-y-4 border-[#D8D9D4] bg-white h-full">
<div className='w-full items-center justify-start flex py-5 border-b-[1px] border-[#E1E7EC] px-4'>
    <p className='text-[#222529] text-base sm:text-lg 2xl:text-xl font-bold' >{title}</p>
</div>
<div className='w-full items-center justify-between'>
    <Circlechart/>
    
</div>


  </div>
    </>
  )
}

export default Chartcard