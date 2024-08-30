'use client'
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';
const data = [
  { step: 'App Launch', ProductView: 200, SearchProduct: 150, DropOff: 50 },
  { step: 'Step 2', AddToCart: 100, AddToFavourite: 50, DropOff: 50 },
  { step: 'Step 3', AddToWishlist: 90, Purchase: 60, DropOff: 30 },
  { step: 'Step 4', Exit: 40, Buy: 20, DropOff: 20 },
  { step: 'Step 5', Uninstall: 10, Others: 10, DropOff: 5 }
];

const UserpathLayout = () => {
  return (
    <div className='p-2 sm:p-6 flex flex-col w-full'>
    <div className='grid grid-cols-3 rounded-tl-md rounded-tr-md sm:grid-cols-5 border-[#D8D9D4] bg-white'>
      <div className='flex flex-col border-[1px] border-[#D8D9D4] px-3 py-4 text-start'>
        <p className='font-normal text-xs sm:text-sm 2xl:text-base text-[#6E6E71]'>Step 1</p>
        <p className='font-bold text-xs sm:text-sm 2xl:text-base text-[#35353A]'>Start Event</p>
      </div>
      <div className='flex flex-col border-[1px] border-[#D8D9D4] px-3 py-4 text-start'>
        <p className='font-normal text-xs sm:text-sm 2xl:text-base text-[#6E6E71]'>Step 2</p>
      </div>
      <div className='flex flex-col border-[1px] border-[#D8D9D4] px-3 py-4 text-start'>
        <p className='font-normal text-xs sm:text-sm 2xl:text-base text-[#6E6E71]'>Step 3</p>
      </div>
      <div className='flex flex-col border-[1px] border-[#D8D9D4] px-3 py-4 text-start'>
        <p className='font-normal text-xs sm:text-sm 2xl:text-base text-[#6E6E71]'>Step 4</p>
      </div>
      <div className='flex flex-col border-[1px] border-[#D8D9D4] px-3 py-4 text-start'>
        <p className='font-normal text-xs sm:text-sm 2xl:text-base text-[#6E6E71]'>Step 5</p>
        <p className='font-bold text-xs sm:text-sm 2xl:text-base text-[#35353A]'>End Event</p>
      </div>
    </div>
    <div className='w-full rounded-tl-none rounded-tr-none border-[1px] p-4 sm:p-6 rounded-md border-[#D8D9D4] bg-white'>
    <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data}
      margin={{ top: 2, right: 30, left: 2, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="step" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ProductView" stackId="a" fill="#8884d8" />
      <Bar dataKey="SearchProduct" stackId="a" fill="#82ca9d" />
      <Bar dataKey="AddToCart" stackId="a" fill="#ffc658" />
      <Bar dataKey="AddToFavourite" stackId="a" fill="#ff8042" />
      <Bar dataKey="AddToWishlist" stackId="a" fill="#a4de6c" />
      <Bar dataKey="Purchase" stackId="a" fill="#d0ed57" />
      <Bar dataKey="Exit" stackId="a" fill="#ffc0cb" />
      <Bar dataKey="Buy" stackId="a" fill="#8a89a6" />
      <Bar dataKey="Uninstall" stackId="a" fill="#c9c9ff" />
      <Bar dataKey="Others" stackId="a" fill="#413ea0" />
      <Bar dataKey="DropOff" stackId="a" fill="#ff6666" />
    </BarChart>
    </ResponsiveContainer>
    </div>
    </div>

  );
};

export default UserpathLayout