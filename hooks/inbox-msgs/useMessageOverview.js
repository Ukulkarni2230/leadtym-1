import { useEffect, useState } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import useVisibility from "../user-service/useVisibility";

const useMessageOverview = (campaignId) => {
  const { postApiCall } = useApi();
  const [messageData, setMessageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const showForPublisher = useVisibility([
    "influencer",
    "affiliate",
    "individual",
  ]);
  const messageEndPoint = showForPublisher
    ? "message-history-publisher"
    : "message-history-advertiser";

  const fetchMessageData = async () => {
    try {
      const response = await postApiCall(messageEndPoint, {
        campaign_id: campaignId,
      });
      if (response.status === 200) {
        setMessageData(response.data); // Assuming you want all messages
      } else {
        setError("Failed to fetch message data");
      }
    } catch (err) {
      setError("Failed to fetch message data");
      console.error("Failed to fetch message data", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (campaignId) {
      fetchMessageData();
    }
  }, [campaignId]);

  const handleAcceptOffer = async (message) => {
    console.log("coming soooooooooooooooooooooooooooooooooooooon");
    try {
      const response = await postApiCall("accept-offer", {
        offerId: message.offerId._id || message.offer._id,
        publisherName: message.senderName,
        advertiserName: message.recipientName,
      });
      if (response.status === 200) {
        fetchMessageData();
        setMessageData((prevData) =>
          prevData.map((msg) =>
            msg._id === message._id ? { ...msg, status: "accepted" } : msg
          )
        );
      } else {
        console.error("Failed to accept offer:", response.status);
      }
    } catch (error) {
      console.error("Failed to accept offer:", error);
    }
  };

  const handleRejectOffer = async (message) => {
    try {
      const response = await postApiCall("reject-offer", {
        offerId: message.offerId._id,
        publisherName: message.senderName,
        advertiserName: message.recipientName,
      });
      if (response.status === 200) {
        fetchMessageData();
        setMessageData((prevData) =>
          prevData.map((msg) =>
            msg._id === message._id ? { ...msg, status: "rejected" } : msg
          )
        );
      } else {
        console.error("Failed to reject offer:", response.status);
      }
    } catch (error) {
      console.error("Failed to reject offer:", error);
    }
  };

  const handleCounterOffer = async (message, counterValue) => {
    try {
      const response = await postApiCall("counter-offer", {
        offerId: message.offerId._id,
        counterAmount: counterValue,
        publisherName: message.senderName,
        advertiserName: message.recipientName,
      });
      if (response.status === 200) {
        fetchMessageData();
        setMessageData((prevData) =>
          prevData.map((msg) =>
            msg._id === message._id
              ? { ...msg, amount: counterValue, status: "countered" }
              : msg
          )
        );
      } else {
        console.error("Failed to submit counter offer:", response.status);
      }
    } catch (error) {
      console.error("Failed to submit counter offer:", error);
    }
  };

  return {
    messageData,
    loading,
    error,
    handleAcceptOffer,
    handleRejectOffer,
    handleCounterOffer,
  };
};

export default useMessageOverview;
