"use client";
import React from "react";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import DataTable from "@/src/components/Table/DataTable";
import { LiaTimesSolid } from "react-icons/lia";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";

const initialDraftColumns = [
  {
    id: 1,
    label: "Deals",
    field: "deals",
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
    label: "Preview Link",
    field: "previewLink",
    visible: true,
    locked: false,
  },
  {
    id: 5,
    label: "Action",
    field: "actions",
    visible: true,
    locked: false,
    sortable: false,
    filterable: false,
  },
];

const draftsData = [
  {
    id: 1,
    deals: "T-Shirt",
    date: "13/05/2024",
    category: "-",
    previewLink: "balajinnant.com",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    deals: "Shoes",
    date: "22/05/2024",
    category: "Footwear",
    previewLink: "-",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    deals: "Long Shoes",
    date: "15/06/2024",
    category: "-",
    previewLink: "project.com/user849",
    img: "https://via.placeholder.com/150",
  },
  // Add more draft data as needed
];

const renderDraftRow = (row, columns, selectedRows, handleRowSelect) => {
  const router = useRouter();
  const navigate = useDynamicNavigate();
  const handlePencilClick = () => {
    const allowedUserTypes = ["brand", "agency"];
    navigate("/influencers/manage-deals?edit=true", allowedUserTypes);
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
                column.field === "deals" ? "flex items-center space-x-2" : ""
              }`}
            >
              {column.field === "deals" ? (
                <>
                  <img
                    src={row.img}
                    alt={row.deals}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{row.deals}</span>
                </>
              ) : column.field === "previewLink" ? (
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
                    className={`hover:text-blue-600  text-[#35353A] ${
                      column.locked ? "cursor-not-allowed" : ""
                    }`}
                  >
                    <LuPencil onClick={handlePencilClick} />
                  </button>
                  <button
                    className={`hover:text-[#C21317] ${
                      column.locked ? "cursor-not-allowed" : ""
                    }`}
                  >
                    <RiDeleteBin6Line />
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

const DraftsTable = () => {
  return (
    <DataTable
      showCheckCancelButtons={false}
      tableId="draftsTable"
      datepicker={false}
      initialColumns={initialDraftColumns}
      data={draftsData}
      onSearch={(query) => console.log("Search:", query)}
      renderRow={(row, columns, selectedRows, handleRowSelect) =>
        renderDraftRow(row, columns, selectedRows, handleRowSelect)
      }
    />
  );
};

export default DraftsTable;
