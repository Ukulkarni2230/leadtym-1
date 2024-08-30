import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Layer, Text } from 'recharts';

const RADIAN = Math.PI / 180;

// Example data to mimic a gauge with active and inactive parts
const data = [
  { name: 'Active', value: 35, color: '#8884d8' }, // Active segment
  { name: 'Inactive', value: 65, color: '#eeeeee' } // Inactive segment to fill the rest of the gauge
];

// Function to calculate and render the needle for the gauge
const renderNeedle = (value, total, cx, cy, iR, oR, color) => {
  const angle = 180 - (180 * value / total); // Calculate the angle for the given value
  const endRadius = iR + (oR - iR) / 2; // Calculate the length of the needle
  const x = cx + endRadius * Math.cos(-RADIAN * angle); // Calculate the end point x
  const y = cy + endRadius * Math.sin(-RADIAN * angle); // Calculate the end point y
  
  return (
    <Layer>
      <line x1={cx} y1={cy} x2={x} y2={y} stroke={color} strokeWidth={2} />
      <circle cx={cx} cy={cy} r={5} fill={color} />
    </Layer>
  );
};

const GaugeChart = () => {
  const width = 400; // Fixed width for the chart
  const height = 150; // Half width, ensures gauge is a semi-circle
  const cx = width / 3;
  const cy = height; // Place the center at the bottom of the svg element
  const iR = 80;
  const oR = 120;
    
  return (
    <div style={{ width: '100%', height: 200, position: 'relative' }}>
      <ResponsiveContainer>
        <PieChart width={width} height={height}>
          <Pie
            data={data}
            dataKey="value"
            cx={cx}
            cy={cy}
            startAngle={180}
            endAngle={0}
            innerRadius={iR}
            outerRadius={oR}
            fill="#7661F5"
            paddingAngle={0}
            blendStroke
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {renderNeedle(35, 100, cx, cy, iR, oR, '#d0d000')}
        </PieChart>
      </ResponsiveContainer>
      <div style={{ position: 'absolute', width: '100%', top: height, left: '53%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'space-between', color: '#666' }}>
        <Text>0</Text>
        <p className='font-extrabold text-base'>{`${data[0].value}%`}</p>
        <Text>100%</Text>
      </div>
    </div>
  );
};

export default GaugeChart;
