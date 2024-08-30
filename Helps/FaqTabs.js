import React from "react";

const tabs = [
  "General",
  "Integration",
  "Payouts",
  "Contact Offerwalls",
  "Policies",
  "Account",
];

const FaqTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-[#F0F0F0] py-[7px] 2xl:py-2 px-2 rounded-full">
      <ul className="flex space-x-2">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer justify-center hover:rounded-full flex overflow-hidden px-4 py-[6px]  text-[12px] xl:text-sm font-normal ${
              activeTab === tab
                ? "gradient-bg text-white rounded-full sm:w-1/6 truncate"
                : "text-[#666666] hover:bg-gray-200 sm:w-1/6 truncate"
            } max-w-[40px] sm:max-w-none`}
            onClick={() => onTabChange(tab)}
          >
            <p className="max-w-[40px] sm:max-w-none truncate">

            {tab}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqTabs;
