// File: useAddUpdateRule.jsx
import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "../user-service/useUser";

const useAddUpdateRule = (onSuccess, initialRuleDetails = null) => {
  const { postApiCall } = useApi();
  const { userDetails } = useUser();

  const initialFormData = {
    ruleName: "",
    campaignId: "",
    timeFrame: "",
    minCTR: "",
    maxCTR: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialState, setInitialState] = useState(null);

  useEffect(() => {
    if (initialRuleDetails.rule) {
      const { rule } = initialRuleDetails;
      const initialData = {
        ruleName: rule.ruleName || "",
        campaignId: rule.campaignId || "",
        timeFrame: rule.timeFrame || "",
        minCTR: rule.minCTR || "",
        maxCTR: rule.maxCTR || "",
      };
      setFormData(initialData);
      setInitialState(initialData);
    }
  }, [initialRuleDetails]);
  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "ruleName":
        if (!value) {
          error = "Rule name is required";
        } else if (value.length < 3) {
          error = "At least 3 characters are required";
        }
        break;
      case "campaignId":
        if (!value) {
          error = "Campaign selection is required";
        }
        break;
      case "timeFrame":
        if (!value) {
          error = "Time frame is required";
        }
        break;
      case "minCTR":
        if (!value) {
          error = "Minimum CTR is required";
        } else if (isNaN(value) || value < 0 || value > 100) {
          error = "Enter a valid percentage (0-100)";
        }
        break;
      case "maxCTR":
        if (!value) {
          error = "Maximum CTR is required";
        } else if (isNaN(value) || value < 0 || value > 100) {
          error = "Enter a valid percentage (0-100)";
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
    const fields = ["ruleName", "campaignId", "timeFrame", "minCTR", "maxCTR"];
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

  const handleAddUpdateRule = async () => {
    if (isFormValid && isFormChanged()) {
      setLoading(true);
      const payload = {
        ruleName: formData.ruleName,
        campaignId: formData.campaignId,
        timeFrame: formData.timeFrame,
        minCTR: formData.minCTR,
        maxCTR: formData.maxCTR,
      };

      if (initialRuleDetails) {
        payload.ruleId = initialRuleDetails?._id;
      }

      try {
        const endpoint = initialRuleDetails ? "update-rule" : "save-rule";
        const response = await postApiCall(endpoint, payload);
        if (response.status == 201 || response.status == 200) {
          Message.success(response.message);
          onSuccess();
        }
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
    handleAddUpdateRule,
    isFormChanged,
    setFormData,
    setInitialState,
  };
};

export default useAddUpdateRule;
