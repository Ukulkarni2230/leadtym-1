import React from "react";
import Box from "@mui/material/Box";
import ProgressBar from "../settings/kyc/ProgressBar";

const KycVerification = ({ progress, missingDocuments }) => {
  return (
    <div className="bg-white shadow-lg shadow-[#5E17EB26] border border-[#0000001A] rounded-lg p-2 sm:p-4 w-full">
      <div className="border-b border-[#0000001A] mb-4 sm:pb-5 pb-2 w-full">
        <h1 className="sm:text-lg text-base 2xl:text-xl font-bold mb-3">
          Complete your profile KYC Verification
        </h1>
        <p className="text-[#21272A] font-normal text-xs sm:text-sm 2xl:text-base mb-3">
          Submit all the documents to verify User
        </p>
        <Box sx={{ width: "100%", mb: "2px" }}>
          <ProgressBar value={progress} fillColor="#3EAF3F" height={14} />
        </Box>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-4">
        {missingDocuments.map((doc, index) => (
          <div
            key={index}
            className="bg-white border border-[#0000001A] rounded-2xl sm:px-3 px-2 h-[91px] text-start shadow-sm flex flex-col justify-between"
          >
            <p className="text-[#21272A] text-start mt-1 text-xs sm:text-sm 2xl:text-base truncate-2-lines">
              Add {doc}
            </p>
            <button className="gradient-bg h-[35px] mb-2 w-full flex justify-center items-center text-white rounded-full text-sm sm:text-base 2xl:text-lg">
              Upload
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KycVerification;
