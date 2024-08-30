"use client"

import React from 'react';
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import linkSuccessfull from "@/public/assets/ecom/images/link-successfully.png";

function SuccessfullyMsgCard() {

     return (
          <div className='w-[403px] h-full bg-white'>
               <div className='flex items-center justify-between'>
                    <h1 className='text-primary font-bold text-lg'>Congratulations.!
                    </h1>
                    <RxCross2 className='cursor-pointer' size={24} color='gray' fontWeight={700} />
               </div>
               <div className='flex flex-col items-center justify-center'>
                    <div className='mt-4'>
                         <Image
                              src={linkSuccessfull}
                              width={218}
                              height={218}
                              alt="link-copied-img"
                         />
                    </div>
               </div>
          </div>
     )
}

export default SuccessfullyMsgCard