import React, { useState } from "react";
import Input from "@/src/components/reuseable/Input";

const AndroidContent = () => {
  const [selectedStatus, setSelectedStatus] = useState("available");

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-4 text-[#666666] text-xs sm:text-sm 2xl:text-base">
          Select your app status on Google Play
        </label>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#666666] text-xs sm:text-sm 2xl:text-base mt-3">
          <label className="flex items-center space-x-2 checkbox-wrapper">
            <input
              type="radio"
              name="status"
              value="available"
              checked={selectedStatus === "available"}
              onChange={() => setSelectedStatus("available")}
            />
            <span>Available in Store</span>
          </label>
          <label className="flex items-center space-x-2 checkbox-wrapper">
            <input
              type="radio"
              name="status"
              value="pending"
              checked={selectedStatus === "pending"}
              onChange={() => setSelectedStatus("pending")}
            />
            <span>Pending approval/not Published</span>
          </label>
          <label className="flex items-center space-x-2 checkbox-wrapper">
            <input
              type="radio"
              name="status"
              value="publishedOutOfStore"
              checked={selectedStatus === "publishedOutOfStore"}
              onChange={() => setSelectedStatus("publishedOutOfStore")}
            />
            <span>Published out of store</span>
          </label>
        </div>
      </div>

      {selectedStatus === "available" && (
        <div className="mb-4 w-full">
          <Input
            size="small"
            label="App URL *"
            placeholder="http://example.com/page.php?subid1={traffic_id}&subid2={publisher_id}&cost={cost}"
          />
        </div>
      )}

      {selectedStatus === "pending" && (
        <>
          <div className="mb-4 w-full">
            <Input
              size="small"
              label="Country *"
              placeholder="Enter the country"
            />
          </div>
          <div className="mb-4 w-full">
            <Input
              size="small"
              label="App ID *"
              placeholder="id4387643398348"
            />
          </div>
        </>
      )}

      {selectedStatus === "publishedOutOfStore" && (
        <>
          <div className="mb-4 w-full">
            <Input
              size="small"
              label="Android Package name *"
              placeholder="com.example.app"
            />
          </div>
          <div className="mb-4 w-full">
            <Input size="small" label="Channel name *" placeholder="Amazon" />
          </div>
          <div className="mb-4 w-full">
            <Input
              size="small"
              label="App URL *"
              placeholder="http://example.com/page.php?subid1={traffic_id}&subid2={publisher_id}&cost={cost}"
            />
          </div>
        </>
      )}

      <div className="flex justify-end">
        <button className="gradient-bg border border-transparent text-white px-6 py-[6px] sm:w-[110px] h-[42px] 2xl:w-[120px] sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg rounded-full">
          Next
        </button>
      </div>
    </div>
  );
};

export default AndroidContent;
