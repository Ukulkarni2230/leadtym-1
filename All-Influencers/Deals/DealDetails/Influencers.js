import DataTable from "@/src/components/Table/DataTable";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import React, { useState } from "react";

const influencersData = [
  {
    id: 1,
    name: "Albert Flores",
    date: "13/05/2024",
    category: "T-Shirt",
    status: "Delivered",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Esther Howard",
    date: "22/05/2024",
    category: "Footwear",
    status: "In process",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    date: "15/06/2024",
    category: "Footwear",
    status: "On Hold",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Jacob Jones",
    date: "15/06/2024",
    category: "Electronics",
    status: "Awaiting",
    img: "https://via.placeholder.com/150",
  },
];

const statusClasses = {
  Delivered: "bg-[#C9E8E8] text-[#105352]",
  "In process": "bg-[#CBDCF9] text-[#103680]",
  "On Hold": "bg-[#FFF3DD] text-[#AA8345]",
  Awaiting: "bg-[#E6DD0033] text-[#A48310]",
};

const initialColumns = [
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
  {
    id: 3,
    label: "Category",
    field: "category",
    visible: true,
    locked: false,
  },
  {
    id: 4,
    label: "Status",
    field: "status",
    visible: true,
    locked: false,
  },
];

const renderInfluencerRow = (
  row,
  columns,
  selectedRows,
  handleRowSelect,
  handleStatusChange,
  toggleDrawer
) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [status, setStatus] = useState(row.status);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleStatusClick = (newStatus) => {
    setStatus(newStatus);
    handleStatusChange(row.id, newStatus);
    handlePopoverClose();
  };

  return (
    <tr
      key={row.id}
      className={`${selectedRows?.includes(row.id) ? "bg-[#ECECED]" : ""}`}
    >
      <td>
        <div className="py-3 pl-5">
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

const Influencers = () => {
  const [selected, setSelected] = useState([]);
  const handleSelect = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((sid) => sid !== id)
        : [...prevSelected, id]
    );
  };

  const handleStatusChange = (id, newStatus) => {
    console.log(`Status of influencer with ID ${id} changed to ${newStatus}`);
    // Update the status in your state or perform any other action
  };

  const toggleDrawer = (open) => () => {
    // Handle drawer toggle here
  };

  return (
    <div>
      <DataTable
        datepicker={false}
        tableId="influencersTable"
        initialColumns={initialColumns}
        data={influencersData}
        onAddItem={toggleDrawer(true)}
        onSearch={(query) => console.log("Search:", query)}
        renderRow={(row, columns, selectedRows, handleRowSelect) =>
          renderInfluencerRow(
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

export default Influencers;
