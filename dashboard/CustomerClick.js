import React from "react";
import DateDropdown from "./date-dropdown";

const data = [
  {
    day: "Sun",
    hours: [
      { time: "01am-04am", value: 1000 },
      { time: "04am-08am", value: 1500 },
      { time: "08am-12pm", value: 3000 },
      { time: "12pm-04pm", value: 4500 },
      { time: "04pm-08pm", value: 6000 },
      { time: "08pm-12am", value: 2000 },
    ],
  },
  {
    day: "Mon",
    hours: [
      { time: "01am-04am", value: 1000 },
      { time: "04am-08am", value: 1500 },
      { time: "08am-12pm", value: 3000 },
      { time: "12pm-04pm", value: 4500 },
      { time: "04pm-08pm", value: 6000 },
      { time: "08pm-12am", value: 2000 },
    ],
  },
  {
    day: "Tue",
    hours: [
      { time: "01am-04am", value: 1000 },
      { time: "04am-08am", value: 1500 },
      { time: "08am-12pm", value: 3000 },
      { time: "12pm-04pm", value: 4500 },
      { time: "04pm-08pm", value: 6000 },
      { time: "08pm-12am", value: 2000 },
    ],
  },
  {
    day: "Wed",
    hours: [
      { time: "01am-04am", value: 1000 },
      { time: "04am-08am", value: 1500 },
      { time: "08am-12pm", value: 3000 },
      { time: "12pm-04pm", value: 4500 },
      { time: "04pm-08pm", value: 6000 },
      { time: "08pm-12am", value: 2000 },
    ],
  },
  {
    day: "Thu",
    hours: [
      { time: "01am-04am", value: 1000 },
      { time: "04am-08am", value: 1500 },
      { time: "08am-12pm", value: 3000 },
      { time: "12pm-04pm", value: 4500 },
      { time: "04pm-08pm", value: 6000 },
      { time: "08pm-12am", value: 2000 },
    ],
  },
  {
    day: "Fri",
    hours: [
      { time: "01am-04am", value: 1000 },
      { time: "04am-08am", value: 1500 },
      { time: "08am-12pm", value: 3000 },
      { time: "12pm-04pm", value: 4500 },
      { time: "04pm-08pm", value: 6000 },
      { time: "08pm-12am", value: 2000 },
    ],
  },
  {
    day: "Sat",
    hours: [
      { time: "01am-04am", value: 1000 },
      { time: "04am-08am", value: 1500 },
      { time: "08am-12pm", value: 3000 },
      { time: "12pm-04pm", value: 4500 },
      { time: "04pm-08pm", value: 6000 },
      { time: "08pm-12am", value: 2000 },
    ],
  },
];

const getColor = (value) => {
  if (value < 1000) return "bg-[#EAE7FF]";
  if (value < 2000) return "bg-[#CCC3FF]";

  if (value < 4000) return "bg-[#A090FF]";
  if (value < 5000) return "bg-[#7661F5]";
  return "bg-[#7661F5]";
};

const CustomerClick = () => {
  return (
    <div className="bg-white shadow-lg shadow-[#5E17EB26] border border-[#0000001A] rounded-lg p-4 w-full">
      <div className="flex justify-between items-start mb-4">
        <h2 className="2xl:text-xl text-base sm:text-lg font-bold text-[#000000]">
          Customer Click
        </h2>
        <DateDropdown
          options={[{ value: "weekly", label: "Weekly (2020)" }]}
          value={"weekly"}
          onChange={() => {}}
        />
      </div>
      <div className="grid grid-cols-9 gap-0.5">
        {/* Column for Time Labels */}
        <div className="flex flex-col justify-around mr-5">
          {data[0].hours.map((hour, idx) => (
            <div
              key={idx}
              className="2xl:text-xs text-[10px] text-[#000000] font-medium text-center whitespace-nowrap"
            >
              {hour.time}
            </div>
          ))}
        </div>
        <div className=" ml-3"></div>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col space-y-2 items-center">
            {item.hours.map((hour, idx) => (
              <div
                key={idx}
                className={`${getColor(hour.value)} w-full h-6 rounded`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-9 gap-2 mt-2 2xl:text-xs text-[10px] text-[#000000] font-medium text-center">
        <div></div>
        <div className=" ml-3"></div>
        {data.map((item, index) => (
          <div key={index}>{item.day}</div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-4 text-xs">
        <div className="flex items-center text-[#666666] font-normal text-xs 2xl:text-sm space-x-0.5 ">
          <span className="bg-[#EAE7FF] w-3 h-3 rounded-full inline-block"></span>
          <span>500-1k</span>
        </div>
        <div className="flex items-center text-[#666666] font-normal text-xs 2xl:text-sm space-x-0.5 ">
          <span className="bg-[#CCC3FF] w-3 h-3 rounded-full inline-block"></span>
          <span>1k-2k</span>
        </div>
        <div className="flex items-center text-[#666666] font-normal text-xs 2xl:text-sm space-x-0.5 ">
          <span className="bg-[#A090FF] w-3 h-3 rounded-full inline-block"></span>
          <span>3k-4k</span>
        </div>

        <div className="flex items-center text-[#666666] font-normal text-xs 2xl:text-sm space-x-0.5 ">
          <span className="bg-[#7661F5] w-3 h-3 rounded-full inline-block"></span>
          <span>5k-6k</span>
        </div>
        <div className="flex items-center text-[#666666] font-normal text-xs 2xl:text-sm space-x-0.5 ">
          <span className="bg-[#7661F5] w-3 h-3 rounded-full inline-block"></span>
          <span>6k+</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerClick;
