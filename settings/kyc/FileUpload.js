import React, { useState } from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import ConfirmationModal from "@/src/components/reuseable/ConfirmationModal";
import useDocumentUpload from "@/src/hooks/user-service/useDocumentUpload";
import { useUser } from "@/src/hooks/user-service/useUser";

function FileUpload({
  title,
  index,
  onUploadComplete,
  mandatory,
  existingDocs,
  setExistingDocs,
}) {
  const [file, setFile] = useState(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { uploadDocument, uploading, progress, deleteDocument } =
    useDocumentUpload();
  const { userDetails } = useUser();
  const [error, setError] = useState("");

  const existingDoc = existingDocs?.find((doc) => doc.document_type === title);

  const handleFileChange = async (event) => {
    const newFile = event.target.files[0];

    if (newFile && newFile.type !== "application/pdf") {
      setError("Only PDF files are supported.");
      return;
    }

    if (newFile && newFile.size > 5 * 1024 * 1024) {
      setError("File size should not exceed 5 MB.");
      return;
    }

    setFile(newFile);
    setError("");
    setUploadComplete(false);

    const result = await uploadDocument(
      userDetails.userId,
      title,
      newFile,
      setError
    );

    if (result.success) {
      setUploadComplete(true);
      onUploadComplete(title);
      setExistingDocs((prev) => {
        const updatedDocs = (prev || []).filter(
          (doc) => doc.document_type !== title
        );
        return [
          ...updatedDocs,
          {
            _id: result?.document?._id,
            document_type: title,
            file: result?.document?.file,
            createdAt: result?.document?.createdAt,
          },
        ];
      });
    } else {
      setError(result.error);
    }
  };

  const handleDelete = async (docId) => {
    setIsDeleting(true);
    try {
      const result = await deleteDocument(docId);
      if (result.success) {
        setExistingDocs(existingDocs.filter((doc) => doc._id !== docId));
        setModalOpen(false);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Failed to delete document");
    } finally {
      setIsDeleting(false);
    }
  };

  const fileUrl = file ? URL.createObjectURL(file) : "";

  if (existingDoc) {
    return (
      <div className="p-4 mb-4 shadow-sm border border-[#D8D9D4] rounded-md">
        <div className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#21272A] font-semibold">
          {index}. {title}{" "}
          {mandatory ? (
            <span className="text-[16px] font-bold text-red-500">*</span>
          ) : (
            "(Optional)"
          )}
        </div>
        <p className="text-[#666666] text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal mb-4">
          Note: This field will be reflected in the overview page and{" "}
          {mandatory ? "mandatory" : "optional"} to fill.
        </p>

        <div className="flex items-center justify-between w-full sm:w-[60%] bg-white border border-[#E4E9F0] rounded-md px-2.5 py-2 shadow-sm mb-2">
          <div className="w-full">
            <div className="flex justify-between w-full">
              <div className="flex space-x-2">
                <HiDocumentText className="text-3xl text-green-500 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[10px] 2xl:text-[12px] font-medium pop text-[#132A60] mt-[2px]">
                    {existingDoc.document_type}
                  </span>
                  <span className="text-[8px] 2xl:text-[10px] text-gray-500">
                    {new Date(existingDoc.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <button
                className="bg-[#FEF1F1] rounded-full w-5 h-5 inline-flex items-center justify-center shadow-sm hover:bg-red-200 focus:outline-none"
                onClick={() => setModalOpen(true)}
              >
                <MdClose
                  className="text-[#EF4343] hover:text-red-600 font-extrabold"
                  size={16}
                />
              </button>
            </div>
            <div className="flex justify-between mt-2 items-center gap-[2px]">
              <div className="flex-grow">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-[#1F4690] h-1.5 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <a
                href={existingDoc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A020F0] hover:underline text-[8px] 2xl:text-[10px]"
              >
                Click to view
              </a>
            </div>
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-[8px] sm:text-[10px] 2xl:text-[12px] flex items-center">
            <span>Error: {error}</span>
          </div>
        )}

        <ConfirmationModal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={() => handleDelete(existingDoc._id)}
          title="Delete Confirmation"
          message="Are you sure you want to delete this Doc?"
          loading={isDeleting}
        />
      </div>
    );
  }

  return (
    <div className="p-4 mb-4 shadow-sm border border-[#D8D9D4] rounded-md">
      <div className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#21272A] font-semibold">
        {index}. {title}{" "}
        {mandatory ? (
          <span className="text-[16px] font-bold text-red-500">*</span>
        ) : (
          "(Optional)"
        )}
      </div>
      <p className="text-[#666666] text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal mb-4">
        Note: This field will be reflected in the overview page and{" "}
        {mandatory ? "mandatory" : "optional"} to fill.
      </p>

      {/* File Upload Input */}
      {!uploadComplete && (
        <label className="text-sm w-full sm:w-[60%] flex border-dashed border border-spacing-44 justify-between items-center border-gray-300 hover:border-gray-400 hover:text-gray-500 rounded-md">
          <input type="file" className="sr-only" onChange={handleFileChange} />
          <div className="flex items-center px-3 gap-2 py-1.5 w-full">
            <BiSolidFilePdf className="text-3xl text-red-500 -mt-[3px]" />
            <div className="flex justify-between w-full">
              <div>
                <span className="cursor-pointer py-2 pr-4 font-medium text-[12px] sm:text-[12px] 2xl:text-[14px] pop rounded-md text-[#132A00]">
                  Drop your file here, or{" "}
                  <span className="text-[#1F4690] text-[12px] sm:text-[12px] 2xl:text-[14px] hover:underline font-semibold">
                    browse
                  </span>
                </span>
                <p className="text-[8px] pr-4">Supports: PDF</p>
              </div>
              {!file && (
                <p className="py-2 px-4 text-[#5E17EB] hover:text-[#9768f4] font-semibold mt-[2px] cursor-pointer text-[12px] sm:text-[14px] 2xl:text-[16px]">
                  Upload
                </p>
              )}
            </div>
          </div>
        </label>
      )}

      {uploading && (
        <div className="w-full sm:w-[60%] bg-gray-200 rounded-full mt-3">
          <div
            className="bg-[#1F4690] h-[5px] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-[8px] sm:text-[10px] 2xl:text-[12px] flex items-center">
          <span>Error: {error}</span>
        </div>
      )}

      <ConfirmationModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => handleDelete(fileUrl)}
        title="Delete Confirmation"
        message="Are you sure you want to delete this Doc?"
        loading={isDeleting}
      />
    </div>
  );
}

export default FileUpload;
