import React from "react";
import CustomCheckbox from "../../reuseable/checkbox";
const NotificationItem = ({
  notification,
  isSelected,
  handleSelectNotification,
  navigate,
}) => (
  <div
    className={`relative flex flex-wrap items-center hover:bg-[#F8F9FA] border-black border-opacity-10 border-b px-4 py-2 ${isSelected ? "bg-[#F8F9FA]" : "bg-white"
      }`}
  >
    <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
      <CustomCheckbox
        label=""
        checked={isSelected}
        onCheckedChange={(checked) => handleSelectNotification(notification.id)}
        required={false}
        errorText=""
        className="!rounded-[2.5px] !h-[16px] !w-[16px]"
        id={`custom-checkbox-${notification.id}`} // Pass unique id
        labelStyle="hidden"
      />
      <img
        src={notification.avatar}
        alt={notification.name}
        onError={(e) => {
          e.target.src = "/assets/placeholder.jpg";
        }}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
      />
      <p
        onClick={() => navigate(notification.campaignId)}
        className="font-bold text-[12px] cursor-pointer sm:text-[14px] 2xl:text-[16px] text-[#000000DE] mr-1 sm:mr-0 sm:w-[140px] truncate"
        title={notification.name}
      >
        {notification.name}
      </p>
      {notification.category && (
        <div
          onClick={() => navigate(notification.campaignId)}
          className={`px-3 py-[5px] cursor-pointer text-[10px] sm:mr-3 w-[100px] sm:text-[12px] 2xl:text-[14px] rounded truncate text-white ${notification.bgColor} text-xs font-medium`}
          title={notification.category}
        >
          {notification.category}
        </div>
      )}
    </div>
    <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0 flex-wrap">
      {console.log('notification', notification)}
      <p
        onClick={() => navigate(notification.campaignId)}
        className="text-[12px] cursor-pointer sm:text-[14px] 2xl:text-[16px] font-semibold text-[#000000DE] flex-grow"
      >
        {notification.description}
      </p>
      <div className="absolute right-4 flex items-center gap-2  ">
        {!notification.read && (
          <div
            className="w-2 h-2 bg-[#FF2E2E] rounded-full"
            title="Unread"
          ></div>
        )}
        <span className=" text-xs whitespace-nowrap text-[#000000DE] text-[12px] sm:text-[14px] 2xl:text-[16px] font-semibold">
          {notification.time}
        </span>
      </div>
    </div>
  </div>
);

export default NotificationItem;
