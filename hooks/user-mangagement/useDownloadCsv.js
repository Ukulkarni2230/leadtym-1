import { useState } from "react";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "@/src/hooks/user-service/useUser";
import { encrypt } from "@/src/Apicalls/encryptionUtils";

const useDownloadCsv = (endpoint) => {
  const { userDetails } = useUser();
  const token = userDetails?.token;
  const [loading, setLoading] = useState(false);

  const downloadCsv = async (payload) => {
    const url = `http://13.200.163.238:3008/api/${endpoint}`;
    const depps = { user_id: userDetails.userId };
    const finalPayload = payload || depps;
    const encryptedPayload = encrypt(JSON.stringify(finalPayload));
    console.log(finalPayload, "payload for downloading");
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ encrypted: encryptedPayload }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);

        // Generate a dynamic file name
        const date = new Date();
        const dateString = date.toLocaleDateString().replace(/\//g, "-");
        const timeString = date.toLocaleTimeString().replace(/:/g, "-");
        const fileName = `users_${dateString}_${timeString}.csv`;

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = downloadUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(downloadUrl);
        document?.body?.removeChild(a);
        Message.success("CSV downloaded successfully");
      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to download CSV");
      }
    } catch (error) {
      console.error("Failed to download CSV:", error);
      Message.error(
        error.message || "An unknown error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return { downloadCsv, loading };
};

export default useDownloadCsv;
