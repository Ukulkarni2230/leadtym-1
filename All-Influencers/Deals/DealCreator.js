import SlidePanel from "@/src/utils/SlidePanel";
import React, { useState } from "react";
import Creatives from "../../campaign/create/Create-Campaign-Steps/Creatives";
import DealRequirement from "./DealsCreateSteps/DealRequirement";
import InfluencerMilestone from "./DealsCreateSteps/InfluencerMilestone";

const DealCreator = ({ isOpen, setIsOpen, toggleDrawer }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (newValue) => {
    setActiveTab(newValue);
  };

  const tabs = [
    "1. Deal Requirements",
    "2. Influencer Milestone",
    "3. Creatives",
  ];
  return (
    <SlidePanel
      open={isOpen}
      onClose={toggleDrawer(false)}
      dailog={"Are you sure you want to close the deal creator?"}
      name={"Create Deal"}
    >
      <div className="flex">
        <div className="flex-shrink-0 sm:w-52  md:w-48 xl:w-64 w-10 border-r-[1.2px] border-[#D9D9D9]">
          <div className="py-4 sm:px-2 ">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer font-semibold text-[12px] sm:text-[14px] 2xl:text-[16px] w-7 h-7 sm:w-full sm:h-full whitespace-nowrap px-2.5 pt-[5px] sm:px-6 sm:py-3 mb-3 rounded-full text-left ${
                  activeTab === index
                    ? "gradient-bg text-white "
                    : "text-[#898C81] hover:text-black"
                }`}
                onClick={() => handleChange(index)}
              >
                <span className="sm:flex hidden">{tab}</span>
                <span className="sm:hidden flex">{index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-grow p-2 sm:px-6">
          {activeTab == 0 && <DealRequirement />}
          {activeTab == 1 && <InfluencerMilestone />}
          {activeTab == 2 && (
            <Creatives setActiveTab={setActiveTab} setIsOpen={setIsOpen} />
          )}
        </div>
      </div>
    </SlidePanel>
  );
};

export default DealCreator;
