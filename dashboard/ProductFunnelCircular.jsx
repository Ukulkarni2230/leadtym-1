// File path: /src/components/ProductFunnelCircular.jsx

import React from 'react';
import { FaMobileAlt, FaTabletAlt, FaLaptop } from 'react-icons/fa';
import DateDropdown from './date-dropdown';

const data = [
    {
        name: "Desktop",
        value: 36.8,
        color: "#BDB3FD",
        unfill: "#EEEEEE",
        icon: <FaLaptop />
    },
    {
        name: "Tablet",
        value: 9.0,
        color: "#A697FF",
        unfill: "#EEEEEE",
        icon: <FaTabletAlt />
    },
    {
        name: "Mobile",
        value: 54.2,
        color: "#7661F5",
        unfill: "#EEEEEE",
        icon: <FaMobileAlt />
    },
];

const totalPercentage = data.reduce((sum, entry) => sum + entry.value, 0);

const ProductFunnelCircular = () => {
    const baseRadius = 40;
    const radiusIncrement = 16;
    const strokeWidth = 8;

    const calculateOffset = (value, circumference) => {
        return circumference * (1 - value / 100);
    };

    return (
        <div className="bg-white relative shadow-lg shadow-[#5E17EB26] border border-[#0000001A] rounded-lg p-2 sm:p-4 w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="2xl:text-xl text-base sm:text-lg font-bold whitespace-nowrap truncate text-[#222529]">Product Funnel</h2>
                <DateDropdown options={[{ value: 'weekly', label: 'Weekly (2020)' }]} value={'weekly'} onChange={() => { }} />
            </div>
            <div className=" flex   justify-center space-x-8">
                <div className=''>

                    <svg width="200" height="200" viewBox="0 0 200 200">
                        {data.map((entry, index) => {
                            const radius = baseRadius + index * radiusIncrement;
                            const circumference = 2 * Math.PI * radius;
                            return (
                                <React.Fragment key={index}>
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r={radius}
                                        fill="transparent"
                                        stroke={entry.unfill || "#e6e6e6"}
                                        strokeWidth={strokeWidth}
                                    />
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r={radius}
                                        fill="transparent"
                                        stroke={entry.color}
                                        strokeWidth={strokeWidth}
                                        strokeDasharray={circumference}
                                        strokeDashoffset={calculateOffset(entry.value, circumference)}
                                        strokeLinecap="round"
                                        className="radial-bar"
                                        style={{
                                            transformOrigin: "center",
                                            transform: `rotate(-90deg)`,
                                        }}
                                    />
                                </React.Fragment>
                            );
                        })}
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="progress-label"
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            {`${totalPercentage}%`}
                        </text>
                    </svg>
                    <div className="legend absolute gap-7 bottom-4 left-1/2 transform -translate-x-1/2 flex justify-around">
                        {data.map((entry, index) => (
                            <div key={index} className="flex flex-col items-center mb-2">
                                <div style={{ color: entry.color }} className="icon text-[32px] ">
                                    {entry.icon}
                                </div>
                                <span className="text-[#767676] mt-1 text-[12px] sm:text-[14px] 2xl:text-[16px] font-bold">
                                    {entry.name}
                                </span>
                                <span className="text-[#404040] text-[12px] sm:text-[14px] 2xl:text-[16px] font-bold">
                                    {entry.value}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFunnelCircular;
