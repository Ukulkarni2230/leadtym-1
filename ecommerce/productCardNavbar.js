import React from 'react'
import { FaFilter } from "react-icons/fa6";

const ProductCardNavbar = () => {
     return (
          <div className='flex items-center justify-between ml-9 mt-4 mr-8'>
               <div>
                    <p className="text-[18px] sm:text-[20px] 2xl:text-[22px] text-[#333333] font-extrabold leading-tight mb-4">
                         Explore Affiliate Programs
                    </p>
               </div>
               <div>
                    <button className="flex items-center space-x-1 text-tertiary">
                         <span className="text-lg font-bold text-[#6E6E71] mr-3">
                              Filter Coupon
                         </span>
                         <FaFilter height={20} color='#35353A' />
                    </button>
               </div>
          </div>
     )
}

export default ProductCardNavbar