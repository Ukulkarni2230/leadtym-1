import FilteredAutocomplete from "@/src/components/reuseable/FilteredAutocomplete";
import Input from "@/src/components/reuseable/Input";
import SelectInput from "@/src/components/reuseable/SelectInput";
import TextArea from "@/src/components/reuseable/TextArea";
import PrimaryButton from "@/src/components/reuseable/primaryButton";
import React from "react";
import { top100Films } from "../../../settings/overview/EditOverview/DetailsForm";

const InfluencerMilestone = ({ setActiveTab, setIsOpen }) => {
  const options = [
    { value: "1", label: "India" },
    { value: "2", label: "Pakisthan" },
    { value: "3", label: "Maharashtra" },
  ];

  return (
    <form className="space-y-5">
      <h1 className="text-[14px] mt-2.5 sm:mt-0 sm:hidden block sm:text-[16px] 2xl:text-[18px] text-[#21272A] font-semibold mb-1">
        Influencer Milestone
      </h1>
      <div className="grid  gap-4">
        <FilteredAutocomplete
          label="Product Category"
          placeholder="Select Influencers"
          options={top100Films}
          defaultValue={[top100Films[1]]}
        />
        <FilteredAutocomplete
          label="Category"
          placeholder="Category"
          options={top100Films}
          defaultValue={[top100Films[1]]}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Input
          label="No. of story"
          placeholder="No. of story"
          size="small"
          padding="4px 0px"
        />
        <Input
          label="No. of reel"
          placeholder="No. of reel"
          size="small"
          padding="4px 0px"
        />
        <Input
          label="No. of posts"
          placeholder="No. of posts"
          size="small"
          padding="4px 0px"
        />
      </div>

      <TextArea
        label="Who can Apply"
        placeholder="Write who is eligible to apply"
        // value={campaignDetails.description}
        // onChange={handleInputChange("description")}
        rows={3}
      />
      <div className="space-y-3">
        <p>Milestone Overview</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <SelectInput
            label="Milestone name"
            // value={selectedValue}
            // onChange={handleChange}
            placeholder="Milestone name"
            options={options}
            size="small"
            padding="4px"
          />
          <SelectInput
            label="Timeline"
            // value={selectedValue}
            // onChange={handleChange}
            placeholder="Timeline"
            options={options}
            size="small"
            padding="4px"
          />
          <SelectInput
            label="Completion Status"
            // value={selectedValue}
            // onChange={handleChange}
            placeholder="Completion Status"
            options={options}
            size="small"
            padding="4px"
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <SelectInput
            label="Milestone name"
            // value={selectedValue}
            // onChange={handleChange}
            placeholder="Milestone name"
            options={options}
            size="small"
            padding="4px"
          />
          <SelectInput
            label="Day"
            // value={selectedValue}
            // onChange={handleChange}
            placeholder="Day"
            options={options}
            size="small"
            padding="4px"
          />
          <SelectInput
            label="Live Status"
            // value={selectedValue}
            // onChange={handleChange}
            placeholder="Completion Status"
            options={options}
            size="small"
            padding="4px"
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <SelectInput
            label="Content Upload Timeline"
            // value={selectedValue}
            // onChange={handleChange}
            placeholder="Content Upload Timeline"
            options={options}
            size="small"
            padding="4px"
          />
          <SelectInput
            label="Morining Time"
            // value={selectedValue}
            // onChange={handleChange}
            placeholder="Morning Time"
            options={options}
            size="small"
            padding="4px"
          />
          <SelectInput
            label="Evening Time"
            // value={selectedValue}
            // onChange={handleChange}
            placeholder="Evening Time"
            options={options}
            size="small"
            padding="4px"
          />
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

export default InfluencerMilestone;
