import React, { useState, useEffect } from "react";
import SlidePanel from "@/src/utils/SlidePanel";
import AppSettings from "./add-app-steps/app-settings";
import AdditionalInfo from "./add-app-steps/additional-info";

const AppAdder = ({ isOpen, setIsOpen, toggleDrawer, handleAddMyAppClick }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(isOpen);

  useEffect(() => {
    setIsSlidePanelOpen(isOpen);
  }, [isOpen]);

  const handleChange = (newValue) => {
    setActiveTab(newValue);
  };

  const tabs = ["1. Enter app details", "2. Additional Info"];

  return (
    <SlidePanel
      open={isSlidePanelOpen}
      onClose={toggleDrawer(false)}
      dailog={"Are you sure you want to close the App creator?"}
      name={"App App Details"}
    >
      <div className="flex">
        <div className="flex-shrink-0 sm:w-52 md:w-48 xl:w-64 w-10 min-h-[85vh] border-r-[1.2px] border-[#D9D9D9]">
          <div className="py-4 sm:px-2 ">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer font-semibold text-[12px] sm:text-[14px] 2xl:text-[16px] w-7 h-7 sm:w-full sm:h-full whitespace-nowrap px-2.5 pt-[5px] sm:px-4 sm:py-2 mb-3 rounded-full text-left ${
                  activeTab === index
                    ? "gradient-bg text-white"
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
          {activeTab === 1 && (
            <AdditionalInfo
              setIsSlidePanelOpen={setIsSlidePanelOpen}
              handleAddMyAppClick={handleAddMyAppClick}
            />
          )}
          {activeTab === 0 && <AppSettings />}
        </div>
      </div>
    </SlidePanel>
  );
};

export default AppAdder;
