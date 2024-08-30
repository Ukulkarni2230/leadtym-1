"use client";
import React from "react";
import DataTable from "@/src/components/Table/DataTable";
import CustomCheckbox from "@/src/components/reuseable/checkbox";

const initialGeoColumns = [
  { id: 1, label: "Country", field: "country", visible: true, locked: false },
  { id: 2, label: "States", field: "states", visible: true, locked: false },
  { id: 3, label: "Cities", field: "cities", visible: true, locked: false },
  { id: 4, label: "Click", field: "click", visible: true, locked: false },
  {
    id: 5,
    label: "Unique Clicks",
    field: "uniqueClicks",
    visible: true,
    locked: false,
  },
  {
    id: 6,
    label: "Conversions",
    field: "conversions",
    visible: true,
    locked: false,
  },
  { id: 7, label: "Revenue", field: "revenue", visible: true, locked: false },
];

const geoData = [
  {
    id: "1",
    country: "India",
    states: ["MH", "MP", "AP", "+3"],
    cities: ["MB", "MF", "AF", "+3"],
    click: 1034,
    uniqueClicks: 1034,
    conversions: 1034,
    revenue: "₹1,034",
  },
  {
    id: "2",
    country: "US",
    states: ["MH", "MP", "+3"],
    cities: ["MB", "MF", "+3"],
    click: 1034,
    uniqueClicks: 1034,
    conversions: 1034,
    revenue: "₹1,034",
  },
  {
    id: "3",
    country: "UK",
    states: ["MH", "BF", "+3"],
    cities: ["MB", "BF", "+3"],
    click: 1034,
    uniqueClicks: 1034,
    conversions: 1034,
    revenue: "₹1,034",
  },
  {
    id: "4",
    country: "Canada",
    states: ["MH", "+3"],
    cities: ["MB", "+3"],
    click: 1034,
    uniqueClicks: 1034,
    conversions: 1034,
    revenue: "₹1,034",
  },
];

const renderGeoRow = (row, columns) => (
  <tr key={row.id}>
    <td>
      <div className="py-3 flex justify-center">
        <CustomCheckbox
          label=""
          checked={false}
          // onCheckedChange={() => console.log(`Selected row with id ${row.id}`)}
          required={false}
          errorText=""
          id={`select-row-checkbox-${row.id}`}
                                className="!rounded-[2.5px] !h-[16px] !w-[16px]"

        />
      </div>
    </td>
    {columns
      .filter((column) => column.visible)
      .map((column) => (
        <td
          key={column.id}
          className={`${column.locked ? "border-x border-[#D9D9DC]" : ""}`}
        >
          <div
            className={`px-2 whitespace-nowrap py-3 text-[12px] sm:text-sm 2xl:text-base text-[#35353A]`}
          >
            {column.field === "states" || column.field === "cities" ? (
              <div className="flex -space-x-1.5 mr-3">
                {row[column.field].map((location, index) => (
                  <span
                    key={index}
                    className="bg-[#ECECED] shadow-md shadow-[#0000001F] flex rounded-full w-[30px] h-[30px] items-center justify-center text-[#35353A] text-[11px] sm:text-[13px] 2xl:text-[15px] font-semibold"
                  >
                    {location}
                  </span>
                ))}
              </div>
            ) : (
              row[column.field]
            )}
          </div>
        </td>
      ))}
  </tr>
);

const TopGeoTable = () => (
  <DataTable
    btnName="View All"
    tableId="geoTable"
    initialColumns={initialGeoColumns}
    data={geoData}
    onAddItem={() => console.log("Add Geo")}
    onSearch={(query) => console.log("Search:", query)}
    renderRow={renderGeoRow}
  />
);

export default TopGeoTable;
