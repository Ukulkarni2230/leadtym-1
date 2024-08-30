"use client";
import DataTable from "@/src/components/Table/DataTable";
import ToggleSwitch from "@/src/components/reuseable/ToggleSwitch";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import React from "react";
import { FaMobileAlt, FaDesktop, FaTabletAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";

// Placeholder images array
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
];

// Initial columns definition
const initialPremiumCampaignColumns = [
  { id: 1, label: "Id", field: "id", visible: true, locked: false },
  { id: 2, label: "Name", field: "name", visible: true, locked: false },
  { id: 3, label: "Category", field: "category", visible: true, locked: false },
  { id: 4, label: "Device", field: "device", visible: true, locked: false },
  { id: 5, label: "Geo", field: "geo", visible: true, locked: false },
  { id: 6, label: "Date", field: "date", visible: true, locked: false },
  { id: 7, label: "Payout", field: "payout", visible: true, locked: false },
];

// Sample data for the table
const premiumCampaignData = [
  {
    id: "#0001",
    name: "T-Shirt",
    category: "T-Shirt",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15 May - 20 May, 2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[0],
  },
  {
    id: "#0002",
    name: "Shoes",
    category: "Footwear",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "22/05 - 25/05, 2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[1],
  },
  {
    id: "#0003",
    name: "Long Shoes",
    category: "Footwear",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024 - 20/06/2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[2],
  },
  {
    id: "#0004",
    name: "Headphones",
    category: "Electronics",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[3],
  },
  {
    id: "#0005",
    name: "Mithra B",
    category: "T-Shirt",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[4],
  },
  {
    id: "#0006",
    name: "One Piece",
    category: "Dress",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[5],
  },
  {
    id: "#0007",
    name: "Gloves",
    category: "Hand Gloves",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[6],
  },
  {
    id: "#0008",
    name: "T-shirt with Brand",
    category: "T-Shirt",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[7],
  },
  {
    id: "#0009",
    name: "T-Shirt Jersey",
    category: "Jersey",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "15/06/2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[8],
  },
  {
    id: "#0010",
    name: "Mobile Brand",
    category: "Electronics",
    device: ["mobile", "desktop", "tablet"],
    geo: ["RU", "US", "IN", "+11"],
    date: "22/01/2024",
    payout: 1100,
    state: true,
    imageUrl: placeholderImages[9],
  },
];

const renderAllCampaignRow = (row, columns, selectedRows, handleRowSelect) => {
  const router = useRouter();
  const navigate = useDynamicNavigate();
  const handleNavigation = () => {
    navigate("/campaign/normal-campaign/overview");
  };

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
            className=""
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
                column.field === "id" && "font-bold cursor-pointer"
              } ${
                column.field === "name" && " cursor-pointer"
              } whitespace-nowrap py-3 text-[12px] sm:text-sm 2xl:text-base text-[#35353A]`}
              onClick={
                column.field === "id" || column.field === "name"
                  ? handleNavigation
                  : null
              }
            >
              {column.field === "device" ? (
                <div className="flex space-x-1">
                  {row.device.includes("mobile") && <FaMobileAlt />}
                  {row.device.includes("desktop") && <FaDesktop />}
                  {row.device.includes("tablet") && <FaTabletAlt />}
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
              ) : (
                row[column.field]
              )}
            </div>
          </td>
        ))}
    </tr>
  );
};

const AllCreatedCampaigns = () => (
  <DataTable
    tableId="allcreatedcamp "
    initialColumns={initialPremiumCampaignColumns}
    data={premiumCampaignData}
    onSearch={(query) => console.log("Search:", query)}
    renderRow={renderAllCampaignRow}
  />
);

export default AllCreatedCampaigns;
