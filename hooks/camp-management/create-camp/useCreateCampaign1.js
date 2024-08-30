// useCreateCampaign1.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCampaignCreateFormData } from "@/src/Redux/actions/campaignCreateFormActions";

const useCreateCampaign1 = (setActiveTab) => {
  const dispatch = useDispatch();
  const campaignDetails = useSelector(
    (state) => state.campaignCreateForm.campaignDetails
  );


  const [formData, setFormData] = useState({
    campaignName: campaignDetails.campaignName || "",
    previewUrl: campaignDetails.previewUrl || "",
    campaignUrl: campaignDetails.campaignUrl || "",
    description: campaignDetails.description || "",
    selectedCategories: campaignDetails.selectedCategories || [],
    selectedTrafficSources: campaignDetails.selectedTrafficSources || [],
  });

  const [formErrors, setFormErrors] = useState({});

  const handleValidation = () => {
    const errors = {};

    if (
      formData.campaignName.trim().length < 3 ||
      !/^[a-zA-Z ]+$/.test(formData.campaignName)
    ) {
      errors.campaignName =
        "Campaign Name must be at least 3 characters long and contain only alphabets";
    }

    if (!formData.previewUrl.trim()) {
      errors.previewUrl = "Preview URL is required";
    } else if (/\s/.test(formData.previewUrl)) {
      errors.previewUrl = "URL must not contain spaces";
    } else if (!/\./.test(formData.previewUrl)) {
      errors.previewUrl = "Enter a valid URL with a '.' character";
    }

    if (!formData.campaignUrl.trim()) {
      errors.campaignUrl = "Campaign URL is required";
    } else if (!/^(https?:\/\/)[^\s]+[?].+/.test(formData.campaignUrl)) {
      errors.campaignUrl =
        "Campaign URL must be a valid URL with query parameters";
    }

    if (formData.selectedCategories.length === 0) {
      errors.selectedCategories = "Please select at least one category";
    }

    if (formData.selectedTrafficSources.length === 0) {
      errors.selectedTrafficSources =
        "Please select at least one traffic source";
    }

    if (!formData.description.trim()) {
      errors.description = "Description is mandatory";
    } else if (formData.description.length > 500) {
      errors.description = "Description must be less than 500 characters";
    } else if (formData.description.startsWith(" ")) {
      errors.description = "Description cannot start with a space";
    } else if (/\s\s+/.test(formData.description)) {
      errors.description = "Description cannot contain consecutive spaces";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (field, value) => {
    let newErrors = { ...formErrors };

    switch (field) {
      case "campaignName":
        if (value.trim().length < 3) {
          newErrors.campaignName =
            "Campaign Name must be at least 3 characters long ";
        } else {
          delete newErrors.campaignName;
        }
        break;
      case "previewUrl":
        if (!value.trim()) {
          newErrors.previewUrl = "Preview URL is required";
        } else if (
          !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
            value
          )
        ) {
          newErrors.previewUrl = "Enter a valid URL";
        } else {
          delete newErrors.previewUrl;
        }
        break;
      case "campaignUrl":
        if (!value.trim()) {
          newErrors.campaignUrl = "Campaign URL is required";
        } else if (!/^(https?:\/\/)[^\s]+[?].+/.test(value)) {
          newErrors.campaignUrl =
            "Campaign URL must be a valid URL with query parameters";
        } else {
          delete newErrors.campaignUrl;
        }
        break;
      case "selectedCategories":
        if (value.length === 0) {
          newErrors.selectedCategories = "Please select at least one category";
        } else {
          delete newErrors.selectedCategories;
        }
        break;
      case "selectedTrafficSources":
        if (value.length === 0) {
          newErrors.selectedTrafficSources =
            "Please select at least one traffic source";
        } else {
          delete newErrors.selectedTrafficSources;
        }
        break;
      case "description":
        if (!value.trim()) {
          newErrors.description = "Description is mandatory";
        } else if (value.length > 500) {
          newErrors.description =
            "Description must be less than 500 characters";
        } else if (value.startsWith(" ")) {
          newErrors.description = "Description cannot start with a space";
        } else if (/\s\s+/.test(value)) {
          newErrors.description =
            "Description cannot contain consecutive spaces";
        } else {
          delete newErrors.description;
        }
        break;
      default:
        break;
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setFormErrors(newErrors);
  };

  const validateAndSave = () => {
    if (handleValidation()) {
      dispatch(updateCampaignCreateFormData("campaignDetails", formData));
      setActiveTab(1);
    }
  };

  return {
    formData,
    formErrors,
    handleChange,
    validateAndSave,
  };
};

export default useCreateCampaign1;
