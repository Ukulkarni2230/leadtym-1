// src/InboxMessage.js
import React, { useState, useEffect } from "react";
import { BiMessage } from "react-icons/bi";
import InboxMessageModal from "./InboxMessageModal";
import useApi from "@/src/Apicalls/apiCalls";
import { onMessageListener } from "@/lib/firebase";
import useVisibility from "@/src/hooks/user-service/useVisibility";

const InboxMessage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0); // State to store unread message count
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { postApiCall } = useApi();
  const showForPublisher = useVisibility([
    "influencer",
    "affiliate",
    "individual",
  ]);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const messageEndPoint = showForPublisher
    ? "message-notification-publisher"
    : "message-notification-advertiser";

  // Function to fetch unread messages count
  const fetchUnreadCount = async () => {
    setLoading(true);
    try {
      const response = await postApiCall(messageEndPoint, {}); // Adjust the endpoint as needed
      const messages = response.data;
      const unreadMessages = messages.filter((msg) => !msg.read); // Filter unread messages
      setUnreadCount(unreadMessages.length); // Set unread count
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch messages initially when the component mounts
    // fetchUnreadCount();

    // Listen for incoming notifications
    onMessageListener()
      .then((payload) => {
        console.log("Notification received: ", payload);
        // Fetch unread count again when a notification is received
        fetchUnreadCount();
      })
      .catch((err) => console.log("Failed to receive message: ", err));
  }, []);

  return (
    <div>
      <button
        className={`relative flex items-center justify-center w-6 h-6 md:w-8 md:h-8 hover:bg-gray-200 rounded-full ${
          anchorEl ? "gradient-bg text-white" : "bg-white text-black"
        }`}
        onClick={handleOpen}
      >
        <BiMessage className="text-[14px] md:text-[20px]" />
        {/* Unread Count Badge */}
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">
            {unreadCount}
          </span>
        )}
      </button>

      <InboxMessageModal
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </div>
  );
};

export default InboxMessage;
