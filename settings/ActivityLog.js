import React from "react";
import { IoSearch } from "react-icons/io5";

const ActivityLog = () => {
  const activities = [
    {
      id: 1,
      name: "Minerva Barnett",
      //   category: "Campaign",
      description: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      date: "Today",
      avatar: "/assets/avtars/a1.png",
      bgColor: "bg-[#FD9A56]",
    },
    {
      id: 2,
      name: "Anthony Briggs",
      category: "Free Classifieds",
      description: "Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
      date: "Yesterday",
      avatar: "/assets/avtars/a2.png",
      bgColor: "bg-[#3D369F]",
    },
    {
      id: 3,
      name: "Clifford Morgan",
      category: "Massage Au...",
      description: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      date: "Yesterday",
      avatar: "/assets/avtars/a3.png",
      bgColor: "bg-[#7D3A89]",
    },
    {
      id: 4,
      name: "Cecilia Webster",
      category: "Wallet &...",
      description: "Always Look On The Bright Side Of Life",
      time: "3:52 PM",
      date: "Yesterday",
      avatar: "/assets/avtars/a4.png",
      bgColor: "bg-[#00B69B]",
    },
    {
      id: 3,
      name: "Clifford Morgan",
      category: "Massage Au...",
      description: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      date: "Yesterday",
      avatar: "/assets/avtars/a3.png",
      bgColor: "bg-[#7B68EE]",
    },
    {
      id: 4,
      name: "Cecilia Webster",
      category: "Wallet &...",
      description: "Always Look On The Bright Side Of Life",
      time: "3:52 PM",
      date: "Yesterday",
      avatar: "/assets/avtars/a4.png",
      bgColor: "bg-[#FFC0CB]",
    },
    {
      id: 3,
      name: "Clifford Morgan",
      category: "Massage Au...",
      description: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      date: "Yesterday",
      avatar: "/assets/avtars/a3.png",
      bgColor: "bg-[#7B68EE]",
    },
    {
      id: 4,
      name: "Cecilia Webster",
      category: "Wallet &...",
      description: "Always Look On The Bright Side Of Life",
      time: "3:52 PM",
      date: "Yesterday",
      avatar: "/assets/avtars/a4.png",
      bgColor: "bg-[#FFC0CB]",
    },
    {
      id: 5,
      name: "Harvey Manning",
      category: "Curling Irons",
      description: "As Individual As The Women Who Use Them",
      time: "2:30 PM",
      date: "Yesterday",
      avatar: "/assets/avtars/a5.png",
      bgColor: "bg-[#008000]",
    },
    {
      id: 6,
      name: "Willie Blake",
      category: "User Man...",
      description: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "8:38 AM",
      date: "Yesterday",
      avatar: "/assets/avtars/a6.png",
      bgColor: "bg-[#00BFFF]",
    },
  ];

  return (
    <div className="p-2 sm:p-6">
      <div className="bg-white shadow-lg rounded-lg w-full">
        <div className="flex justify-between gap-1 items-center sm:p-4 p-2 border-b border-[#D8D9D4]">
          <h2 className="font-semibold text-[16px] whitespace-nowrap">Activity Log</h2>
          <div className="flex items-center h-[46px] bg-[#F3F3F3] rounded-full overflow-hidden ">
            <IoSearch className="text-[#666666] mx-3" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="py-2.5 pr-3 placeholder:text-[#666666] bg-[#F3F3F3] outline-none text-gray-700"
            />
          </div>
        </div>
        <div className="sm:p-4 p-2">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`flex items-center flex-wrap rounded-t-md hover:bg-[#f3f3f3] border-black border-opacity-10 border-b justify-between p-2 ${
                index > 0 && activities[index - 1].date !== activity.date
                  ? "border-t border-[#e5e5e5] mt-2 pt-2"
                  : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-1">
                <img
                  src={activity.avatar}
                  alt={activity.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <p
                  className="font-bold text-[12px] sm:text-[14px] 2xl:text-[16px] text-[#000000DE] ml-3 mr-1 sm:mr-0 sm:w-[140px] truncate"
                  title={activity.name}
                >
                  {activity.name}
                </p>
                {activity.category && (
                  <div
                    className={`px-3 py-[5px] text-[10px] sm:text-[12px] 2xl:text-[14px] rounded-md w-[90px] truncate text-white ${activity.bgColor} text-xs font-medium`}
                    title={activity.category}
                  >
                    {activity.category}
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-1 ">
                  <p className="text-[12px] sm:text-[14px] 2xl:text-[16px] font-semibold text-[#000000DE] ">
                    {activity.description}
                  </p>
                </div>
              </div>

              <span className="sm:ml-3 mr-0 sm:mr-2 flex justify-end ml-auto text-xs whitespace-nowrap text-[#000000DE] text-[12px] sm:text-[14px] 2xl:text-[16px] font-semibold">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
