"use client";

import React, { useEffect, useState } from "react";
import WalletHeader from "./wallet-header";
import RecentTransactionsTable from "./yourTransacrionsTable";
import EarnedMoneyChart from "./earned-money-chart/earnedMoneyChart";
import { IoDocumentText } from "react-icons/io5";
import MainAccountDetails from "./add-funds/main-account-details";
import AccountInfo from "./add-funds/AccountInfo";
import CustomAccordion from "./transactions/CustomAccordion";
import { useSelector } from "react-redux";
import useVisibility from "@/src/hooks/user-service/useVisibility";
import PublisherAccountInfo from "./add-funds/PublisherAccountInfo";

const WalletsLandingPage = () => {
  const wallet = useSelector((state) => state.wallet);
  const visibleForAdvertiser = useVisibility(["brand", "agency"]);

  // Access expenses state
  const expenses = useSelector((state) => state.expenses);

  // Access earnings state
  const earnings = useSelector((state) => state.earnings);
  console.log(wallet, "wallet details");
  console.log(expenses, "wallet expenses");
  console.log(earnings, "wallet earnings");

  return (
    <>
      <WalletHeader />

      <div className="lg:flex gap-2 lg:gap-6 p-2 sm:p-6 sm:mt-6 mt-4 space-y-4 lg:space-y-0 items-stretch">
        <div className="lg:w-1/2 w-full flex lg:min-h-[275px]">
          {visibleForAdvertiser ? (
            <AccountInfo className="flex-1 min-h-full" />
          ) : (
            <PublisherAccountInfo className="flex-1 min-h-full" />
          )}
        </div>
        <div className="lg:w-1/2  w-full flex lg:min-h-[275px]">
          <EarnedMoneyChart />
        </div>
      </div>

      <div className="w-full sm:flex items-stretch pt-2 gap-6 p-2 sm:p-6 sm:pt-0 md:flex">
        {/* <EarnedMoneyChart /> */}
        <RecentTransactionsTable />
      </div>
      <div className="w-full  pt-2 gap-6 p-2 sm:p-6 sm:pt-0 ">
        <CustomAccordion />
      </div>
      <div className="w-full items-stretch gap-y-2 pt-2 p-2 sm:p-6 sm:pt-0 flex flex-col">
        <div className="w-full py-2 items-center justify-between flex">
          <select class="border-[1px] text-[#A2A9B0] shadow-md shadow-gray-300 font-[900] text-[10px] sm:text-[12px] 2xl:text-sm w-[100px] sm:w-[116px] bg-transparent justify-center text-center border-[#C1C7CD] rounded-full h-[48px] items-center flex px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none">
            <option value="">2017</option>
            <option value="sun">2018</option>
            <option value="mon">2019</option>
          </select>
          <div>
            <button className="py-2.5 rounded-full text-[#0F62FE] hover:bg-[#0F62FE] hover:text-white transition-all duration-200  font-medium text-base border-2 flex items-center justify-center gap-x-1 border-[#0F62FE] px-6">
              <IoDocumentText />
              Invoice
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletsLandingPage;
