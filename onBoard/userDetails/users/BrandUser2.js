import React, { useState, useEffect } from "react";
import InputField from "@/src/components/reuseable/textField";
import MultiSelectField from "@/src/components/reuseable/onboard-reuseableCompoents/MultiSelectField";
import { top100Films } from "../../../settings/overview/EditOverview/DetailsForm";
import useBrandLogin from "@/src/hooks/onboardHooks/useBrandLogin";

const validateWebsiteUrl = (url) => {
  return /^(https?:\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(\/[^\s]*)?$/.test(
    url
  );
};

const BrandUser2 = ({
  onFormValidation,
  user,
  setDesignation,
  setWebsiteURL,
  setCategories,
}) => {
  const {
    designation,
    websiteURL,
    categories,
    handleDesignationChange,
    handleWebsiteURLChange,
    handleCategoriesChange,
  } = useBrandLogin();

  const [isDesignationValid, setIsDesignationValid] = useState(false);
  const [isWebsiteUrlValid, setIsWebsiteUrlValid] = useState(false);
  const [isCategoriesValid, setIsCategoriesValid] = useState(false);

  useEffect(() => {
    setIsDesignationValid(designation.length > 2);
    setIsWebsiteUrlValid(validateWebsiteUrl(websiteURL));
    setIsCategoriesValid(categories.length > 0);
  }, [designation, websiteURL, categories]);

  useEffect(() => {
    const isValid =
      isDesignationValid && isWebsiteUrlValid && isCategoriesValid;
    onFormValidation(isValid);
    setDesignation(designation);
    setWebsiteURL(websiteURL);
    setCategories(categories);
  }, [
    isDesignationValid,
    isWebsiteUrlValid,
    isCategoriesValid,
    onFormValidation,
    designation,
    websiteURL,
    categories,
    setDesignation,
    setWebsiteURL,
    setCategories,
  ]);

  return (
    <>
      <div className="mb-7">
        <InputField
          label="Designation"
          required
          errorText="Enter Correct Designation"
          inputProps={{
            inputMode: "text",
            maxLength: 30,
          }}
          value={designation}
          onChange={(e) => {
            handleDesignationChange(e.target.value);
            setIsDesignationValid(e.target.value.length > 2);
          }}
          validationFunc={(value) => value.length > 2}
        />
      </div>

      <div className="mb-7">
        <MultiSelectField
          label="Categories"
          placeholder="Select Categories"
          options={top100Films}
          value={categories}
          onChange={(e) => {
            handleCategoriesChange(e);
            setIsCategoriesValid(e.length > 0);
          }}
          validationFunc={(value) => value.length > 0}
        />
      </div>
      <div className="mb-7">
        <InputField
          label="Website URL"
          required
          errorText="Enter Correct URL"
          inputProps={{
            inputMode: "text",
            maxLength: 30,
          }}
          value={websiteURL}
          onChange={(e) => {
            handleWebsiteURLChange(e.target.value);
            setIsWebsiteUrlValid(validateWebsiteUrl(e.target.value));
          }}
          validationFunc={validateWebsiteUrl}
        />
      </div>
    </>
  );
};

export default BrandUser2;
