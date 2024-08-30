"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import linkCopiedMsg from "@/public/assets/ecom/images/link-copied.png";
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';

function LinkCopiedCard({ linkCopyCardClose }) {
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          const timer = setInterval(() => {
               setProgress((oldProgress) => {
                    if (oldProgress === 100) {
                         return 0;
                    }
                    const diff = Math.random() * 10;
                    return Math.min(oldProgress + diff, 100);
               });
          }, 300);

          return () => {
               clearInterval(timer);
          };
     }, []);

     return (
          <div className='w-[403px] h-max bg-white'>
               <div className='flex items-center justify-end'>
                    <RxCross2 onClick={linkCopyCardClose} className='mt-4 mr-4 cursor-pointer' size={24} color='gray' fontWeight={700} />
               </div>
               <div className='flex flex-col items-center justify-center'>
                    <div>
                         <Image
                              src={linkCopiedMsg}
                              width={173}
                              height={173}
                              alt="link-copied-img"
                         />
                    </div>
                    <h1 className='text-green-400 font-bold leading-6 text-lg mt-8'>Link Copied Successfully...!</h1>
                    <h3 className='text-primary leading-5 mt-4'>You Can Now Paste It On Telegram</h3>
                    <div className='bg-[#0D9152] h-[6px] w-[127px] border border-none rounded-2xl mt-8 ml-auto mr-auto'></div>
                    {/* 
                         <Box sx={{ width: '75%' }}>
                              <LinearProgress variant="determinate" value={progress} />
                         </Box>
                    */}
                    <h3 className='text-primary leading-5 mt-4'>Taking You To Telegram....</h3>
               </div>
          </div>
     )
}

export default LinkCopiedCard;