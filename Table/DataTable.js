import React, { useState, useEffect } from "react";
import TableToolbar from "./TableToolbar/TableToolbar";
import { FaFilter } from "react-icons/fa";
import { HiArrowsUpDown } from "react-icons/hi2";
import CustomCheckbox from "../reuseable/checkbox";
import { useFilterAndSort } from "@/src/hooks/useFilterAndSort";
import { IoMdLock } from "react-icons/io";
import { MdLockOpen } from "react-icons/md";
import TablePagination from "@mui/material/TablePagination";
import { useColumns } from "@/src/hooks/useColumns";

const DataTable = ({
  handleDownload,
  btnName,
  datepicker,
  tableId,
  initialColumns,
  handleDeleteSelected,
  data,
  onAddItem,
  onSearch,
  renderRow,
  showCheckCancelButtons,
  onCheckClick,
  onCancelClick,
  handleEdit,
  handleDelete,
  handleToggleStatus,
  loadingStatus,
  selectedRows,
  onRowSelect,
  count,
  showDelete = true,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  showPagination,
  fetchData,
  startDate,
  endDate,
  onDateChange,
  fieldsWithIcons = ["actions", "status"], // Default fields to hide icons
}) => {
  const { columns, handleColumnsChange } = useColumns(tableId, initialColumns);
  const [selectAll, setSelectAll] = useState(false);
  const { filter, setFilter, sortField, handleFilterClick, handleSortClick } =
    useFilterAndSort();
  const [filterActive, setFilterActive] = useState("");
  const [sortActive, setSortActive] = useState("");
  const [tableData, setTableData] = useState(data);

  const [currentSortField, setCurrentSortField] = useState("");
  const [currentSortOrder, setCurrentSortOrder] = useState("");

  useEffect(() => {
    setTableData(data);
  }, [data]);

  useEffect(() => {
    setSelectAll(
      selectedRows?.length > 0 && selectedRows?.length === tableData?.length
    );
  }, [selectedRows, tableData]);

  useEffect(() => {
    if (typeof onRowSelect === "function") {
      onRowSelect([]);
    }
    setSelectAll(false);
  }, [page]);

  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    const newSelectedRows = checked ? tableData?.map((row) => row?.id) : [];
    onRowSelect(newSelectedRows);
  };

  const handleFilterIconClick = (field) => {
    if (!tableData?.length) return;
    setFilterActive((prev) => (prev === field ? "" : field));
    handleFilterClick(field);
  };

  const handleSortIconClick = (field) => {
    if (!tableData?.length) return;
    let sortOrder = "asc";
    if (currentSortField === field) {
      if (currentSortOrder === "asc") {
        sortOrder = "desc";
      } else if (currentSortOrder === "desc") {
        sortOrder = "";
      }
    }
    setCurrentSortField(sortOrder ? field : "");
    setCurrentSortOrder(sortOrder);
    setSortActive(sortOrder ? field : "");

    fetchData(
      page + 1,
      rowsPerPage,
      "",
      "",
      field,
      sortOrder,
      startDate,
      endDate
    );
  };

  const handleLockClick = (field) => {
    if (!tableData?.length) return;
    const updatedColumns = columns?.map((column) =>
      column.field === field ? { ...column, locked: !column?.locked } : column
    );
    handleColumnsChange(updatedColumns);
  };

  const handleClearSelections = () => {
    onRowSelect([]);
    setSelectAll(false);
  };

  return (
    <div className="p-2 sm:p-6">
      <TableToolbar
        showDelete={showDelete}
        datepicker={datepicker}
        handleDownload={handleDownload}
        btnName={btnName}
        handleDeleteSelected={handleDeleteSelected}
        columns={columns}
        tableId={tableId}
        setColumns={handleColumnsChange}
        onSearch={onSearch}
        selectedCount={selectedRows?.length}
        setFilterActive={setFilterActive}
        filter={filter}
        setFilter={setFilter}
        onAddItem={onAddItem}
        handleFilterIconClick={handleFilterIconClick}
        onCancelClick={() => {
          onCancelClick();
          handleClearSelections();
        }}
        onCheckClick={() => {
          onCheckClick();
          handleClearSelections();
        }}
        showCheckCancelButtons={showCheckCancelButtons}
        onDateChange={onDateChange}
      />
      <div className="">
        <div className="rounded-md mt-4 overflow-x-auto no-scrollbar">
          <table className="min-w-full divide-y rounded-md shadow-md bg-white divide-[#D9D9DC]">
            <thead>
              <tr>
                {showDelete && (
                  <th>
                    <div className="py-4 w-[40px] mx-auto flex justify-center">
                      <CustomCheckbox
                        label=""
                        checked={selectAll}
                        onCheckedChange={handleSelectAll}
                        required={false}
                        errorText=""
                        id="select-all-checkbox"
                        className="!rounded-[2.5px] !h-[16px] !w-[16px]"
                      />
                    </div>
                  </th>
                )}
                {columns
                  .filter((column) => column?.visible)
                  ?.map((column) => (
                    <th
                      key={column?.id}
                      scope="col"
                      className={` ${
                        column?.locked ? "border-x border-[#D9D9DC]" : ""
                      } ${
                        column?.field === "actions" &&
                        ["optimizationsRulesTable", "campaignTable"]?.includes(
                          tableId
                        )
                          ? "sticky right-0 bg-white  z-10 "
                          : ""
                      } `}
                    >
                      <div
                        className={`transition flex justify-between items-center gap-1 font-semibold min-w-28 sm:w-auto truncate text-[10px] sm:text-[12px] 2xl:text-sm duration-300 relative px-2 py-4 text-left text-xs text-[#101018] tracking-wider group ${
                          tableData?.length
                            ? "hover:bg-[#ECECED] hover:text-[#101018]"
                            : "pointer-events-none"
                        }`}
                      >
                        <span
                          className={`block text-[#101018] font-semibold text-[10px] sm:text-[12px] 2xl:text-[14px] w-auto truncate ${
                            !column?.locked && ""
                          }`}
                        >
                          {column?.label}
                        </span>
                        <div className="flex items-center transition-opacity duration-300 space-x-1">
                          {column?.locked ? (
                            <IoMdLock
                              className="inline-block cursor-pointer text-[18px] text-[#35353A]"
                              onClick={() => handleLockClick(column?.field)}
                            />
                          ) : (
                            <>
                              <MdLockOpen
                                className={`inline-block cursor-pointer text-[18px] text-[#35353A] ${
                                  tableData?.length
                                    ? "group-hover:opacity-100 opacity-0"
                                    : "opacity-0 cursor-not-allowed"
                                }`}
                                onClick={() => handleLockClick(column?.field)}
                              />
                              {fieldsWithIcons.includes(column.field) ? null : (
                                <>
                                  <FaFilter
                                    className={`inline-block cursor-pointer ${
                                      filterActive === column?.field
                                        ? "text-blue-500 opacity-100"
                                        : tableData?.length
                                        ? "group-hover:opacity-100 opacity-0 text-[#35353A]"
                                        : "opacity-0 cursor-not-allowed"
                                    }`}
                                    onClick={() =>
                                      handleFilterIconClick(column?.field)
                                    }
                                  />
                                  <HiArrowsUpDown
                                    className={`inline-block text-base cursor-pointer ${
                                      sortActive === column?.field
                                        ? currentSortOrder === "asc"
                                          ? "text-green-500"
                                          : "text-red-500"
                                        : tableData?.length
                                        ? "group-hover:opacity-100 opacity-0 text-[#35353A]"
                                        : "opacity-0 cursor-not-allowed"
                                    }`}
                                    onClick={() =>
                                      handleSortIconClick(column?.field)
                                    }
                                  />
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9D9DC]">
              {tableData?.map((row) =>
                renderRow(
                  row,
                  columns,
                  selectedRows,
                  onRowSelect,
                  handleEdit,
                  handleToggleStatus,
                  loadingStatus,
                  handleDelete
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showPagination && (
        <TablePagination
          component="div"
          count={count}
          page={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    </div>
  );
};

export default DataTable;
