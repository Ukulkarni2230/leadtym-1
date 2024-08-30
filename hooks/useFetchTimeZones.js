import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useFetchTimeZones = () => {
  const [timeZones, setTimeZones] = useState([]);
  const { postApiCall } = useApi();

  useEffect(() => {
    const fetchTimeZones = async () => {
      try {
        const response = await postApiCall("/countries", {});
        const formattedTimeZones = response.data.flatMap((country) =>
          country.timeZones.map((timeZone) => ({
            id: country._id,
            country: country.name,
            title: timeZone,
          }))
        );
        setTimeZones(formattedTimeZones);
      } catch (error) {
        console.error("Error fetching time zones:", error);
        Message.error(error.message || "Failed to fetch time zones");
      }
    };

    fetchTimeZones();
  }, []);

  return timeZones;
};

export default useFetchTimeZones;
