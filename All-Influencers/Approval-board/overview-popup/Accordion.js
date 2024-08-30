import React, { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa6";

const Accordion = ({ title, children, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white  p-4 py-2.5 shadow-[#5E17EB26] rounded-lg shadow-lg mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <div className="bg-[#E5F6FD] text-[#5E17EB] w-7 h-7 flex justify-center items-center rounded-full">
            {Icon && <Icon className="text" />}
          </div>
          <p className="text-sm sm:text-base 2xl:text-lg text-[#1E1E1E] font-semibold ml-3">
            {title}
          </p>
        </div>
        <div className="text-[#1C1B1F]">
          {isOpen ? <FaSortUp /> : <FaSortDown />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 max-h-[400px] overflow-y-auto no-scrollbar">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
