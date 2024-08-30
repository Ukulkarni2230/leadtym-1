import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { useUser } from "../user-service/useUser";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useAddRole = (onSuccess, initialRoleDetails = null) => {
  const { postApiCall } = useApi();
  const [checkboxState, setCheckboxState] = useState({});
  const [roleName, setRoleName] = useState("");
  const [roleNameError, setRoleNameError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userDetails } = useUser();
  const [initialState, setInitialState] = useState(null);

  useEffect(() => {
    if (initialRoleDetails) {
      const initialCheckboxState = {};
      initialRoleDetails.userRoleModulePermissions.forEach((perm) => {
        initialCheckboxState[perm.module_id] = {
          read: perm.permission === "read" || perm.permission === "write",
          write: perm.permission === "write",
        };
      });
      const initialData = {
        roleName: initialRoleDetails.role_name,
        checkboxState: initialCheckboxState,
      };
      setRoleName(initialData.roleName);
      setCheckboxState(initialData.checkboxState);
      setInitialState(initialData);
    }
  }, [initialRoleDetails]);

  const validateForm = (roleName, checkboxState) => {
    const isAnyModuleSelected = Object.values(checkboxState).some(
      (module) => module.read || module.write
    );
    const isRoleNameValid = roleName.trim().length >= 3;
    setRoleNameError(
      isRoleNameValid ? "" : "Role Name must be at least 3 characters"
    );
    setIsFormValid(isAnyModuleSelected && isRoleNameValid);
  };

  const handleCheckboxChange = (moduleId, type, checked) => {
    setCheckboxState((prevState) => {
      const newState = {
        ...prevState,
        [moduleId]: {
          ...prevState[moduleId],
          [type]: checked,
          ...(type === "write" && checked ? { read: true } : {}),
        },
      };
      validateForm(roleName, newState);
      return newState;
    });
  };

  const handleRoleNameChange = (e) => {
    const newRoleName = e.target.value;
    setRoleName(newRoleName);
    validateForm(newRoleName, checkboxState);
  };

  const isFormChanged = () => {
    if (!initialState) return true;
    if (initialState.roleName !== roleName) return true;
    const initialModules = initialState.checkboxState;
    const currentModules = checkboxState;
    if (
      Object.keys(initialModules).length !== Object.keys(currentModules).length
    )
      return true;
    return Object.keys(initialModules).some((key) => {
      return (
        initialModules[key].read !== currentModules[key].read ||
        initialModules[key].write !== currentModules[key].write
      );
    });
  };

  const handleAddRole = async () => {
    if (isFormValid) {
      setLoading(true);
      const userRoleModulePermissions = Object.entries(checkboxState).map(
        ([moduleId, permissions]) => ({
          module_id: moduleId,
          permission: permissions.write ? "write" : "read",
        })
      );

      const roleData = {
        role_name: roleName,
        user_id: userDetails.userId,
        userRoleModulePermissions,
      };

      try {
        const endpoint = initialRoleDetails
          ? "user-role/update"
          : "user-role/create";
        const payload = initialRoleDetails
          ? { ...roleData, roleId: initialRoleDetails._id }
          : roleData;

        const response = await postApiCall(endpoint, payload);
        Message.success(response.message);
        onSuccess();
      } catch (error) {
        Message.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    checkboxState,
    roleName,
    roleNameError,
    isFormValid,
    handleCheckboxChange,
    handleRoleNameChange,
    handleAddRole,
    loading,
    isFormChanged,
  };
};

export default useAddRole;
