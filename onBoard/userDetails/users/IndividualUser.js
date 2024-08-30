import React, { useState, useEffect } from "react";
import CustomDatePicker from "@/src/components/reuseable/CustomDatePicker";
import SelectField from "@/src/components/reuseable/SelectField";
import MultiSelectField from "@/src/components/reuseable/onboard-reuseableCompoents/MultiSelectField";
import { top100Films } from "../../../settings/overview/EditOverview/DetailsForm";
import dayjs from "dayjs";

const IndividualUser = ({
  onFormValidation,
  user,
  setDateOfBirth,
  setGender,
  setCategories,
}) => {
  const [localDateOfBirth, setLocalDateOfBirth] = useState(dayjs());
  const [gender, setLocalGender] = useState("");
  const [categories, setLocalCategories] = useState([]);
  const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(false);
  const [isGenderValid, setIsGenderValid] = useState(false);
  const [isCategoriesValid, setIsCategoriesValid] = useState(false);

  const validateAge = (date) => {
    const age = dayjs().diff(date, "year");
    return age >= 16;
  };

  useEffect(() => {
    const userDetails = user?.userDetails || {};
    if (userDetails.dateOfBirth) {
      const dob = dayjs(userDetails.dateOfBirth);
      setLocalDateOfBirth(dob);
      setIsDateOfBirthValid(validateAge(dob));
    }
    if (userDetails.gender) {
      setLocalGender(userDetails.gender);
      setIsGenderValid(userDetails.gender.length > 0);
    }
    if (userDetails.individualCategories) {
      setLocalCategories(userDetails.individualCategories);
      setIsCategoriesValid(userDetails.individualCategories.length > 0);
    }
  }, [user]);

  useEffect(() => {
    const isValid = isDateOfBirthValid && isGenderValid && isCategoriesValid;
    onFormValidation(isValid);
    setDateOfBirth(localDateOfBirth.format("YYYY-MM-DD"));
    setGender(gender);
    setCategories(categories);
  }, [
    isDateOfBirthValid,
    isGenderValid,
    isCategoriesValid,
    onFormValidation,
    localDateOfBirth,
    gender,
    categories,
    setDateOfBirth,
    setGender,
    setCategories,
  ]);

  const handleDateChange = (date) => {
    setLocalDateOfBirth(date);
    setIsDateOfBirthValid(validateAge(date));
  };

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setLocalGender(value);
    setIsGenderValid(value.length > 0);
  };

  const handleCategoriesChange = (newValue) => {
    setLocalCategories(newValue);
    setIsCategoriesValid(newValue.length > 0);
  };

  return (
    <>
      <div className="mb-6">
        <CustomDatePicker
          value={localDateOfBirth}
          onChange={handleDateChange}
          error={!isDateOfBirthValid}
          helperText={
            !isDateOfBirthValid ? "User must be at least 16 years old" : ""
          }
        />
      </div>
      <div className="mb-7">
        <SelectField
          label="Gender"
          value={gender}
          onChange={handleGenderChange}
          required
          error={!isGenderValid}
          helperText="Please select your gender"
          options={[
            { value: "", label: "None" },
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Other", label: "Other" },
          ]}
        />
      </div>
      <div className="mb-7">
        <MultiSelectField
          label="Categories"
          placeholder="Select Categories"
          options={top100Films}
          value={categories}
          onChange={handleCategoriesChange}
        />
      </div>
    </>
  );
};

export default IndividualUser;
