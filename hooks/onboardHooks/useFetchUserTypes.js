import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useState, useEffect } from "react";
// import useApi from "../Apicalls/apiCalls";

const useFetchUserTypes = () => {
  const { postApiCall } = useApi();
  const [userTypes, setUserTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserTypes = async () => {
      try {
        const response = await postApiCall("user-types", {}); // Adjust the endpoint as needed
        setUserTypes(response.data);
      } catch (error) {
        setError(error.message || "Failed to fetch user types");
        Message.error(error.message)
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserTypes();
  }, []);

  return { userTypes, isLoading, error };
};

export default useFetchUserTypes;
