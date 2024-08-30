"use client";

import CustomCheckbox from "@/src/components/reuseable/checkbox";
import useContactForm from "@/src/hooks/contact-us/useContactForm";
import React from "react";
import { FaPaperclip, FaSpinner, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const {
    formData,
    errors,
    agreed,
    selectedOptions,
    foundAgency,
    file,
    options,
    contactMethods,
    handleInputChange,
    uploading,
    handleOptionClick,
    handleSubmit,
    handleAttachmentClick,
    handleFileChange,
    handlePreview,
    handleRemoveFile,
    setAgreed,
    uploadedImage,
    fileInputRef,
    isFormValid,
  } = useContactForm();
  const themeMode = useSelector((state) => state.theme.mode);
  return (
    <div
      id="contact-us"
      className={
        themeMode === "light"
          ? "light-theme  mt-8 sm:pb-1"
          : "dark-theme  mt-8 sm:pb-1"
      }
    >
      <div className="mb-10">
        <p className="raleway-font text-[#1C1C1C] dark:text-white text-[32px] font-semibold md:text-5xl md:leading-[55px]">
          I'm looking for help with
        </p>
      </div>
      <p className="text-[#1C1C1C] dark:text-white font-normal text-[20px] sm:text-[25px] mb-4 sm:mb-8">
        Choose your option below <span className="text-red-500">*</span>
        {errors.selectedOptions && (
          <span className="text-red-500 text-[12px]">*</span>
        )}
      </p>

      <div className="flex flex-wrap gap-4 mb-7 md:mb-16">
        {options.map((option, index) => (
          <span
            key={index}
            className={`rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg raleway-font font-bold cursor-pointer transition-all duration-300
            ${
              selectedOptions.includes(option)
                ? "gradient-bg text-white"
                : "text-black dark:text-white border border-black dark:border-white hover:bg-gray-200 dark:hover:bg-gray-800"
            }
            ${errors.selectedOptions ? "border-2 border-red-500" : ""}
            md:hover:scale-110 focus:outline-none focus:ring`}
            onClick={() => handleOptionClick(option, false)}
          >
            {option}
          </span>
        ))}
      </div>
      <div className="mb-7 sm:mb-16">
        <p className="raleway-font text-black dark:text-white text-[32px] font-semibold md:text-5xl md:leading-[55px]">
          My contact details and some info about my project{" "}
          <span className="text-red-500 text-base">*</span>
        </p>
        <form className="space-y-6 mt-11" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full">
              <input
                name="fullName"
                type="text"
                placeholder={errors.fullName ? errors.fullName : "Full Name"}
                value={formData.fullName}
                onChange={handleInputChange}
                className={`bg-transparent placeholder-gray-500 dark:placeholder-gray-400 border-b-[1px] ${
                  errors.fullName
                    ? "border-red-500"
                    : "border-gray-500 dark:border-gray-400"
                } font-normal sm:text-[18px] text-[14px] raleway-font py-2 text-black dark:text-white focus:outline-none focus:border-gray-700 dark:focus:border-gray-300 transition-colors w-full`}
                required
              />
            </div>
            <div className="w-full mt-3 sm:mt-0">
              <input
                name="email"
                type="email"
                placeholder={errors.email ? errors.email : "Email Address"}
                value={formData.email}
                onChange={handleInputChange}
                className={`bg-transparent placeholder-gray-500 dark:placeholder-gray-400 border-b-[1px] ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-500 dark:border-gray-400"
                } font-normal sm:text-[18px] text-[14px] raleway-font py-2 text-black dark:text-white focus:outline-none focus:border-gray-700 dark:focus:border-gray-300 transition-colors w-full`}
                required
              />
            </div>
            <div className="w-full mt-3 sm:mt-0">
              <input
                name="phone"
                type="tel"
                placeholder={errors.phone ? errors.phone : "Phone Number"}
                value={formData.phone}
                onChange={handleInputChange}
                maxLength={10}
                className={`bg-transparent placeholder-gray-500 dark:placeholder-gray-400 border-b-[1px] ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-500 dark:border-gray-400"
                } font-normal sm:text-[18px] text-[14px] raleway-font py-2 text-black dark:text-white focus:outline-none focus:border-gray-700 dark:focus:border-gray-300 transition-colors w-full`}
                required
              />
            </div>
            <div className="w-full mt-3 sm:mt-0">
              <input
                name="companyName"
                type="text"
                placeholder={
                  errors.companyName ? errors.companyName : "Company Name"
                }
                value={formData.companyName}
                onChange={handleInputChange}
                className={`bg-transparent placeholder-gray-500 dark:placeholder-gray-400 border-b-[1px] ${
                  errors.companyName
                    ? "border-red-500"
                    : "border-gray-500 dark:border-gray-400"
                } font-normal sm:text-[18px] text-[14px] raleway-font py-2 text-black dark:text-white focus:outline-none focus:border-gray-700 dark:focus:border-gray-300 transition-colors w-full`}
                required
              />
            </div>
          </div>
          <div className="w-full mt-6">
            <textarea
              name="reasonToConnect"
              placeholder={
                errors.reasonToConnect
                  ? errors.reasonToConnect
                  : "Reason To Connect With Us"
              }
              value={formData.reasonToConnect}
              onChange={handleInputChange}
              className={`bg-transparent placeholder-gray-500 dark:placeholder-gray-400 border-b-[1px] ${
                errors.reasonToConnect
                  ? "border-red-500"
                  : "border-gray-500 dark:border-gray-400"
              } font-normal sm:text-[18px] text-[14px] raleway-font py-2 text-black dark:text-white focus:outline-none focus:border-gray-700 dark:focus:border-gray-300 transition-colors w-full`}
              rows="1"
              required
            ></textarea>
          </div>
          <div className="w-full mt-6">
            <textarea
              name="subject"
              placeholder={errors.subject ? errors.subject : "Subject"}
              value={formData.subject}
              onChange={handleInputChange}
              className={`bg-transparent placeholder-gray-500 dark:placeholder-gray-400 border-b-[1px] ${
                errors.subject
                  ? "border-red-500"
                  : "border-gray-500 dark:border-gray-400"
              } font-normal sm:text-[18px] text-[14px] raleway-font py-2 text-black dark:text-white focus:outline-none focus:border-gray-700 dark:focus:border-gray-300 transition-colors w-full`}
              rows="1"
              required
            ></textarea>
          </div>
          <div className="w-full mt-6">
            <textarea
              name="description"
              placeholder={
                errors.description
                  ? errors.description
                  : "Tell Us Something About Your Project"
              }
              value={formData.description}
              onChange={handleInputChange}
              className={`bg-transparent placeholder-gray-500 dark:placeholder-gray-400 border-b-[1px] ${
                errors.description
                  ? "border-red-500"
                  : "border-gray-500 dark:border-gray-400"
              } font-normal sm:text-[18px] text-[14px] raleway-font py-2 text-black dark:text-white focus:outline-none focus:border-gray-700 dark:focus:border-gray-300 transition-colors w-full`}
              rows="1"
              required
            ></textarea>
          </div>
        </form>
      </div>
      <p className="raleway-font text-[32px] text-black dark:text-white mb-5 font-semibold md:text-5xl md:leading-[55px]">
        I found your Platform through{" "}
        <span className="text-red-500 text-base">*</span>
      </p>

      <div className="flex flex-wrap gap-4 mb-10 md:mb-20 mt-7">
        {contactMethods.map((option, index) => (
          <span
            key={index}
            className={`rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg raleway-font font-bold cursor-pointer transition-all duration-300
    ${
      foundAgency === option
        ? "gradient-bg text-white"
        : "text-black dark:text-white border border-black dark:border-white hover:bg-gray-200 dark:hover:bg-gray-800"
    }
    ${errors.foundAgency ? "border-2 border-red-500" : ""}
    md:hover:scale-110 focus:outline-none focus:ring`}
            onClick={() => handleOptionClick(option, true)}
          >
            {option}
          </span>
        ))}
      </div>
      <div className="text-black dark:text-white flex-wrap sm:flex items-center justify-between mb-10">
        <div className="flex flex-wrap gap-1">
          <button
            className="flex flex-wrap items-center text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium text-[16px] mb-2 sm:mb-0 sm:text-lg space-x-2 raleway-font"
            onClick={handleAttachmentClick}
          >
            <span>Add Attachment</span>{" "}
            <div className="bg-white border border-black rounded-full p-2">
              <FaPaperclip className="text-black " />
            </div>
          </button>
          {uploading && (
            <div className="flex items-center justify-center space-x-2">
              <FaSpinner className="animate-spin text-2xl" />
              <span>Uploading...</span>
            </div>
          )}
          {uploadedImage && (
            <div className="flex cursor-pointer items-center text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 font-medium text-[16px] mb-2 sm:mb-0 sm:text-lg space-x-2 raleway-font">
              <span onClick={handlePreview}>Attached Image</span>
              <button
                onClick={handleRemoveFile}
                className="text-red-500 hover:text-red-700"
              >
                <FaTimes />
              </button>
            </div>
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.txt,.jpg,.png,.jpeg"
        />
        <div className="sm:flex justify-between flex-wrap sm:gap-5">
          <label className="flex items-center cursor-pointer mb-3 sm:mb-0">
            <CustomCheckbox
              label=""
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked)}
              id="privacy-policy-agreement"
              required={true}
              className="form-checkbox h-8 w-8 bg-yellow-50 rounded-full focus:ring-0 mr-2"
            />
            <span
              className={`flex items-center mt-[1px] text-black dark:text-white
              hover:text-gray-700 dark:hover:text-gray-300 font-medium text-[12px] sm:text-lg space-x-2 raleway-font`}
            >
              I Agree With Your
              <span className="underline cursor-pointer hover:no-underline ml-1">
                Privacy Policy
              </span>
              <span className="text-red-500">*</span>
            </span>
          </label>

          <button
            type="submit"
            onClick={handleSubmit}
            className={`flex items-center mt-4 sm:mt-0  space-x-2 raleway-font font-bold text-[16px] sm:text-[18px] gradient-bg text-white px-4 py-2 rounded-full ${
              isFormValid
                ? "hover:bg-gray-300 dark:hover:bg-gray-600"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            <span>Submit Form</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
