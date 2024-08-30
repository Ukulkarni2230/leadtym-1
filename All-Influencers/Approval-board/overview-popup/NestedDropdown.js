import React, { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa6";

const NestedDropdown = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#F8F9FA] p-2 sm:p-3 py-2.5 rounded-lg mb-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="font-normal text-[#1E1E1E] text-[14px] sm:text-base 2xl:text-lg">
          {title}
        </p>
        <div className="text-gray-600">
          {isOpen ? <FaSortUp /> : <FaSortDown />}
        </div>
      </div>
      {isOpen && (
        <div className="ml-2 mb-4 mt-4 space-y-2">
          {links.length > 0 ? (
            links.map((link, index) => (
              <div key={index} className="flex gap-4">
                <p className="text-[#555555] text-[12px] sm:text-sm 2xl:text-base font-bold w-[50px] truncate">
                  {link.type}:
                </p>
                <a
                  href={link.url}
                  className="text-[#175AE4] font-normal text-[12px] sm:text-sm 2xl:text-base"
                >
                  {link.label}
                </a>
              </div>
            ))
          ) : (
            <p className="text-[#6E6E71] text-xs sm:text-sm 2xl:text-base">No URL Link Shared</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;
