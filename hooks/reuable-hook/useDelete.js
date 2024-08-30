import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useDelete = (endpoint, payload, onSuccess, dependencies = []) => {
  const { postApiCall } = useApi();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const deleteData = async () => {
      if (payload) {
        setLoading(true);
        try {
          const response = await postApiCall(endpoint, payload);
          setData(response.data);
          Message.success(response.message);
          setError(null);
          if (onSuccess) onSuccess();
        } catch (err) {
          setError(err);
          Message.error(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    deleteData();
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return { loading, error, data };
};

export default useDelete;
