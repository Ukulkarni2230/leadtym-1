import FilteredAutocomplete from "@/src/components/reuseable/FilteredAutocomplete";
import Input from "@/src/components/reuseable/Input";
import SelectInput from "@/src/components/reuseable/SelectInput";
import TextArea from "@/src/components/reuseable/TextArea";
import PrimaryButton from "@/src/components/reuseable/primaryButton";
import React, { useState } from "react";
import { top100Films } from "../../../settings/overview/EditOverview/DetailsForm";

const DealRequirement = ({ setActiveTab, setIsOpen }) => {
  const options = [
    { value: "1", label: "India" },
    { value: "2", label: "Pakisthan" },
    { value: "3", label: "Maharashtra" },
  ];
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const samplePdfUrl = "path/to/sample.pdf";
  return (
    <form className="space-y-5">
      <h1 className="text-[14px] mt-2.5 sm:mt-0 sm:hidden block sm:text-[16px] 2xl:text-[18px] text-[#21272A] font-semibold mb-1">
        Deal Requriments
      </h1>
      <div className="grid  gap-4">
        <FilteredAutocomplete
          label="Influencers"
          placeholder="Select Influencers"
          options={top100Films}
          defaultValue={[top100Films[1]]}
        />
        <SelectInput
          label="Platforms"
          // value={selectedValue}
          // onChange={handleChange}
          placeholder="Platforms"
          options={options}
          size="small"
          padding="4px"
        />
      </div>
      <Input
        label="Deal Name"
        placeholder="Name of Your Campaign"
        size="small"
        padding="4px 0px"
      />
      <Input
        label="About Us"
        placeholder="Write Company Description"
        size="small"
        padding="4px 0px"
      />

      <Input
        label="Preview URL"
        placeholder="Campaign Preview URL"
        size="small"
        padding="3px 0px"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <SelectInput
          label="Budget Type"
          // value={selectedValue}
          // onChange={handleChange}
          placeholder="Budget Type"
          options={options}
          size="small"
          padding="4px"
        />
        <SelectInput
          label="Budget Amount"
          // value={selectedValue}
          // onChange={handleChange}
          placeholder="Budget Amount"
          options={options}
          size="small"
          padding="4px"
        />
      </div>
      <TextArea
        label="Description Line"
        // value={campaignDetails.description}
        // onChange={handleInputChange("description")}
        rows={3}
      />
      <div>
        <div className="border border-[#837A88] rounded-md py-2.5 px-3 flex justify-between items-center">
          <input
            type="file"
            accept="application/pdf"
            onChange={onFileChange}
            className="w-full text-[10px]"
          />
          <button className="text-[#5E17EB] text[12px] sm:text-sm 2xl:text-[16px] ml-4">
            Upload
          </button>
        </div>
        <div className="flex justify-between mt-1 items-center">
          <p className="text-[#20102B80] text-[12px] sm:text-sm 2xl:text-[16px] ">
            To download a sample brand guideline and contract PDF structure.
          </p>
          <div className="flex items-center ">
            <a
              href={samplePdfUrl}
              download
              className="text-[#5E17EB] text-[12px] sm:text-sm 2xl:text-[16px] flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16s1-1 4-1 4 1 4 1 1-1 4-1 4 1 4 1v4H4v-4zM8 12l4 4m0 0l4-4m-4 4V4"
                />
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>

      <div className="md:flex gap-3 justify-end my-7">
        <PrimaryButton
          onClick={() => setIsOpen(false)}
          isLoading={false}
          py="py-2"
          borderGradient={true} // Enable gradient border
          className="xl:w-1/4 md:w-1/2" // Apply width here
        >
          Draft
        </PrimaryButton>
        <PrimaryButton
          onClick={() => setActiveTab(1)}
          isLoading={false}
          py="py-2"
          className="xl:w-1/4 whitespace-nowrap md:w-1/2 mt-3 md:mt-0"
        >
          Save & Next
        </PrimaryButton>
      </div>
    </form>
  );
};

export default DealRequirement;
