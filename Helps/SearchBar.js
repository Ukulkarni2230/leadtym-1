import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center mt-4  bg-[#ECECED] rounded-md p-2 h-[44px] w-full">
      <input
        type="text"
        placeholder="Search for help"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#ECECED] placeholder:text-[#82868C] placeholder:text-[14px] text-[12px] sm:text-sm 2xl:text-base outline-none flex-grow p-2"
      />
      <CiSearch className="text-[#82868C] mx-2" />
    </div>
  );
};

export default SearchBar;
