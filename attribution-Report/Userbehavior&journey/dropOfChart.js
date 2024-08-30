import React from 'react';

const DropOfChart = () => {
  const size = 220;  
  const strokeWidth = 12;  
  const radius = (size - strokeWidth) / 2;  
  const center = size / 2;  
  const circleCircumference = 2 * Math.PI * radius;  // Total circumference of the circle

  const gapDegrees = 0;  // Gap in degrees for each segment
  const gapLength = gapDegrees / 360 * circleCircumference;  // Convert gap in degrees to gap in length
  const data = [
    { percentage: 15, color: '#FFD700' }, // Yellow segment
    { percentage: 15, color: '#FF4500' }, // Red segment
    { percentage: 15, color: '#FF8C00' }, // Orange segment
    { percentage: 25, color: '#1E90FF' }  // Blue segment
  ];

  // Calculate the offset for each segment accounting for gaps
  const calculateOffset = (index) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      const segmentLength = data[i].percentage / 100 * (circleCircumference - data.length * gapLength);
      offset += segmentLength + gapLength;
    }
    return offset - 90;  // Adjust starting angle to be at the top
  };

  return (
    <div className="w-full justify-between gap-y-2 p-6 shadow-md shadow-purple-200 border-[1px] rounded-md flex flex-col border-[#D8D9D4] bg-white">
      <p className="text-center font-bold text-[#2E2E30] text-base sm:text-lg 2xl:text-xl">
        User Path Drop-off
      </p>
      <div className="flex justify-center mt-5 items-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {data.map((segment, index) => (
            <circle
              key={index}
              stroke={segment.color}
              fill="none"
              strokeWidth={strokeWidth}
              strokeDasharray={`${segment.percentage / 100 * (circleCircumference - data.length * gapLength)} ${circleCircumference}`}
              r={radius}
              cx={center}
              cy={center}
              transform={`rotate(${calculateOffset(index)} ${center} ${center})`}
            />
          ))}
          <circle cx={center} cy={center} r={radius - 30} fill="#F9F2D1" />
          <text
            x={center}
            y={center}
            dy=".3em"
            textAnchor="middle"
            fill="#2E2E30"
            fontSize="20"
            fontWeight="bold"
            style={{ pointerEvents: 'none' }}
          >
            50%
          </text>
        </svg>
      </div>
      
      <div className='flex flex-col gap-y-3'>
        <p className="text-center text-[#2E2E30] font-normal text-xs sm:text-sm 2xl:text-base">
          Most Drop-off Path
        </p>
        <div className='flex flex-col'>
          <div className='flex flex-row mb-2 justify-between font-normal text-[#767676] text-[10px] sm:text-xs 2xl:text-base'><span>Mobile verification</span> <span>Choose Category</span></div>
          <p className='font-normal text-center text-[#767676] text-[10px] sm:text-xs 2xl:text-base'>User Information</p>
        </div>
      </div>
      
    </div>
  );
};

export default DropOfChart;
