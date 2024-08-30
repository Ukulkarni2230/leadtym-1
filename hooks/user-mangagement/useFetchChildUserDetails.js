import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";

const useFetchChildUserDetails = (userId) => {
  const { postApiCall } = useApi();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChildUserDetails = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const response = await postApiCall("user-detail-by-id", {
          child_user_id: userId,
        });
        console.log(response, "aasdasdasd");
        setUserDetails(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchChildUserDetails();
  }, [userId]);

  return { userDetails, loading, error };
};

export default useFetchChildUserDetails;
