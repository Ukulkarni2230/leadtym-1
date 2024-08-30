// Dropdown.js
import React from "react";
import PropTypes from "prop-types";

const DateDropdown = ({ options, value, onChange }) => {
  return (
    <select
      className="border text-[#000000] font-medium text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[118px] justify-center text-center border-[#D5D5D8] rounded-full h-[40px] items-center flex px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

DateDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateDropdown;
