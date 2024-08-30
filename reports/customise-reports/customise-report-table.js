"use client";
import DataTable from "@/src/components/Table/DataTable";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import React, { useState } from "react";
import { FaMobileAlt, FaDesktop, FaTabletAlt } from "react-icons/fa";
import CustomiseFilter from "./customise-filter";

// Placeholder images array

// Initial columns definition
const initialColumns = [
  { id: 1, label: "Id", field: "id", visible: true, locked: false },
  { id: 2, label: "Name", field: "name", visible: true, locked: false },
  { id: 3, label: "Category", field: "category", visible: true, locked: false },
  { id: 4, label: "Device", field: "device", visible: true, locked: false },
  { id: 5, label: "Geo", field: "geo", visible: true, locked: false },
  { id: 6, label: "Date", field: "date", visible: true, locked: false },
  { id: 7, label: "Clicks", field: "clicks", visible: true, locked: false },
  {
    id: 8,
    label: "Unique Clicks",
    field: "uniqueClicks",
    visible: true,
    locked: false,
  },
  {
    id: 9,
    label: "Conversions",
    field: "conversions",
    visible: true,
    locked: false,
  },
  { id: 10, label: "Max Bid", field: "maxBid", visible: true, locked: false },
];

const placeholderImages = [
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
];

const reportData = [
  {
    id: "#0001",
    name: "T-Shirt",
    category: "T-Shirt",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[0],
  },
  {
    id: "#0002",
    name: "Shoes",
    category: "Footwear",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[1],
  },
  {
    id: "#0003",
    name: "Hat",
    category: "Accessories",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[2],
  },
  {
    id: "#0004",
    name: "Watch",
    category: "Accessories",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[3],
  },
  {
    id: "#0005",
    name: "Bag",
    category: "Accessories",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[4],
  },
  {
    id: "#0006",
    name: "Sunglasses",
    category: "Accessories",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[5],
  },
  {
    id: "#0007",
    name: "Jacket",
    category: "Clothing",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[6],
  },
  {
    id: "#0008",
    name: "Pants",
    category: "Clothing",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[7],
  },
  {
    id: "#0009",
    name: "Socks",
    category: "Clothing",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[8],
  },
  {
    id: "#0010",
    name: "Gloves",
    category: "Accessories",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[9],
  },
  {
    id: "#0011",
    name: "Scarf",
    category: "Accessories",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[10],
  },
  {
    id: "#0012",
    name: "Belt",
    category: "Accessories",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    clicks: 1100,
    uniqueClicks: 1100,
    conversions: 1100,
    maxBid: 1100,
    imageUrl: placeholderImages[11],
  },
];

const renderReportRow = (row, columns, selectedRows, handleRowSelect) => {
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
              {column.field === "device" ? (
                <div className="flex space-x-1">
                  {row.device.includes("mobile") && <FaMobileAlt />}
                  {row.device.includes("desktop") && <FaDesktop />}
                  {row.device.includes("tablet") && <FaTabletAlt />}
                </div>
              ) : column.field === "geo" ? (
                <div className="flex -space-x-1.5 mr-3">
                  {row.geo.map((location, index) => (
                    <span
                      key={index}
                      className="bg-[#ECECED] shadow-md shadow-[#0000001F] flex rounded-full w-[30px] h-[30px] items-center justify-center text-[#35353A] text-[11px] sm:text-[13px] 2xl:text-[15px] font-semibold"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              ) : column.field === "name" ? (
                <div className="flex items-center space-x-2">
                  <img
                    src={row.imageUrl}
                    alt={row.name}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <span>{row.name}</span>
                </div>
              ) : (
                row[column.field]
              )}
            </div>
          </td>
        ))}
    </tr>
  );
};

const CustomiseReportTable = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };
  return (
    <>
      <DataTable
        btnName="View All"
        onAddItem={toggleDrawer(!isOpen)}
        tableId="customiseReportTable"
        initialColumns={initialColumns}
        data={reportData}
        onSearch={(query) => console.log("Search:", query)}
        renderRow={renderReportRow}
      />
      {isOpen && (
        <CustomiseFilter
          isOpen={isOpen}
          sFetIsOpen={setIsOpen}
          toggleDrawer={toggleDrawer}
        />
      )}
    </>
  );
};

export default CustomiseReportTable;
