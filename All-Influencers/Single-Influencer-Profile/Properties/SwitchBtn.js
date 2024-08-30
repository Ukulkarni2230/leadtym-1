"use client";

import React, { useState } from "react";

const SwitchBtn = ({ activeTab, setActiveTab, navItems, className }) => {
  const defaultNavItems = [
    { name: "Properties", id: "properties" },
    { name: "Insights", id: "insights" },
  ];

  const items = navItems || defaultNavItems;

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="mt-4 md:mt-0  w-full flex mx-auto justify-center">
      <div
        className={` p-[5px] px-2  rounded-full flex justify-center items-center ${
          className ? className : "xl:w-1/2 w-full bg-white"
        }`}
      >
        <ul className="flex gap-0.5 w-full text-center">
          {items.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer truncate sm w-full px-6 py-2 rounded-full text-[12px] sm:text-sm 2xl:text-[16px] font-normal transition-all duration-300 ${
                activeTab === item.id
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
