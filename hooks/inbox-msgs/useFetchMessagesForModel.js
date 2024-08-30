import useApi from "@/src/Apicalls/apiCalls";
import { useState, useEffect } from "react";
import useVisibility from "../user-service/useVisibility";

const useFetchMessages = (shouldFetch) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postApiCall } = useApi();
  const showForPublisher = useVisibility([
    "influencer",
    "affiliate",
    "individual",
  ]);
  const messageEndPoint = showForPublisher
    ? "message-notification-publisher"
    : "message-notification-advertiser";

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await postApiCall(messageEndPoint, {}); // Adjust the endpoint as needed
      setMessages(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptOffer = async (message) => {
    try {
      const response = await postApiCall("accept-offer", {
        offerId: message.offer._id, // Correct access to the offer ID
        publisherName: message.senderName,
        advertiserName: message.recipientName,
      });
      if (response.status === 200) {
        fetchMessages();
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
        offerId: message.offer._id, // Correct access to the offer ID
        publisherName: message.senderName,
        advertiserName: message.recipientName,
      });
      if (response.status === 200) {
        fetchMessages();
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
        counterAmount: counterValue,
        offerId: message.offer._id,
        publisherName: message.senderName,
        advertiserName: message.recipientName,
      });
      if (response.status === 200) {
        fetchMessages();
      } else {
        console.error("Failed to submit counter offer:", response.status);
      }
    } catch (error) {
      console.error("Failed to submit counter offer:", error);
    }
  };

  const markAllAsRead = async () => {
    const unreadMessageIds = messages
      .filter((message) => !message.read)
      .map((message) => message.id);

    try {
      const response = await postApiCall("mark-messages-as-read", {
        messageIds: unreadMessageIds,
      });
      if (response.status === 200) {
        fetchMessages(); // Refresh the messages after marking them as read
      } else {
        console.error("Failed to mark messages as read:", response.status);
      }
    } catch (error) {
      console.error("Failed to mark messages as read:", error);
    }
  };

  const unreadCount = messages.filter((message) => !message.read).length;

  useEffect(() => {
    if (!shouldFetch) return;

    fetchMessages();
  }, [shouldFetch]); // Trigger the effect when `shouldFetch` changes

  return {
    messages,
    loading,
    error,
    unreadCount,
    handleAcceptOffer,
    handleRejectOffer,
    handleCounterOffer,
    markAllAsRead,
  };
};

export default useFetchMessages;
