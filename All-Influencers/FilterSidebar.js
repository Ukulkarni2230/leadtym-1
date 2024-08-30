"use client";

import React, { useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import CustomCheckbox from "../../reuseable/checkbox";
import RangeSlider from "../../reuseable/RangeSlider";

// Initial data for the checkboxes
const initialFilters = [
  { label: "Lifestyle", checked: false },
  { label: "Sport", checked: false },
  { label: "Design", checked: false },
  { label: "Technology", checked: false },
  { label: "Fashion", checked: false },
  { label: "Travel", checked: false },
];

const FilterSidebar = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [showMore, setShowMore] = useState(false);
  const [followerRange, setFollowerRange] = useState([10, 355]);
  const [reelPriceRange, setReelPriceRange] = useState([24000, 3900000]);
  const [storyPriceRange, setStoryPriceRange] = useState([24000, 3900000]);
  const [postPriceRange, setPostPriceRange] = useState([24000, 3900000]);

  // Handle checkbox state change
  const handleCheckedChange = (index, checked) => {
    const newFilters = [...filters];
    newFilters[index].checked = checked;
    setFilters(newFilters);
  };

  // Handle reset functionality
  const handleReset = () => {
    setFilters(initialFilters.map((filter) => ({ ...filter, checked: false })));
  };

  // Handle view more functionality
  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  // Determine which filters to show based on `showMore` state
  const filtersToShow = showMore ? filters : filters.slice(0, 3);

  return (
    <div className="]">
      <div className="flex justify-between items-center mb-[26px]">
        <h2 className="text-[18px] sm:text-[20px] 2xl:text-[22px] text-[#303030] font-bold">
          Filter
        </h2>
        <LuSettings2 className="text-[#666666] text-[20px]" />
      </div>
      <div
        className="p-4 bg-white shadow shadow-[#5E17EB26] border-opacity-15 border-[#30303059] rounded-[8px] "
        // style={{ maxHeight: "400px" }}
      >
        <div className="flex my-3 items-center bg-[#F3F3F3] h-[36px] py-1.5 rounded-full overflow-hidden shadow-sm">
          <img
            src="/assets/icons/search.svg"
            className="ml-3 mr-3 flex items-center"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-[#666666] flex items-center font-normal placeholder:mt-1 text-[12px] sm:text-[14px] 2xl:text-[16px] bg-[#F3F3F3] outline-none text-gray-700"
          />
        </div>
        <div className="my-4 border-b pb-4 border-[#ECECEC]">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-normal">
              Niche
            </p>
            <button
              onClick={handleReset}
              className="px-2.5  h-[18px] flex justify-center items-center text-[10px] text-[#0E0E0E] font-normal hover:bg-gray-200 hover:text-black bg-[#F3F3F3] rounded-full sm:text-[12px] 2xl:text-[14px]"
            >
              Reset
            </button>
          </div>
          <div>
            {filtersToShow.map((filter, index) => (
              <div className="my-4" key={filter.label}>
                <CustomCheckbox
                  label={filter.label}
                  checked={filter.checked}
                  onCheckedChange={(checked) =>
                    handleCheckedChange(index, checked)
                  }
                  required={false}
                  errorText=""
                  id={`custom-checkbox-${index}`} // Pass unique id
                  labelStyle={`${
                    filter.checked ? "text-[#000000DE]" : "text-[#666666]"
                  } text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal`}
                />
              </div>
            ))}
            <div className="ml-[24px]">
              <p
                onClick={handleViewMore}
                className="text-[12px] cursor-pointer hover:text-blue-500 hover:underline text-[#000000DE] sm:text-[14px] 2xl:text-[16px]"
              >
                {showMore ? "View less" : "View more"}
              </p>
            </div>
          </div>
        </div>
        <div className="my-4 border-b pb-4 border-[#ECECEC]">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-normal">
              Platform
            </p>
          </div>
          <div>
            {filtersToShow.map((filter, index) => (
              <div className="my-4" key={filter.label}>
                <CustomCheckbox
                  label={filter.label}
                  checked={filter.checked}
                  onCheckedChange={(checked) =>
                    handleCheckedChange(index, checked)
                  }
                  required={false}
                  errorText=""
                  id={`custom-checkbox-${index}`} // Pass unique id
                  labelStyle={`${
                    filter.checked ? "text-[#000000DE]" : "text-[#666666]"
                  } text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal`}
                />
              </div>
            ))}
            <div className="ml-[24px]">
              <p
                onClick={handleViewMore}
                className="text-[12px] cursor-pointer hover:text-blue-500 hover:underline text-[#000000DE] sm:text-[14px] 2xl:text-[16px]"
              >
                {showMore ? "View less" : "View more"}
              </p>
            </div>
          </div>
        </div>
        <div className="my-4 border-b pb-4 border-[#ECECEC]">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-normal">
              Languages
            </p>
          </div>
          <div>
            {filtersToShow.map((filter, index) => (
              <div className="my-4" key={filter.label}>
                <CustomCheckbox
                  label={filter.label}
                  checked={filter.checked}
                  onCheckedChange={(checked) =>
                    handleCheckedChange(index, checked)
                  }
                  required={false}
                  errorText=""
                  id={`custom-checkbox-${index}`} // Pass unique id
                  labelStyle={`${
                    filter.checked ? "text-[#000000DE]" : "text-[#666666]"
                  } text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal`}
                />
              </div>
            ))}
            <div className="ml-[24px]">
              <p
                onClick={handleViewMore}
                className="text-[12px] cursor-pointer hover:text-blue-500 hover:underline text-[#000000DE] sm:text-[14px] 2xl:text-[16px]"
              >
                {showMore ? "View less" : "View more"}
              </p>
            </div>
          </div>
        </div>
        {/* Follower Section */}
        <div className=" border-b ">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-normal">
              Follower
            </p>
          </div>
          <RangeSlider
            value={followerRange}
            onChange={(event, newValue) => setFollowerRange(newValue)}
            min={10}
            max={355000}
            step={1000}
            label="Quantity"
          />
          <div className="my-4  pb-4 ">
            <div className="flex justify-between items-center mb-3">
              <p className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-normal">
                Ad Price
              </p>
            </div>
            <RangeSlider
              value={reelPriceRange}
              onChange={(event, newValue) => setReelPriceRange(newValue)}
              min={24000}
              max={3900000}
              step={1000}
              label="Reels"
              unit="₹"
            />
            <RangeSlider
              value={storyPriceRange}
              onChange={(event, newValue) => setStoryPriceRange(newValue)}
              min={24000}
              max={3900000}
              step={1000}
              label="Story"
              unit="₹"
            />
            <RangeSlider
              value={postPriceRange}
              onChange={(event, newValue) => setPostPriceRange(newValue)}
              min={24000}
              max={3900000}
              step={1000}
              label="Posts"
              unit="₹"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
