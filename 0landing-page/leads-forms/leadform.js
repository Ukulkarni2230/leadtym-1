"use client";
import Link from "next/link";
import React from "react";
import InputField from "@/src/components/reuseable/textField";
import SelectField from "@/src/components/reuseable/select-input-field-onboard";
import PrimaryButton from "@/src/components/reuseable/primaryButton";
import useLeadForm from "@/src/hooks/contact-us/useLeadForm";
import SecondStep from "./SecondStep";
import InfluencerStep from "./InfluencerStep";
import BackBtn from "@/src/components/pages/onBoard/whoAreYou/BackBtn";
import ThankYou from "./ThankYou";

const LeadForm = () => {
  const {
    formData,
    errors,
    step,
    themeMode,
    handleChange,
    handleNextStep,
    handleSubmit,
    handleThemeToggle,
    setIsFormValid,
    isFormValid,
    handleBack,
    load,
  } = useLeadForm();

  return (
    <div
      className={`flex justify-center w-full lg:items-center  min-h-screen h-full dark:bg-black bg-white text-black dark:text-white ${
        themeMode === "dark"
          ? "grid-background-dark grid-background"
          : "grid-background-light grid-background"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-2xl h-full justify-center p-4">
        <div className="absolute top-4 left-4">
          <Link href="/" className="max-w-[228px]">
            <img
              src={
                themeMode === "dark"
                  ? "/assets/onboard/Logow.svg"
                  : "/assets/onboard/Logo.svg"
              }
              alt="LEADTYM"
              className="object-contain"
            />
          </Link>
        </div>
        <div className="absolute top-20 left-4 xl:top-20">
          <BackBtn onClick={handleBack} />
        </div>

        <div className="flex flex-col md:flex-row w-full items-center mt-10 md:mt-[10%] lg:mt-0">
          <div className="hidden md:block w-full md:w-1/2 lg:w-1/3 p-6">
            <p className="text-4xl lg:text-[50px] font-semibold text-black dark:text-white mb-4">
              Join Now
            </p>
            <p className="text-4xl lg:text-[50px] font-semibold text-black dark:text-white mt-10 mb-6">
              Coming Soon....
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-extralight">
              To become the first person add
              <br /> yourself in the wishlist.
            </p>
          </div>
          <div className="hidden lg:flex w-1/4">
            <img
              src="/assets/landing/singupbo.svg"
              alt="Coming Soon"
              className="mt-6 max-w-full max-h-[400px] xl:max-h-[550px] object-contain md:ml-8"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 sm:p-8 p-2 flex flex-col justify-center mt-20 md:mt-0">
            {step !== 3 && (
              <h2 className="text-2xl md:text-3xl font-medium text-[#1C1C1C] dark:text-white mb-10">
                Sign Up
              </h2>
            )}
            <form className="space-y-8" onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <InputField
                    label="Full Name"
                    placeholder="Jon"
                    required
                    value={formData.firstName}
                    onChange={handleChange("firstName")}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    inputProps={{
                      id: "firstName",
                      type: "text",
                      onInput: (e) => {
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      },
                    }}
                  />
                  <InputField
                    label="Email ID"
                    placeholder="deo@gmail.com"
                    required
                    value={formData.email}
                    onChange={handleChange("email")}
                    error={!!errors.email}
                    helperText={errors.email}
                    inputProps={{
                      id: "email",
                      type: "email",
                      onInput: (e) => {
                        e.target.value = e.target.value.replace(/\s/g, "");
                      },
                    }}
                  />
                  <InputField
                    label="Mobile No"
                    placeholder="+91 5345291123"
                    required
                    value={formData.mobile}
                    onChange={handleChange("mobile")}
                    error={!!errors.mobile}
                    helperText={errors.mobile}
                    inputProps={{
                      id: "mobile",
                      type: "text",
                      inputMode: "numeric",
                      onInput: (e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      },
                      maxLength: 10,
                    }}
                  />
                  <SelectField
                    label="Join us as"
                    required
                    value={formData.role}
                    onChange={handleChange("role")}
                    options={[
                      { value: "Agency", label: "Agency" },
                      { value: "Brand", label: "Brand" },
                      { value: "Affiliate", label: "Affiliate" },
                      { value: "Influencer", label: "Influencer" },
                      { value: "Individual", label: "Individual" },
                    ]}
                    error={!!errors.role}
                    helperText={errors.role}
                  />
                  <PrimaryButton
                    type="button"
                    isLoading={load}
                    py="2.5"
                    className="w-full py-2 text-white font-bold rounded-full text-sm sm:text-base 2xl:text-lg transition duration-300"
                    disabled={!isFormValid}
                    onClick={handleNextStep}
                  >
                    Next
                  </PrimaryButton>
                </>
              )}
              {step === 2 &&
                ["Brand", "Agency", "Affiliate"].includes(formData.role) && (
                  <SecondStep
                    formData={formData}
                    setIsFormValid={setIsFormValid}
                    errors={errors}
                    handleChange={handleChange}
                    isFormValid={isFormValid}
                    handleSubmit={handleSubmit}
                    load={load}
                  />
                )}
              {step === 2 && formData.role === "Influencer" && (
                <InfluencerStep
                  formData={formData}
                  load={load}
                  setIsFormValid={setIsFormValid}
                  errors={errors}
                  handleChange={handleChange}
                  isFormValid={isFormValid}
                  handleSubmit={handleSubmit}
                />
              )}
              {step === 3 && <ThankYou />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
