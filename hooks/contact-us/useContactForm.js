import { useState, useRef } from "react";
import useUploadImage from "../user-service/useUploadImage";
import { Message } from "@/src/components/reuseable/ToastNotification";
import useApi from "@/src/Apicalls/apiCalls";

const useContactForm = () => {
  const options = [
    "Brands",
    "Agencies",
    "Affiliates",
    "Influencers",
    "Individuals",
  ];
  const contactMethods = [
    "Google",
    "Recommendation",
    "Instagram",
    "LinkedIn",
    "Other",
  ];

  const [agreed, setAgreed] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [foundAgency, setFoundAgency] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    description: "",
    reasonToConnect: "",
    subject: "",
    attachment: null,
  });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  const { postApiCall } = useApi();

  const { uploadImage, uploading, uploadedImage, setUploadedImage } =
    useUploadImage();

  const validateField = (name, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const noConsecutiveSpacesRegex = /^(?!.* {2}).*$/;
    const noLeadingSpaceRegex = /^(?!\s)/;
    let error = "";

    if (
      name === "fullName" &&
      (!value ||
        !noLeadingSpaceRegex.test(value) ||
        !noConsecutiveSpacesRegex.test(value))
    ) {
      error =
        "Full name cannot start with a space or contain consecutive spaces.";
    } else if (name === "email" && (!value || !emailRegex.test(value))) {
      error = "Invalid email format.";
    } else if (name === "phone" && (!value || !phoneRegex.test(value))) {
      error = "Invalid phone number format.";
    } else if (
      name === "companyName" &&
      (!value ||
        !noLeadingSpaceRegex.test(value) ||
        !noConsecutiveSpacesRegex.test(value))
    ) {
      error =
        "Company name cannot start with a space or contain consecutive spaces.";
    } else if (
      name === "description" &&
      (!value ||
        !noLeadingSpaceRegex.test(value) ||
        !noConsecutiveSpacesRegex.test(value))
    ) {
      error =
        "Description cannot start with a space or contain consecutive spaces.";
    } else if (
      name === "reasonToConnect" &&
      (!value ||
        !noLeadingSpaceRegex.test(value) ||
        !noConsecutiveSpacesRegex.test(value))
    ) {
      error = "Reason cannot start with a space or contain consecutive spaces.";
    } else if (
      name === "subject" &&
      (!value ||
        !noLeadingSpaceRegex.test(value) ||
        !noConsecutiveSpacesRegex.test(value))
    ) {
      error =
        "Subject cannot start with a space or contain consecutive spaces.";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/[^0-9]/g, ""); // Ensure only numbers are entered
    } else {
      updatedValue = value.replace(/  +/g, " ").trimStart();
    }

    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
    validateField(name, updatedValue);
  };

  const handleOptionClick = (option, isContactMethod = false) => {
    if (isContactMethod) {
      setFoundAgency(option);
      setErrors((prev) => ({ ...prev, foundAgency: "" }));
    } else {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((opt) => opt !== option)
          : [...prev, option]
      );
      setErrors((prev) => ({ selectedOptions: "" }));
    }
  };

  const handleAttachmentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size <= 2242880) {
      try {
        const fileUrl = await uploadImage(selectedFile);
        if (fileUrl) {
          setFormData((prev) => ({ ...prev, attachment: fileUrl }));
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setErrors((prev) => ({
          ...prev,
          attachment: "Failed to upload the file.",
        }));
      }
    } else {
      Message.error("File size should not exceed 2 MB.");
      setErrors((prev) => ({
        ...prev,
        attachment: "File size should not exceed 2 MB.",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formIsValid =
      Object.keys(errors).every((key) => !errors[key]) &&
      agreed &&
      selectedOptions.length > 0 &&
      foundAgency &&
      Object.keys(formData).every(
        (key) =>
          key === "attachment" || (formData[key] && formData[key] !== null)
      );

    if (formIsValid) {
      const dataToSubmit = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phone,
        companyName: formData.companyName,
        reason: formData.reasonToConnect,
        subject: formData.subject,
        projectDescription: formData.description,
        foundThrough: foundAgency,
        helpWith: selectedOptions,
        attachment: formData.attachment,
      };
      try {
        const response = await postApiCall(
          "landing-form/save-lead",
          dataToSubmit
        );
        Message.success(response.message);
      } catch (error) {
        console.log(error);
      }

      // Reset form fields
      setUploadedImage(null);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        description: "",
        reasonToConnect: "",
        subject: "",
        attachment: null, // Clear attachment URL
      });
      setFoundAgency("");
      setSelectedOptions([]);
      setAgreed(false);
      setErrors({});
    }
  };

  const handlePreview = () => {
    if (formData.attachment) {
      window.open(formData.attachment, "_blank");
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, attachment: null }));
    setUploadedImage(null);
  };

  return {
    formData,
    errors,
    agreed,
    selectedOptions,
    foundAgency,
    options,
    contactMethods,
    handleInputChange,
    handleOptionClick,
    handleSubmit,
    handleAttachmentClick,
    handleFileChange,
    handlePreview,
    handleRemoveFile,
    setAgreed,
    uploading,
    uploadedImage,
    fileInputRef,
    isFormValid:
      Object.keys(errors).every((key) => !errors[key]) &&
      agreed &&
      selectedOptions.length > 0 &&
      foundAgency &&
      Object.keys(formData).every(
        (key) =>
          key === "attachment" || (formData[key] && formData[key] !== null)
      ),
  };
};

export default useContactForm;
