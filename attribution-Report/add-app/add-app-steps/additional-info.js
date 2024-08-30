import React from "react";
import SelectInput from "@/src/components/reuseable/SelectInput";
import { genderOptions } from "../../../settings/overview/EditOverview/DetailsForm";
import { IoWarningOutline } from "react-icons/io5";

const AdditionalInfo = ({ setIsSlidePanelOpen, handleAddMyAppClick }) => {
  const handleClick = () => {
    setIsSlidePanelOpen(false);
    handleAddMyAppClick();
  };

  return (
    <div>
      <div className="mb-4">
        <p className="text-xs sm:text-sm 2xl:text-base text-[#666666] mb-3">
          These settings affect the calculation and display of app data.
        </p>
        <div className="bg-[#FFF0F0] p-4 rounded-md mb-4 flex items-start space-x-2">
          <IoWarningOutline size={30} className="text-[#FF2E2E] -mt-1" />
          <div>
            <p className="text-[#101018] 2xl:text-base text-xs sm:text-sm">
              Important! Currency selection is irreversible once cost or revenue
              data is recorded. Once the timezone is set, it remains locked and
              can't be changed until the following day.
            </p>
          </div>
        </div>
        <div className="mb-4 w-full">
          <SelectInput
            size="small"
            label="Currency *"
            placeholder="Select Currency"
            options={genderOptions}
          />
        </div>
        <div className="mb-4 w-full">
          <SelectInput
            size="small"
            label="Timezone *"
            placeholder="Select Timezone"
            options={genderOptions}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-[#666666] text-xs sm:text-sm 2xl:text-base">
            Is your app directed toward children (either to children only or as
            part of a mixed audience)?
          </label>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#666666] text-xs sm:text-sm 2xl:text-base mt-3">
            <label className="flex items-center space-x-2">
              <input type="radio" name="directedTowardChildren" value="yes" />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="directedTowardChildren" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="gradient-bg border border-transparent text-white px-6 py-[6px] sm:w-[130px] h-[42px] 2xl:w-[140px] sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg rounded-full"
            onClick={handleClick}
          >
            Add My App
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
