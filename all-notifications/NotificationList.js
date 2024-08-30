import React from "react";
import NotificationItem from "./NotificationItem";

const NotificationList = ({
  groupedNotifications,
  selectedNotifications,
  handleSelectNotification,
  navigate,
}) => {
  const isEmpty = Object.keys(groupedNotifications).length === 0;

  return (
    <div className="">
      {isEmpty ? (
        <div className="text-center py-6 text-xs sm:text-sm font-medium 2xl:text-base text-gray-500">
          No notifications found
        </div>
      ) : (
        Object.keys(groupedNotifications).map((section) => (
          <div key={section}>
            <h2 className="font-normal text-xs px-2 pb-2 pt-3 sm:ml-7 sm:text-sm 2xl:text-base text-[#000000DE]">
              {section}
            </h2>
            {groupedNotifications[section].map((notification) => (
              <NotificationItem
                navigate={navigate}
                key={notification.id}
                notification={notification}
                isSelected={selectedNotifications.includes(notification.id)}
                handleSelectNotification={handleSelectNotification}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationList;
