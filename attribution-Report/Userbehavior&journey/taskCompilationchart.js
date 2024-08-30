'use client'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data
const data2 = [
    { name: 'M. Fowler', ProductView: 13, WishList: 6, AddToCart: 10, Checkout: 12, Purchase: 21 },
    { name: 'J. Wells', ProductView: 20, WishList: 12, AddToCart: 14, Checkout: 18, Purchase: 26 },
    { name: 'J. Lindsey', ProductView: 15, WishList: 9, AddToCart: 12, Checkout: 20, Purchase: 34 },
    { name: 'J. Bennett', ProductView: 8, WishList: 13, AddToCart: 9, Checkout: 23, Purchase: 17 },
    { name: 'D. Fox', ProductView: 18, WishList: 7, AddToCart: 15, Checkout: 22, Purchase: 38 }
  ];
const TaskCompilationchart = () => {
  return (
    <div> 
    <p className='text-base sm:text-lg 2xl:text-xl font-semibold pt-0 py-3 text-[#1C1C1E]'>Task Completion</p>

    <ResponsiveContainer width="100%" height={270}>
        <BarChart
          layout="vertical" // Set layout to vertical for horizontal bar chart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 4, right: 4, left: 10, bottom: 5,
          }}
          barCategoryGap="15%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="ProductView" stackId="a" fill="#357AF6" />
          <Bar dataKey="WishList" stackId="a" fill="#5CC8BE" />
          <Bar dataKey="AddToCart" stackId="a" fill="#F7CB45" />
          <Bar dataKey="Checkout" stackId="a" fill="#AF52DE" />
          <Bar dataKey="Purchase" stackId="a" fill="#7661F5" />
        </BarChart>
      </ResponsiveContainer>
      
      </div>
  )
}

export default TaskCompilationchart