"use client";

import React, { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { MdCheck } from "react-icons/md";

// CustomCheckbox component
const CustomCheckbox = ({
  label,
  checked,
  onCheckedChange,
  disabled = false,
  className,
  id, // Add id prop
  required = false,
  errorText = "This field is required",
  labelStyle = "",
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleCheckedChange = (checked) => {
    if (!disabled) {
      setIsTouched(true);
      onCheckedChange(checked);
    }
  };

  const hasError = required && !checked && isTouched;

  return (
    <div className={`flex items-center`}>
      <Checkbox.Root
        className={`flex ${className} items-center justify-center rounded-[5px] h-[18px] w-[18px] ${
          checked ? "gradient-bg" : `border-[1.5px]` || "bg-white "
        } ${
          hasError ? "border-red-500" : "border-[#D9D9DC]"
        } hover:border-[#5E17EB] focus:outline-none focus:ring-0 ${
          disabled ? "cursor-not-allowed opacity-80" : ""
        }`}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        id={id}
        disabled={disabled} // Use disabled prop
      >
        <Checkbox.Indicator className="text-white font-bold">
          <MdCheck />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <label
          className={`${
            labelStyle
              ? labelStyle
              : "text-[14px] sm:text-[16px] 2xl:text-[18px]"
          } pl-[6px]  mt-[2px]  leading-none ${
            hasError ? " text-red-500 " : "text-[#0E0E0E]"
          } `}
          htmlFor={id} // Use id prop
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CustomCheckbox;
