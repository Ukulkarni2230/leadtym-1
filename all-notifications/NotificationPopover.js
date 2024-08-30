import React, { useState } from "react";
import {
  Popover,
  FormControlLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import CustomCheckbox from "../../reuseable/checkbox";
import { styled } from "@mui/system";

const GradientRadio = styled(Radio)(({ theme }) => ({
  color: "#5E17EB",
  "&.Mui-checked": {
    color: "#5E17EB",
  },
}));
const NotificationPopover = ({ anchorEl, open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [selectedCategories, setSelectedCategories] = useState([
    "Campaign",
    "Dashboard",
    "Message Automation",
    "Leaderboard",
    "Wallet",
    "Lists",
    "Mentions",
    "Rebounds",
    "Other",
  ]);
  const [from, setFrom] = useState("Everyone");

  const categories = [
    "Campaign",
    "Dashboard",
    "Message Automation",
    "Leaderboard",
    "Wallet",
    "Lists",
    "Mentions",
    "Rebounds",
    "Other",
  ];

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSelectAll = () => {
    setSelectedCategories(categories);
  };

  const handleUnselectAll = () => {
    setSelectedCategories([]);
  };

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      PaperProps={{
        style: {
          marginTop: "6px",
          padding: isSmallScreen ? "16px" : "16px 26px",
          width: isSmallScreen ? "290px" : "320px",
          borderRadius: "8px",
        },
      }}
    >
      <div className="flex flex-col">
        <h4 className="font-extrabold text-sm sm:text-base 2xl:text-lg text-[#0D0C22] mb-4">
          Filter
        </h4>
        <div className="flex flex-col space-y-4 mb-4">
          {categories.map((category) => (
            <CustomCheckbox
              key={category}
              label={category}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => handleCheckboxChange(category)}
              required={false}
              errorText=""
              className="!rounded-[4px] !h-[20px] !w-[20px]"
              id={`custom-checkbox-${category}`} // Pass unique id
              labelStyle={`!text-[14px] sm:text-sm !2xl:text-base !font-normal`}
            />
          ))}
        </div>
        <div className="flex font-extrabold gap-x-0.5 text-xs sm:text-[13px] 2xl:text-[15px]  mb-4 text-[#6E6D7A]">
          <span
            className="cursor-pointer hover:text-black  text-sm"
            onClick={handleSelectAll}
          >
            Select all
          </span>
          <span> | </span>
          <span
            className="cursor-pointer hover:text-black  text-sm"
            onClick={handleUnselectAll}
          >
            Unselect all
          </span>
        </div>
        <div className="mb-4">
          <h4 className="font-extrabold text-sm sm:text-base 2xl:text-lg text-[#0D0C22] mb-1">
            From
          </h4>
          <RadioGroup value={from} onChange={handleFromChange}>
            <FormControlLabel
              value="Everyone"
              control={<GradientRadio />}
              label="Everyone"
              className="mr-4"
              classes={{
                label: "font-normal text-sm sm:text-base 2xl:text-lg",
              }}
            />
            <FormControlLabel
              value="Players"
              control={<GradientRadio />}
              label="Players"
              className="-mt-2"
              classes={{
                label: "font-normal -mt-2 text-sm sm:text-base 2xl:text-lg",
              }}
            />
          </RadioGroup>
        </div>
      </div>
    </Popover>
  );
};

export default NotificationPopover;
