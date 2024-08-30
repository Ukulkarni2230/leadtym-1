import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useState, useEffect } from "react";

const useFetchUserRoleModules = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postApiCall } = useApi();

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await postApiCall("/module/getAll", {});
        setModules(response.data);
      } catch (error) {
        setError(error);
        Message.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []); // Include postApiCall in the dependency array

  return { modules, loading, error };
};

export default useFetchUserRoleModules;
