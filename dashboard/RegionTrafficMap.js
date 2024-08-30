// RegionTrafficMap.jsx
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import DateDropdown from "./date-dropdown";

// Color scale for the map
const colorScale = scaleLinear().domain([0, 100]).range(["#e0e0e0", "#5e17eb"]);

const viewOptions = [
  { value: "country", label: "Country" },
  { value: "state", label: "State" },
  { value: "city", label: "City" },
];

const timeframeOptions = [
  { value: "weekly", label: "Weekly (2020)" },
  { value: "monthly", label: "Monthly (2020)" },
  { value: "yearly", label: "Yearly (2020)" },
];

const RegionTrafficMap = ({ data }) => {
  const [view, setView] = useState("country");
  const [timeframe, setTimeframe] = useState("weekly");

  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <div className="bg-white shadow-lg  py-3 shadow-[#5E17EB26] border border-[#D8D9D4] rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Top Region Traffic Source
        </h2>
        <div className="flex space-x-4">
          <DateDropdown
            options={viewOptions}
            value={view}
            onChange={handleViewChange}
          />
          <DateDropdown
            options={timeframeOptions}
            value={timeframe}
            onChange={handleTimeframeChange}
          />
        </div>
      </div>
      <div className="overflow-x-auto w-full rounded-b-xl border border-[#D8D9D4] rounded-md">
        <ComposableMap className="-mt-10">
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.country === geo.properties.name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d.value) : "#F5F4F6"}
                    // fill="#FF5533"
                    stroke="#D9D9D9"
                    style={{
                      default: { outline: "#000000" },
                      hover: { fill: "#F53", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default RegionTrafficMap;
