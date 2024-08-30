import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-[200px] mb-3 rounded bg-[#F3F3F3] py-1.5 shadow flex flex-col items-center">
      <div className="flex sm:px-2 px-1.5 border-b border-[#E0E0E0] pb-1 w-full items-center">
        <div className="relative">
          <img
            src={`/assets/avtars/${user.avatar}`}
            alt={`${user.name}'s avatar`}
            className="w-11 h-11 rounded-full"
          />
          {user.live && (
            <span className="absolute bottom-1 right-[3px] w-2 h-2 bg-[#7AE582] rounded-full"></span>
          )}
          {!user.live && (
            <span className="absolute bottom-1 right-[3px] w-2 h-2 bg-[#FF4D4D] rounded-full"></span>
          )}
        </div>
        <div className="ml-3">
          <p className="text-[10px] sm:text-[12px] 2xl:text-[14px] text-[#0E0E0E] font-normal">
            {user.name}
          </p>
          <p className="text-[10px] -mt-[2px] sm:-mt-[4px] sm:text-[12px] 2xl:text-[14px] text-[#666666]">
            {user.title}
          </p>
        </div>
      </div>
      <div className="flex px-3 justify-between items-center w-full mt-1">
        <span className="text-[8px] sm:text-[10px] 2xl:text-[12px] text-[#0E0E0E] font-semibold">
          {user.live ? "Live Now" : `Last seen ${user.lastSeen}`}
        </span>
        <span className="text-[8px] 2xl:text-[9px] text-[#0E0E0E] border-[0.5px] border-[#000000] rounded-full px-1 py-[1px]">
          {user.role}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
