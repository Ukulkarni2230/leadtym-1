import React, { useState } from "react";
import { decrypt, encrypt } from "../Apicalls/encryptionUtils"; // Adjust the path as needed
import useApi from "../Apicalls/apiCalls";
import { useSelector } from "react-redux";

const Test = () => {
  const [inputData, setInputData] = useState("");
  const [encryptedData, setEncryptedData] = useState("");
  const [decryptedData, setDecryptedData] = useState("");
  const { postApiCall } = useApi();
  const [endpoint, setEndpoint] = useState("");
  const [payload, setPayload] = useState("{}");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [jsonError, setJsonError] = useState("");

  const userDetails = useSelector((state) => state.user.userDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponse(null);

    try {
      const parsedPayload = payload ? JSON.parse(payload) : {};
      const result = await postApiCall(endpoint, parsedPayload);
      setResponse(result);
    } catch (err) {
      if (err.response) {
        setError(
          `Failed to send request: ${
            err.response.data.message || err.response.statusText
          }`
        );
      } else if (err.request) {
        setError("No response received from the server.");
      } else {
        setError("Failed to send request: " + err.message);
      }
    }
  };

  const handlePayloadChange = (e) => {
    setPayload(e.target.value);
    try {
      if (e.target.value.trim()) {
        JSON.parse(e.target.value);
      }
      setJsonError("");
    } catch (err) {
      setJsonError(`Invalid JSON format: ${err.message}`);
    }
  };

  const handleEncrypt = () => {
    try {
      const encrypted = encrypt(inputData);
      setEncryptedData(encrypted);
    } catch (error) {
      console.error("Encryption error:", error);
    }
  };

  const handleDecrypt = () => {
    try {
      const decrypted = decrypt(encryptedData);
      setDecryptedData(decrypted);
    } catch (error) {
      console.error("Decryption error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">API Tester</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Endpoint:
              <input
                type="text"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payload (JSON format):
              <textarea
                value={payload}
                onChange={handlePayloadChange}
                // required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="5"
              />
            </label>
          </div>
          {jsonError && <div className="text-red-600 text-sm">{jsonError}</div>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={!!jsonError} // Disable button if there is an error
          >
            Send Request
          </button>
        </form>
        {response && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Response</h2>
            <pre className="bg-green-100 p-4 rounded-md overflow-x-auto mt-2 text-green-700">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
        {error && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-red-600">Error</h2>
            <p className="bg-red-100 p-4 rounded-md">{error}</p>
          </div>
        )}
      </div>

      <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Test Encryption and Decryption
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Input Data:
          </label>
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <button
            onClick={handleEncrypt}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Encrypt
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Encrypted Data:
          </label>
          <textarea
            value={encryptedData}
            onChange={(e) => setEncryptedData(e.target.value)} // Allow manual editing
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="3"
          />
        </div>
        <div className="mb-4">
          <button
            onClick={handleDecrypt}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Decrypt
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Decrypted Data:
          </label>
          <textarea
            value={decryptedData}
            readOnly
            rows={5}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">User Details</h1>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {JSON.stringify(userDetails, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Test;
