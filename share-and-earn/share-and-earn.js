import React from "react";
import ReferFriend from "./refer-friend";
import HowEverythingWorks from "./how-everythings-works";
import ReffralCard from "./reffral-stats-card";
import ReferralTable from "./refer-list-table";

const ShareAndEarn = () => {
  return (
    <div className="p-2 space-y-4 sm:p-6">
      <ReferFriend />
      <HowEverythingWorks />
      <ReffralCard />
      <ReferralTable />
    </div>
  );
};

export default ShareAndEarn;
