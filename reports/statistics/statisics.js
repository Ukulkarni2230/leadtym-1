import React from "react";
import AllCreatedCampaigns from "./created-campaigns/all-created-campaigns";
import TopGeoTable from "./geo/top-geo-table";
import StatisticsChart from "./stats-chart/StatisticsChart";

const Statistics = () => {
  return (
    <div className="">
      <StatisticsChart />
      <TopGeoTable />
      <div className="sm:-mt-6">
        <AllCreatedCampaigns />
      </div>
    </div>
  );
};

export default Statistics;
