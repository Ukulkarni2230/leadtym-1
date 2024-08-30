import React, { useState } from "react";
import { IoSearch, IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineFilterAlt } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import NotificationPopover from "./NotificationPopover";

const NotificationTopbar = ({
  filter = true,
  showRead,
  showDelete = true,
  setShowRead,
  searchQuery,
  setSearchQuery,
  selectedCount,
  handleDelete,
  handleMarkAllRead,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="flex flex-col md:flex-row justify-between overflow-hidden items-center sm:px-4 px-2 py-6 border-b border-[#D8D9D4]">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mb-2 md:mb-0">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mb-2 md:mb-0">
          <div className="flex border w-full md:w-auto border-[#D9D9DC] rounded-md h-[32px] overflow-hidden">
            <button
              className={`w-1/2 md:w-auto px-4 text-[#24292F] border-r flex items-center justify-center h-full text-xs sm:text-sm 2xl:text-base font-medium ${
                showRead ? "bg-white border-[#1B1F2426]" : "bg-[#EEEFF2]"
              }`}
              onClick={() => setShowRead(true)}
            >
              All
            </button>
            <button
              className={`w-1/2 md:w-auto px-4 text-[#24292F] flex items-center justify-center h-full text-xs sm:text-sm 2xl:text-base font-medium ${
                !showRead ? "bg-white text-black" : "bg-gray-100 text-gray-500"
              }`}
              onClick={() => setShowRead(false)}
            >
              Unread
            </button>
          </div>
        </div>
        <div className="flex-1 md:px-3 md:border-[#D9D9DC] md:border-x w-full md:w-auto">
          <div className="flex items-center bg-[#F6F6F7] border border-[#C5C5C7] rounded-full h-[32px] overflow-hidden shadow-sm">
            <IoSearch className="text-[#666666] mx-3" size={18} />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-2.5 pr-3 placeholder:text-[#666666] bg-[#F3F3F3] outline-none text-gray-700 text-xs sm:text-sm 2xl:text-base w-full"
            />
          </div>
        </div>
        {selectedCount > 0 && (
          <span className="sm:text-sm whitespace-nowrap text-xs 2xl:text-base text-[#175AE4]">
            {selectedCount} Selected
          </span>
        )}
      </div>
      <div className="flex items-center gap-4">
        {selectedCount > 0 && showDelete && (
          <div className="flex items-center pl-4 border-l border-[#D9D9DC]">
            <RiDeleteBin6Line
              className="text-red-500 cursor-pointer"
              onClick={handleDelete}
              title="Delete Selected"
              size={20}
            />
          </div>
        )}
        <div className="flex items-center pl-3 pr-4 border-x border-[#D9D9DC]">
          {filter && (
            <MdOutlineFilterAlt
              className="text-black font-extralight cursor-pointer"
              title="Filter"
              size={24}
              onClick={handleFilterClick}
            />
          )}
          {selectedCount > 0 && (
            <IoMailOpenOutline
              className="text-black font-extralight cursor-pointer ml-4"
              onClick={handleMarkAllRead}
              title="Mark All Read"
              size={24}
            />
          )}
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-5 py-1.5 cursor-pointer">
          <span className="text-gray-700 mr-2">Today</span>
          <div className="datepicker">📅</div>
        </div>
      </div>
      <NotificationPopover
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default NotificationTopbar;
