import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";

const useFetchRoleDetails = (roleId) => {
  const { postApiCall } = useApi();
  const [roleDetails, setRoleDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoleDetails = async () => {
      if (!roleId) {
        setLoading(false);
        return;
      }

      try {
        const response = await postApiCall("user-role/getById", { roleId });
        setRoleDetails(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoleDetails();
  }, [roleId]);

  return { roleDetails, loading, error };
};

export default useFetchRoleDetails;
