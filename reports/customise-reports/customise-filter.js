"use client";
import SlidePanel from "@/src/utils/SlidePanel";
import React, { useState } from "react";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import { LuRefreshCw } from "react-icons/lu";
import { BsCheck2Square } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const initialGraphGroupByOptions = [
  "Click",
  "Unique Clicks",
  "Conversions",
  "Click Ratio",
  "Revenue",
  "Profit",
];

const initialGroupByOptions = [
  "Campaign",
  "Campaign App Name",
  "Objective",
  "Source (Sub Publisher)",
  "Campaign ID",
  "External Offer ID",
  "Goal ID",
  "Currency",
  "Goal Name",
  "Release Order ID",
  "Coupon Code",
  "Smart Link",
  "Landing Page",
  "Landing Page ID",
  "Device",
  "Device Brand",
  "Operating System",
  "Country (GEO)",
  "City",
  "Region",
  "Carrier (ISP)",
  "Hour",
  "Date",
  "Month",
  "Publisher ID",
  "Browser",
  "Category",
  "Conversion Approved Date",
];

const CustomiseFilter = ({ isOpen, setIsOpen, toggleDrawer }) => {
  const [graphGroupByFilters, setGraphGroupByFilters] = useState(
    initialGraphGroupByOptions.map((option) => ({
      label: option,
      checked: false,
    }))
  );

  const [groupByFilters, setGroupByFilters] = useState(
    initialGroupByOptions.map((option) => ({
      label: option,
      checked: false,
    }))
  );

  const [additionalGroupByFilters, setAdditionalGroupByFilters] = useState(
    initialGroupByOptions.map((option) => ({
      label: option,
      checked: false,
    }))
  );

  const [searchQueryGraph, setSearchQueryGraph] = useState("");
  const [searchQueryGroup, setSearchQueryGroup] = useState("");
  const [searchQueryAdditionalGroup, setSearchQueryAdditionalGroup] =
    useState("");

  const handleCheckedChange = (filters, setFilters) => (index, checked) => {
    const newFilters = [...filters];
    newFilters[index].checked = checked;
    setFilters(newFilters);
  };

  const handleSelectAll = (filters, setFilters) => () => {
    setFilters(filters.map((filter) => ({ ...filter, checked: true })));
  };

  const handleClearAll = (filters, setFilters) => () => {
    setFilters(filters.map((filter) => ({ ...filter, checked: false })));
  };

  const handleSearch = (setSearchQuery) => (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredGraphGroupByFilters = graphGroupByFilters.filter((filter) =>
    filter.label.toLowerCase().includes(searchQueryGraph.toLowerCase())
  );

  const filteredGroupByFilters = groupByFilters.filter((filter) =>
    filter.label.toLowerCase().includes(searchQueryGroup.toLowerCase())
  );

  const filteredAdditionalGroupByFilters = additionalGroupByFilters.filter(
    (filter) =>
      filter.label
        .toLowerCase()
        .includes(searchQueryAdditionalGroup.toLowerCase())
  );

  return (
    <SlidePanel
      open={isOpen}
      onClose={toggleDrawer(false)}
      name={"Customise Filter"}
    >
      <div className="">
        {/* Graph Group By */}
        <div className="mb-6 rounded-lg border border-[#E2E2E2]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-b border-[#E2E2E2] px-2 sm:px-4 py-2">
            <h3 className="text-base sm:text-lg 2xl:text-xl text-[#0F62FE] mb-2 md:mb-0">
              Graph Group By
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQueryGraph}
                  onChange={handleSearch(setSearchQueryGraph)}
                  className="w-full md:max-w-32 xl:max-w-none border-[#E7E7E7] placeholder:text-[#697077] text-sm sm:text-base 2xl:text-lg pl-9 pr-4 py-[2.5px] border rounded focus:outline-none focus:ring-1 focus:ring-[#0F62FE]"
                />
              </div>
              <div className="flex justify-between md:justify-end w-full md:w-fit gap-2 items-center">
                <button
                  className="w-1/2 md:w-auto gap-1 px-4 border border-[#0F62FE] py-1 flex items-center justify-center bg-[#E7EFFF] text-sm sm:text-sm 2xl:text-lg text-[#0F62FE] rounded"
                  onClick={handleClearAll(
                    graphGroupByFilters,
                    setGraphGroupByFilters
                  )}
                >
                  <LuRefreshCw />
                  Clear
                </button>
                <button
                  className="w-1/2 md:w-auto gap-1 px-4 border border-[#0F62FE] py-1 flex items-center justify-center bg-[#E7EFFF] text-sm sm:text-sm 2xl:text-lg text-[#0F62FE] rounded"
                  onClick={handleSelectAll(
                    graphGroupByFilters,
                    setGraphGroupByFilters
                  )}
                >
                  <BsCheck2Square />
                  Select All
                </button>
              </div>
            </div>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-2 sm:px-4 py-2">
            {filteredGraphGroupByFilters.length > 0 ? (
              filteredGraphGroupByFilters.map((filter, index) => (
                <div key={filter.label} className="py-0.5">
                  <CustomCheckbox
                    label={filter.label}
                    checked={filter.checked}
                    onCheckedChange={(checked) =>
                      handleCheckedChange(
                        graphGroupByFilters,
                        setGraphGroupByFilters
                      )(index, checked)
                    }
                    labelStyle="text-[#666666] text-xs sm:text-sm 2xl:text-base"
                    required={false}
                    errorText=""
                    id={`graph-group-by-checkbox-${index}`}
                  />
                </div>
              ))
            ) : (
              <div className="text-[#666666] text-xs sm:text-sm 2xl:text-base py-1">
                No items found
              </div>
            )}
          </div>
        </div>

        {/* Group By */}
        <div className="mb-6 rounded-lg border border-[#E2E2E2]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-b border-[#E2E2E2] px-2 sm:px-4 py-2">
            <h3 className="text-base sm:text-lg 2xl:text-xl text-[#0F62FE] mb-2 md:mb-0">
              Group By
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQueryGroup}
                  onChange={handleSearch(setSearchQueryGroup)}
                  className="w-full md:max-w-32 xl:max-w-none border-[#E7E7E7] placeholder:text-[#697077] text-sm sm:text-base 2xl:text-lg pl-9 pr-4 py-[2.5px] border rounded focus:outline-none focus:ring-1 focus:ring-[#0F62FE]"
                />
              </div>
              <div className="flex justify-between md:justify-end w-full md:w-fit gap-2 items-center">
                <button
                  className="w-1/2 md:w-auto gap-1 px-4 border border-[#0F62FE] py-1 flex items-center justify-center bg-[#E7EFFF] text-sm sm:text-sm 2xl:text-lg text-[#0F62FE] rounded"
                  onClick={handleClearAll(groupByFilters, setGroupByFilters)}
                >
                  <LuRefreshCw />
                  Clear
                </button>
                <button
                  className="w-1/2 md:w-auto gap-1 px-4 border border-[#0F62FE] py-1 flex items-center justify-center bg-[#E7EFFF] text-sm sm:text-sm 2xl:text-lg text-[#0F62FE] rounded"
                  onClick={handleSelectAll(groupByFilters, setGroupByFilters)}
                >
                  <BsCheck2Square />
                  Select All
                </button>
              </div>
            </div>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-2 sm:px-4 py-2">
            {filteredGroupByFilters.length > 0 ? (
              filteredGroupByFilters.map((filter, index) => (
                <div key={filter.label} className="py-0.5">
                  <CustomCheckbox
                    label={filter.label}
                    checked={filter.checked}
                    onCheckedChange={(checked) =>
                      handleCheckedChange(groupByFilters, setGroupByFilters)(
                        index,
                        checked
                      )
                    }
                    labelStyle="text-[#666666] text-xs sm:text-sm 2xl:text-base"
                    required={false}
                    errorText=""
                    id={`group-by-checkbox-${index}`}
                  />
                </div>
              ))
            ) : (
              <div className="text-[#666666] text-xs sm:text-sm 2xl:text-base py-1">
                No items found
              </div>
            )}
          </div>
        </div>

        {/* Additional Group By */}
        <div className="mb-6 rounded-lg border border-[#E2E2E2]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-b border-[#E2E2E2] px-2 sm:px-4 py-2">
            <h3 className="text-base sm:text-lg 2xl:text-xl text-[#0F62FE] mb-2 md:mb-0">
              Additional Group By
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQueryAdditionalGroup}
                  onChange={handleSearch(setSearchQueryAdditionalGroup)}
                  className="w-full md:max-w-32 xl:max-w-none border-[#E7E7E7] placeholder:text-[#697077] text-sm sm:text-base 2xl:text-lg pl-9 pr-4 py-[2.5px] border rounded focus:outline-none focus:ring-1 focus:ring-[#0F62FE]"
                />
              </div>
              <div className="flex justify-between md:justify-end w-full md:w-fit gap-2 items-center">
                <button
                  className="w-1/2 md:w-auto gap-1 px-4 border border-[#0F62FE] py-1 flex items-center justify-center bg-[#E7EFFF] text-sm sm:text-sm 2xl:text-lg text-[#0F62FE] rounded"
                  onClick={handleClearAll(
                    additionalGroupByFilters,
                    setAdditionalGroupByFilters
                  )}
                >
                  <LuRefreshCw />
                  Clear
                </button>
                <button
                  className="w-1/2 md:w-auto gap-1 px-4 border border-[#0F62FE] py-1 flex items-center justify-center bg-[#E7EFFF] text-sm sm:text-sm 2xl:text-lg text-[#0F62FE] rounded"
                  onClick={handleSelectAll(
                    additionalGroupByFilters,
                    setAdditionalGroupByFilters
                  )}
                >
                  <BsCheck2Square />
                  Select All
                </button>
              </div>
            </div>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-2 sm:px-4 py-2">
            {filteredAdditionalGroupByFilters.length > 0 ? (
              filteredAdditionalGroupByFilters.map((filter, index) => (
                <div key={filter.label} className="py-0.5">
                  <CustomCheckbox
                    label={filter.label}
                    checked={filter.checked}
                    onCheckedChange={(checked) =>
                      handleCheckedChange(
                        additionalGroupByFilters,
                        setAdditionalGroupByFilters
                      )(index, checked)
                    }
                    labelStyle="text-[#666666] text-xs sm:text-sm 2xl:text-base"
                    required={false}
                    errorText=""
                    id={`additional-group-by-checkbox-${index}`}
                  />
                </div>
              ))
            ) : (
              <div className="text-[#666666] text-xs sm:text-sm 2xl:text-base py-1">
                No items found
              </div>
            )}
          </div>
        </div>
      </div>
    </SlidePanel>
  );
};

export default CustomiseFilter;
