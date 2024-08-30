import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/src/Redux/theme/themeActions";
import { useRouter } from "next/navigation";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useLeadForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobile: "",
    role: "",
    companyName: "",
    website: "",
    teamSize: "",
    socialMedia: "",
    youtubeURL: "",
    instagramURL: "",
    about: "",
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const router = useRouter();
  const { postApiCall } = useApi();
  const [load, setLoad] = useState(false);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleBack = () => {
    if (step === 2 && step !== 3) {
      setStep(1);
    } else {
      router.back();
    }
  };

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  useEffect(() => {
    checkFormValidity(errors, formData);
  }, [formData, errors]);

  const validateMobileNumber = (value) => /^[6-9]\d{9}$/.test(value);

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validateName = (value) =>
    /^[a-zA-Z\s]{3,}$/.test(value) && !/^\s/.test(value);

  const validateCompanyName = (value) =>
    /^[a-zA-Z0-9\s]{3,}$/.test(value) && !/^\s/.test(value);

  const validateWebsite = (value) => {
    const regex = /^(https?:\/\/)?([\w\d\-_]+\.+[A-Za-z]{2,})+\/?/;
    return regex.test(value);
  };

  const validateTeamSize = (value) => /^\d*$/.test(value);

  const handleValidation = (field, value) => {
    const newErrors = { ...errors };

    if (field === "firstName") {
      if (!validateName(value)) {
        newErrors.firstName =
          "Name must be at least 3 characters long and cannot start with a space.";
      } else {
        delete newErrors.firstName;
      }
    }

    if (field === "email") {
      if (!validateEmail(value)) {
        newErrors.email = "Invalid email address.";
      } else {
        delete newErrors.email;
      }
    }

    if (field === "mobile") {
      if (!validateMobileNumber(value)) {
        newErrors.mobile = "Invalid mobile number.";
      } else {
        delete newErrors.mobile;
      }
    }

    if (field === "role") {
      if (!value) {
        newErrors.role = "This field is required.";
      } else {
        delete newErrors.role;
      }
    }

    if (field === "companyName") {
      if (!validateCompanyName(value)) {
        newErrors.companyName =
          "Company name must be at least 3 characters long and cannot start with a space.";
      } else {
        delete newErrors.companyName;
      }
    }

    if (field === "website") {
      if (!validateWebsite(value)) {
        newErrors.website = "Invalid website URL.";
      } else {
        delete newErrors.website;
      }
    }

    if (field === "teamSize" && value) {
      if (!validateTeamSize(value)) {
        newErrors.teamSize = "Team Size must be a number.";
      } else {
        delete newErrors.teamSize;
      }
    }

    setErrors(newErrors);
    checkFormValidity(newErrors, { ...formData, [field]: value });
  };

  const checkFormValidity = (errors, formData) => {
    const isValid =
      formData.firstName &&
      formData.email &&
      formData.mobile &&
      formData.role &&
      Object.keys(errors).length === 0;

    const isSecondStepValid =
      formData.companyName &&
      formData.website &&
      ["Brand", "Agency", "Affiliate"].includes(formData.role) &&
      (formData.teamSize ? validateTeamSize(formData.teamSize) : true) &&
      Object.keys(errors).length === 0;

    const isInfluencerStepValid =
      formData.about &&
      JSON.parse(formData.about) &&
      Object.keys(errors).length === 0;

    setIsFormValid(
      step === 1
        ? isValid
        : step === 2 && ["Brand", "Agency", "Affiliate"].includes(formData.role)
        ? isSecondStepValid
        : formData.role === "Influencer"
        ? isInfluencerStepValid
        : false
    );
  };

  const handleChange = (field) => (e) => {
    let value = e.target.value;

    if (/^\s/.test(value)) {
      value = value.trimStart();
    }

    if (field === "firstName") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (field === "email") {
      value = value.replace(/\s/g, "");
    } else if (field === "mobile") {
      value = value.replace(/[^0-9]/g, "");
    } else if (field === "teamSize") {
      value = value.replace(/[^0-9]/g, "");
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    handleValidation(field, value);
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (isFormValid) {
      let payload;
      switch (formData.role) {
        case "Agency":
        case "Brand":
        case "Affiliate":
          payload = {
            firstName: formData.firstName,
            email: formData.email,
            mobileNo: formData.mobile,
            joinAs: formData.role,
            companyName: formData.companyName,
            website: formData.website,
          };
          if (formData.teamSize) {
            payload.teamSize = formData.teamSize;
          }
          break;
        case "Influencer":
          const about = JSON.parse(formData.about);

          payload = {
            firstName: formData.firstName,
            email: formData.email,
            mobileNo: formData.mobile,
            joinAs: formData.role,
            socialMedia: Object.keys(about).map((key) =>
              key.replace("URL", "")
            ),
            socialMediaURLs: Object.fromEntries(
              Object.entries(about).map(([key, value]) => [key, value])
            ),
          };
          break;
        case "Individual":
          payload = {
            firstName: formData.firstName,
            email: formData.email,
            mobileNo: formData.mobile,
            joinAs: formData.role,
          };
          break;
        default:
          break;
      }
      setLoad(true);
      try {
        const response = await postApiCall(
          "landing-form/save-wishlist",
          payload
        );
        if (response.status === 200 || response.status === 201) {
          setStep(3);
          Message.success(response.message);
        } else {
          Message.error(response.message);
        }
      } catch (error) {
        console.error("Error submitting form", error.message);
      } finally {
        setLoad(false);
      }
    }
  };

  const handleNextStep = () => {
    if (isFormValid) {
      if (formData.role === "Individual") {
        handleSubmit();
      } else {
        setStep(step + 1);
      }
    }
  };

  return {
    formData,
    errors,
    step,
    themeMode,
    handleChange,
    handleNextStep,
    handleSubmit,
    handleThemeToggle,
    isFormValid,
    setIsFormValid,
    handleBack,
    load,
  };
};

export default useLeadForm;
