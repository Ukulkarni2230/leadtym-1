"use client";
import React, { useState } from "react";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import DataTable from "@/src/components/Table/DataTable";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { useRouter } from "next/navigation";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";

const initialDealColumns = [
  {
    id: 1,
    label: "Deals",
    field: "deals",
    visible: true,
    locked: false,
  },
  { id: 2, label: "Date", field: "date", visible: true, locked: false },
  {
    id: 3,
    label: "Product Category",
    field: "productCategory",
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
  { id: 5, label: "Status", field: "status", visible: true, locked: false },
  {
    id: 6,
    label: "Influencers",
    field: "influencers",
    visible: true,
    locked: false,
  },
  {
    id: 7,
    label: "Action",
    field: "action",
    visible: true,
    locked: false,
    sortable: false,
    filterable: false,
  },
];

const dealData = [
  {
    id: 1,
    deals: { name: "T-pShirt", img: "/assets/deals/tshirt.png" },
    date: "13/05/2024",
    productCategory: "T-Shirt",
    previewLink: "balajinnant.com",
    status: "Delivered",
    influencers: [
      "/assets/avtars/a1.png",
      "/assets/avtars/a2.png",
      "/assets/avtars/a3.png",
      "/assets/avtars/a4.png",
    ],
  },
  {
    id: 2,
    deals: { name: "Shoes", img: "/assets/deals/shoes.png" },
    date: "22/05/2024",
    productCategory: "Footwear",
    previewLink: "project.com",
    status: "In process",
    influencers: [
      "/assets/avtars/a1.png",
      "/assets/avtars/a2.png",
      "/assets/avtars/a3.png",
      "/assets/avtars/a4.png",
      "/assets/avtars/a5.png",
    ],
  },
  {
    id: 3,
    deals: { name: "Long Shoes", img: "/assets/deals/longshoes.png" },
    date: "15/06/2024",
    productCategory: "Footwear",
    previewLink: "project.com/us/longshoes",
    status: "On Hold",
    influencers: ["/assets/avtars/a2.png", "/assets/avtars/a3.png"],
  },
  {
    id: 4,
    deals: { name: "Headphone", img: "/assets/deals/headphone.png" },
    date: "15/06/2024",
    productCategory: "Electronics",
    previewLink: "project.com/us/headphone",
    status: "Cancelled",
    influencers: [
      "/assets/avtars/a1.png",
      "/assets/avtars/a2.png",
      "/assets/avtars/a3.png",
      "/assets/avtars/a4.png",
    ],
  },
  {
    id: 5,
    deals: { name: "Mithra B", img: "/assets/deals/mithrab.png" },
    date: "15/06/2024",
    productCategory: "T-Shirt",
    previewLink: "project.com/us/mithrab",
    status: "Delivered",
    influencers: [
      "/assets/avtars/a2.png",
      "/assets/avtars/a3.png",
      "/assets/avtars/a4.png",
      "/assets/avtars/a5.png",
    ],
  },
  {
    id: 6,
    deals: { name: "One Piece Dress", img: "/assets/deals/onepiecedress.png" },
    date: "15/06/2024",
    productCategory: "Dress",
    previewLink: "project.com/us/onepiecedress",
    status: "Cancelled",
    influencers: ["/assets/avtars/a1.png", "/assets/avtars/a2.png"],
  },
  {
    id: 7,
    deals: { name: "Gloves", img: "/assets/deals/gloves.png" },
    date: "15/06/2024",
    productCategory: "Hand Gloves",
    previewLink: "project.com/us/gloves",
    status: "Delivered",
    influencers: [
      "/assets/avtars/a3.png",
      "/assets/avtars/a4.png",
      "/assets/avtars/a5.png",
    ],
  },
  {
    id: 8,
    deals: { name: "T-shirt with Model", img: "/assets/deals/tshirtmodel.png" },
    date: "15/06/2024",
    productCategory: "T-Shirt",
    previewLink: "project.com/us/tshirtmodel",
    status: "On Hold",
    influencers: [
      "/assets/avtars/a1.png",
      "/assets/avtars/a2.png",
      "/assets/avtars/a3.png",
      "/assets/avtars/a4.png",
      "/assets/avtars/a5.png",
    ],
  },
  {
    id: 9,
    deals: { name: "T-Shirt Jersey", img: "/assets/deals/tshirtjersey.png" },
    date: "15/06/2024",
    productCategory: "Jersey",
    previewLink: "project.com/us/tshirtjersey",
    status: "Awaiting",
    influencers: [
      "/assets/avtars/a1.png",
      "/assets/avtars/a2.png",
      "/assets/avtars/a3.png",
    ],
  },
  {
    id: 10,
    deals: { name: "Mobile Brand", img: "/assets/deals/mobilebrand.png" },
    date: "22/01/2024",
    productCategory: "Electronics",
    previewLink: "project.com/us/mobilebrand",
    status: "Delivered",
    influencers: ["/assets/avtars/a2.png", "/assets/avtars/a3.png"],
  },
];

const renderDealRow = (
  row,
  columns,
  selectedRows,
  handleRowSelect,
  handleStatusChange,
  router,
  toggleDrawer
) => {
  const navigate = useDynamicNavigate();

  const handleNavigation = (source) => {
    if (source === "influencers") {
      localStorage.setItem("navigationSource", "true");
    }
    const allowedUserTypes = ["brand", "agency"];

    navigate("/influencers/manage-deals/deal-overview", allowedUserTypes);
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
              className={`px-2 whitespace-nowrap py-3 text-[12px] sm:text-sm 2xl:text-base  text-[#35353A] 
              `}
            >
              {column.field === "deals" ? (
                <div
                  className="flex items-center space-x-2 font-bold cursor-pointer"
                  onClick={() => handleNavigation("deals")}
                >
                  <img
                    src={"https://via.placeholder.com/150"}
                    alt={row.deals.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{row.deals.name}</span>
                </div>
              ) : column.field === "action" ? (
                <div
                  className={`flex space-x-1 text-base items-center sm:text-[17px] ${
                    column.locked && "flex justify-center w-full"
                  }`}
                >
                  <button
                    className={`hover:text-blue-600 ${
                      column.locked ? "cursor-not-allowed" : ""
                    }`}
                    onClick={column.locked ? null : toggleDrawer(true)}
                  >
                    <LuPencil />
                  </button>
                  <button
                    className={`hover:text-red-600 ${
                      column.locked ? "cursor-not-allowed" : ""
                    }`}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              ) : column.field === "status" ? (
                <div
                  className={` ${
                    column.locked ? "flex justify-center w-full" : "flex w-full"
                  }`}
                >
                  <span
                    className={`px-3 h-[28px] rounded-full items-center flex text-xs sm:text-sm 2xl:text-base ${
                      row[column.field] === "Delivered"
                        ? "bg-[#C9E8E8] text-[#105352]"
                        : row[column.field] === "In process"
                        ? "bg-[#CBDCF9] text-[#103680]"
                        : row[column.field] === "On Hold"
                        ? "bg-[#FFF3DD] text-[#AA8345]"
                        : row[column.field] === "Cancelled"
                        ? "bg-[#A30D111A] text-[#C21317]"
                        : row[column.field] === "Awaiting"
                        ? "bg-[#E6DD0033] text-[#A48310]"
                        : "bg-gray-500"
                    }`}
                  >
                    {row[column.field]}
                  </span>
                </div>
              ) : column.field === "influencers" ? (
                <div
                  className="flex -space-x-3 cursor-pointer"
                  onClick={() => handleNavigation("influencers")}
                >
                  {row[column.field].slice(0, 3).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Influencer"
                      className="w-8 h-8 shadow shadow-[#5E17EB26] rounded-full border-2 border-white"
                    />
                  ))}
                  {row[column.field].length > 3 && (
                    <span className="w-8 h-8 flex shadow shadow-[#5E17EB26] items-center justify-center bg-[#ECECED] rounded-full border-2 border-white  text-[#35353A] font-bold text-sm">
                      +{row[column.field].length - 3}
                    </span>
                  )}
                </div>
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
              ) : (
                row[column.field]
              )}
            </div>
          </td>
        ))}
    </tr>
  );
};

const DealsTable = ({ toggleDrawer }) => {
  const router = useRouter();

  const handleStatusChange = (id, newStatus) => {
    console.log(`Status of deal with ID ${id} changed to ${newStatus}`);
    // Update the status in your state or perform any other action
  };

  return (
    <DataTable
      btnName="Add Deal"
      tableId="dealsTable"
      initialColumns={initialDealColumns}
      data={dealData}
      onAddItem={toggleDrawer(true)}
      onSearch={(query) => console.log("Search:", query)}
      renderRow={(row, columns, selectedRows, handleRowSelect) =>
        renderDealRow(
          row,
          columns,
          selectedRows,
          handleRowSelect,
          handleStatusChange,
          router,
          toggleDrawer
        )
      }
    />
  );
};

export default DealsTable;
