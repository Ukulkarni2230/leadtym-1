import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import useVisibility from "../user-service/useVisibility";

const useInboxNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotifications, setSelectedNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRead, setShowRead] = useState(true);
  const { postApiCall } = useApi();

  const showForPublisher = useVisibility(["influencer", "affiliate", "individual"]);
  const messageEndPoint = showForPublisher ? "publisher-messages" : "advertiser-messages";

  // Fetch notifications data from API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await postApiCall(messageEndPoint);
        const fetchedData = response.data;
        // Map the API data to the structure used in the component
        const mappedNotifications = fetchedData.map((item) => ({
          campaignId: item.campaignId,
          id: item._id,
          name: item.senderName,
          category: "Campaign",
          description: item.content,
          time: new Date(item.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          date: new Date(item.createdAt),
          read: item.status === "read",
          avatar: item.senderAvatarUrl,
          bgColor: "bg-[#FD9A56]",
        }));

        setNotifications(mappedNotifications);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  // Helper function to check if there are any unread notifications
  const hasUnreadNotifications = () => {
    return notifications.some((notification) => !notification.read);
  };

  // Handle select all notifications
  const handleSelectAll = () => {
    if (selectedNotifications.length === notifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(
        notifications.map((notification) => notification.id)
      );
    }
  };

  // Handle individual notification selection
  const handleSelectNotification = (id) => {
    setSelectedNotifications((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((notificationId) => notificationId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle mark all as read by making an API call
  const handleMarkAllRead = async () => {
    if (hasUnreadNotifications()) {
      try {
        const response = await postApiCall("mark-messages-as-read", {
          messageIds: selectedNotifications,
        });

        if (response.status === 200 || response.status === 201) {
          setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
              selectedNotifications.includes(notification.id)
                ? { ...notification, read: true }
                : notification
            )
          );
          setSelectedNotifications([]);
        } else {
          console.error(
            "Failed to mark messages as read: Invalid response status",
            response.status
          );
        }
      } catch (error) {
        console.error("Failed to mark messages as read:", error);
      }
    }
  };

  return {
    notifications,
    selectedNotifications,
    searchQuery,
    showRead,
    setShowRead,
    setSearchQuery,
    handleSelectAll,
    handleSelectNotification,
    handleMarkAllRead,
  };
};

export default useInboxNotifications;
