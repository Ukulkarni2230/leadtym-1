"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import tabCardProduct1 from "@/public/assets/ecom/images/tab-card-product.png";
import { FiSend } from 'react-icons/fi';
import LinkConvertedCard from '../ecommerce-affiliate/linkConvertedCard';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
     '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
     },
     '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
     },
}));

function TopProducts() {

     const [showLinkConvertedCard, setShowLinkConvertedCard] = useState(false);

     const linkConvertedCardOpen = () => {
          setShowLinkConvertedCard(true);
     };

     const linkConvertedCardClose = () => {
          setShowLinkConvertedCard(false);
     };

     return (
          <>
               <div className='bg-[#E7F5E8] border rounded-md p-4'>
                    <p className='text-green-500'><span className='font-bold text-green-600'>This Affiliate Program is store wide.</span> Products of the store not listed here are also eligible for commission.
                    </p>
                    <p className='text-green-500'>Paste non listed product link in input box to convert it to affiliate link</p>
               </div>
               <div className='flex items-center flex-wrap'>
                    <div className='flex items-center flex-wrap justify-start mt-6 gap-6'>
                         <div className='mt-4 mb-4 bg-[#5E17EB1A]/10 border-b rounded-b-2xl'>
                              <Image
                                   width={320}
                                   height={320}
                                   src={tabCardProduct1}
                                   alt="tabcard-product-1" />
                              <div className='p-4'>
                                   <div className='font-bold text-primary'>Adidas Shoes 1</div>
                                   <div className='font-bold cursor-pointer text-subtitle_card mt-6'>7.5% of Sale</div>
                              </div>
                              <div className='flex items-center justify-center pb-4 ml-4 mr-4'>
                                   <button
                                   onClick={linkConvertedCardOpen}
                                        className="flex items-center justify-center gradient-bg pl-4 pr-4 flex-1 border rounded-full border-none text-white leading-5 p-2 px-6 py-3">
                                        <span className='mr-2 leading-5 font-bold'>Share Links</span>
                                        <FiSend size={18} />
                                   </button>
                              </div>
                              {/* link converted pop-up show */}
                              <BootstrapDialog
                                   onClose={linkConvertedCardClose}
                                   aria-labelledby="customized-dialog-title"
                                   open={showLinkConvertedCard}
                              >
                                   <DialogContent>
                                        <LinkConvertedCard
                                             linkConvertedCardClose={linkConvertedCardClose}
                                        />
                                   </DialogContent>
                              </BootstrapDialog>
                         </div>
                         <div className='mt-4 mb-4 bg-[#5E17EB1A]/10 border-b rounded-b-2xl'>
                              <Image
                                   width={320}
                                   height={320}
                                   src={tabCardProduct1}
                                   alt="tabcard-product-1" />
                              <div className='p-4'>
                                   <div className='font-bold text-primary'>Adidas Shoes 1</div>
                                   <div className='font-bold cursor-pointer text-subtitle_card mt-6'>7.5% of Sale</div>
                              </div>
                              <div className='flex items-center justify-center pb-4 ml-4 mr-4'>
                                   <button className="flex items-center justify-center gradient-bg pl-4 pr-4 flex-1 border rounded-full border-none text-white leading-5 p-2 px-6 py-3">
                                        <span className='mr-2 leading-5 font-bold'>Share Links</span>
                                        <FiSend size={18} />
                                   </button>
                              </div>
                         </div>
                         <div className='mt-4 mb-4 bg-[#5E17EB1A]/10 border-b rounded-b-2xl'>
                              <Image
                                   width={320}
                                   height={320}
                                   src={tabCardProduct1}
                                   alt="tabcard-product-1" />
                              <div className='p-4'>
                                   <div className='font-bold text-primary'>Adidas Shoes 1</div>
                                   <div className='font-bold cursor-pointer text-subtitle_card mt-6'>7.5% of Sale</div>
                              </div>
                              <div className='flex items-center justify-center pb-4 ml-4 mr-4'>
                                   <button className="flex items-center justify-center gradient-bg pl-4 pr-4 flex-1 border rounded-full border-none text-white leading-5 p-2 px-6 py-3">
                                        <span className='mr-2 leading-5 font-bold'>Share Links</span>
                                        <FiSend size={18} />
                                   </button>
                              </div>
                         </div>
                         <div className='mt-4 mb-4 bg-[#5E17EB1A]/10 border-b rounded-b-2xl'>
                              <Image
                                   width={320}
                                   height={320}
                                   src={tabCardProduct1}
                                   alt="tabcard-product-1" />
                              <div className='p-4'>
                                   <div className='font-bold text-primary'>Adidas Shoes 1</div>
                                   <div className='font-bold cursor-pointer text-subtitle_card mt-6'>7.5% of Sale</div>
                              </div>
                              <div className='flex items-center justify-center pb-4 ml-4 mr-4'>
                                   <button className="flex items-center justify-center gradient-bg pl-4 pr-4 flex-1 border rounded-full border-none text-white leading-5 p-2 px-6 py-3">
                                        <span className='mr-2 leading-5 font-bold'>Share Links</span>
                                        <FiSend size={18} />
                                   </button>
                              </div>
                         </div>
                         <div className='mt-4 mb-4 bg-[#5E17EB1A]/10 border-b rounded-b-2xl'>
                              <Image
                                   width={320}
                                   height={320}
                                   src={tabCardProduct1}
                                   alt="tabcard-product-1" />
                              <div className='p-4'>
                                   <div className='font-bold text-primary'>Adidas Shoes 1</div>
                                   <div className='font-bold cursor-pointer text-subtitle_card mt-6'>7.5% of Sale</div>
                              </div>
                              <div className='flex items-center justify-center pb-4 ml-4 mr-4'>
                                   <button className="flex items-center justify-center gradient-bg pl-4 pr-4 flex-1 border rounded-full border-none text-white leading-5 p-2 px-6 py-3">
                                        <span className='mr-2 leading-5 font-bold'>Share Links</span>
                                        <FiSend size={18} />
                                   </button>
                              </div>
                         </div>
                         <div className='mt-4 mb-4 bg-[#5E17EB1A]/10 border-b rounded-b-2xl'>
                              <Image
                                   width={320}
                                   height={320}
                                   src={tabCardProduct1}
                                   alt="tabcard-product-1" />
                              <div className='p-4'>
                                   <div className='font-bold text-primary'>Adidas Shoes 1</div>
                                   <div className='font-bold cursor-pointer text-subtitle_card mt-6'>7.5% of Sale</div>
                              </div>
                              <div className='flex items-center justify-center pb-4 ml-4 mr-4'>
                                   <button className="flex items-center justify-center gradient-bg pl-4 pr-4 flex-1 border rounded-full border-none text-white leading-5 p-2 px-6 py-3">
                                        <span className='mr-2 leading-5 font-bold'>Share Links</span>
                                        <FiSend size={18} />
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default TopProducts