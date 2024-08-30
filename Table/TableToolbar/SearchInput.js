import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchInput = ({
  searchQuery,
  handleSearchChange,
  handleSearchSubmit,
  handleSearchKeyPress,
  placeholder,
  errorMessage,
}) => {
  const validateInput = (value) => {
    let trimmedValue = value.trimStart();
    trimmedValue = trimmedValue.replace(/\s+/g, " ");
    if (trimmedValue.length > 40) {
      trimmedValue = trimmedValue.substring(0, 40);
    }
    handleSearchChange({ target: { value: trimmedValue } });
  };

  return (
    <div className="w-full">
      <div className="relative ml-1 w-full border-x border-[#D9D9DC] px-1.5 sm:px-4">
        <div className="absolute inset-y-0 sm:left-3 bottom-[0.6px] left-0 pl-3 flex items-center pointer-events-none">
          <HiOutlineSearch
            onClick={handleSearchSubmit}
            className="text-[#35353A] text-[16px] cursor-pointer"
          />
        </div>
        <input
          type="text"
          className="block w-full pl-7 pr-3 py-2 text-xs sm:text-sm border border-[#C5C5C7] rounded-full leading-5 bg-[#ECECED] placeholder-[#6E671] focus:outline-none focus:bg-gray-100 focus:border-gray-500 2xl:text-base"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => validateInput(e.target.value)}
          onKeyPress={handleSearchKeyPress}
        />
      </div>
      {errorMessage && (
        <div className="text-red-500 text-[10px] px-1.5 sm:px-4 w-full flex justify-center text-center">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
