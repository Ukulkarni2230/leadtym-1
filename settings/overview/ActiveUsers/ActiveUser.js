import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import UserCard from "./UserCard";

const users = [
  {
    id: 1,
    name: "Darrell Steward",
    title: "Regional Director",
    avatar: "a1.png",
    live: true,
    role: "Owner",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    title: "Personal Assistant",
    avatar: "a2.png",
    live: false,
    lastSeen: "9hr ago",
    role: "Member",
  },
  // {
  //   id: 3,
  //   name: "Savannah Nguyen",
  //   title: "Seller",
  //   avatar: "a3.png",
  //   live: false,
  //   lastSeen: "9hr 15min ago",
  //   role: "Member",
  // },
  {
    id: 4,
    name: "John Doe",
    title: "Developer",
    avatar: "a4.png",
    live: true,
    role: "Admin",
  },
];

const ActiveUser = () => {
  return (
    <div className="bg-white shadow-lg shadow-[#5E17EB26] rounded-md w-full overflow-hidden mt-4 md:mt-0">
      <div className="sm:px-4 sm:pt-6 p-2 sm:p-0 flex justify-between items-center">
        <h2 className="font-semibold text-[12px] sm:text-[14px] 2xl:text-[16px]">
          Users ({users.length} Users)
        </h2>
        <div className="flex gap-4 text-[20px] text-[#36434D]">
          <MdKeyboardArrowLeft className="cursor-pointer hover:text-gray-500" />
          <MdKeyboardArrowRight className="cursor-pointer hover:text-gray-500" />
        </div>
      </div>
      <div className="sm:px-4 px-2 flex flex-wrap my-4 justify-start gap-3 items-center">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ActiveUser;
