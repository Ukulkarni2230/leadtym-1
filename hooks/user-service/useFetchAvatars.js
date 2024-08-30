import { useEffect, useState } from "react";
import useVisibility from "./useVisibility";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useFetchAvatars = () => {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(false);
  const showForInfluencer = useVisibility(["influencer"]);
  const { postApiCall } = useApi();

  useEffect(() => {
    if (!showForInfluencer) {
      const fetchAvatars = async () => {
        setLoading(true);
        try {
          const response = await postApiCall("avatars", {});
          setAvatars(response.data);
        } catch (error) {
          console.error("Failed to fetch avatars", error);
      Message.error(error.message)

        } finally {
          setLoading(false);
        }
      };

      fetchAvatars();
    }
  }, [showForInfluencer]);

  return { avatars, loading };
};

export default useFetchAvatars;
