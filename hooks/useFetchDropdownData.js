import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useFetchDropdownData = (endpoint) => {
  const [data, setData] = useState([]);
  const { postApiCall } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await postApiCall(endpoint, {});
        setData(
          response.data.map((item) => ({
            title: item.name,
            currency: item?.currency,
            id: item?._id,
          }))
        );
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        Message.error(error.message);
      }
    };
    fetchData();
  }, [endpoint]);

  return data;
};

export default useFetchDropdownData;
