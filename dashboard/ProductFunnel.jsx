import React from 'react';
import DateDropdown from './date-dropdown';

const funnelData = [
    { label: "Clicks", value: "600K", color: "#D3BDF0" },
    { label: "Unique Clicks", value: "600K", color: "#BFA5E3" },
    { label: "Conversions", value: "300K", color: "#A68BD5" },
    { label: "Click Ratio", value: "100K", color: "#8F72C7" },
    { label: "ROI", value: "100K", color: "#7356B6" },
];

const metricData = [
    { label: "Clicks", value: 200, direction: "up" },
    { label: "Unique Clicks", value: 50, direction: "down" },
    { label: "Conversions", value: 50, direction: "down" },
    { label: "Click Ratio", value: 50, direction: "down" },
    { label: "ROI", value: 50, direction: "down" },
];

const PolygonLayer = ({ color, value, width }) => (
    <div className="relative flex justify-center">
        <svg width={width} height={60}>
            <polygon points={`0,0 ${width / 2},60 ${width},0`} fill={color} />
            <text x="50%" y="50%" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle" alignmentBaseline="middle">{value}</text>
        </svg>
    </div>
);

const ProductFunnel = () => {
    return (
        <div className="bg-white shadow-lg shadow-[#5E17EB26] border border-[#0000001A] rounded-lg p-4 w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Product Funnel</h2>
                <DateDropdown options={[{ value: 'weekly', label: 'Weekly (2020)' }]} value={'weekly'} onChange={() => { }} />
            </div>
            <div className="flex">
                <div className="flex flex-col items-center space-y-2">
                    {funnelData.map((layer, index) => (
                        <PolygonLayer key={index} color={layer.color} value={layer.value} width={160 - (index * 20)} />
                    ))}
                </div>
                <div className="ml-4 flex flex-col justify-center space-y-2">
                    {metricData.map((metric, index) => (
                        <div key={index} className="flex items-center justify-between text-gray-700 font-medium">
                            <span className="flex items-center">
                                <span className="inline-block w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: funnelData[index].color }}></span>
                                {metric.label}
                            </span>
                            <span className="flex items-center">
                                {metric.value}
                                {metric.direction === "up" ? (
                                    <span className="text-green-500 ml-2">↑</span>
                                ) : (
                                    <span className="text-red-500 ml-2">↓</span>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-around mt-4 text-xs text-gray-600">
                <span className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 rounded-full bg-purple-100"></span>
                    500-1k
                </span>
                <span className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 rounded-full bg-purple-200"></span>
                    1k-2k
                </span>
                <span className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 rounded-full bg-purple-300"></span>
                    3k-4k
                </span>
                <span className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 rounded-full bg-purple-500"></span>
                    5k-6k
                </span>
            </div>
        </div>
    );
};

export default ProductFunnel;
