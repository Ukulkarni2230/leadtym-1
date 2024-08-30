import React from "react";
// import './styles.css'; // Import custom styles

const data = [
  {
    name: "Desktop",
    value: 40,
    color: "#E74C3C",
    unfill: "#FFF2F1",
  },
  {
    name: "Tablet",
    value: 45,
    color: "#27AE60",
    unfill: "#E5FFF0",
  },
  {
    name: "Mobile",
    value: 45,
    color: "#5E17EB",
    unfill: "#EADFFF",
  },
];

const totalPercentage = data.reduce((sum, entry) => sum + entry.value, 0);

const TrafficChart = () => {
  const baseRadius = 40; // Base radius for the innermost circle
  const radiusIncrement = 16; // Increment for each subsequent circle
  const strokeWidth = 8; // Width of each circle stroke

  const calculateOffset = (value, circumference) => {
    return circumference * (1 - value / 100);
  };

  return (
    <div className="flex items-center h-[180px] justify-between space-x-8">
      <div className="legend">
        {data.map((entry, index) => (
          <div key={index} className="flex gap-4 items-center mb-2">
            <div
              className="w-3 h-3  rounded-full "
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="w-[60px] text-[#666666] text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal">
              {entry.name}:
            </span>
            <span className=" text-[#0E0E0E] text-[12px] sm:text-[14px] 2xl:text-[16px] font-semibold">
              {entry.value}%
            </span>
          </div>
        ))}
      </div>
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
                stroke={entry.unfill || "#e6e6e6"} // Unfilled color
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
                  transform: `rotate(-90deg)`, // Ensuring the circles start at the top
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
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          {`${totalPercentage}%`}
        </text>
      </svg>
    </div>
  );
};

export default TrafficChart;
