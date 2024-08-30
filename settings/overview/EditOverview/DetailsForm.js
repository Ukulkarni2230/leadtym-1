import React from "react";
import Input from "@/src/components/reuseable/Input";
import SelectInput from "@/src/components/reuseable/SelectInput";
import FilteredAutocomplete from "@/src/components/reuseable/FilteredAutocomplete";
import DatePicker from "@/src/components/reuseable/DatePicker";
import useUserDetailUpdate from "@/src/hooks/user-service/useUserDetailUpdate";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";
import { useUser } from "@/src/hooks/user-service/useUser";

export const top100Films = [
  { title: "Fashion", year: 2024 },
  { title: "Gaming", year: 2024 },
  { title: "Technology", year: 2024 },
  { title: "Travel", year: 2024 },
  { title: "Food", year: 2024 },
  { title: "Fitness", year: 2024 },
  { title: "Beauty", year: 2024 },
  { title: "Lifestyle", year: 2024 },
  { title: "Health", year: 2024 },
  { title: "Finance", year: 2024 },
  { title: "Education", year: 2024 },
  { title: "Entertainment", year: 2024 },
  { title: "Sports", year: 2024 },
  { title: "Photography", year: 2024 },
  { title: "Art", year: 2024 },
  { title: "Music", year: 2024 },
  { title: "DIY", year: 2024 },
  { title: "Parenting", year: 2024 },
  { title: "Automotive", year: 2024 },
  { title: "Pets", year: 2024 },
];

export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const nationalityOptions = [
  { value: "india", label: "India" },
  { value: "australia", label: "Australia" },
  { value: "united_states", label: "United States" },
];

const DetailsForm = ({ logo, selectedAvatar, userId }) => {
  const navigate = useDynamicNavigate();
  const handleNavigate = () => {
    navigate("/settings/overview");
  };
  const { userDetails } = useUser();
  const {
    formData,
    errors,
    handleChange,
    handleSave,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    isCompanyInfoRequired,
    countries,
    states,
    cities,
  } = useUserDetailUpdate(userId, logo, selectedAvatar, handleNavigate);
  // console.log(countries, "counnnn");
  return (
    <div>
      <p className="text-[#000000DE] text-[14px] sm:text-[16px] 2xl:text-[18px] font-semibold">
        Name
      </p>
      <div className="grid grid-cols-1 space-y-2 sm:space-y-0 sm:grid-cols-3 sm:gap-4 gap-1.5 border-b pb-4 border-[#D8D9D4] my-5">
        <Input
          size="small"
          label="First Name"
          placeholder="John"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          error={!!errors.firstName}
          helperText={errors.firstName}
          maxLength={20}
          required
          maxSpaces={0}
        />
        <Input
          size="small"
          label="Middle Name"
          placeholder="Marcus"
          value={formData.middleName}
          onChange={(e) => handleChange("middleName", e.target.value)}
          error={!!errors.middleName}
          helperText={errors.middleName}
          maxLength={20}
          maxSpaces={0}
        />
        <Input
          size="small"
          label="Last Name"
          placeholder="Doe"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          error={!!errors.lastName}
          helperText={errors.lastName}
          maxLength={20}
          required
          maxSpaces={0}
        />
      </div>

      <p className="text-[#000000DE] text-[14px] sm:text-[16px] 2xl:text-[18px] font-semibold">
        Address
      </p>
      <div className="grid grid-cols-1 space-y-2 sm:space-y-0  lg:grid-cols-3 gap-4 border-b pb-4 border-[#D8D9D4] my-5">
        <div className="lg:col-span-2">
          <Input
            size="small"
            label="Street Address"
            placeholder="78 South 34 North"
            value={formData.streetAddress}
            onChange={(e) => handleChange("streetAddress", e.target.value)}
            error={!!errors.streetAddress}
            helperText={errors.streetAddress}
            maxLength={50}
            maxSpaces={1}
          />
        </div>
        <div className="lg:col-span-1">
          <SelectInput
            size="small"
            label="Country"
            placeholder="Select Country"
            value={selectedCountry}
            onChange={(value) => {
              handleChange("country", value);
              setSelectedCountry([value]);
            }}
            error={!!errors.country}
            helperText={errors.country}
            options={countries.map((country) => ({
              value: country._id,
              label: country.name,
            }))}
          />
        </div>
        {states.length > 0 && (
          <SelectInput
            size="small"
            label="State"
            placeholder="Select State"
            value={selectedState}
            onChange={(value) => {
              handleChange("state", value);
              setSelectedState([value]);
            }}
            error={!!errors.state}
            helperText={errors.state}
            options={states.map((state) => ({
              value: state._id,
              label: state.name,
            }))}
          />
        )}
        {cities.length > 0 && (
          <SelectInput
            size="small"
            label="City"
            placeholder="Select City"
            value={selectedCity}
            onChange={(value) => {
              handleChange("city", value);
              setSelectedCity(value);
            }}
            error={!!errors.city}
            helperText={errors.city}
            options={cities.map((city) => ({
              value: city._id,
              label: city.name,
            }))}
          />
        )}
        <Input
          size="small"
          label="Zip Code"
          placeholder="9865234"
          value={formData.zipCode}
          onChange={(e) => handleChange("zipCode", e.target.value)}
          error={!!errors.zipCode}
          helperText={errors.zipCode}
          maxLength={6}
          numeric
        />
      </div>

      <p className="text-[#000000DE] text-[14px] sm:text-[16px] 2xl:text-[18px] font-semibold">
        Contact Info
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3  space-y-2 sm:space-y-0 sm:gap-4 gap-1.5 border-b pb-4 border-[#D8D9D4] my-5">
        <Input
          size="small"
          label="Phone Number *"
          placeholder="Enter Your Number"
          value={formData.phoneNumber}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          maxLength={10}
          numeric
          readOnly
        />
        <Input
          size="small"
          label="Email Id"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          maxSpaces={0}
          maxLength={40}
        />
      </div>

      <p className="text-[#000000DE] text-[14px] sm:text-[16px] 2xl:text-[18px] font-semibold">
        Bio
      </p>
      <div className="grid grid-cols-1 space-y-2 sm:space-y-0  sm:grid-cols-3 md:grid-cols-4 sm:gap-4 gap-1.5 border-b pb-4 border-[#D8D9D4] my-5">
        <DatePicker
          size="small"
          label="Birth Date"
          placeholder="Enter Your DOB"
        />
        <SelectInput
          size="small"
          label="Gender"
          placeholder="Please Select Your Gender"
          value={formData.gender}
          onChange={(value) => handleChange("gender", value)}
          error={!!errors.gender}
          helperText={errors.gender}
          options={genderOptions}
        />
        <Input
          size="small"
          label="Designation"
          placeholder="Enter Your Designation"
          value={formData.designation}
          onChange={(e) => handleChange("designation", e.target.value)}
          error={!!errors.designation}
          helperText={errors.designation}
          maxSpaces={2}
          maxLength={30}
        />
        <SelectInput
          size="small"
          label="Nationality"
          placeholder="Please select Nationality"
          value={formData.nationality}
          onChange={(value) => handleChange("nationality", value)}
          error={!!errors.nationality}
          helperText={errors.nationality}
          options={nationalityOptions}
        />
      </div>

      <p className="text-[#000000DE] text-[14px] sm:text-[16px] 2xl:text-[18px] font-semibold">
        {userDetails?.userTypeString == "Brand" ? "Brand " : "Company "} Info{" "}
        {isCompanyInfoRequired ? "" : "(optional)"}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 space-y-2 sm:space-y-0  sm:gap-4 gap-1.5 border-b pb-4 border-[#D8D9D4] my-5">
        <Input
          size="small"
          label={
            userDetails?.userTypeString == "Brand"
              ? "Brand Name"
              : "Company Name"
          }
          placeholder="Enter Your Company Name"
          value={formData.companyName}
          onChange={(e) => handleChange("companyName", e.target.value)}
          error={!!errors.companyName}
          helperText={errors.companyName}
          maxLength={40}
          maxSpaces={1}
        />
        <Input
          size="small"
          label={
            userDetails?.userTypeString == "Brand"
              ? "Brand Website"
              : "Company Website"
          }
          placeholder="Enter Your Company Website"
          value={formData.companyWebsite}
          onChange={(e) => handleChange("companyWebsite", e.target.value)}
          error={!!errors.companyWebsite}
          helperText={errors.companyWebsite}
          maxLength={40}
          maxSpaces={1}
        />
        <Input
          size="small"
          label="GST No."
          placeholder="Enter Your GST No."
          value={formData.gstNo}
          onChange={(e) => handleChange("gstNo", e.target.value)}
          error={!!errors.gstNo}
          helperText={errors.gstNo}
          maxLength={15}
          maxSpaces={0}
        />
      </div>

      <FilteredAutocomplete
        label="Categories"
        placeholder="Categories"
        options={top100Films}
        value={formData?.categories}
        onChange={(newValue) => handleChange("categories", newValue)}
        error={!!errors.categories}
        helperText={errors.categories}
      />

      <div className="flex mt-6 sm:justify-end sm:gap-3 gap-2 flex-wrap">
        <button
          onClick={handleNavigate}
          className="rounded-full border-purple-600 py-2 px-6
            hover:border-purple-700 text-purple-600 hover:text-black text-[14px] sm:text-[16px] 2xl:text-[18px] font-normal border"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="py-2 px-4 gradient-bg rounded-full text-white hover:bg-purple-600"
        >
          Save Updates
        </button>
      </div>
    </div>
  );
};

export default DetailsForm;
