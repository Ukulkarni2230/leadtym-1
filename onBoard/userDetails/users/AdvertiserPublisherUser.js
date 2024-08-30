import React, { useState, useEffect } from "react";
import InputField from "@/src/components/reuseable/textField";

const validateGstNumber = (gstNumber) => {
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  return gstRegex.test(gstNumber);
};

const AdvertiserPublisherUser = ({
  onFormValidation,
  user,
  setCompanyName,
  setWebsiteUrl,
  setGstNumber,
}) => {
  const [localCompanyName, setLocalCompanyName] = useState("");
  const [localWebsiteUrl, setLocalWebsiteUrl] = useState("");
  const [localGstNumber, setLocalGstNumber] = useState("");
  const [isCompanyNameValid, setIsCompanyNameValid] = useState(false);
  const [isWebsiteUrlValid, setIsWebsiteUrlValid] = useState(false);
  const [isGstNumberValid, setIsGstNumberValid] = useState(false);

  useEffect(() => {
    const userDetails = user?.userDetails || {};
    if (userDetails.company) {
      setLocalCompanyName(userDetails.company);
      setIsCompanyNameValid(userDetails.company.length > 2);
    }
    if (userDetails.website) {
      setLocalWebsiteUrl(userDetails.website);
      setIsWebsiteUrlValid(
        /^(https?:\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(\/[^\s]*)?$/.test(
          userDetails.website
        )
      );
    }
    if (userDetails.gst_number) {
      const upperCaseGst = userDetails.gst_number.toUpperCase();
      setLocalGstNumber(upperCaseGst);
      setIsGstNumberValid(validateGstNumber(upperCaseGst));
    }
  }, [user]);

  useEffect(() => {
    const isValid = isCompanyNameValid && isWebsiteUrlValid && isGstNumberValid;
    onFormValidation(isValid);
    setCompanyName(localCompanyName);
    setWebsiteUrl(localWebsiteUrl);
    setGstNumber(localGstNumber);
  }, [
    isCompanyNameValid,
    isWebsiteUrlValid,
    isGstNumberValid,
    onFormValidation,
    localCompanyName,
    localWebsiteUrl,
    localGstNumber,
    setCompanyName,
    setWebsiteUrl,
    setGstNumber,
  ]);

  const handleCompanyNameChange = (value) => {
    setLocalCompanyName(value);
    setIsCompanyNameValid(value.length > 2);
  };

  const handleWebsiteUrlChange = (value) => {
    setLocalWebsiteUrl(value);
    setIsWebsiteUrlValid(
      /^(https?:\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(\/[^\s]*)?$/.test(
        value
      )
    );
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
          label="Company Name"
          required
          errorText="Invalid Name."
          inputProps={{
            inputMode: "text",
            maxLength: 60,
          }}
          value={localCompanyName}
          onChange={(e) => handleCompanyNameChange(e.target.value)}
          validationFunc={(value) => value.length > 2}
        />
      </div>
      <div className="mb-7">
        <InputField
          label="Website URL"
          required
          errorText="Invalid URL."
          inputProps={{
            inputMode: "url",
          }}
          value={localWebsiteUrl}
          onChange={(e) => handleWebsiteUrlChange(e.target.value)}
          validationFunc={(value) =>
            /^(https?:\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(\/[^\s]*)?$/.test(
              value
            )
          }
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

export default AdvertiserPublisherUser;
