import { decrypt, encrypt } from "./encryptionUtils";

const baseUrl = "https://commonapi.mastersindia.co/commonapis";

async function verifyGstNumber(gstNumber: string): Promise<{ status: number, data: any, message: string }> {
  const endpoint = `${baseUrl}/gstin-api?gstin=${gstNumber}`;
  
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "Authorization": `Bearer YOUR_API_KEY` // Replace with your actual API key
  };

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: headers
    });

    const status = response.status;

    if (response.ok) {
      const responseData = await response.json();
      return { status, data: responseData, message: "GST number verified successfully" };
    } else {
      const errorResponse = await response.json();
      let errorMessage = errorResponse.message ? decrypt(errorResponse.message) : `Failed to verify GST number. Status: ${status}`;
      if (errorResponse.data) {
        errorMessage = decrypt(errorResponse.data) || errorMessage;
      }
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error occurred while verifying GST number:", error); // Log the error
    throw new Error(error.message || "An unknown error occurred. Please check your internet connection and try again.");
  }
}

export default verifyGstNumber;
