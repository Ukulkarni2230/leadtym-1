"use client";
import React, { useState } from "react";
import DataTable from "@/src/components/Table/DataTable";
import CustomCheckbox from "@/src/components/reuseable/checkbox";

// Initial columns definition for the attribution report
const attributionColumns = [
  { id: 1, label: "Country", field: "country", visible: true, locked: false },
  { id: 2, label: "State", field: "state", visible: true, locked: false },
  { id: 3, label: "City", field: "city", visible: true, locked: false },
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

// Sample data for the attribution report
const attributionData = [
  {
    id: "1",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    click: 1034,
    uniqueClicks: 1034,
    conversions: 1034,
    revenue: "₹1,034",
  },
  {
    id: "2",
    country: "India",
    state: "Goa",
    city: "Panaji",
    click: 1034,
    uniqueClicks: 1034,
    conversions: 1034,
    revenue: "₹1,034",
  },
  {
    id: "3",
    country: "UK",
    state: "UK",
    city: "UK",
    click: 1034,
    uniqueClicks: 1034,
    conversions: 1034,
    revenue: "₹1,034",
  },
  {
    id: "4",
    country: "Canada",
    state: "Canada",
    city: "Canada",
    click: 1034,
    uniqueClicks: 1034,
    conversions: 1034,
    revenue: "₹1,034",
  },
];

// Render row function for the attribution report
const renderAttributionRow = (row, columns, selectedRows, handleRowSelect) => {
  return (
    <tr
      key={row.id}
      className={`${selectedRows?.includes(row.id) ? "bg-[#ECECED]" : ""}`}
    >
      <td>
        <div className="py-3 flex justify-center">
          <CustomCheckbox
            label=""
            checked={selectedRows?.includes(row.id)}
            // onCheckedChange={() => handleRowSelect(row.id)}
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
              className={`px-2 ${
                column.field === "id" && "font-bold "
              } whitespace-nowrap py-3 text-[12px] sm:text-sm 2xl:text-base text-[#35353A]`}
            >
              {row[column.field]}
            </div>
          </td>
        ))}
    </tr>
  );
};

// AttributionReportTable component
const AttributionReportTable = () => {
  return (
    <>
      <DataTable
        btnName="View All"
        // onAddItem={toggleDrawer(!isOpen)}
        tableId="attributionReportTable"
        initialColumns={attributionColumns}
        data={attributionData}
        onSearch={(query) => console.log("Search:", query)}
        renderRow={renderAttributionRow}
      />
    </>
  );
};

export default AttributionReportTable;
