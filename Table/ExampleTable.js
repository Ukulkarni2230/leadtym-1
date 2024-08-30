"use client";
import React from "react";
import DataTable from "./DataTable";
import { FaTrashAlt } from "react-icons/fa";
import ToggleSwitch from "../reuseable/ToggleSwitch";
import CustomCheckbox from "../reuseable/checkbox";
import { RiDeleteBin6Line } from "react-icons/ri";

const initialUserColumns = [
  {
    id: 1,
    label: "User Email",
    field: "userEmail",
    visible: true,
    locked: false,
  },
  {
    id: 2,
  label: "User Name",
    field: "userName",
    visible: true,
    locked: false,
  },
  { id: 3, label: "Role", field: "role", visible: true, locked: false },
  {
    id: 4,
    label: "Add on Date",
    field: "addOnDate",
    visible: true,
    locked: false,
  },
  { id: 5, label: "Status", field: "status", visible: true, locked: false },
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

const userData = [
  {
    id: 1,
    userEmail: "john.doe@example.com",
    userName: "John Doe",
    role: "Marketing Manager",
    addOnDate: "10/05/2024 09:15 am",
    status: true,
  },
  {
    id: 2,
    userEmail: "jane.smith@example.com",
    userName: "Jane Smith",
    role: "Sales Representative",
    addOnDate: "12/05/2024 10:30 am",
    status: false,
  },
  {
    id: 3,
    userEmail: "robert.brown@example.com",
    userName: "Robert Brown",
    role: "Software Engineer",
    addOnDate: "14/05/2024 02:45 pm",
    status: true,
  },
  {
    id: 4,
    userEmail: "emily.davis@example.com",
    userName: "Emily Davis",
    role: "Product Manager",
    addOnDate: "16/05/2024 01:20 pm",
    status: false,
  },
  {
    id: 5,
    userEmail: "michael.johnson@example.com",
    userName: "Michael Johnson",
    role: "HR Specialist",
    addOnDate: "18/05/2024 11:10 am",
    status: true,
  },
  {
    id: 6,
    userEmail: "linda.wilson@example.com",
    userName: "Linda Wilson",
    role: "Finance Analyst",
    addOnDate: "20/05/2024 04:55 pm",
    status: false,
  },
  {
    id: 7,
    userEmail: "david.miller@example.com",
    userName: "David Miller",
    role: "Business Analyst",
    addOnDate: "22/05/2024 08:40 am",
    status: true,
  },
  {
    id: 8,
    userEmail: "susan.taylor@example.com",
    userName: "Susan Taylor",
    role: "Customer Support",
    addOnDate: "24/05/2024 03:35 pm",
    status: true,
  },
  {
    id: 9,
    userEmail: "james.anderson@example.com",
    userName: "James Anderson",
    role: "IT Support",
    addOnDate: "26/05/2024 09:05 am",
    status: false,
  },
  {
    id: 10,
    userEmail: "patricia.thomas@example.com",
    userName: "Patricia Thomas",
    role: "Legal Advisor",
    addOnDate: "28/05/2024 12:25 pm",
    status: true,
  },
];

const renderUserRow = (row, columns, selectedRows, handleRowSelect) => (
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
              column.field === "userEmail" ? "font-bold" : ""
            }`}
          >
            {column.field === "actions" ? (
              <button
                className={`hover:text-red-600 ${
                  column.locked && "w-full mx-auto flex justify-center"
                }`}
              >
                <RiDeleteBin6Line />
              </button>
            ) : column.field === "status" ? (
              <div
                className={`${
                  column.locked && "w-full mx-auto flex justify-center"
                }`}
              >
                <ToggleSwitch
                  label=""
                  // checked={row[column.field]}
                  // onChange={() => handleStatusChange(row.id)}
                  error=""
                  disabled={column.locked}
                />
              </div>
            ) : (
              row[column.field]
            )}
          </div>
        </td>
      ))}
  </tr>
);

const UserTable = () => (
  <DataTable
    btnName={"Add Deal"}
    tableId="userTable"
    initialColumns={initialUserColumns}
    data={userData}
    onAddItem={() => console.log("Add User")}
    onSearch={(query) => console.log("Search:", query)}
    renderRow={renderUserRow}
  />
);

export default UserTable;
