import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFilterAlt } from "react-icons/md";
import { RxDownload } from "react-icons/rx";
import { PiPrinter } from "react-icons/pi";
import FilterPopover from "./FilterPopover";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdCheckmark } from "react-icons/io";

const ToolbarActions = ({
  showCheckCancelButtons = false,
  onCheckClick,
  onCancelClick,
  selectedCount,
  handleDownload,
  showDelete,
  columns,
  handleFilterIconClick,
  handleDeleteSelected,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handlePrintClick = () => {
    window.print();
  };

  return (
    <div className="flex flex-wrap  sm:w-fit items-center">
      <div className="sm:border-r border-[#D9D9DC] w  sm:px-1 flex sm:gap-1 gap-0.5 sm:px-1">
        {selectedCount > 0 && showCheckCancelButtons && (
          <div
            className={`flex space-x-1 text-base items-center sm:text-[19px]`}
          >
            <button
              className="hover:text-red-600 text-[#C21317]"
              onClick={onCancelClick}
            >
              <LiaTimesSolid />
            </button>
            <button
              className="hover:text-green-600 text-[#199C4D]"
              onClick={onCheckClick}
            >
              <IoMdCheckmark />
            </button>
          </div>
        )}
        {selectedCount > 0 && showDelete && (
          <IconButton onClick={handleDeleteSelected}>
            <RiDeleteBin6Line className="text-lg  text-[#35353A]" />
          </IconButton>
        )}
        <IconButton onClick={handleFilterClick}>
          <MdOutlineFilterAlt className="text-[21px]  text-[#35353A]" />
        </IconButton>
        <IconButton onClick={handlePrintClick}>
          <PiPrinter className="text-lg  text-[#35353A]" />
        </IconButton>
        <IconButton onClick={handleDownload}>
          <RxDownload className="text-lg  text-[#35353A]" />
        </IconButton>
      </div>
      <FilterPopover
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
        onApply={(field) => {
          handleFilterIconClick(field);
          handlePopoverClose();
        }}
        columns={columns}
      />
    </div>
  );
};

export default ToolbarActions;
