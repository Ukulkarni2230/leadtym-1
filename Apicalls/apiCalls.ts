import { decrypt, encrypt } from "./encryptionUtils";
import { useUser } from "../hooks/user-service/useUser";
import useLogout from "../hooks/useLogout";
import { Message } from "../components/reuseable/ToastNotification";

const baseUrl = "http://localhost:3008/api";



function isValidJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

const useApi = () => {
  const { userDetails } = useUser();
  const logout = useLogout()

  const postApiCall = async (endpoint: string, payload: any = {}, usetoken: string): Promise<{ status: number, data: any, message: string }> => {
    const url = `${baseUrl}/${endpoint}`;
    const encryptedPayload = encrypt(JSON.stringify(payload));
    console.log(endpoint, "payload", payload);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const token = usetoken || userDetails.token;
    if (token) {
      myHeaders.append("Authorization", `Bearer ${token}`);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ encrypted: encryptedPayload }),
      });
      const status = response.status;

      if (status === 204) {
        return { status, data: [], message: "No Content" };
      }

      if (status === 200 || 201) {
        const responseData = await response.json();
        if (!responseData.message && !responseData.data) {
          throw new Error("Invalid response structure");
        }

        const decryptedResponse = {
          message: responseData.message ? decrypt(responseData.message) : "",
          data: responseData.data ? decrypt(responseData.data) : ""
        };
        console.log("Decrypted API Response:", decryptedResponse);
        if (decryptedResponse.message.includes('Token is invalid')) {
          Message.error("Session Expired!")
          logout();
        }


        if (isValidJSON(decryptedResponse.data)) {
          return { status, data: JSON.parse(decryptedResponse.data), message: decryptedResponse.message }; // Return status, data, and message
        } else if (decryptedResponse.data === "") {
          return { status, data: null, message: decryptedResponse.message }; // Handle empty data case
        } else {
          throw new Error("Decrypted data is not valid JSON");
        }
      } else {
        // Non-ok response, try to decrypt and show the actual error message

        const errorResponse = await response.json();
        let errorMessage = errorResponse.message ? decrypt(errorResponse.message) : `Failed to send request. Status: ${status}`;
        if (errorResponse.data) {
          errorMessage = decrypt(errorResponse.data) || errorMessage;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.log("Error occurred while sending request:", error); // Log the error
      throw new Error(error.message || "An unknown error occurred. Please check your internet connection and try again.");
    }
  };

  return { postApiCall };
};

export default useApi;
