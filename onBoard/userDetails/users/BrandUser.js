import React, { useState, useEffect } from "react";
import InputField from "@/src/components/reuseable/textField";

const validateGstNumber = (gstNumber) => {
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  return gstRegex.test(gstNumber);
};

const BrandUser = ({ onFormValidation, user, setBrandName, setGstNumber }) => {
  const [localBrandName, setLocalBrandName] = useState("");
  const [localGstNumber, setLocalGstNumber] = useState("");
  const [isBrandNameValid, setIsBrandNameValid] = useState(false);
  const [isGstNumberValid, setIsGstNumberValid] = useState(false);

  useEffect(() => {
    const userDetails = user?.userDetails || {};
    if (userDetails.brandName) {
      setLocalBrandName(userDetails.brandName);
      setIsBrandNameValid(userDetails.brandName.length > 2);
    }
    if (userDetails.gst_number) {
      const upperCaseGst = userDetails.gst_number.toUpperCase();
      setLocalGstNumber(upperCaseGst);
      setIsGstNumberValid(validateGstNumber(upperCaseGst));
    }
  }, [user]);

  useEffect(() => {
    const isValid = isBrandNameValid && isGstNumberValid;
    onFormValidation(isValid);
    setBrandName(localBrandName);
    setGstNumber(localGstNumber);
  }, [
    isBrandNameValid,
    isGstNumberValid,
    onFormValidation,
    localBrandName,
    localGstNumber,
    setBrandName,
    setGstNumber,
  ]);

  const handleBrandNameChange = (value) => {
    setLocalBrandName(value);
    setIsBrandNameValid(value.length > 2);
  };

  const handleGstNumberChange = (value) => {
    const upperCaseValue = value.toUpperCase();
    setLocalGstNumber(upperCaseValue);
    setIsGstNumberValid(validateGstNumber(upperCaseValue));
  };

  return (
    <>
      <div className="mb-7">
        <InputField
          label="Brand Name"
          required
          errorText="Invalid Name."
          inputProps={{
            inputMode: "text",
            maxLength: 60,
          }}
          value={localBrandName}
          onChange={(e) => handleBrandNameChange(e.target.value)}
          validationFunc={(value) => value.length > 2}
        />
      </div>
      <div className="mb-7">
        <InputField
          label="GST No"
          required
          errorText="Invalid GST No."
          inputProps={{
            inputMode: "text",
            maxLength: 15,
          }}
          value={localGstNumber}
          onChange={(e) => handleGstNumberChange(e.target.value)}
          validationFunc={validateGstNumber}
        />
      </div>
    </>
  );
};

export default BrandUser;
