"use client"

import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import SuccessfullyMsgCard from './successfullyMsgCard';

function CongratulationsCard({ showCongratulations, setShowCongratulations }) {

     const [showSuccessMsgCard, setShowSuccessMsgCard] = useState(true);

     const congratsCardCloseHandler = () => {
          setShowCongratulations(!showCongratulations);
     };

     useEffect(() => {
          setTimeout(() => {
               setShowSuccessMsgCard(false);
          }, 600);
     }, [])

     return (
          <>
               {
                    showSuccessMsgCard ? <SuccessfullyMsgCard /> : <div className='w-[417px] h-max bg-white'>
                         <div className='flex items-center justify-between'>
                              <h1 className='text-primary font-bold text-lg'>Congratulations.!
                              </h1>
                              <RxCross2 onClick={congratsCardCloseHandler} className='cursor-pointer' size={24} color='gray' fontWeight={700} />
                         </div>
                         <h3 className='text-primary font-bold leading-5 mt-6'>You are Nandee Herbs Co's Affiliate!</h3>
                         <h3 className='text-primary font-bold leading-5 mt-4'>How to Start Earning as an Affiliate</h3>
                         <h3 className='text-green-400 leading-5 mt-4 mb-4 font-medium'>Earn commissions on every purchase made
                              through your affiliate links!
                         </h3>
                         <div className=''>
                              <div className='bg-gray-100 rounded-2xl mb-3'>
                                   <p className='text-tertiary font-semibold leading-6 py-4 px-3 text-[18px]'>Share links on your Instagram Story daily</p>
                              </div>
                              <div className='bg-gray-100 rounded-2xl mb-3'>
                                   <p className='text-tertiary font-semibold leading-6 py-4 px-3 text-[18px]'>Add links to your Instagram Bio and Linktree</p>
                              </div>
                              <div className='bg-gray-100 rounded-2xl mb-3'>
                                   <p className='text-tertiary font-semibold leading-6 py-4 px-3 text-[18px]'>Share Affiliate links in WhatsApp groups, DMs and Telegram groups</p>
                              </div>
                              <div className='bg-gray-100 rounded-2xl mb-3'>
                                   <p className='text-tertiary font-semibold leading-6 py-4 px-3 text-[18px]'>Use ongoing sales and offers on the brand&#x27;s website to encourage people</p>
                              </div>
                         </div>
                         <button onClick={congratsCardCloseHandler} className="w-full gradient-bg border rounded-full border-none text-white mt-3 p-2 pl-8 pr-8 ">
                              Continue
                         </button>
                    </div>
               }


          </>
     )
}

export default CongratulationsCard