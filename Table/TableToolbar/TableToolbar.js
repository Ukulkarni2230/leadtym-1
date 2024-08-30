// File: TableToolbar.jsx
import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import SearchInput from "./SearchInput";
import ToolbarActions from "./ToolbarActions";
import CustomChip from "./CustomChip";
import ConfigureTableModal from "./ConfigureTableModal";

const TableToolbar = ({
  datepicker = true,
  onAddItem,
  btnName,
  children,
  columns,
  setColumns,
  showCheckCancelButtons = false,
  onCheckClick,
  onCancelClick,
  setFilterActive,
  setFilter,
  selectedCount,
  tableId,
  handleDownload,
  showDelete,
  filter,
  handleFilterIconClick,
  handleDeleteSelected,
  onSearch,
  onDateChange,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const [dateRange, setDateRange] = useState(null); // Initially null
  const [errorMessage, setErrorMessage] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
    setModalOpen(true);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setErrorMessage("");
    const filterField =
      columns.find((column) => column.field === filter)?.field || filter;

    if (!filterField) {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      const newTimeout = setTimeout(() => {
        onSearch({ globalSearch: value });
        setSearchTags([]);
      }, 500);
      setDebounceTimeout(newTimeout);
    }
  };

  const handleSearchSubmit = () => {
    const hasNumbers = /\d/.test(searchQuery);
    if (searchQuery.length < 3 && !hasNumbers) {
      setErrorMessage(
        "Search query must be at least 3 characters long or contain numbers."
      );
      return;
    }

    const filterField =
      columns.find((column) => column.field === filter)?.field || filter;
    const filterLabel =
      columns.find((column) => column.field === filter)?.label || filter;
    const tag = filterLabel && `${filterLabel}: ${searchQuery}`;

    if (searchTags.includes(tag)) {
      setErrorMessage("Duplicate tag is not allowed.");
      return;
    }

    const newTags = filterLabel ? [...searchTags, tag] : [];
    setSearchTags(newTags);
    updateSearchPayload(newTags, filterField, searchQuery);

    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.field === filterField
          ? { ...column, filterActive: true }
          : column
      )
    );

    if (filterLabel) {
      setSearchQuery("");
    }
  };

  const updateSearchPayload = (tags, filterField, query) => {
    let filters = {};
    if (filterField) {
      filters = tags.reduce((acc, tag) => {
        const [key, value] = tag.split(": ");
        const field =
          columns.find((column) => column.label === key)?.field || key;
        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(value);
        return acc;
      }, {});
    } else {
      filters.globalSearch = query;
    }
    onSearch(filters);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const handleDeleteTag = (tagToDelete) => () => {
    setSearchTags((tags) => {
      const updatedTags = tags.filter((tag) => tag !== tagToDelete);
      const filterField =
        columns.find((column) => column.field === filter)?.field || filter;
      updateSearchPayload(updatedTags, filterField, searchQuery);
      if (updatedTags.length === 0) {
        setFilterActive("");
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
        column.field === selectedFilter
          ? { ...column, filterActive: true }
          : column
      )
    );
  };

  const handleDateRangeChange = (range) => {
    setDateRange(range);
    if (range && range.length === 2) {
      const startDate = new Date(range[0]);
      startDate.setDate(startDate.getDate() + 1); // Add 1 day to start date
      const endDate = new Date(range[1]);
      endDate.setDate(endDate.getDate() + 1); // Add 1 day to end date
      onDateChange({
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
      });
    } else {
      onDateChange({ startDate: "", endDate: "" });
    }
  };
  const filterLabel =
    columns.find((column) => column.field === filter)?.label || filter;

  return (
    <div className="relative">
      <div className="sm:px-2 py-4 bg-white rounded-md">
        <div className="lg:flex justify-between items-center px-2">
          <div className="flex lg:w-1/2 w-full items-center mb-2 lg:mb-0">
            <div className="flex justify-between w-full items-center">
              <IconButton onClick={handleSettingsClick}>
                <IoSettingsOutline className="text-xl text-[#35353A]" />
              </IconButton>
              <SearchInput
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
                handleSearchKeyPress={handleSearchKeyPress}
                placeholder={
                  filterLabel ? `Search by ${filterLabel}` : "Search"
                }
                errorMessage={errorMessage}
              />
              {selectedCount > 0 && (
                <span className="text-[#175AE4] truncate min-w-[50px] sm:min-w-[90px] text-xs sm:text-sm 2xl:text-base sm:mx-2 mx-1 font-normal">
                  {selectedCount} Selected
                </span>
              )}
            </div>
          </div>
          <div className="flex lg:w-1/2  overflow-hidden justify-between items-center  w-full gap-0.5 sm:gap-2">
            <ToolbarActions
              showDelete={showDelete}
              handleDownload={handleDownload}
              onFilterApply={handleFilterApply}
              selectedCount={selectedCount}
              columns={columns}
              handleFilterIconClick={handleFilterIconClick}
              onCancelClick={onCancelClick}
              onCheckClick={onCheckClick}
              showCheckCancelButtons={showCheckCancelButtons}
              handleDeleteSelected={handleDeleteSelected}
            />
            <div className="flex w-full justify-end items-center gap-0.5 sm:gap-2">
              {datepicker && (
                <div className="relative   border-r border-[#D9D9DC] sm:px-3 px-1">
                  <DateRangePicker
                    className="dates"
                    value={dateRange}
                    showOneCalendar={isMobile && true}
                    onChange={handleDateRangeChange}
                    placeholder="Select Date Range"
                    appearance="default"
                    placement={isMobile ? "autoVertical" : "bottomEnd"}
                    style={{ width: "100%", borderRadius: "9999px" }}
                    ranges={[
                      {
                        label: "Clear",
                        value: [],
                      },
                    ]}
                  />
                </div>
              )}
              {children}
              {btnName && (
                <button
                  className="gradient-bg whitespace-nowrap px-2 items-center flex gap-0.5 rounded-full text-white py-[6px] text-[12px] sm:text-sm 2xl:text-base font-bold"
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
        tableId={tableId}
        setColumns={setColumns}
        anchorEl={anchorEl}
      />
    </div>
  );
};

export default TableToolbar;
