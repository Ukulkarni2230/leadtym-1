// components/SecondStep.js

import React, { useEffect } from "react";
import InputField from "@/src/components/reuseable/textField";
import PrimaryButton from "@/src/components/reuseable/primaryButton";

const SecondStep = ({
  formData,
  errors,
  handleChange,
  isFormValid,
  handleSubmit,
  load,
  setIsFormValid,
}) => {
  console.log(!isFormValid, "is form valid");
  useEffect(() => {
    setIsFormValid(false);
  }, []);
  return (
    <div className="space-y-8">
      <InputField
        label="Company Name"
        placeholder="Company Name"
        required
        value={formData.companyName || ""}
        onChange={handleChange("companyName")}
        error={!!errors.companyName}
        helperText={errors.companyName}
        inputProps={{
          id: "companyName",
          type: "text",
          onInput: (e) => {
            e.target.value = e.target.value.replace(/^\s/, ""); // Prevent starting with space
          },
        }}
      />
      <InputField
        label="Website"
        placeholder="Website"
        required
        value={formData.website || ""}
        onChange={handleChange("website")}
        error={!!errors.website}
        helperText={errors.website}
        inputProps={{
          id: "website",
          maxLength: 100,
          type: "text",
          onInput: (e) => {
            e.target.value = e.target.value.replace(/\s/g, ""); // No spaces allowed
          },
        }}
      />
      <InputField
        label="Team Size (Optional)"
        placeholder="Team Size"
        value={formData.teamSize || ""}
        onChange={handleChange("teamSize")}
        error={!!errors.teamSize}
        helperText={errors.teamSize}
        inputProps={{
          id: "teamSize",
          type: "text",
          inputMode: "numeric",
          onInput: (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only numbers allowed
          },
        }}
      />
      <PrimaryButton
        type="submit"
        isLoading={load}
        py="2.5"
        className="w-full py-2 text-white font-bold rounded-full text-sm sm:text-base 2xl:text-lg transition duration-300"
        disabled={!isFormValid}
      >
        Submit
      </PrimaryButton>
    </div>
  );
};

export default SecondStep;
