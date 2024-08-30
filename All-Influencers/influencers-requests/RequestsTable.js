"use client";
import React from "react";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import DataTable from "@/src/components/Table/DataTable";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdCheckmark } from "react-icons/io";

const initialRequestColumns = [
  {
    id: 1,
    label: "Influencer Name",
    field: "name",
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
  { id: 3, label: "Category", field: "category", visible: true, locked: false },
  {
    id: 4,
    label: "Deal Name",
    field: "dealName",
    visible: true,
    locked: false,
  },
  {
    id: 5,
    label: "Product Link",
    field: "productLink",
    visible: true,
    locked: false,
  },
  { id: 6, label: "Status", field: "status", visible: true, locked: false },
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

const requestsData = [
  {
    id: 1,
    name: "Albert Flores",
    date: "13/05/2024",
    category: "T-Shirt",
    dealName: "T-shirt",
    productLink: "balajinnant.com",
    status: "Approved",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Theresa Webb",
    date: "22/05/2024",
    category: "Footwear",
    dealName: "Gym Material",
    productLink: "project.com",
    status: "Rejected",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Ronald Richards",
    date: "15/06/2024",
    category: "Footwear",
    dealName: "Gym ware",
    productLink: "project.com/us/gymware",
    status: "Rejected",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Esther Howard",
    date: "15/06/2024",
    category: "Electronics",
    dealName: "Sports ware",
    productLink: "project.com/us/sportsware",
    status: "Approved",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Brooklyn Simmons",
    date: "15/06/2024",
    category: "T-Shirt",
    dealName: "iPhone",
    productLink: "project.com/us/iphone",
    status: "Rejected",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Annette Black",
    date: "15/06/2024",
    category: "Dress",
    dealName: "Lg Laptop",
    productLink: "project.com/us/lglaptop",
    status: "Rejected",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Jacob Jones",
    date: "15/06/2024",
    category: "Hand Gloves",
    dealName: "Lg Laptop",
    productLink: "project.com/us/lglaptop",
    status: "Approved",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Ralph Edwards",
    date: "15/06/2024",
    category: "T-Shirt",
    dealName: "Lg Laptop",
    productLink: "project.com/us/lglaptop",
    status: "Rejected",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Cody Fisher",
    date: "15/06/2024",
    category: "Jersey",
    dealName: "Lg Laptop",
    productLink: "project.com/us/lglaptop",
    status: "Rejected",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Kristin Watson",
    date: "22/01/2024",
    category: "Electronics",
    dealName: "Lg Laptop",
    productLink: "project.com/us/lglaptop",
    status: "Rejected",
    img: "https://via.placeholder.com/150",
  },
];

const statusClasses = {
  Approved: "bg-[#C9E8E8] text-[#105352]",
  Rejected: "bg-[#F3D4D1] text-[#70241D]",
};

const renderRequestRow = (
  row,
  columns,
  selectedRows,
  handleRowSelect,
  onCheckClick,
  onCancelClick
) => {
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
                <>
                  <img
                    src={row.img}
                    alt={row.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{row.name}</span>
                </>
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
              ) : column.field === "productLink" ? (
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

const RequestsTable = () => {
  const handleStatusChange = (id, newStatus) => {
    console.log(`Status of request with ID ${id} changed to ${newStatus}`);
    // Update the status in your state or perform any other action
  };

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
      tableId="influencerRequestTable"
      datepicker={false}
      initialColumns={initialRequestColumns}
      data={requestsData}
      onSearch={(query) => console.log("Search:", query)}
      renderRow={(row, columns, selectedRows, handleRowSelect) =>
        renderRequestRow(
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

export default RequestsTable;
