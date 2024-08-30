"use client"

import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import CongratulationsCard from './congratulationsCard';

function BecomeAffilliateCard({ handleClose, setOpen }) {

     const [isVisible, setIsVisible] = useState(true);
     const [showCongratulations, setShowCongratulations] = useState(false);

     const congratsCardHandler = () => {
          setIsVisible(false);
          setShowCongratulations(true);
     };

     return (
          <>
               {
                    isVisible && (
                         <div className='sm:w-fit md:w-[406px] h-max bg-white'>
                              <div className='flex items-center justify-between'>
                                   <h1 className='text-primary font-bold text-lg'>Become Affiliate</h1>
                                   <RxCross2 onClick={handleClose} className='cursor-pointer' size={24} color='gray' fontWeight={700} />
                              </div>
                              <h3 className='text-primary font-bold leading-5 mt-6'>Terms & Conditions</h3>
                              <p className='mt-3'>This brand doesn't have any special terms
                                   and conditions for their affiliate program at
                                   this moment.
                                   Please note that this can change in the future.
                                   We recommend affiliates to review the
                                   program TnC periodically.
                              </p>
                              <button onClick={congratsCardHandler} className="w-full gradient-bg border rounded-full border-none text-white mt-3 p-2 pl-8 pr-8 ">
                                   Accept & Continue
                              </button>
                         </div>
                    )
               }

               {showCongratulations ?
                    <CongratulationsCard
                         showCongratulations={showCongratulations}
                         setShowCongratulations={setShowCongratulations} />
                    : null}
          </>
     )
}

export default BecomeAffilliateCard;