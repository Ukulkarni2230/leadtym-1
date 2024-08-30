'use client'
import React from 'react'
import Circlechartcard from './circlechartcard'
import Barchartcard from './barchartcard';
import Maritstatus from './maritstatus';
import Household from './household';

const Userdemographicslayout = () => {
    const data = [
  { name: '1-15', value: 50000.00, fill: '#7661F5' },  // Purple segment
  { name: '15-30', value: 25000.00, fill: '#A193FF' },    // Light blue segment
  { name: '30-45', value: 15000.00, fill: '#BBB3F2' },    // Light blue segment
  { name: 'More than 45', value: 10000.00, fill: '#E2DEFE' },    // Light blue segment
];
    const data1 = [
  { name: 'Male', value: 50000.00, fill: '#7661F5' },  // Purple segment
  { name: 'Female', value: 25000.00, fill: '#A193FF' },    // Light blue segment
  { name: 'Other', value: 15000.00, fill: '#BBB3F2' },    // Light blue segment
//   { name: 'More than 45', value: 10000.00, fill: '#E2DEFE' },    // Light blue segment
];

const total = data.reduce((sum, current) => sum + current.value, 0);
const total1 = data1.reduce((sum, current) => sum + current.value, 0);

  return (
    <div className='flex flex-col p-2 gap-y-4 sm:gap-y-6 sm:p-6'>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
         <Circlechartcard data={data} title="Age" user="USER" amt="1234" total={total}/>
         <Circlechartcard data={data1} title="Gender" user="TOTAL USER" amt="30k" total={total1}/>
    
      </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
         <Barchartcard title="Income Level" />
         <Barchartcard title="Education Level " />
    
      </div>
         <div className='flex flex-col  md:flex-row gap-4 sm:gap-6'>
         <Maritstatus title="Marital Status" />
         <Household title="Household Size" />
    
      </div>
    </div>
  )
}

export default Userdemographicslayout