import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
export const MenuToggle = ({ text, children, expanded }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div
        className={`flex justify-between items-center text-sm font-semibold text-black cursor-pointer py-2 ${
          !expanded ? "w-10" : "w-full" // Adjust width based on expanded state
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${
            !expanded ? "block overflow-hidden whitespac truncate " : ""
          } w-full text-xs sm:text-sm 2xl:text-base font-semibold`} // Ensures the width takes up the full parent container
          title={text} // Shows full text on hover
        >
          {text}
        </span>

        {expanded && (isOpen ? <BiChevronUp /> : <BiChevronDown />)}
      </div>
      {isOpen && <div className="">{children}</div>}
    </div>
  );
};
