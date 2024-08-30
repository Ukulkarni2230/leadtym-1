import { useState } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import useUploadImage from "@/src/hooks/user-service/useUploadImage";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useDocumentUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { postApiCall } = useApi();
  const { uploadImage, deleteImage } = useUploadImage();

  const simulateProgress = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      if (progressValue < 99) {
        progressValue += 1;
        setProgress(progressValue);
      } else {
        clearInterval(interval);
      }
    }, 100); // adjust the interval duration as needed
    return () => clearInterval(interval);
  };

  const uploadDocument = async (userId, documentType, file, setError) => {
    setUploading(true);
    setProgress(0);
    setError("");
    let clearSimulation = simulateProgress();

    let imageUrl = null;

    try {
      // Upload image and get the URL
      imageUrl = await uploadImage(file);
      if (!imageUrl) {
        throw new Error("Failed to upload image");
      }

      // Prepare payload for upload-kyc-document
      const data = {
        user_id: userId,
        document_type: documentType,
        path: imageUrl,
      };

      const response = await postApiCall("upload-kyc-document", data);

      if (response.status === 201) {
        setProgress(100);
        clearSimulation();
        setUploading(false);
        return { success: true, path: imageUrl, document: response.data };
      } else {
        throw new Error("Failed to upload document");
      }
    } catch (err) {
      setError(err.message);
      Message.error(err.message);

      // Delete the uploaded image if document upload fails
      if (imageUrl) {
        await deleteImage(imageUrl);
      }
      clearSimulation();
      setUploading(false);
      setProgress(0);
      return { success: false, error: err.message };
    }
  };

  const fetchDocuments = async (userId) => {
    try {
      const response = await postApiCall("list-kyc-document-by-user_id", {
        user_id: userId,
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Failed to fetch documents");
      }
    } catch (err) {
      console.error(err.message);
      Message.error(err.message);

      return [];
    }
  };

  const deleteDocument = async (documentId) => {
    try {
      const response = await postApiCall("/kyc-document-delete", {
        document_id: documentId,
      });
      if (response.status === 200) {
        return { success: true };
      } else {
        throw new Error("Failed to delete document");
      }
    } catch (err) {
      console.error(err.message);
      Message.error(error.message);

      return { success: false, error: err.message };
    }
  };

  return {
    uploadDocument,
    fetchDocuments,
    deleteDocument,
    uploading,
    progress,
  };
};

export default useDocumentUpload;
