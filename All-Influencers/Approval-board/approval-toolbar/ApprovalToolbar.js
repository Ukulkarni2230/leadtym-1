"use client";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import SearchInput from "@/src/components/Table/TableToolbar/SearchInput";
import ToolbarActions from "@/src/components/Table/TableToolbar/ToolbarActions";
import CustomChip from "@/src/components/Table/TableToolbar/CustomChip";
import ConfigureTableModal from "@/src/components/Table/TableToolbar/ConfigureTableModal";

const ApprovalToolbar = ({
  datepicker = true,
  onAddItem,
  btnName,
  children,
  columns,
  setColumns,
  selectedCount,
  filter,
  setFilter,
  handleFilterIconClick,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTags, setSearchTags] = useState([]);

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
    setModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery !== "") {
      const tag = filter ? `${filter}: ${searchQuery}` : searchQuery;
      setSearchTags((prevTags) => [...prevTags, tag]);
      setSearchQuery("");
      setColumns((prevColumns) =>
        prevColumns.map((column) =>
          column.label === filter ? { ...column, filterActive: true } : column
        )
      );
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const handleDeleteTag = (tagToDelete) => () => {
    setSearchTags((tags) => {
      const updatedTags = tags.filter((tag) => tag !== tagToDelete);
      if (updatedTags.length === 0) {
        setFilter("");
        setColumns((prevColumns) =>
          prevColumns.map((column) => ({ ...column, filterActive: false }))
        );
      }
      return updatedTags;
    });
  };

  const handleFilterApply = (selectedFilter) => {
    setFilter(selectedFilter);
    setSearchQuery("");
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.label === selectedFilter
          ? { ...column, filterActive: true }
          : column
      )
    );
  };

  return (
    <div className="">
      <div className="sm:px-2 py-4 bg-white rounded-md">
        <div className="sm:flex  justify-between items-center px-2">
          <div className="flex md:w-1/2  w-full  items-center mb-2 sm:mb-0">
            <div className="flex  justify-between w-full  items-center">
              <IconButton onClick={handleSettingsClick}>
                <IoSettingsOutline className="text-xl  text-[#35353A]" />
              </IconButton>
              <SearchInput
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
                handleSearchKeyPress={handleSearchKeyPress}
                placeholder={filter ? `Search by ${filter}` : "Search"}
              />
              {selectedCount > 0 && (
                <span className="text-[#175AE4]  truncate min-w-[50px] sm:min-w-[90px] text-xs sm:text-sm 2xl:text-base sm:mx-2 mx-1 font-normal">
                  {selectedCount} Selected
                </span>
              )}
            </div>
          </div>
          <div className="flex md:w-1/2  overflow-hidden  justify-between items-center md:w-fit w-full gap-0.5 sm:gap-2">
            <ToolbarActions
              onFilterApply={handleFilterApply}
              selectedCount={selectedCount}
              columns={columns}
              handleFilterIconClick={handleFilterIconClick}
            />
            <div className="flex  items-center gap-0.5 sm:gap-2">
              {datepicker && (
                <div className="border-r border-[#D9D9DC] sm:px-3 px-1">
                  Datepicker
                </div>
              )}
              {children}
              {btnName && (
                <button
                  className="gradient-bg whitespace-nowrap px-2 items-center flex gap-0.5 rounded-full text-white py-[7px] text-[12px] sm:text-sm 2xl:text-base font-bold"
                  onClick={onAddItem}
                >
                  <FaPlus size={14} className="-mt-[2px]" /> {btnName}
                </button>
              )}
            </div>
          </div>
        </div>
        {searchTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {searchTags.map((tag, index) => (
              <CustomChip
                key={index}
                label={tag}
                onDelete={handleDeleteTag(tag)}
              />
            ))}
          </div>
        )}
      </div>

      <ConfigureTableModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        columns={columns}
        setColumns={setColumns}
        anchorEl={anchorEl}
      />
    </div>
  );
};

export default ApprovalToolbar;
