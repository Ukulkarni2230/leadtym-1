"use client";
import DataTable from "@/src/components/Table/DataTable";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const activeDealsData = [
  {
    id: 1,
    name: "T-Shirt",
    date: "13/05/2024",
    category: "T-Shirt",
    deliverable: "Story & Reel",
    budget: "₹5000",
    status: "Delivered",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Shoes",
    date: "22/05/2024",
    category: "Footwear",
    deliverable: "Story, Reel & Post",
    budget: "₹4000 - ₹5000",
    status: "In process",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Long Shoes",
    date: "15/06/2024",
    category: "Footwear",
    deliverable: "Story",
    budget: "₹12000",
    status: "On Hold",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Headphone",
    date: "15/06/2024",
    category: "Electronics",
    deliverable: "Reel & Post",
    budget: "₹2000 - ₹3000",
    status: "Cancelled",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Mithra B",
    date: "15/06/2024",
    category: "T-Shirt",
    deliverable: "Story & Post",
    budget: "₹2500",
    status: "Delivered",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "One Piece Dress",
    date: "15/06/2024",
    category: "Dress",
    deliverable: "Story, Reel & Post",
    budget: "₹8000",
    status: "Cancelled",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Gloves",
    date: "15/06/2024",
    category: "Hand Gloves",
    deliverable: "Story, Reel & Post",
    budget: "₹5500 - 8500",
    status: "Delivered",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "T-shirt with Model",
    date: "15/06/2024",
    category: "T-Shirt",
    deliverable: "Story, Reel & Post",
    budget: "₹5000",
    status: "On Hold",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "T-Shirt Jersey",
    date: "15/06/2024",
    category: "Jersey",
    deliverable: "Story, Reel & Post",
    budget: "₹5000",
    status: "Awaiting",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Mobile Brand",
    date: "22/01/2024",
    category: "Electronics",
    deliverable: "Story, Reel & Post",
    budget: "₹5000",
    status: "Delivered",
    img: "https://via.placeholder.com/150",
  },
];

const statusClasses = {
  Delivered: "bg-[#C9E8E8] text-[#105352]",
  "In process": "bg-[#CBDCF9] text-[#103680]",
  "On Hold": "bg-[#FFF3DD] text-[#AA8345]",
  Awaiting: "bg-[#E6DD0033] text-[#A48310]",
  Cancelled: "bg-[#F3D4D1] text-[#70241D]",
};

const initialColumns = [
  {
    id: 1,
    label: "Deals",
    field: "name",
    visible: true,
    locked: false,
  },
  {
    id: 2,
    label: "Date",
    field: "date",
    visible: true,
    locked: false,
  },
  {
    id: 3,
    label: "Product Category",
    field: "category",
    visible: true,
    locked: false,
  },
  {
    id: 4,
    label: "Deliverable",
    field: "deliverable",
    visible: true,
    locked: false,
  },
  {
    id: 5,
    label: "Budget",
    field: "budget",
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
];

const renderActiveDealRow = (
  row,
  columns,
  selectedRows,
  handleRowSelect,
  handleStatusChange,
  toggleDrawer
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
                column.field === "name" ? "flex items-center space-x-2" : ""
              }`}
            >
              {column.field === "name" ? (
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() =>
                    router.push(`/influencer/brand-deal/deal-details/`)
                  }
                >
                  <img
                    src={row.img}
                    alt={row.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{row.name}</span>
                </div>
              ) : column.field === "status" ? (
                <div className="flex items-center space-x-1">
                  <span
                    className={`px-3 h-[28px] truncate rounded-full w-[92px] text-center justify-center items-center flex text-xs sm:text-sm 2xl:text-base ${
                      statusClasses[row.status]
                    } ${column.locked && "mx-auto"}`}
                  >
                    {row.status}
                  </span>
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

const ActiveDealsTable = () => {
  const [selected, setSelected] = useState([]);
  const handleSelect = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((sid) => sid !== id)
        : [...prevSelected, id]
    );
  };

  const handleStatusChange = (id, newStatus) => {
    console.log(`Status of deal with ID ${id} changed to ${newStatus}`);
    // Update the status in your state or perform any other action
  };

  const toggleDrawer = (open) => () => {
    // Handle drawer toggle here
  };

  return (
    <div>
      <DataTable
        datepicker={false}
        tableId="activeDealsTable"
        initialColumns={initialColumns}
        data={activeDealsData}
        onAddItem={toggleDrawer(true)}
        onSearch={(query) => console.log("Search:", query)}
        renderRow={(row, columns, selectedRows, handleRowSelect) =>
          renderActiveDealRow(
            row,
            columns,
            selectedRows,
            handleRowSelect,
            handleStatusChange,
            toggleDrawer
          )
        }
      />
    </div>
  );
};

export default ActiveDealsTable;
