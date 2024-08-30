import { useState } from "react";

const useBrandLogin = () => {
  const [designation, setDesignation] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [categories, setCategories] = useState([]);

  const handleDesignationChange = (value) => {
    setDesignation(value);
  };

  const handleWebsiteURLChange = (value) => {
    setWebsiteURL(value);
  };

  const handleCategoriesChange = (newValue) => {
    setCategories(newValue);
  };

  return {
    designation,
    websiteURL,
    categories,
    handleDesignationChange,
    handleWebsiteURLChange,
    handleCategoriesChange,
  };
};

export default useBrandLogin;
