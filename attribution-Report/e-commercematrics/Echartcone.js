
import React, { useEffect, useRef } from 'react';
import { FaSquare } from "react-icons/fa";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import * as d3 from 'd3';

const Echartcone = () => {
const data = [
    { name: 'Product Views', value: 50, color: '#7661F5' },  // Purple segment
    { name: 'Add to Cart', value: 50, color: '#917EFF' },    // Light blue segment
    { name: 'Checkout Initiations', value: 50, color: '#AD9FFF' },  // Purple segment
    { name: 'Checkout Completed', value: 50, color: '#CBC2FF' },    // Light blue segment
  ];
  const total = data.reduce((sum, current) => sum + current.value, 0);
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);
      
      // Determine the size of the container
      const containerWidth = d3Container.current.clientWidth;
      const containerHeight = containerWidth * 0.75;  // Maintain a suitable aspect ratio

      // Clear the previous SVG
      svg.selectAll("*").remove();

      // Set the viewBox for responsive scaling
      svg.attr('viewBox', `0 0 ${containerWidth} ${containerHeight}`);

      // Calculate each block size and position
      let currentY = 0; // Start drawing from the top of the SVG
      const totalValue = data.reduce((acc, val) => acc + val.value, 0);
      let accumulatedHeight = 0;

      data.forEach((item, i) => {
        const itemHeight = (item.value / totalValue) * containerHeight;
        const topWidth = containerWidth * (i / data.length) / 2;
        const bottomWidth = containerWidth * ((i + 1) / data.length) / 2;

        // Draw each trapezoid from top to bottom
        svg.append("path")
          .attr("d", `M${containerWidth / 2 - topWidth},${currentY} 
                      L${containerWidth / 2 + topWidth},${currentY} 
                      L${containerWidth / 2 + bottomWidth},${currentY + itemHeight} 
                      L${containerWidth / 2 - bottomWidth},${currentY + itemHeight} Z`)
          .attr("fill", item.color);

        currentY += itemHeight; // Move the y-coordinate down for the next segment
      });
    }
  }, [data]);

  return (
    <>

    <div className="w-full border-[1px] rounded-md flex flex-col justify-between border-[#D8D9D4] bg-white h-full">
    <div className='w-full items-center justify-between flex py-5 border-b-[1px] border-[#E1E7EC] px-4'>
<p className='text-[#222529] text-base sm:text-lg 2xl:text-xl font-bold' >Product Funnel</p>
<select class="border text-[#2E335B] font-[900] text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[85px] bg-transparent justify-center text-center border-[#E1E7EC] rounded-md h-[30px] items-center flex py-1 px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none">
                <option value="">Today</option>
               
                </select>
</div>
<div className=' grid grid-cols-1 pb-6 lg:pb-0 lg:grid-cols-2 px-6 items-center w-full'>
<div className='py-4'>
          <svg className="d3-component" ref={d3Container} style={{ width: '100%', height: 'auto' }} />
        </div>
  <div className='flex flex-col gap-y-3'>
    {data.map((item, index) => (
      <div key={index} className='w-full items-center flex justify-between gap-x-4 px-4'>
        <p className=' text-[10px] sm:text-xs 2xl:text-sm font-normal flex items-center gap-x-2'>
          <FaSquare style={{ color: item.color }} size={14} /> {item.name}
        </p>
        <p style={{ color: '#101018' }} className=' text-[10px] sm:text-xs 2xl:text-sm font-bold flex items-center'>
          {item.value }
          {item.value / total < 0.5 ? <IoIosArrowRoundUp className='text-[#27AE60] ml-2 rotate-45' size={20} /> : <IoIosArrowRoundDown className='text-[#EB5757] -rotate-45' size={20} />}
        </p>
      </div>
    ))}
  </div>
</div>
</div>
    
    </>

  );
}

export default Echartcone;
