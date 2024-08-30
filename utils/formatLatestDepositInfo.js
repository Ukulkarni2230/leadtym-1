import React from "react";

export function formatLatestDepositInfo(latestDeposit) {
  if (!latestDeposit) {
    return "";
  }

  const { date, amount } = latestDeposit;

  // Calculate time since the last deposit
  const depositDate = new Date(date);
  const now = new Date();
  const diffInMs = now - depositDate;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  // Format time string
  let timeString;
  if (diffInDays < 1) {
    timeString = "Today";
  } else if (diffInDays === 1) {
    timeString = "Yesterday";
  } else if (diffInDays < 30) {
    timeString = `${diffInDays} days ago`;
  } else if (diffInDays < 365) {
    timeString = "Since last month";
  } else {
    timeString = `${Math.floor(diffInDays / 365)} year(s) ago`;
  }

  // Return formatted JSX with amount highlighted
  return (
    <>
      Your Last deposit{" "}
      <span className="text-[#27AE60] font-medium mx-[2px]">₹{amount}</span>
      {timeString}
    </>
  );
}
