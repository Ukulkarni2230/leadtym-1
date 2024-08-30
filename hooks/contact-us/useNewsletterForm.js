import { useState } from "react";
import useApi from "@/src/Apicalls/apiCalls"; // Assuming you have an API call utility
import { Message } from "@/src/components/reuseable/ToastNotification";

const useNewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const { postApiCall } = useApi();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format." }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email) && agreed) {
      try {
        const response = await postApiCall(
          "landing-form/save-newsletter-email",
          { email }
        );
        // Handle success (e.g., show a success message)
        Message.success(response.message    );
      } catch (error) {
        console.error("Error submitting the form:", error);
        // Handle error (e.g., show an error message)
      }
    }
  };

  const isFormValid = validateEmail(email) && agreed;

  return {
    email,
    agreed,
    errors,
    handleEmailChange,
    handleCheckboxChange,
    handleSubmit,
    isFormValid,
  };
};

export default useNewsletterForm;
