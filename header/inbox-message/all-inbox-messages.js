"use client";
import React from "react";
import NotificationList from "../../all-notifications/NotificationList";
import NotificationTopbar from "../../all-notifications/notification-topbar";
import useInboxNotifications from "@/src/hooks/inbox-msgs/useInboxNotifications";
import { isToday, isYesterday, subDays } from "date-fns";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";

const AllInboxMessages = () => {
  const navigate = useDynamicNavigate();
  const handleNavigate = (id) => {
    navigate(`/inbox/overview?id=${id}`);
  };
  const {
    notifications,
    selectedNotifications,
    searchQuery,
    showRead,
    setShowRead,
    setSearchQuery,
    handleSelectNotification,
    handleMarkAllRead,
  } = useInboxNotifications();
  const filteredNotifications = notifications.filter(
    (notification) =>
      (showRead ? true : !notification.read) &&
      (notification.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()))
  );

  const getSectionTitle = (date) => {
    if (isToday(date)) {
      return "Today";
    } else if (isYesterday(date)) {
      return "Yesterday";
    } else if (date > subDays(new Date(), 7)) {
      return "Last Week";
    } else {
      return "Older";
    }
  };

  const groupedNotifications = filteredNotifications.reduce(
    (acc, notification) => {
      const section = getSectionTitle(notification.date);
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(notification);
      return acc;
    },
    {}
  );

  return (
    <div className="p-2 sm:p-6">
      <div className="bg-white shadow-md shadow-[#5E17EB26] rounded-lg w-full">
        <NotificationTopbar
          filter={false}
          showDelete={false}
          showRead={showRead}
          setShowRead={setShowRead}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCount={selectedNotifications.length}
          handleMarkAllRead={handleMarkAllRead}
        />
        <NotificationList
          navigate={handleNavigate}
          groupedNotifications={groupedNotifications}
          selectedNotifications={selectedNotifications}
          handleSelectNotification={handleSelectNotification}
        />
      </div>
    </div>
  );
};

export default AllInboxMessages;
