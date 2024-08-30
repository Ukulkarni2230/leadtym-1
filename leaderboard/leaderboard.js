"use client";
import React from "react";
import LeaderboardRanking from "./leaderboard-ranking";

const highestEarningData = [
  {
    ranking: "01",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User A",
    value: "₹1,33,000",
  },
  {
    ranking: "02",
    publisherId: "#IN9347",
    userImage: "https://via.placeholder.com/50",
    userName: "User B",
    value: "₹1,13,000",
  },
  {
    ranking: "03",
    publisherId: "#IF8424",
    userImage: "https://via.placeholder.com/50",
    userName: "User C",
    value: "₹93,000",
  },
  {
    ranking: "04",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User D",
    value: "₹73,000",
  },
  {
    ranking: "05",
    publisherId: "#IN9347",
    userImage: "https://via.placeholder.com/50",
    userName: "User E",
    value: "₹63,000",
  },
  {
    ranking: "06",
    publisherId: "#IF8424",
    userImage: "https://via.placeholder.com/50",
    userName: "User F",
    value: "₹53,000",
  },
  {
    ranking: "07",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User G",
    value: "₹33,000",
  },
  {
    ranking: "08",
    publisherId: "#IN9347",
    userImage: "https://via.placeholder.com/50",
    userName: "User H",
    value: "₹13,000",
  },
  {
    ranking: "09",
    publisherId: "#IF8424",
    userImage: "https://via.placeholder.com/50",
    userName: "User I",
    value: "₹9,000",
  },
];

const highestConvertingData = [
  {
    ranking: "01",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User A",
    value: "98%",
  },
  {
    ranking: "02",
    publisherId: "#IN9347",
    userImage: "https://via.placeholder.com/50",
    userName: "User B",
    value: "92%",
  },
  {
    ranking: "03",
    publisherId: "#IF8424",
    userImage: "https://via.placeholder.com/50",
    userName: "User C",
    value: "86%",
  },
  {
    ranking: "04",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User D",
    value: "75%",
  },
  {
    ranking: "05",
    publisherId: "#IN9347",
    userImage: "https://via.placeholder.com/50",
    userName: "User E",
    value: "67%",
  },
  {
    ranking: "06",
    publisherId: "#IF8424",
    userImage: "https://via.placeholder.com/50",
    userName: "User F",
    value: "54%",
  },
  {
    ranking: "07",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User G",
    value: "48%",
  },
  {
    ranking: "08",
    publisherId: "#IN9347",
    userImage: "https://via.placeholder.com/50",
    userName: "User H",
    value: "34%",
  },
  {
    ranking: "09",
    publisherId: "#IF8424",
    userImage: "https://via.placeholder.com/50",
    userName: "User I",
    value: "23%",
  },
  {
    ranking: "10",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User J",
    value: "11%",
  },
];

const highestReferringData = [
  {
    ranking: "01",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User A",
    value: "75",
  },
  {
    ranking: "02",
    publisherId: "#IN9347",
    userImage: "https://via.placeholder.com/50",
    userName: "User B",
    value: "75",
  },
  {
    ranking: "03",
    publisherId: "#IF8424",
    userImage: "https://via.placeholder.com/50",
    userName: "User C",
    value: "75",
  },
  {
    ranking: "04",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User D",
    value: "75",
  },
  {
    ranking: "05",
    publisherId: "#IN9347",
    userImage: "https://via.placeholder.com/50",
    userName: "User E",
    value: "75",
  },
  {
    ranking: "06",
    publisherId: "#IF8424",
    userImage: "https://via.placeholder.com/50",
    userName: "User F",
    value: "75",
  },
  {
    ranking: "07",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User G",
    value: "75",
  },
  {
    ranking: "08",
    publisherId: "#IN9347",
    userImage: "https://via.placeholder.com/50",
    userName: "User H",
    value: "75",
  },
  {
    ranking: "09",
    publisherId: "#IF8424",
    userImage: "https://via.placeholder.com/50",
    userName: "User I",
    value: "75",
  },
  {
    ranking: "10",
    publisherId: "#P08234",
    userImage: "https://via.placeholder.com/50",
    userName: "User J",
    value: "75",
  },
];

const Leaderboard = () => {
  return (
    <div className="sm:p-6 p-2 space-y-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-4">
      <div className="col-span-1">
        <LeaderboardRanking title="Highest Earning" data={highestEarningData} />
      </div>
      <div className="col-span-1">
        <LeaderboardRanking
          title="Highest Converting"
          data={highestConvertingData}
        />
      </div>
      <div className="col-span-2 xl:col-span-1">
        <LeaderboardRanking
          title="Highest Referring"
          data={highestReferringData}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
