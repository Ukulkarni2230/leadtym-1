"use client";
import React from "react";

const SwitchBtn = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { name: "Top Products", id: "top_products" },
    { name: "Your Earnings", id: "your_earnings" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="mt-4 md:mt-0 w-full flex justify-center">
      <div className="bg-[#F8F9FA] w-full p-[5px] px-2 rounded-full flex justify-center items-center">
        <ul className="flex gap-0.5 w-full text-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer w-full px-6 py-2 rounded-full text-[12px] sm:text-sm 2xl:text-[16px] font-normal transition-all duration-300 ${
                activeTab == item.id
                  ? "gradient-bg text-white"
                  : "text-[#666666] hover:bg-gray-200"
              }`}
              onClick={() => handleTabClick(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SwitchBtn;
