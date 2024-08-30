"use client";
import React from "react";
import UserProfile from "./UserProfile";

import TransactionStats from "./TransactionStats";
import DeviceTraffic from "./DeviceTraffic";
import RecentCampActivity from "./RecentCampActivity";
import ActiveUser from "./ActiveUsers/ActiveUser";

const Overview = () => {
  return (
    <div className="p-2 sm:p-6 ">
      <div className="md:flex md:gap-4">
        <UserProfile />
        <div className="w-full space-y-4">
          <ActiveUser />
          <div className="sm:flex items-center gap-2">
            <TransactionStats />
            <DeviceTraffic />
          </div>
          <RecentCampActivity />
        </div>
      </div>
    </div>
  );
};

export default Overview;
