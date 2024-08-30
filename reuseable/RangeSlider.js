// components/reuseable/RangeSlider.js
import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { formatNumber } from "@/src/utils/numberFormatter";

// Custom styled components for the slider
const CustomSlider = styled(Slider)({
  color: "#000",
  height: 2,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: "#000",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    color: "white",
    fontSize: "12px",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#000",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
});

const RangeSlider = ({ value, onChange, min, max, step, label, unit }) => {
  const formatLabel = (val) => `${formatNumber(val)}${unit ? unit : ''}`;

  return (
    <Box sx={{ width: "100%" }}>
      <div className="flex justify-between">
        <p className="text-[12px] sm:text-[14px] 2xl:text-[16px] text-[#000000DE] font-normal">
          {label}
        </p>
        <p className="text-[12px] sm:text-[14px] 2xl:text-[16px] text-[#00000099] font-normal">
          {`${formatLabel(min)}-${formatLabel(max)}`}
        </p>
      </div>
      <div className="px-2">
        <CustomSlider
          value={value}
          onChange={onChange}
          valueLabelDisplay="auto"
          min={min}
          max={max}
          step={step}
          valueLabelFormat={formatLabel}
          getAriaValueText={(value) => formatLabel(value)}
        />
      </div>
    </Box>
  );
};

export default RangeSlider;
