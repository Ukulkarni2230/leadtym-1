"use client";
import React, { useState } from "react";
import { subDays, isToday, isYesterday } from "date-fns";

import NotificationList from "./NotificationList";
import NotificationTopbar from "./notification-topbar";

const AllNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "Minerva Barnett",
      category: "Campaign",
      description: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      date: new Date(),
      read: false,
      avatar: "/assets/avtars/a1.png",
      bgColor: "bg-[#FD9A56]",
    },
    {
      id: 2,
      name: "Anthony Briggs",
      category: "Free Classifieds",
      description: "Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
      date: subDays(new Date(), 1),
      read: false,
      avatar: "/assets/avtars/a2.png",
      bgColor: "bg-[#5E17EB]",
    },
    {
      id: 3,
      name: "Clifford Morgan",
      category: "Massage",
      description: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      date: subDays(new Date(), 1),
      read: true,
      avatar: "/assets/avtars/a3.png",
      bgColor: "bg-[#3D369F]",
    },
    {
      id: 4,
      name: "Cecilia Webster",
      category: "Wallet & More",
      description: "Always Look On The Bright Side Of Life",
      time: "3:52 PM",
      date: subDays(new Date(), 1),
      read: false,
      avatar: "/assets/avtars/a4.png",
      bgColor: "bg-[#7D3A89]",
    },
    {
      id: 5,
      name: "Harvey Manning",
      category: "Curling Irons",
      description: "Curling Irons Are As Individual As The Women Who Use Them",
      time: "2:30 PM",
      date: subDays(new Date(), 2),
      read: false,
      avatar: "/assets/avtars/a5.png",
      bgColor: "bg-[#90EE90]",
    },
    {
      id: 6,
      name: "Willie Blake",
      category: "User Management",
      description: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "8:38 AM",
      date: subDays(new Date(), 3),
      read: true,
      avatar: "/assets/avtars/a6.png",
      bgColor: "bg-[#00B69B]",
    },
    {
      id: 7,
      name: "Minerva Barnett",
      category: "Campaign",
      description: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      date: subDays(new Date(), 3),
      read: false,
      avatar: "/assets/avtars/a1.png",
      bgColor: "bg-[#FD9A56]",
    },
    {
      id: 8,
      name: "Fanny Weaver",
      category: "Free Classifieds",
      description: "Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
      date: subDays(new Date(), 5),
      read: true,
      avatar: "/assets/avtars/a2.png",
      bgColor: "bg-[#5E17EB]",
    },
    {
      id: 9,
      name: "Olga Hogan",
      category: "Massage",
      description: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      date: subDays(new Date(), 6),
      read: false,
      avatar: "/assets/avtars/a3.png",
      bgColor: "bg-[#2DB7F5]",
    },
    {
      id: 10,
      name: "Cecilia Webster",
      category: "Wallet & More",
      description: "Always Look On The Bright Side Of Life",
      time: "3:52 PM",
      date: subDays(new Date(), 7),
      read: false,
      avatar: "/assets/avtars/a4.png",
      bgColor: "bg-[#FF7F50]",
    },
  ]);

  const [selectedNotifications, setSelectedNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRead, setShowRead] = useState(true);

  const handleSelectAll = () => {
    if (selectedNotifications.length === notifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(
        notifications.map((notification) => notification.id)
      );
    }
  };

  const handleSelectNotification = (id) => {
    setSelectedNotifications((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((notificationId) => notificationId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter(
        (notification) => !selectedNotifications.includes(notification.id)
      )
    );
    setSelectedNotifications([]);
  };

  const handleMarkAllRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        selectedNotifications.includes(notification.id)
          ? { ...notification, read: true }
          : notification
      )
    );
    setSelectedNotifications([]);
  };

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
          showRead={showRead}
          setShowRead={setShowRead}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCount={selectedNotifications.length}
          handleDelete={handleDelete}
          handleMarkAllRead={handleMarkAllRead}
        />
        <NotificationList
          groupedNotifications={groupedNotifications}
          selectedNotifications={selectedNotifications}
          handleSelectNotification={handleSelectNotification}
        />
      </div>
    </div>
  );
};

export default AllNotifications;
