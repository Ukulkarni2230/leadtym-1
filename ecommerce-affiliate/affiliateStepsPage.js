import React from 'react';
import Image from "next/image";
import affiliateImg1 from '@/public/assets/ecom/images/affiliate-step-1.png';
import affiliateImg2 from '@/public/assets/ecom/images/affiliate-step-2.png';
import affiliateImg3 from '@/public/assets/ecom/images/affiliate-step-3.png';
import { RxCross2 } from "react-icons/rx";

function AffiliateStepsPage({ handleAffiliateClose }) {
     return (
          <div className='sm:w-auto md:w-[406px] h-max bg-white'>
               <div className='rounded-2xl gradient-bg h-[91px] w-full]'>
                    <RxCross2 onClick={handleAffiliateClose} className='cursor-pointer ml-auto mr-2' size={24} color='white' fontWeight={700} /> 
                    <div className='font-semibold leading-5 text-white text-center'>Leadtym Affiliate</div>
                    <div className='flex justify-around items-center'>
                         <div className='p-1'>
                              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <g clip-path="url(#clip0_2375_145600)">
                                        <path d="M33.2637 1.50658C34.1503 0.645981 35.3094 0.121761 36.5411 0.024339C37.7728 -0.0730833 38.9999 0.262401 40.0107 0.972925C41.0216 1.68345 41.7527 2.72446 42.0781 3.91641C42.4035 5.10835 42.3028 6.37648 41.7932 7.50208L36.4522 19.2516H43.8827C49.3777 19.2516 52.0937 25.9331 48.1527 29.7656L22.4627 54.7626C21.6465 55.5566 20.5529 56.001 19.4142 56.0016H18.3572C17.6395 56.0016 16.9328 55.8249 16.2994 55.4873C15.666 55.1497 15.1254 54.6614 14.7253 54.0655C14.3252 53.4697 14.0778 52.7845 14.005 52.0705C13.9321 51.3564 14.0361 50.6355 14.3077 49.9711L19.7152 36.7516H12.1167C6.62171 36.7516 3.90571 30.0701 7.84671 26.2376L33.2637 1.50658ZM36.9282 5.26558L11.5007 30.0001C11.3758 30.1219 11.2901 30.2782 11.2547 30.449C11.2193 30.6198 11.2358 30.7973 11.302 30.9587C11.3682 31.1201 11.4812 31.258 11.6263 31.3547C11.7715 31.4515 11.9423 31.5026 12.1167 31.5016H23.6247C24.0554 31.5017 24.4794 31.6077 24.8594 31.8104C25.2394 32.013 25.5638 32.3061 25.8038 32.6637C26.0438 33.0213 26.1921 33.4324 26.2357 33.8609C26.2793 34.2894 26.2168 34.722 26.0537 35.1206L20.0582 49.7786L44.4952 26.0031C44.6199 25.8815 44.7055 25.7255 44.741 25.555C44.7765 25.3845 44.7603 25.2073 44.6946 25.0461C44.6288 24.8848 44.5164 24.7469 44.3718 24.6499C44.2271 24.5529 44.0569 24.5012 43.8827 24.5016H32.3747C31.9356 24.5016 31.5035 24.3915 31.1179 24.1813C30.7324 23.9711 30.4057 23.6675 30.1679 23.2984C29.93 22.9293 29.7886 22.5063 29.7565 22.0684C29.7244 21.6304 29.8027 21.1914 29.9842 20.7916L37.0122 5.32858L37.0227 5.30758L37.0087 5.27608L36.9877 5.25508L36.9597 5.25158C36.948 5.25158 36.9375 5.25625 36.9282 5.26558Z" fill="white" fill-opacity="0.2" />
                                   </g>
                                   <defs>
                                        <clipPath id="clip0_2375_145600">
                                             <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                   </defs>
                              </svg>
                         </div>
                         <div className=''>
                              <h1 className='text-2xl font-bold text-white'>How to Start Earning?</h1>
                         </div>
                         <div className=''>
                              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <g clip-path="url(#clip0_2375_145600)">
                                        <path d="M33.2637 1.50658C34.1503 0.645981 35.3094 0.121761 36.5411 0.024339C37.7728 -0.0730833 38.9999 0.262401 40.0107 0.972925C41.0216 1.68345 41.7527 2.72446 42.0781 3.91641C42.4035 5.10835 42.3028 6.37648 41.7932 7.50208L36.4522 19.2516H43.8827C49.3777 19.2516 52.0937 25.9331 48.1527 29.7656L22.4627 54.7626C21.6465 55.5566 20.5529 56.001 19.4142 56.0016H18.3572C17.6395 56.0016 16.9328 55.8249 16.2994 55.4873C15.666 55.1497 15.1254 54.6614 14.7253 54.0655C14.3252 53.4697 14.0778 52.7845 14.005 52.0705C13.9321 51.3564 14.0361 50.6355 14.3077 49.9711L19.7152 36.7516H12.1167C6.62171 36.7516 3.90571 30.0701 7.84671 26.2376L33.2637 1.50658ZM36.9282 5.26558L11.5007 30.0001C11.3758 30.1219 11.2901 30.2782 11.2547 30.449C11.2193 30.6198 11.2358 30.7973 11.302 30.9587C11.3682 31.1201 11.4812 31.258 11.6263 31.3547C11.7715 31.4515 11.9423 31.5026 12.1167 31.5016H23.6247C24.0554 31.5017 24.4794 31.6077 24.8594 31.8104C25.2394 32.013 25.5638 32.3061 25.8038 32.6637C26.0438 33.0213 26.1921 33.4324 26.2357 33.8609C26.2793 34.2894 26.2168 34.722 26.0537 35.1206L20.0582 49.7786L44.4952 26.0031C44.6199 25.8815 44.7055 25.7255 44.741 25.555C44.7765 25.3845 44.7603 25.2073 44.6946 25.0461C44.6288 24.8848 44.5164 24.7469 44.3718 24.6499C44.2271 24.5529 44.0569 24.5012 43.8827 24.5016H32.3747C31.9356 24.5016 31.5035 24.3915 31.1179 24.1813C30.7324 23.9711 30.4057 23.6675 30.1679 23.2984C29.93 22.9293 29.7886 22.5063 29.7565 22.0684C29.7244 21.6304 29.8027 21.1914 29.9842 20.7916L37.0122 5.32858L37.0227 5.30758L37.0087 5.27608L36.9877 5.25508L36.9597 5.25158C36.948 5.25158 36.9375 5.25625 36.9282 5.26558Z" fill="white" fill-opacity="0.2" />
                                   </g>
                                   <defs>
                                        <clipPath id="clip0_2375_145600">
                                             <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                   </defs>
                              </svg>

                         </div>
                    </div>
               </div>
               {/* <RxCross2 onClick={handleAffiliateClose} className='cursor-pointer' size={24} color='gray' fontWeight={700} /> */}
               <div class="flex flex-row items-center justify-around mt-8 ml-8">
                    <div class="basis-1/2">
                         <div className='flex flex-col flex-wrap'>
                              <p className='text-gradient w-[76px] h-[22px] font-bold text-lg'>Step-1</p>
                              <p className='font-bold mt-2'>Start by Exploring brand
                                   <span className='font-normal'> & Join Their Affiliate Program </span>
                              </p>
                         </div>
                    </div>
                    <div class="basis-1/2">
                         <Image
                              src={affiliateImg1}
                              width={118}
                              height={92}
                              alt="step-1"
                         />
                    </div>
               </div>
               <div class="flex flex-row items-center justify-around mt-8 ml-8">
                    <div class="basis-1/2">
                         <Image
                              src={affiliateImg2}
                              width={124}
                              height={100}
                              alt="step-2"
                         />
                    </div>
                    <div class="basis-1/2">
                         <div>
                              <p className='text-gradient font-bold w-[76px] h-[22px] text-lg'>Step-2</p>
                              <p className='font-bold mt-2'>Start your Affiliate Link
                                   <span className='font-normal'> with Friends, Family & Followers.</span>
                              </p>
                         </div>
                    </div>
               </div>
               <div class="flex flex-row items-center justify-around mt-8 mb-4 ml-8">
                    <div class="basis-1/2">
                         <div>
                              <p className='text-gradient font-bold w-[76px] h-[22px] text-lg'>Step-3</p>
                              <p className='font-bold mt-2'>See your Earnings Grow
                                   <span className='font-normal'> on every sale through your links.</span>
                              </p>
                         </div>
                    </div>
                    <div class="basis-1/2">
                         <Image
                              src={affiliateImg3}
                              width={162}
                              height={236}
                              alt="step-3"
                         />
                    </div>
               </div>
          </div>
     )
}

export default AffiliateStepsPage