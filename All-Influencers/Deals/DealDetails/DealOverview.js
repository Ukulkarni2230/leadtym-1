"use client";
import React, { useEffect, useState } from "react";
import SwitchBtn from "./SwitchBtn";
import DealDetails from "./DealDetails";
import Influencers from "./Influencers";
import { IoChevronBackOutline } from "react-icons/io5";
import ConvertIconToImg from "@/src/utils/ConvertIconToImg";
import { CgProfile } from "react-icons/cg";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";

const DealOverview = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useDynamicNavigate();

  useEffect(() => {
    const source = localStorage.getItem("navigationSource");
    if (source === "true") {
      setActiveTab("influencers");
      localStorage.removeItem("navigationSource");
    }
    return () => {
      localStorage.removeItem("navigationSource");
    };
  }, []);

  const handlePencilClick = () => {
    const allowedUserTypes = ["brand", "agency"];
    navigate("/influencers/manage-deals?edit=true", allowedUserTypes);
  };

  return (
    <div className="p-2 sm:p-6 lg:h-screen flex">
      <div className="bg-white shadow-lg shadow-[#5E17EB26] rounded-md flex flex-col lg:flex-row w-full h-full">
        <div className="lg:w-1/3 lg:border-r m-2 sm:m-4 lg:my-6 lg:pr-4 border-[#D8D9D4] lg:sticky lg:top-0 lg:h-full lg:overflow-y-auto no-scrollbar">
          <button
            onClick={() => router.back()}
            className="text-[#666666] text-[14px] mb-6 hover:text-black sm:text-[16px] 2xl:text-[18px] font-bold rounded-full text-center items-center flex gap-[1px] justify-center cursor-pointer"
          >
            <IoChevronBackOutline className="text-[19px]" />
            Back
          </button>
          <div className="flex items-center mb-6">
            <ConvertIconToImg
              src="/assets/avtars/a4.png"
              icon={CgProfile}
              className="w-[90px] h-[90px] sm:h-[120px] sm:w-[120px] rounded-full mr-4"
              alt="Brand Logo"
              size={100}
            />
            <div>
              <h2 className="text-lg sm:text-[20px] 2xl:text-[22px] font-bold text-[#5649DF]">
                Bewakoof
              </h2>
              <p className="text-[12px] sm:text-sm 2xl:text-base text-[#666666] font-normal">
                Brand Id: #Brand123
              </p>
            </div>
          </div>
          <h1 className="text-[#101018] text-sm sm:text-base 2xl:text-lg font-bold mb-3">
            About Bewakoof
          </h1>
          <p className="text-[12px] sm:text-sm 2xl:text-base font-light text-[#35353A] pb-10 border-b border-[#C5C5C7]">
            Trendy Threads is a premier fashion brand dedicated to offering
            stylish, affordable, and high-quality clothing for both men and
            women. We believe that everyone deserves to express their unique
            style with confidence, and our mission is to make that possible.
            Based in Boston, MA, we operate as a Large Company with a passionate
            team committed to making a big impact in the fashion world. Join us
            in celebrating individuality and fashion-forward thinking with
            Trendy Threads.
          </p>
          <div className="sm:p-4 p-2">
            <div className="flex md:space-x-4 space-x-2 text-base items-center text-[#35353A] sm:text-[20px]">
              <button
                className="hover:text-blue-600"
                onClick={handlePencilClick}
              >
                <LuPencil />
              </button>
              <button className="hover:text-red-600">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 px-2 sm:px-4 lg:px-0 lg:pr-4 py-2 sm:py-4 lg:overflow-y-auto no-scrollbar lg:h-full">
          <div className="flex justify-center mb-3">
            <SwitchBtn activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          {activeTab === "overview" ? <DealDetails /> : <Influencers />}
        </div>
      </div>
    </div>
  );
};

export default DealOverview;
