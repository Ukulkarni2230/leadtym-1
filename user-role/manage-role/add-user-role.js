"use client";

import React from "react";
import Input from "@/src/components/reuseable/Input";
import SlidePanel from "@/src/utils/SlidePanel";
import useFetchUserRoleModules from "@/src/hooks/user-mangagement/useFetchUserRoleModules";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import useAddRole from "@/src/hooks/user-mangagement/useAddRole";
import useFetchRoleDetails from "@/src/hooks/user-mangagement/useFetchRoleDetails";
import { FaSpinner } from "react-icons/fa";

const AddRole = ({ isOpen, toggleDrawer, onRoleAdded, roleId }) => {
  const { modules, loading: modulesLoading, error } = useFetchUserRoleModules();
  const { roleDetails } = useFetchRoleDetails(roleId);
  const {
    checkboxState,
    roleName,
    roleNameError,
    isFormValid,
    handleCheckboxChange,
    handleRoleNameChange,
    handleAddRole,
    loading,
    isFormChanged,
  } = useAddRole(() => {
    onRoleAdded();
    toggleDrawer(false)();
  }, roleDetails);

  const halfIndex = Math.ceil(modules.length / 2);
  const leftModules = modules.slice(0, halfIndex);
  const rightModules = modules.slice(halfIndex);

  return (
    <>
      {isOpen && (
        <SlidePanel
          open={isOpen}
          onClose={toggleDrawer(false)}
          name={roleId ? "Update Role" : "Add Role"}
        >
          <div className="p-2 sm:p-6">
            <div>
              <p className="text-[#101018] text-sm sm:text-base 2xl:text-lg font-semibold">
                Role Name
              </p>
              <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  size="small"
                  label="Role Name"
                  placeholder="Enter Role Name"
                  value={roleName}
                  onChange={handleRoleNameChange}
                  error={!!roleNameError}
                  helperText={roleNameError}
                  maxLength={20}
                  required
                  maxSpaces={0}
                />
              </div>
            </div>

            <div className="mt-6">
              {modulesLoading && (
                <div className="text-center">Loading modules...</div>
              )}
              {error && (
                <div className="text-red-500 font-semibold text-center">
                  Something went wrong!
                </div>
              )}
              {!modulesLoading && !error && (
                <>
                  <div className="hidden lg:block">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b mb-4 pb-4 border-gray-200 text-[12px] 2xl:text-sm text-[#101018] font-semibold">
                          <th className="py-2">Select the Option</th>
                          <th className="py-2 text-center">Read</th>
                          <th className="py-2 text-center">Write</th>
                          <th className="py-2">Select the Option</th>
                          <th className="py-2 text-center">Read</th>
                          <th className="py-2 text-center">Write</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leftModules.map((module, index) => (
                          <tr
                            className="py-4 border-b border-gray-200"
                            key={module._id}
                          >
                            <td className="py-4 text-sm 2xl:text-base text-[#35353A]">
                              {module.name}
                            </td>
                            <td className="py-4">
                              <div className="flex justify-center">
                                <CustomCheckbox
                                  checked={
                                    checkboxState[module._id]?.read || false
                                  }
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange(
                                      module._id,
                                      "read",
                                      checked
                                    )
                                  }
                                  disabled={
                                    checkboxState[module._id]?.write || false
                                  }
                                />
                              </div>
                            </td>
                            <td className="py-4 text-center">
                              <div className="flex justify-center">
                                <CustomCheckbox
                                  checked={
                                    checkboxState[module._id]?.write || false
                                  }
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange(
                                      module._id,
                                      "write",
                                      checked
                                    )
                                  }
                                />
                              </div>
                            </td>
                            {rightModules[index] && (
                              <>
                                <td className="py-4 text-sm 2xl:text-base text-[#35353A]">
                                  {rightModules[index].name}
                                </td>
                                <td className="py-4 text-center text-sm 2xl:text-base text-[#35353A]">
                                  <div className="flex justify-center">
                                    <CustomCheckbox
                                      checked={
                                        checkboxState[rightModules[index]._id]
                                          ?.read || false
                                      }
                                      onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                          rightModules[index]._id,
                                          "read",
                                          checked
                                        )
                                      }
                                      disabled={
                                        checkboxState[rightModules[index]._id]
                                          ?.write || false
                                      }
                                    />
                                  </div>
                                </td>
                                <td className="py-4 text-center text-sm 2xl:text-base text-[#35353A]">
                                  <div className="flex justify-center">
                                    <CustomCheckbox
                                      checked={
                                        checkboxState[rightModules[index]._id]
                                          ?.write || false
                                      }
                                      onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                          rightModules[index]._id,
                                          "write",
                                          checked
                                        )
                                      }
                                    />
                                  </div>
                                </td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="block lg:hidden space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-full text-start">
                        <label className="text-[12px] font-semibold">
                          Select the Option
                        </label>
                      </div>
                      <div className="w-1/4 text-start">
                        <label className="text-[12px] font-semibold">
                          Read
                        </label>
                      </div>
                      <div className="w-1/4 text-start">
                        <label className="text-[12px] font-semibold">
                          Write
                        </label>
                      </div>
                    </div>
                    {modules.map((module) => (
                      <div
                        key={module._id}
                        className="flex border-b pb-2 items-center"
                      >
                        <div className="w-full ">
                          <p className="py-2 text-[12px]">{module.name}</p>
                        </div>
                        <div className="w-1/4 text-center">
                          <CustomCheckbox
                            checked={checkboxState[module._id]?.read || false}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(module._id, "read", checked)
                            }
                            disabled={checkboxState[module._id]?.write || false}
                          />
                        </div>
                        <div className="w-1/4 text-center">
                          <CustomCheckbox
                            checked={checkboxState[module._id]?.write || false}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(module._id, "write", checked)
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
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
                className={`py-1.5 px-6 ${
                  isFormValid && isFormChanged()
                    ? "gradient-bg text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                } rounded-full`}
                disabled={!isFormValid || !isFormChanged() || loading}
                onClick={handleAddRole}
              >
                {loading ? (
                  <FaSpinner className="animate-spin " />
                ) : roleId ? (
                  "Update Role"
                ) : (
                  "Add Role"
                )}
              </button>
            </div>
          </div>
        </SlidePanel>
      )}
    </>
  );
};

export default AddRole;
