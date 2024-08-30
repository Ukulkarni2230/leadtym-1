"use client";
import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaSnapchat,
} from "react-icons/fa";
import { IoCaretUpOutline, IoCaretDownOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { Tooltip } from "@mui/material";

const SocialMediaStats = () => {
  const [activeTab, setActiveTab] = useState("Instagram");

  const tabs = [
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Facebook", icon: <FaFacebook /> },
    { name: "YouTube", icon: <FaYoutube /> },
    { name: "TikTok", icon: <FaTiktok /> },
    { name: "Snapchat", icon: <FaSnapchat /> },
  ];

  const data = {
    Instagram: {
      followers: "8M",
      shares: "8.236K",
      comments: "2.352M",
      metrics: [
        {
          title: "Avg Growth",
          value: "20%",
          change: 10,
          tooltip: "This is the average growth rate.",
        },
        {
          title: "Avg Likes",
          value: "11.8M",
        },
        {
          title: "Avg Shares",
          value: "8.236K",
        },
        {
          title: "Avg Comments",
          value: "2.352M",
        },
      ],
      posts: 80,
      reach: "2.352M",
      avgStoryView: 80,
      accountER: "80%",
      ROI: 80,
      impression: 80,
      referralTraffic: 809,
      costPerEngagement: 809,
      globalRank: "#5,323",
      countryRank: "#543",
      categoryRank: "#132",
      audienceSize: "6.1",
      demographics: [
        { country: "USA", percentage: "87.2%" },
        { country: "Australia", percentage: "63%" },
        { country: "India", percentage: "5%" },
      ],
      hashtags: {
        sports: "#Sports #Fit #health #healthcare",
        animals: "#animal #nature #pets",
        beauty: "#beauty #makeup #fashion",
      },
    },
    Facebook: {
      followers: "80M",
      shares: "80.236K",
      comments: "20.352M",
      metrics: [
        {
          title: "Avg Growth",
          value: "30%",
          change: 15,
          tooltip: "This is the average growth rate on Facebook.",
        },
        {
          title: "Avg Likes",
          value: "20.8M",
        },
        {
          title: "Avg Shares",
          value: "18.236K",
        },
        {
          title: "Avg Comments",
          value: "12.352M",
        },
      ],
      posts: 80,
      reach: "2.352M",
      avgStoryView: 80,
      accountER: "80%",
      ROI: 80,
      impression: 80,
      referralTraffic: 809,
      costPerEngagement: 809,
      globalRank: "#5,323",
      countryRank: "#543",
      categoryRank: "#132",
      audienceSize: "6.1",
      demographics: [
        { country: "USA", percentage: "87.2%" },
        { country: "Australia", percentage: "63%" },
        { country: "India", percentage: "5%" },
      ],
      hashtags: {
        sports: "#Sports #Fit #health #healthcare",
        animals: "#animal #nature #pets",
        beauty: "#beauty #makeup #fashion",
      },
    },
  };

  const ArrowIcon = ({ change }) => {
    return change >= 0 ? (
      <IoCaretUpOutline className="text-[#2E7D32]" />
    ) : (
      <IoCaretDownOutline className="text-red-500" />
    );
  };

  const activeData = data[activeTab];

  return (
    <div className="w-full mt-4 shadow-md shadow-[#5E17EB26] rounded-md">
      <div className="flex flex-wrap justify-between items-center p-4 bg-white border-b border-gray-200">
        <div className="text-sm font-semibold">terrylucas</div>
        <div className="text-xs text-gray-500">
          {activeData?.audienceSize} Audience Size{" "}
          {activeData?.demographics.map((d, index) => (
            <span key={index} className="ml-2">
              <span className="mr-1">{d.country}</span>
              <span>{d.percentage}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="my-4 border border-[#D8D9D4] rounded-t">
        <div className="flex justify-around items-center  rounded-t-md">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex gap-1 w-full px-3 justify-center lg:justify-start text-lg rounded-t items-center py-2 lg:text-sm font-semibold ${
                activeTab === tab.name
                  ? "text-[#5038ED] bg-white"
                  : "text-black"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.icon}
              <span className="hidden lg:block">{tab.name}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white  p-3">
          {[
            { title: "Followers", value: activeData?.followers },
            { title: "Shares", value: activeData?.shares },
            { title: "Comments", value: activeData?.comments },
            { title: "Avg Growth", value: activeData?.metrics[0]?.value },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col text-start w-full ${
                index < 3 ? "border-r border-gray-200" : ""
              }`}
            >
              <p className="text-xs sm:text-sm 2xl:text-[18px] font-normal text-[#666666] text-start">
                {item.title}
              </p>
              <h3 className="text-sm sm:text-[16px] sm:mt-1 2xl:text-[18px] font-semibold text-[#0E0E0E] text-start">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 bg-white border border-[#D8D9D4] rounded-md p-3">
          {activeData?.metrics?.map((metric, index) => (
            <div
              key={index}
              className={`flex border-b lg:border-b-0 border-r-0 flex-col items-center  w-full px-4 ${
                index < activeData?.metrics?.length - 1
                  ? "lg:border-r border-[#D8D9D4]"
                  : ""
              }`}
            >
              <div className="flex items-center  space-x-1 w-full">
                <h3 className="sm:text-sm max-w-[100px] truncate text-[12px] 2xl:text-[16px] text-[#666666] font-normal">
                  {metric.title}
                </h3>
                {metric.tooltip && (
                  <>
                    <GoQuestion
                      className="text-[16px] text-[#666666] hover:text-black"
                      data-tip={metric.tooltip}
                      data-for={`tooltip-${index}`}
                    />
                    <Tooltip title={metric.tooltip} arrow placement="top">
                      {metric.tooltip}
                    </Tooltip>
                  </>
                )}
              </div>
              <div className="flex items-center  space-x-2 mt-2 w-full">
                <span className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-semibold">
                  {metric.value}
                </span>
                {metric.change !== undefined && (
                  <>
                    <ArrowIcon change={metric.change} />
                    <span
                      className={`sm:text-[12px] text-[10px] 2xl:text-sm text-[#666666]`}
                    >
                      {Math.abs(metric.change)}%
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 bg-white border border-[#D8D9D4] rounded-md p-3">
          {[
            { title: "Reach", value: activeData?.reach },
            { title: "Avg Story View", value: activeData?.avgStoryView },
            { title: "Account ER", value: activeData?.accountER },
            { title: "ROI", value: activeData?.ROI },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex border-b lg:border-b-0 border-r-0 flex-col items-center  w-full px-4 ${
                index < 3 ? "lg:border-r border-[#D8D9D4]" : ""
              }`}
            >
              <div className="flex items-center  space-x-1 w-full">
                <h3 className="sm:text-sm max-w-[100px] truncate text-[12px] 2xl:text-[16px] text-[#666666] font-normal">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center  space-x-2 mt-2 w-full">
                <span className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-semibold">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 bg-white border border-[#D8D9D4] rounded-md p-3">
          {[
            { title: "Impression", value: activeData?.impression },
            { title: "Referral traffic", value: activeData?.referralTraffic },
            {
              title: "Cost Per Engagement",
              value: activeData?.costPerEngagement,
            },
            { title: "Global rank", value: activeData?.globalRank },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex border-b lg:border-b-0 border-r-0 flex-col items-center  w-full px-4 ${
                index < 3 ? "lg:border-r border-[#D8D9D4]" : ""
              }`}
            >
              <div className="flex items-center  space-x-1 w-full">
                <h3 className="sm:text-sm max-w-[100px] truncate text-[12px] 2xl:text-[16px] text-[#666666] font-normal">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center  space-x-2 mt-2 w-full">
                <span className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-semibold">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 bg-white border border-[#D8D9D4] rounded-md p-3">
          {[
            { title: "Global Rank", value: activeData?.globalRank },
            { title: "Country rank", value: activeData?.countryRank },
            { title: "Category rank", value: activeData?.categoryRank },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex border-b lg:border-b-0 border-r-0 flex-col items-center text-center w-full px-4 ${
                index < 2 ? "lg:border-r border-[#D8D9D4]" : ""
              }`}
            >
              <div className="flex items-center  space-x-1 w-full">
                <h3 className="sm:text-sm max-w-[100px] truncate text-[12px] 2xl:text-[16px] text-[#666666] font-normal">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center  space-x-2 mt-2 w-full">
                <span className="text-[14px] sm:text-[16px] 2xl:text-[18px] text-[#0E0E0E] font-semibold">
                  {item.value}
                </span>
              </div>
              <div className="flex items-center  space-x-2  w-full">
                <span className="text-[10px] sm:text-[12px] 2xl:text-[14px] text-[#666666] font-normal">
                  Sport & Art
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded-md border border-gray-200">
          <h3 className="text-sm font-semibold mb-2">Hashtag Sets</h3>
          <div className="grid grid-cols-3 gap-4 text-xs text-gray-500">
            <div>{activeData?.hashtags.sports}</div>
            <div>{activeData?.hashtags.animals}</div>
            <div>{activeData?.hashtags.beauty}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaStats;
