import { useEffect, useState } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import useLocationData from "@/src/hooks/user-service/useLocationData";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "@/src/hooks/user-service/useUser";
import useVisibility from "@/src/hooks/user-service/useVisibility";
import useFetchUserDetails from "./useFetchUserDetails";
import { getUserCategories } from "@/src/utils/getUserCategories";

const useUserDetailUpdate = (userId, logo, selectedAvatar, handleNavigate) => {
  const { postApiCall } = useApi();
  const { updateUserDetails } = useFetchUserDetails();
  const { userDetails } = useUser();
  const categories = getUserCategories(userDetails);

  const isCompanyInfoRequired = useVisibility(["brand", "agency", "affiliate"]);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    gender: "",
    designation: "",
    nationality: "",
    companyName: "",
    companyWebsite: "",
    gstNo: "",
    categories: [],
  });

  const [errors, setErrors] = useState({});

  const {
    countries,
    states,
    cities,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
  } = useLocationData();

  useEffect(() => {
    if (userDetails?.name) {
      setFormData((prevData) => ({
        ...prevData,
        firstName: userDetails?.name,
        phoneNumber: userDetails?.mobileNumber,
        companyWebsite: userDetails?.website || userDetails?.companyWebsite,
        categories: categories,
        designation: userDetails?.designation,
        gstNo: userDetails?.gst_number || userDetails?.gstNo,
        companyName:
          userDetails?.companyName ||
          userDetails?.brandName ||
          userDetails?.company,
        middleName: userDetails?.middleName,
        lastName: userDetails?.lastName,
        streetAddress: userDetails?.address,
        zipCode: userDetails?.zipCode,
        email: userDetails?.email,
        gender: userDetails?.gender,
        nationality: userDetails?.nationality,
        country: userDetails?.country_id,
        state: userDetails?.state_id,
        city: userDetails?.city_id,
      }));
    }
  }, [userDetails]);

  useEffect(() => {
    if (userDetails?.country_id) {
      setSelectedCountry([userDetails.country_id]);
    }
  }, [userDetails, setSelectedCountry]);

  useEffect(() => {
    if (userDetails?.state_id && states.length > 0) {
      setSelectedState([userDetails.state_id]);
    }
  }, [userDetails, states, setSelectedState]);

  useEffect(() => {
    if (userDetails?.city_id && cities.length > 0) {
      setSelectedCity(userDetails.city_id);
    }
  }, [userDetails, cities, setSelectedCity]);

  const handleValidation = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.streetAddress) {
      newErrors.streetAddress = "Street address is required";
    }
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (!formData.state) {
      newErrors.state = "State is required";
    }
    if (!formData.country) {
      newErrors.country = "Country is required";
    }
    if (!formData.zipCode) {
      newErrors.zipCode = "Zip code is required";
    } else if (!/^\d{6}$/.test(formData.zipCode)) {
      newErrors.zipCode = "Zip code must be 6 digits";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Phone number must start with 6, 7, 8, or 9 and be 10 digits";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.designation) {
      newErrors.designation = "Designation is required";
    }
    if (!formData.nationality) {
      newErrors.nationality = "Nationality is required";
    }
    if (isCompanyInfoRequired) {
      if (!formData.companyName) {
        newErrors.companyName = "Company Name is required";
      }
      if (!formData.companyWebsite) {
        newErrors.companyWebsite = "Company Website is required";
      }
      if (!formData.gstNo) {
        newErrors.gstNo = "GST No. is required";
      }
    }
    if (formData.categories.length === 0) {
      newErrors.categories = "Categories are required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (handleValidation()) {
      const userInfo = {};

      if (formData.streetAddress) userInfo.address = formData.streetAddress;
      if (formData.firstName) userInfo.firstName = formData.firstName;
      if (formData.middleName) userInfo.middleName = formData.middleName;
      if (formData.lastName) userInfo.lastName = formData.lastName;
      if (formData.phoneNumber) userInfo.phone = formData.phoneNumber;
      if (formData.city) userInfo.city = formData.city;
      if (formData.state) userInfo.state = formData.state;
      if (formData.country) userInfo.country = formData.country;
      if (formData.zipCode) userInfo.zipCode = formData.zipCode;
      if (formData.email) userInfo.email = formData.email;
      if (formData.gender) userInfo.gender = formData.gender;
      if (formData.designation) userInfo.designation = formData.designation;
      if (formData.nationality) userInfo.nationality = formData.nationality;
      if (formData.companyName) userInfo.companyName = formData.companyName;
      if (formData.companyWebsite)
        userInfo.companyWebsite = formData.companyWebsite;
      if (formData.gstNo) userInfo.gstNo = formData.gstNo;
      if (formData.categories.length > 0) {
        userInfo.categories = JSON.stringify(formData.categories);
      }
      if (selectedCountry) {
        const country = countries.find((c) => c._id === selectedCountry);
        userInfo.country = country?.name || selectedCountry;
        userInfo.country_id = selectedCountry; // Store country ID
      }

      if (selectedState) {
        const state = states.find((s) => s._id === selectedState);
        userInfo.state = state?.name || selectedState;
        userInfo.state_id = selectedState; // Store state ID
      }

      if (selectedCity) {
        const city = cities.find((c) => c._id === selectedCity);
        userInfo.city = city?.name || selectedCity;
        userInfo.city_id = selectedCity; // Storfe city ID
      }

      const apiData = {
        user_id: userId,
      };

      apiData.brandImageUrl = logo || "";
      apiData.avatarUrl = selectedAvatar || "";
      apiData.userInfo = userInfo;

      try {
        const response = await postApiCall("update-userInfo", apiData);
        if (response.status === 200) {
          Message.success(response.message);
          handleNavigate();
          updateUserDetails();
        }
      } catch (error) {
        console.error("Failed to update user info:", error);
        Message.error(error.message);
      }
    }
  };

  const handleChange = (field, value) => {
    let newErrors = { ...errors };

    const websiteRegex =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    const gstRegex =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

    switch (field) {
      case "firstName":
        if (!value.trim()) {
          newErrors.firstName = "First name is required";
        } else {
          delete newErrors.firstName;
        }
        break;
      case "lastName":
        if (!value.trim()) {
          newErrors.lastName = "Last name is required";
        } else {
          delete newErrors.lastName;
        }
        break;
      case "streetAddress":
        if (!value.trim()) {
          newErrors.streetAddress = "Street address is required";
        } else {
          delete newErrors.streetAddress;
        }
        break;
      case "city":
        if (!value.trim()) {
          newErrors.city = "City is required";
        } else {
          delete newErrors.city;
        }
        break;
      case "state":
        if (!value) {
          newErrors.state = "State is required";
        } else {
          delete newErrors.state;
        }
        break;
      case "country":
        if (!value) {
          newErrors.country = "Country is required";
        } else {
          delete newErrors.country;
        }
        break;
      case "zipCode":
        if (!value) {
          newErrors.zipCode = "Zip code is required";
        } else if (!/^\d{6}$/.test(value)) {
          newErrors.zipCode = "Zip code must be 6 digits";
        } else {
          delete newErrors.zipCode;
        }
        break;
      case "phoneNumber":
        if (!value) {
          newErrors.phoneNumber = "Phone number is required";
        } else if (!/^[6-9]\d{9}$/.test(value)) {
          newErrors.phoneNumber =
            "Phone number must start with 6, 7, 8, or 9 and be 10 digits";
        } else {
          delete newErrors.phoneNumber;
        }
        break;
      case "email":
        if (!value) {
          newErrors.email = "Email is required";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          newErrors.email = "Enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "gender":
        if (!value) {
          newErrors.gender = "Gender is required";
        } else {
          delete newErrors.gender;
        }
        break;
      case "designation":
        if (!value.trim()) {
          newErrors.designation = "Designation is required";
        } else {
          delete newErrors.designation;
        }
        break;
      case "nationality":
        if (!value) {
          newErrors.nationality = "Nationality is required";
        } else {
          delete newErrors.nationality;
        }
        break;
      case "companyName":
        if (isCompanyInfoRequired && !value.trim()) {
          newErrors.companyName = "Company Name is required";
        } else {
          delete newErrors.companyName;
        }
        break;
      case "companyWebsite":
        if (isCompanyInfoRequired) {
          if (!value.trim()) {
            newErrors.companyWebsite = "Company Website is required";
          } else if (!websiteRegex.test(value)) {
            newErrors.companyWebsite = "Enter a valid website URL";
          } else {
            delete newErrors.companyWebsite;
          }
        }
        break;
      case "gstNo":
        if (isCompanyInfoRequired) {
          if (!value.trim()) {
            newErrors.gstNo = "GST No. is required";
          } else if (!gstRegex.test(value.toUpperCase())) {
            newErrors.gstNo = "Enter a valid GST No.";
          } else {
            delete newErrors.gstNo;
          }
        }
        break;
      case "categories":
        if (value.length === 0) {
          newErrors.categories = "Categories are required";
        } else {
          delete newErrors.categories;
        }
        break;
      default:
        break;
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: field === "gstNo" ? value.toUpperCase() : value,
    }));
    setErrors(newErrors);
  };

  return {
    formData,
    isCompanyInfoRequired,
    errors,
    handleChange,
    handleSave,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    countries,
    states,
    cities,
  };
};

export default useUserDetailUpdate;
