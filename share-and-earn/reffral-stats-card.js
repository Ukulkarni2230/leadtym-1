const cardData = [
  {
    id: 2,
    title: "Today's Commissions:",
    des: `8.236K`,

    color: "#3D369F",
  },
  {
    id: 3,
    title: "Yesterday's Commissions:",
    des: "2.352M",

    color: "#7D3A89",
  },
  {
    id: 4,
    title: "Month-To-Date Commissions:",
    des: "2.352M",

    color: "#00B69B",
  },
  {
    id: 1,
    title: "All-Time Commissions:",
    des: "4.8M",
    color: "#7B68EE",
  },
];

import React from "react";

const ReffralCard = () => {
  return (
    <div className="grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cardData.map((data) => (
        <div
          key={data.id}
          style={{ backgroundColor: data.color }}
          className={`h-20 p-3 stroke-orange-100 rounded-md`}
        >
          <p className="2xl:text-lg sm:text-[16px]  text-[14px] truncate text-white font-normal  overflow-hidden whitespace-nowrap">
            {data.title}
          </p>
          <h3 className="font-bold 2xl:text-[26px] sm:text-[24px] text-[22px] mt-1 text-white">
            {data.des}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ReffralCard;
