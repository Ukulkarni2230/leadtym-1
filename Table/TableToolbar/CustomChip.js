import React from "react";
import { IconButton } from "@mui/material";

const CustomChip = ({ label, onDelete }) => (
  <div className="flex items-center bg-[#F5F5F5] gap-1 rounded-full px-2 py-[0px]">
    <span className="text-[12px] ml-1 sm:text-sm 2xl:text-base text-[#000000DE]">{label}</span>
    <IconButton size="small" onClick={onDelete}>
      <svg
        className="w-4 h-4 text-[#000000DE]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </IconButton>
  </div>
);

export default CustomChip;
