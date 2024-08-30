import React, { useState } from "react";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";
import { MdOutlineGridOn } from "react-icons/md";
import { RiVideoLine, RiMovie2Line } from "react-icons/ri";
import { HiOutlineBookmark } from "react-icons/hi";

const SocialMediaProfile = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const [activePlatform, setActivePlatform] = useState("Instagram");

  const tabs = [
    { name: "Posts", icon: <MdOutlineGridOn className="text-xl" /> },
    { name: "Guides", icon: <HiOutlineBookmark className="text-xl" /> },
    { name: "Reels", icon: <RiMovie2Line className="text-xl" /> },
    { name: "Videos", icon: <RiVideoLine className="text-xl" /> },
    { name: "Tagged", icon: <AiOutlineMore className="text-xl" /> },
  ];

  const platforms = [
    { name: "Instagram", icon: <AiFillInstagram className="text-2xl" /> },
    { name: "Facebook", icon: <AiFillFacebook className="text-2xl" /> },
    { name: "YouTube", icon: <AiFillYoutube className="text-2xl" /> },
    { name: "TikTok", icon: <FaTiktok className="text-2xl" /> },
    { name: "Snapchat", icon: <FaSnapchatGhost className="text-2xl" /> },
  ];

  const renderContent = () => {
    if (activePlatform !== "Instagram") {
      return (
        <div className="text-center">{`This is ${activePlatform} tab`}</div>
      );
    }

    switch (activeTab) {
      case "Posts":
        return (
          <div className="mt-4  grid grid-cols-2 sm:grid-cols-3 gap-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Post"
              className="w-full h-auto"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Post"
              className="w-full h-auto"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Post"
              className="w-full h-auto"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Post"
              className="w-full h-auto"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Post"
              className="w-full h-auto"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Post"
              className="w-full h-auto"
            />
          </div>
        );
      case "Guides":
        return <div className="text-center">This is Guides tab</div>;
      case "Reels":
        return <div className="text-center">This is Reels tab</div>;
      case "Videos":
        return <div className="text-center">This is Videos tab</div>;
      case "Tagged":
        return <div className="text-center">This is Tagged tab</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full truncate mx-auto p-4 bg-white border overflow-hidden border-[#D8D9D4] rounded-md mt-4">
      <div className="flex justify-around border-b border-gray-300 pb-2 mb-4">
        {platforms.map((platform) => (
          <button
            key={platform.name}
            className={`flex items-center text-sm space-x-1 p-2 ${
              activePlatform === platform.name
                ? "text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActivePlatform(platform.name)}
          >
            {platform.icon}
            <span className="hidden xl:block">{platform.name}</span>
          </button>
        ))}
      </div>
      {activePlatform === "Instagram" && (
        <>
          <div className="flex md:px-4 px-0  items-center  xl:space-x-8 space-x-4">
            <img
              src="https://up.yimg.com/ib/th?id=OIP.EVCGXvrjsvMrhfOX3su_FgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104"
              alt="Profile"
              className="rounded-full sm:w-24 h-20 w-20 sm:h-24"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[16px] filter blur-sm select-none sm:text-[18px] 2xl:text-xl font-extralight">
                  terrylucas
                </h2>
                <button className="px-2 text-[8px] sm:text-[9px] 2xl:text-[11px] py-[3px] bg-blue-500 text-white rounded-md">
                  Follow
                </button>
                <AiOutlineMore className="text-lg cursor-pointer" />
              </div>

              <div className="flex justify-center mt-1 space-x-2 xl:space-x-8">
                <div className="text-center">
                  <h3 className="text-[9px] sm:text-[11px] 2xl:text-[13px] font-semibold filter blur-sm select-none">
                    1,258
                  </h3>
                  <p className="text-[9px] sm:text-[11px] 2xl:text-[13px] text-[#262626] filter blur-sm select-none">
                    posts
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-[9px] sm:text-[11px] 2xl:text-[13px] font-semibold filter blur-sm select-none">
                    4M
                  </h3>
                  <p className="text-[9px] sm:text-[11px] 2xl:text-[13px] text-[#262626] filter blur-sm select-none">
                    followers
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-[9px] sm:text-[11px] 2xl:text-[13px] font-semibold filter blur-sm select-none">
                    1,250
                  </h3>
                  <p className="text-[9px] sm:text-[11px] 2xl:text-[13px] text-[#262626] filter blur-sm select-none">
                    following
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 md:px-4 px-0  flex space-x-2 overflow-x-auto">
            <div className="flex-none w-20">
              <img
                src="https://via.placeholder.com/150"
                alt="Story"
                className="rounded-full   sm:w-10  sm:h-10 w-12 h-12 mx-auto"
              />
              <p className="text-center text-xs">Made Us</p>
            </div>
            <div className="flex-none w-20">
              <img
                src="https://via.placeholder.com/150"
                alt="Story"
                className="rounded-full   sm:w-10  sm:h-10 w-12 h-12 mx-auto"
              />
              <p className="text-center text-xs">Lorem...</p>
            </div>
            <div className="flex-none w-20">
              <img
                src="https://via.placeholder.com/150"
                alt="Story"
                className="rounded-full   sm:w-10  sm:h-10 w-12 h-12 mx-auto"
              />
              <p className="text-center text-xs">Lorem...</p>
            </div>
            <div className="flex-none w-20">
              <img
                src="https://via.placeholder.com/150"
                alt="Story"
                className="rounded-full   sm:w-10  sm:h-10 w-12 h-12 mx-auto"
              />
              <p className="text-center text-xs">Lorem...</p>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-300 pt-2">
            <div className="flex justify-center space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`flex items-center space-x-1 px-2 py-1 ${
                    activeTab === tab.name ? "text-blue-500" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.icon}
                  <span className="text-sm hidden xl:block">{tab.name}</span>
                </button>
              ))}
            </div>
            <div className="mt-4">{renderContent()}</div>
          </div>
        </>
      )}
      {activePlatform !== "Instagram" && (
        <div className="mt-4 text-center text-gray-600">
          This is {activePlatform} tab
        </div>
      )}
    </div>
  );
};

export default SocialMediaProfile;
