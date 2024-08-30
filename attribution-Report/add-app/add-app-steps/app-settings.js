import React, { useState } from "react";
import {
  FaAndroid,
  FaApple,
  FaGlobe,
  FaUnity,
  FaShoppingCart,
} from "react-icons/fa";
import AndroidContent from "./app-details/AndroidContent";
import IOSContent from "./app-details/IOSContent";
import WebContent from "./app-details/WebContent";
import UnityContent from "./app-details/UnityContent";
import ECommerceContent from "./app-details/ECommerceContent";
import { IoLogoAndroid } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsAndroid2 } from "react-icons/bs";

const AppSettings = () => {
  const [selectedTab, setSelectedTab] = useState("Android");

  const renderContent = () => {
    switch (selectedTab) {
      case "Android":
        return <AndroidContent />;
      case "IOS":
        return <IOSContent />;
      case "Web":
        return <WebContent />;
      case "Unity":
        return <UnityContent />;
      case "ECommerce":
        return <ECommerceContent />;
      default:
        return <AndroidContent />;
    }
  };

  const getButtonStyle = (tab) => {
    return selectedTab === tab
      ? "border-[#5e17eb] text-[#5e17eb]"
      : "border-gray-300 text-[#666666]";
  };

  const getIconStyle = (tab) => {
    return selectedTab === tab ? "text-[#5e17eb]" : "text-gray-500";
  };

  return (
    <div className="">
      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 xl:gap-4 gap-2 mb-4">
        <button
          className={`flex flex-col items-center px-4 py-2 border rounded-md ${getButtonStyle(
            "Android"
          )}`}
          onClick={() => setSelectedTab("Android")}
        >
          <BsAndroid2 size={25} className={getIconStyle("Android")} />
          <span
            className={`mt-3 text-xs sm:text-sm 2xl:text-base ${getButtonStyle(
              "Android"
            )}`}
          >
            Android
          </span>
        </button>
        <button
          className={`flex flex-col items-center px-4 py-2 border rounded-md ${getButtonStyle(
            "IOS"
          )}`}
          onClick={() => setSelectedTab("IOS")}
        >
          <FaApple size={25} className={getIconStyle("IOS")} />
          <span
            className={`mt-3 text-xs sm:text-sm 2xl:text-base ${getButtonStyle(
              "IOS"
            )}`}
          >
            IOS
          </span>
        </button>
        <button
          className={`flex flex-col items-center px-4 py-2 border rounded-md ${getButtonStyle(
            "Web"
          )}`}
          onClick={() => setSelectedTab("Web")}
        >
          <AiOutlineGlobal size={25} className={getIconStyle("Web")} />
          <span
            className={`mt-3 text-xs sm:text-sm 2xl:text-base ${getButtonStyle(
              "Web"
            )}`}
          >
            Web(PBA)
          </span>
        </button>
        <button
          className={`flex flex-col items-center px-4 py-2 border rounded-md ${getButtonStyle(
            "Unity"
          )}`}
          onClick={() => setSelectedTab("Unity")}
        >
          <FaUnity size={25} className={getIconStyle("Unity")} />
          <span
            className={`mt-3 text-xs sm:text-sm 2xl:text-base ${getButtonStyle(
              "Unity"
            )}`}
          >
            Unity
          </span>
        </button>
        <button
          className={`flex flex-col items-center px-4 py-2 border rounded-md ${getButtonStyle(
            "ECommerce"
          )}`}
          onClick={() => setSelectedTab("ECommerce")}
        >
          <MdOutlineShoppingCart
            size={25}
            className={getIconStyle("ECommerce")}
          />
          <span
            className={`mt-3 text-xs sm:text-sm 2xl:text-base ${getButtonStyle(
              "ECommerce"
            )}`}
          >
            E-com
          </span>
        </button>
      </div>
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default AppSettings;
