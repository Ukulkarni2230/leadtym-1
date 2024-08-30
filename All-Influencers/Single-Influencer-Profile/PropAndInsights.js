"use client";
import React, { useState } from "react";
import SwitchBtn from "./Properties/SwitchBtn";
import Properties from "./Properties/Properties";
import SocialMediaProfile from "./Properties/SocialMediaProfile";
import SocialMediaStats from "./Insights/SocialMediaStats";

const PropAndInsights = () => {
  const [activeTab, setActiveTab] = useState("properties");
  return (
    <div className="w-full">
      <SwitchBtn activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab == "properties" ? (
        <>
          <Properties />
          <SocialMediaProfile />
        </>
      ) : (
        <SocialMediaStats />
      )}
    </div>
  );
};

export default PropAndInsights;
