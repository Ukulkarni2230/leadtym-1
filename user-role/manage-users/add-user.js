"use client";

import React, { useEffect, useState } from "react";
import Input from "@/src/components/reuseable/Input";
import SelectInput from "@/src/components/reuseable/SelectInput";
import SlidePanel from "@/src/utils/SlidePanel";
import useFetchUserRoles from "@/src/hooks/user-mangagement/useFetchUserRoles";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";
import useAddUser from "@/src/hooks/user-mangagement/useAddUser";
import useFetchChildUserDetails from "@/src/hooks/user-mangagement/useFetchChildUserDetails";
import { FaSpinner } from "react-icons/fa";

const AddUser = ({ isOpen, toggleDrawer, onUserAdded, userId }) => {
  const {
    roles,
    loading: rolesLoading,
    error: rolesError,
    fetchRoles,
  } = useFetchUserRoles();
  const { userDetails } = useFetchChildUserDetails(userId);
  const childUserDetails = userDetails;
  const {
    formData,
    errors,
    isFormValid,
    loading,
    handleChange,
    handleAddUser,
    isFormChanged,
  } = useAddUser(() => {
    onUserAdded();
    toggleDrawer(false)();
  }, childUserDetails);

  const [roleOptions, setRoleOptions] = useState([]);
  const navigate = useDynamicNavigate();

  useEffect(() => {
    if (roles.length > 0) {
      const activeRoles = roles
        .filter((role) => role.status)
        .map((role) => ({
          value: role.id,
          label: role.role_name,
        }));
      setRoleOptions(activeRoles);
    } else {
      setRoleOptions([]);
    }
  }, [roles]);

  const handleAddRoleClick = () => {
    navigate("/manage-role?openRoleModal=true");
  };

  const isEditing = Boolean(userId);
  return (
    <>
      {isOpen && (
        <SlidePanel
          open={isOpen}
          onClose={toggleDrawer(false)}
          name={isEditing ? "Update User" : "Add User"}
        >
          <div className="p-2 sm:p-6">
            <div>
              <p className="text-[#101018] text-sm sm:text-base 2xl:text-lg font-semibold">
                Name
              </p>
              <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Input
                  label="First Name *"
                  placeholder="Your First Name"
                  size="small"
                  padding="4px 0px"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  maxLength={20}
                  required
                  maxSpaces={0}
                />
                <Input
                  label="Middle Name"
                  placeholder="Your Middle Name"
                  size="small"
                  padding="4px 0px"
                  value={formData.middleName}
                  onChange={(e) => handleChange("middleName", e.target.value)}
                  error={!!errors.middleName}
                  helperText={errors.middleName}
                  maxLength={20}
                  maxSpaces={0}
                />
                <Input
                  label="Last Name *"
                  placeholder="Your Last Name"
                  size="small"
                  padding="4px 0px"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  maxLength={20}
                  required
                  maxSpaces={0}
                />
              </div>
            </div>
            <div className="mt-6">
              <p className="text-[#101018] text-sm sm:text-base 2xl:text-lg font-semibold">
                Contact Info
              </p>
              <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number *"
                  placeholder="Your Phone Number"
                  size="small"
                  maxLength={10}
                  padding="4px 0px"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  numeric
                />
                <Input
                  label="Email id *"
                  placeholder="Your Email id"
                  size="small"
                  padding="4px 0px"
                  value={formData.email}
                  maxLength={40}
                  onChange={(e) => handleChange("email", e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                  maxSpaces={0}
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[#101018] text-sm sm:text-base 2xl:text-lg font-semibold">
                User Role *
              </p>
              <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {roleOptions.length > 0 ? (
                  <SelectInput
                    label="User Role"
                    placeholder="Select User Role"
                    options={roleOptions}
                    value={formData.roleId}
                    onChange={(value) => handleChange("roleId", value)}
                    error={!!errors.roleId}
                    helperText={errors.roleId}
                    size="small"
                    padding="4px"
                  />
                ) : (
                  <div>
                    <p>No active roles found.</p>
                    <button
                      className="mt-2 py-1.5 px-6 gradient-bg text-white rounded-full"
                      onClick={handleAddRoleClick}
                    >
                      Add Role
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-8">
              <button
                className="rounded-full border-[#6E6E71] text-[#6E6E71] py-1.5 px-6
                  hover:border-purple-700 hover:text-black text-[14px] sm:text-[16px] 2xl:text-[18px] font-normal border"
                onClick={toggleDrawer(false)}
              >
                Cancel
              </button>
              <button
                className={`py-1.5 px-6 rounded-full text-white ${
                  isFormValid && isFormChanged()
                    ? "gradient-bg"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                } flex items-center justify-center`}
                disabled={!isFormValid || !isFormChanged() || loading}
                onClick={handleAddUser}
              >
                {loading ? (
                  <FaSpinner className="animate-spin " /> // Add spinner with animation
                ) : isEditing ? (
                  "Update User"
                ) : (
                  "Add User"
                )}
              </button>
            </div>
          </div>
        </SlidePanel>
      )}
    </>
  );
};

export default AddUser;
