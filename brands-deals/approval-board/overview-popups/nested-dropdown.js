import React, { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";

const NestedDropdownAlternate = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="font-bold text-gray-700">{title}</p>
        <div className="text-gray-600">
          {isOpen ? <FaSortUp /> : <FaSortDown />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center py-2">
              <div className="bg-gray-400 w-4 h-4 mr-2"></div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedDropdownAlternate;
