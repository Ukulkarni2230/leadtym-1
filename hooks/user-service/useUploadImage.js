import { useState } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useUploadImage = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const { postApiCall, deleteApiCall } = useApi();

  const uploadImage = async (file) => {
    try {
      setUploading(true);

      const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };

      const base64String = await convertToBase64(file);
      const base64Data = base64String;

      const response = await postApiCall("/file-upload", {
        base64Data,
      });

      const filePath = response.data.filePath;
      setUploadedImage(filePath);
      return filePath; // Return the uploaded file path
    } catch (error) {
      console.error("Error uploading image:", error);
      Message.error(error.message);

      return null; // Return null in case of error
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (fileUrl) => {
    try {
      await postApiCall("file-delete", {
        fileUrl,
      });
      setUploadedImage(null);
    } catch (error) {
      console.error("Error deleting image:", error);
      Message.error(error.message);
    }
  };

  return {
    uploading,
    uploadedImage,
    uploadImage,
    deleteImage,
    setUploadedImage,
  };
};

export default useUploadImage;
