import React, { useState } from "react";
import { Popover, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const FilterPopover = ({ anchorEl, open, onClose, onApply, columns = [] }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleApply = () => {
    onApply(selectedFilter);
    onClose();
  };

  const handleClear = () => {
    setSelectedFilter("");
    onApply("");
    onClose();
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <div className="p-4 w-64">
        <div className="mb-2 text-gray-700 font-semibold">Filter by</div>
        <RadioGroup value={selectedFilter} onChange={handleFilterChange}>
          {columns
            .filter(
              (column) =>
                !column.locked && column.visible && column.field !== "status"
            )
            .map(
              (column) =>
                column.filterable !== false && (
                  <FormControlLabel
                    key={column.id}
                    value={column.field}
                    control={<Radio />}
                    label={column.label}
                  />
                )
            )}
        </RadioGroup>
        <div className="mt-2 flex gap-2 justify-end">
          <button
            onClick={handleClear}
            className="border border-gray-400 bg-transparent text-gray-600 hover:bg-gray-300 px-2 rounded-full py-[3px] text-[10px] sm:text-xs 2xl:text-sm font-bold"
          >
            Clear
          </button>
          <button
            onClick={handleApply}
            className="gradient-bg px-2 rounded-full text-white py-[3px] text-[10px] sm:text-xs 2xl:text-sm font-bold"
          >
            Apply
          </button>
        </div>
      </div>
    </Popover>
  );
};

export default FilterPopover;
