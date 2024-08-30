
"use client";
import React from "react";
import InfluencerProfileCard from "./InfluencerProfileCard";
import PropAndInsights from "./PropAndInsights";


const InfluencerDetails = () => {
  return (
    <div className="p-2 sm:p-6 xl:gap-6 2xl:gap-10 lg:gap-4 gap-2 md:flex">
      <div className="">
        <InfluencerProfileCard />
      </div>
      <div className="md:overflow-y-auto md:max-h-screen no-scrollbar w-full">
        <PropAndInsights />
      </div>
    </div>
  );
};

export default InfluencerDetails;
