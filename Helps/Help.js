"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FaqList from "./FaqList";
import FaqTabs from "./FaqTabs";
import { faqs } from "@/src/exportData/staticData";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("General");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tabFaqs = faqs.filter((faq) => faq.category === activeTab);

  return (
    <div className="p-2 sm:p-6">
      <h1 className="text-[#0E0E0E] font-semibold text-[18px] sm:text-[20px] 2xl:text-[22px]">
        Hi User 👋 How can we help?
      </h1>
      {/* <div className="video-responsive">
        <iframe
          width="670"
          height="377"
          src="https://www.youtube.com/embed/6OXfgu8uKnE?list=RDGMEMCMFH2exzjBeE_zAHHJOdxg"
          title="Saari Duniya Jalaa Denge(Extended Full Song) Ranbir K,Anil K,Bobby D|Sandeep|B Praak,Jaani|Bhushan K"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div> */}
      <div className="bg-white mt-2 sm:mt-4 shadow-lg shadow-[#5E17EB26] rounded-md sm:p-4 p-2">
        <h4 className="text-[#0E0E0E] text-base sm:text-lg 2xl:text-xl font-semibold">
          Search your question
        </h4>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        {searchQuery && filteredFaqs.length === 0 ? (
          <p className="text-[11px] ml-[2px] text-[#82868C] sm:text-[13px] 2xl:text-[15px] mt-2">
            No results found for
            <span className="font-bold text-[#616468]">
              {" "}
              "{searchQuery}".
            </span>{" "}
          </p>
        ) : (
          <FaqList faqs={searchQuery ? filteredFaqs : []} />
        )}
      </div>
      {!searchQuery && (
        <div className=" bg-white  my-2  mt-4 shadow-lg rounded-md sm:p-4 p-2">
          <h4 className="text-[#0E0E0E] mb-4 text-[16px] sm:text-[18px] 2xl:text-[20px] font-semibold">
            Frequently Asked Questions
          </h4>
          <FaqTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="border-t border-[#9E9EA2] mt-6">
            <FaqList faqs={tabFaqs} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
