"use client";
import React from "react";

import { FaTrashAlt } from "react-icons/fa";
import DataTable from "../../Table/DataTable";
import CustomCheckbox from "../../reuseable/checkbox";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";
import { RiDeleteBin6Line } from "react-icons/ri";

const initialTicketColumns = [
  {
    id: 1,
    label: "Ticket Id",
    field: "ticketId",
    visible: true,
    locked: false,
  },
  {
    id: 2,
    label: "Subject",
    field: "subject",
    visible: true,
    locked: false,
  },
  {
    id: 3,
    label: "Start Date",
    field: "startDate",
    visible: true,
    locked: false,
  },
  {
    id: 4,
    label: "End Date",
    field: "endDate",
    visible: true,
    locked: false,
  },
  {
    id: 5,
    label: "Status",
    field: "status",
    visible: true,
    locked: false,
  },
  {
    id: 6,
    label: "Actions",
    field: "actions",
    visible: true,
    locked: false,
    sortable: false,
    filterable: false,
  },
];

const ticketData = [
  {
    id: 1,
    ticketId: "#15633",
    subject: "Account Issue",
    startDate: "13/05/2024 11:28 am",
    endDate: "13/05/2024 11:28 am",
    status: "Open",
  },
  {
    id: 2,
    ticketId: "#15683",
    subject: "Wallet Transfer",
    startDate: "22/05/2024 12:56 pm",
    endDate: "22/05/2024 12:56 pm",
    status: "Replied",
  },
  {
    id: 3,
    ticketId: "#15338",
    subject: "Create Campaign",
    startDate: "15/06/2024 14:07 am",
    endDate: "15/06/2024 14:07 am",
    status: "In Process",
  },
  {
    id: 4,
    ticketId: "#15803",
    subject: "Manage Campaign",
    startDate: "15/06/2024 15:32 pm",
    endDate: "15/06/2024 15:32 pm",
    status: "Rejected",
  },
  // Add more ticket data as needed
];

const renderTicketRow = (row, columns, selectedRows, handleRowSelect) => {
  const navigate = useDynamicNavigate();

  return (
    <tr
      key={row.id}
      className={`${selectedRows?.includes(row.id) ? "bg-[#ECECED]" : ""}`}
    >
      <td>
        <div className="py-3 flex justify-center">
          <CustomCheckbox
            label=""
            // checked={selectedRows?.includes(row.id)}
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
                column.field === "ticketId" ? "font-bold cursor-pointer" : ""
              } ${column.field === "subject" ? "cursor-pointer" : ""}`}
              onClick={() => {
                if (column.field === "ticketId" || column.field === "subject") {
                  navigate("/tickets/status");
                }
              }}
            >
              {column.field === "actions" ? (
                <button
                  className={`hover:text-red-600 text-lg ${
                    column.locked && "w-full mx-auto flex justify-center"
                  }`}
                >
                  <RiDeleteBin6Line />
                </button>
              ) : column.field === "status" ? (
                <span
                  className={`px-2 py-1 rounded-full text-[12px] w-[100px] h-[28px] truncate flex justify-center sm:text-sm 2xl:text-base ${
                    row[column.field] === "Open"
                      ? "bg-[#199C4D1A] text-[#199C4D]"
                      : row[column.field] === "Replied"
                      ? "bg-[#CBDCF9] text-[#103680]"
                      : row[column.field] === "In Process"
                      ? "bg-[#E6DD0033] text-[#A48310]"
                      : row[column.field] === "Rejected"
                      ? "bg-[#F3D4D1] text-[#70241D]"
                      : ""
                  }`}
                >
                  {row[column.field]}
                </span>
              ) : (
                row[column.field]
              )}
            </div>
          </td>
        ))}
    </tr>
  );
};

const TicketTable = () => {
  const navigate = useDynamicNavigate();

  return (
    <DataTable
      btnName={"Add Ticket"}
      tableId="ticketTable"
      initialColumns={initialTicketColumns}
      data={ticketData}
      onAddItem={() => navigate("/tickets/create-ticket")}
      onSearch={(query) => console.log("Search:", query)}
      renderRow={renderTicketRow}
    />
  );
};

export default TicketTable;
