"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ProgressBar from "./ProgressBar";
import FileUpload from "./FileUpload";
import useVisibility from "@/src/hooks/user-service/useVisibility";
import useDocumentUpload from "@/src/hooks/user-service/useDocumentUpload";
import { useUser } from "@/src/hooks/user-service/useUser";

const Kyc = () => {
  const isAgency = useVisibility(["agency", "affiliate", "brand"]);
  const isIndividual = useVisibility(["individual", "influencer"]);
  const { fetchDocuments } = useDocumentUpload();
  const { userDetails } = useUser();
  const [uploadedDocuments, setUploadedDocuments] = useState({});
  const [requiredDocuments, setRequiredDocuments] = useState([]);
  const [existingDocs, setExistingDocs] = useState([]);

  useEffect(() => {
    if (isAgency) {
      setRequiredDocuments([
        { title: "GST Certificate", mandatory: true },
        { title: "Incorporation Certificate", mandatory: true },
        { title: "Company Pan card", mandatory: true },
      ]);
    } else if (isIndividual) {
      setRequiredDocuments([
        { title: "Adhar card", mandatory: true },
        { title: "Pan card", mandatory: true },
        { title: "GST Certificate", mandatory: false },
      ]);
    }
  }, [isAgency, isIndividual]);

  useEffect(() => {
    const fetchUserDocuments = async () => {
      const docs = await fetchDocuments(userDetails.userId);
      setExistingDocs(docs);
      const uploaded = {};
      docs.forEach((doc) => {
        uploaded[doc.document_type] = true;
      });
      setUploadedDocuments(uploaded);
    };
    if (userDetails.userId) {
      fetchUserDocuments();
    }
  }, [userDetails.userId]);

  const handleUploadComplete = (title) => {
    setUploadedDocuments((prev) => ({ ...prev, [title]: true }));
  };

  const getProgress = () => {
    const mandatoryDocuments = requiredDocuments.filter((doc) => doc.mandatory);
    const totalMandatory = mandatoryDocuments.length;
    const uploadedMandatory = mandatoryDocuments.filter(
      (doc) => uploadedDocuments[doc.title]
    ).length;
    return (uploadedMandatory / totalMandatory) * 100;
  };

  const getProgressColor = () => {
    const progress = getProgress();
    if (progress < 30) return "#FF0000"; // Red
    if (progress < 60) return "#FFA500"; // Orange
    if (progress < 90) return "#d6be4f"; // Yellow
    return "#3EAF3F"; // Green
  };

  return (
    <div className="p-2 sm:p-6">
      <div className="bg-white shadow-lg rounded-md sm:p-4 p-2 md:p-6">
        <div className="px-1 w-full border-b border-[#0000001A] mb-4 pb-2 sm:px-3">
          <h1 className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#21272A] font-semibold mb-1">
            Complete your profile KYC Verifications
          </h1>
          <p className="mb-4 text-[12px] sm:text-[14px] 2xl:text-[16px] text-[#666666] font-normal">
            To do the KYC please upload the given document.
          </p>
          <Box sx={{ width: "100%", mb: "2px" }}>
            <ProgressBar value={getProgress()} fillColor={getProgressColor()} />
          </Box>
        </div>
        {requiredDocuments.map((doc, index) => (
          <FileUpload
            key={index}
            title={doc.title}
            index={index + 1}
            mandatory={doc.mandatory}
            onUploadComplete={handleUploadComplete}
            existingDocs={existingDocs}
            setExistingDocs={setExistingDocs}
          />
        ))}
      </div>
    </div>
  );
};

export default Kyc;
