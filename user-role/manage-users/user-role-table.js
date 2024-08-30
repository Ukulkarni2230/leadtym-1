// File: UserRoleTable.jsx
"use client";

import React, { useState, useEffect } from "react";
import DataTable from "@/src/components/Table/DataTable";
import ToggleSwitch from "@/src/components/reuseable/ToggleSwitch";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import ConfirmationModal from "@/src/components/reuseable/ConfirmationModal";
import useDelete from "@/src/hooks/reuable-hook/useDelete";
import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddUser from "./add-user";

import useFetchUsers from "@/src/hooks/user-mangagement/useFetchUsers";
import useDownloadCsv from "@/src/hooks/user-mangagement/useDownloadCsv";

const initialUserColumns = [
  {
    id: 1,
    label: "Email",
    field: "email",
    visible: true,
    locked: false,
  },
  {
    id: 2,
    label: "Name",
    field: "firstName",
    visible: true,
    locked: false,
  },
  { id: 3, label: "Role", field: "role_name", visible: true, locked: false },
  {
    id: 4,
    label: "Added Date",
    field: "createdAt",
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

const renderUserRow = (
  row,
  columns,
  selectedRows,
  handleRowSelect,
  handleDelete,
  handleEdit,
  handleToggleStatus,
  loadingStatus
) => (
  <tr
    key={row.id}
    className={`${selectedRows?.includes(row.id) ? "bg-[#ECECED]" : ""}`}
  >
    <td>
      <div className="py-3 flex justify-center">
        <CustomCheckbox
          label=""
          checked={selectedRows?.includes(row.id)}
          required={false}
          errorText=""
          id={`select-row-checkbox-${row.id}`}
          className="!rounded-[2.5px] !h-[16px] !w-[16px]"
          onCheckedChange={(checked) => handleRowSelect(row.id, checked)}
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
            className={`px-2 whitespace-nowrap py-3 text-[12px] sm:text-sm 2xl:text-base text-[#35353A] ${
              column.field === "email" ? "font-bold" : ""
            }`}
          >
            {column.field === "actions" ? (
              <div className="flex text-lg items-center gap-3">
                <button
                  className={`hover:text-blue-600 ${
                    column.locked ? "pointer-events-none" : ""
                  }`}
                  onClick={() => !column.locked && handleEdit(row.id)}
                >
                  <HiOutlinePencil />
                </button>
                <button
                  className={`hover:text-red-600 ${
                    column.locked ? "pointer-events-none" : ""
                  }`}
                  onClick={() => !column.locked && handleDelete(row.id)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            ) : column.field === "status" ? (
              <div
                className={`${
                  column.locked && "w-full mx-auto flex justify-center"
                }`}
              >
                <ToggleSwitch
                  label=""
                  checked={row[column.field]}
                  loading={loadingStatus[row.id] || false}
                  onChange={() =>
                    !column.locked &&
                    handleToggleStatus(row.id, row[column.field])
                  }
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

const UserRoleTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [editUserId, setEditUserId] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isBulkDeleteModalOpen, setIsBulkDeleteModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { downloadCsv, loading: downloadLoding } =
    useDownloadCsv("download-users-csv");
  const {
    users,
    loading,
    error,
    fetchUsers,
    handleToggleStatus,
    loadingStatus,
    totalUsers,
    latestPayload,
  } = useFetchUsers();
  const [deletePayload, setDeletePayload] = useState(null);

  useEffect(() => {
    fetchUsers(
      page + 1,
      rowsPerPage,
      searchTerm,
      searchField,
      "",
      "",
      startDate,
      endDate
    );
  }, [page, rowsPerPage, searchTerm, searchField, startDate, endDate]);

  const closeModal = () => {
    setSelectedUserId(null);
    setIsBulkDeleteModalOpen(false);
  };

  const {
    data: deleteData,
    loading: deleteLoading,
    error: deleteError,
  } = useDelete(
    selectedUserId ? "user-delete" : "delete-multiple-users",
    deletePayload,
    () => {
      fetchUsers(
        page + 1,
        rowsPerPage,
        searchTerm,
        searchField,
        "",
        "",
        startDate,
        endDate
      );
      setSelectedRows([]);
      closeModal();
    },
    [deletePayload]
  );

  const handleDelete = (id) => {
    setSelectedUserId(id);
  };

  const handleEdit = (id) => {
    setEditUserId(id);
    setIsOpen(true);
  };

  const confirmDelete = () => {
    if (selectedUserId) {
      setDeletePayload({ userId: selectedUserId });
    }
  };

  const confirmDeleteSelected = () => {
    if (selectedRows.length > 0) {
      setDeletePayload({ user_ids: selectedRows });
    }
  };

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
    setEditUserId(null);
  };

  const handleRowSelect = (id, checked) => {
    setSelectedRows((prev) => {
      const updatedSelectedRows = checked
        ? [...prev, id]
        : prev.filter((rowId) => rowId !== id);
      return updatedSelectedRows;
    });
  };

  const handleSelectAllRows = (selected) => {
    setSelectedRows(selected);
  };

  const handleDeleteSelected = () => {
    if (selectedRows.length > 0) {
      setIsBulkDeleteModalOpen(true);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setSelectedRows([]);
  };
  const handleDownload = () => {
    if (users.length == 0 || downloadLoding) return;
    downloadCsv(latestPayload);
  };

  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <>
      <DataTable
        handleDownload={handleDownload}
        btnName={"Add User"}
        handleDeleteSelected={handleDeleteSelected}
        tableId="userTable"
        initialColumns={initialUserColumns}
        data={users}
        onAddItem={() => {
          setIsOpen(true);
        }}
        onSearch={(query, field) => {
          setSearchTerm(query);
          setSearchField(field);
        }}
        renderRow={(row, columns, selectedRows, onRowSelect) =>
          renderUserRow(
            row,
            columns,
            selectedRows,
            handleRowSelect,
            handleDelete,
            handleEdit,
            handleToggleStatus,
            loadingStatus
          )
        }
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggleStatus={handleToggleStatus}
        loadingStatus={loadingStatus}
        selectedRows={selectedRows}
        onRowSelect={handleSelectAllRows}
        count={totalUsers}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        showPagination={users.length > 0}
        fetchData={fetchUsers}
        onDateChange={handleDateChange}
      />
      {users.length === 0 && (
        <div className="text-center">
          <p>No users found. Please add a user.</p>
          <button
            className="mt-2 py-[5px] px-4 gradient-bg font-semibold text-white rounded-full"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add User
          </button>
        </div>
      )}
      {isOpen && (
        <AddUser
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          onUserAdded={() =>
            fetchUsers(
              page + 1,
              rowsPerPage,
              searchTerm,
              searchField,
              "",
              "",
              startDate,
              endDate
            )
          }
          userId={editUserId}
        />
      )}
      <ConfirmationModal
        open={!!selectedUserId}
        onClose={() => setSelectedUserId(null)}
        onConfirm={confirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this user?"
        loading={deleteLoading}
        icon={<RiDeleteBin6Line size={30} className="text-red-500" />}
      />
      <ConfirmationModal
        open={isBulkDeleteModalOpen}
        onClose={() => setIsBulkDeleteModalOpen(false)}
        onConfirm={confirmDeleteSelected}
        title="Confirm Deletion"
        message="Are you sure you want to delete the selected users?"
        loading={deleteLoading}
        icon={<RiDeleteBin6Line size={30} className="text-red-500" />}
      />
    </>
  );
};

export default UserRoleTable;
