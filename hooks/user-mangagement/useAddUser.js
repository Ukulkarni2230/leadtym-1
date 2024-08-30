import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "../user-service/useUser";

const useAddUser = (onSuccess, childUserDetails = null) => {
  const { postApiCall } = useApi();
  const { userDetails } = useUser();

  const initialFormData = {
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    roleId: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialState, setInitialState] = useState(null);

  useEffect(() => {
    if (childUserDetails) {
      const { user } = childUserDetails;
      const initialData = {
        firstName: user.userInfo.firstName || "",
        middleName: user.userInfo.middleName || "",
        lastName: user.userInfo.lastName || "",
        phoneNumber: user.mobile_number || "",
        email: user.email || "",
        roleId: user.role_id || "",
      };
      setFormData(initialData);
      setInitialState(initialData);
    }
  }, [childUserDetails]);

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "firstName":
        if (!value) {
          error = "First name is required";
        } else if (value.length < 3) {
          error = "At least 3 characters are required";
        }
        break;
      case "lastName":
        if (!value) {
          error = "Last name is required";
        }
        break;
      case "phoneNumber":
        if (!value) {
          error = "Phone number is required";
        } else if (!/^[6-9]\d{9}$/.test(value)) {
          error = "Phone number must start with 6, 7, 8, or 9 and be 10 digits";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          error = "Enter a valid email address";
        }
        break;
      case "roleId":
        if (!value) {
          error = "Role is required";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  const validateForm = (updatedFormData) => {
    const fields = ["firstName", "lastName", "phoneNumber", "email", "roleId"];
    const isValid = fields.every(
      (field) => !errors[field] && updatedFormData[field]
    );
    setIsFormValid(isValid);
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => {
      const updatedFormData = { ...prevData, [field]: value };
      validateField(field, value);
      validateForm(updatedFormData);
      return updatedFormData;
    });
  };

  const isFormChanged = () => {
    if (!initialState) return true;
    return Object.keys(initialState).some(
      (key) => initialState[key] !== formData[key]
    );
  };

  const handleAddUser = async () => {
    if (isFormValid) {
      setLoading(true);
      const payload = {
        userInfo: {
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
        },
        email: formData.email,
        mobile_number: formData.phoneNumber,
        status: true,
        group_id: userDetails?.groupId,
        role_id: formData.roleId,
        referral_code: userDetails?.referral_code,
        isEmailVerified: false,
      };

      if (childUserDetails) {
        payload.userId = childUserDetails?.user?._id;
      } else {
        payload.parent_user_id = userDetails?.userId;
      }

      try {
        const endpoint = childUserDetails ? "user-update" : "user-create";
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

  useEffect(() => {
    validateForm(formData);
  }, [errors]);

  return {
    formData,
    errors,
    isFormValid,
    loading,
    handleChange,
    handleAddUser,
    isFormChanged,
  };
};

export default useAddUser;
