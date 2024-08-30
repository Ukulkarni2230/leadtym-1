"use client";
import React from "react";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import DataTable from "@/src/components/Table/DataTable";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";

// Define initial columns for the table
const initialInfluencerRequestColumns = [
  {
    id: 1,
    label: "Deals",
    field: "dealName",
    visible: true,
    locked: false,
  },
  {
    id: 2,
    label: "Requested Date",
    field: "date",
    visible: true,
    locked: false,
  },
  {
    id: 3,
    label: "Category",
    field: "category",
    visible: true,
    locked: false,
  },
  {
    id: 4,
    label: "Brand Name",
    field: "brandName",
    visible: true,
    locked: false,
  },
  {
    id: 5,
    label: "Pricing",
    field: "pricing",
    visible: true,
    locked: false,
  },
  {
    id: 6,
    label: "Status",
    field: "status",
    visible: true,
    locked: false,
  },
  {
    id: 7,
    label: "Actions",
    field: "actions",
    visible: true,
    locked: false,
    sortable: false,
    filterable: false,
  },
];

// Sample data for the table
const influencerRequestsData = [
  {
    id: 1,
    dealName: "T-Shirt",
    date: "13/05/2024",
    category: "T-Shirt",
    brandName: "T-shirt",
    pricing: "balajinnant.com",
    status: "Approved",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    dealName: "Shoes",
    date: "22/05/2024",
    category: "Footwear",
    brandName: "Gym Material",
    pricing: "project.com",
    status: "Rejected",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    dealName: "Long Shoes",
    date: "15/06/2024",
    category: "Footwear",
    brandName: "Gym ware",
    pricing: "project.com/us/gymware",
    status: "Requested",
    img: "https://via.placeholder.com/150",
  },
  // Add more data as needed
];

// Status class definitions for styling
const statusClasses = {
  Approved: "bg-[#C9E8E8] text-[#105352]",
  Rejected: "bg-[#F3D4D1] text-[#70241D]",
  Requested: "bg-[#E6DD001A] text-[#A48310]",
};

// Function to render each row in the table
const renderInfluencerRequestRow = (
  row,
  columns,
  selectedRows,
  handleRowSelect,
  onCheckClick,
  onCancelClick
) => {
  const router = useRouter();
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
              className={`px-2 whitespace-nowrap py-3 text-[12px] sm:text-sm 2xl:text-base  text-[#35353A] ${
                column.field === "dealName" ? "flex items-center space-x-2" : ""
              }`}
            >
              {column.field === "dealName" ? (
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() =>
                    router.push(`/influencer/brand-deal/deal-details/`)
                  }
                >
                  <img
                    src={row.img}
                    alt={row.dealName}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{row.dealName}</span>
                </div>
              ) : column.field === "status" ? (
                <div className="flex items-center space-x-1">
                  <span
                    className={`px-3 h-[28px] truncate rounded-full w-[92px] text-center justify-center items-center flex text-xs sm:text-sm 2xl:text-base ${
                      statusClasses[row.status]
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              ) : column.field === "pricing" ? (
                <a
                  href={`https://${row[column.field]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[#175AE4] hover:underline font-normal text-xs sm:text-sm 2xl:text-base`}
                >
                  <div className="max-w-[150px] truncate">
                    {row[column.field]}
                  </div>
                </a>
              ) : column.field === "actions" ? (
                <div
                  className={`flex space-x-1 text-base items-center sm:text-[17px] ${
                    column.locked && "flex justify-center w-full"
                  }`}
                >
                  <button
                    className={`hover:text-red-600 text-[#C21317] ${
                      column.locked ? "cursor-not-allowed" : ""
                    }`}
                    onClick={() => onCancelClick(row.id)}
                  >
                    <LiaTimesSolid />
                  </button>
                  <button
                    className={`hover:text-green-600 text-[#199C4D] ${
                      column.locked ? "cursor-not-allowed" : ""
                    }`}
                    onClick={() => onCheckClick(row.id)}
                  >
                    <IoMdCheckmark />
                  </button>
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

// Main component to render the influencer request table
const InfluencerRequestsTable = () => {
  const handleCheckClick = (id) => {
    alert(`Checked item with ID: ${id}`);
  };

  const handleCancelClick = (id) => {
    alert(`Canceled item with ID: ${id}`);
  };

  return (
    <DataTable
      showCheckCancelButtons={true}
      onCheckClick={handleCheckClick}
      onCancelClick={handleCancelClick}
      tableId="influencerRequestsTable"
      datepicker={false}
      initialColumns={initialInfluencerRequestColumns}
      data={influencerRequestsData}
      onSearch={(query) => console.log("Search:", query)}
      renderRow={(row, columns, selectedRows, handleRowSelect) =>
        renderInfluencerRequestRow(
          row,
          columns,
          selectedRows,
          handleRowSelect,
          handleCheckClick,
          handleCancelClick
        )
      }
    />
  );
};

export default InfluencerRequestsTable;
