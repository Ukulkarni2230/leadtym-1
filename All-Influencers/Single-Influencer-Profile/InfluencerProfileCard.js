"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { TbGenderMale } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import ConvertIconToImg from "@/src/utils/ConvertIconToImg";
import { AiOutlineHeart } from "react-icons/ai";

const InfluencerProfileCard = () => {
  return (
    <div className="bg-white shadow-lg  h-full  w-full md:min-w-[350px] md:max-w-[25rem] lg:min-w-[430px] lg:max-w-[28rem] 2xl:max-w-[50rem] rounded-md shadow-[#5E17EB26]">
      <div className="p-2 sm:p-4 2xl:p-6 border-b border-[#D8D9D4]">
        <div className="flex items-center justify-between w-full mb-[18px]">
          <div className="relative flex-shrink-0 w-[100px] h-[100px]">
            <ConvertIconToImg
              icon={CgProfile}
              src="https://media.licdn.com/dms/image/D4D03AQFuK2JImexW9g/profile-displayphoto-shrink_400_400/0/1674758352007?e=1721865600&v=beta&t=3-ix_4U31j7pZxDhEQrs59PbJ607HwNdP1TGcxFUg98"
              className="rounded-full "
              alt="Profile Picture"
              size={100}
            />
            <div className="absolute bottom-1 right-2 bg-white p-[0.4px] rounded-full flex items-center justify-center w-5 h-5">
              <RiVerifiedBadgeFill className="text-[#AD7BFF] w-full h-full" />
            </div>
          </div>
          <div className=" w-full ml-3">
            <h2 className="text-lg sm:text-xl 2xl:text-[22px] font-bold text-[#5649DF] truncate">
              Niraj instagram Walia
            </h2>
            <div className="">
              <p className="text-xs sm:text-sm 2xl:text-base text-[#666666]">
                Id: #Influencer0123
              </p>
              <p className="text-xs sm:text-sm 2xl:text-base -mt-0.5 text-[#666666]">
                United States
              </p>
              <div className="flex -mt-0.5 items-center gap-1">
                <p className="text-xs sm:text-sm 2xl:text-base text-[#666666]">
                  Male
                </p>
                <TbGenderMale className="text-[#5649DF] text-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex sm:items-center items-start justify-center sm:px-6 px-2 mb-3">
          <p className="w-[120px]  font-semibold mt-[2px] sm:mt-0 text-[12px] sm:text-sm 2xl:text-[16px]">
            Bio
          </p>
          <p className="text-[12px] sm:text-sm 2xl:text-[16px] font-normal text-[#666666] ">
            Actor, musician, songwriter. “Rhythm & Blue is life :{" "}
            <a href="https://youtu.be/8tdy..." className="text-blue-500">
              link to our new video
            </a>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:justify-start justify-between mb-0">
          <button className="gradient-bg justify-center shadow-md text-sm sm:text-[16x] 2xl:text-[18px] whitespace-nowrap text-white px-4 py-1.5 rounded-full flex items-center transition-opacity duration-300 flex items-center hover:opacity-80 sm:max-w-none truncate">
            <p className="sm:w-full ">Invite</p>
            <MdKeyboardArrowRight className="ml-[2px] text-[25px]" />
          </button>
          <button className="bg-transparent text-sm justify-center sm:text-[16x] 2xl:text-[18px] whitespace-nowrap border border-[#5649DF] text-[#5649DF] px-4 py-1.5 rounded-full flex items-center transition-colors duration-300 hover:bg-[#5649DF] hover:text-white sm:max-w-none truncate">
            <p className="truncate sm:w-full hidden sm:block">Message</p>
            <FiMessageSquare className="ml-[2px] text-[18px]" />
          </button>
          <button className="bg-transparent text-sm justify-center sm:text-[16x] 2xl:text-[18px] whitespace-nowrap border border-[#5649DF] text-[#5649DF] px-4 py-1.5 rounded-full flex items-center transition-colors duration-300 hover:bg-[#5649DF] hover:text-white sm:max-w-none truncate">
            <p className="truncate sm:w-full hidden sm:block">Add Prospect</p>
            <AiOutlineHeart className="ml-[2px] text-[18px]" />
          </button>
        </div>
      </div>

      {/* break */}

      <div className=" p-2 sm:p-4 2xl:p-6 flex items-center border-b border-[#D8D9D4] gap-3 sm:gap-1">
        <h3 className="sm:text-sm text-[12px] whitespace-nowrap 2xl:text-[16px] font-semibold  w-[80px] sm:w-[120px]">
          Leadtym Score
        </h3>
        <div className="font-bold sm:text-sm text-[#5E17EB] text-[12px] 2xl:text-[16px]   ">
          777
        </div>
      </div>
      <div className=" p-2 sm:p-4 2xl:p-6 flex items-center border-b border-[#D8D9D4] gap-3 sm:gap-1">
        <h3 className="sm:text-sm text-[12px] 2xl:text-[16px] font-semibold  w-[80px] sm:w-[120px]">
          Language
        </h3>
        <div className="flex flex-wrap gap-1.5 ">
          {["English", "Hindi", "Portuguese", "Punjabi"].map((lang, index) => (
            <span
              key={index}
              className="bg-[#F3F3F3] text-[#0E0E0E] h-[24px] flex items-center justify-center text-xs sm:text-sm 2xl:text-[16px] px-2  rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
      <div className="p-2 sm:p-4 2xl:p-6 flex items-center border-b border-[#D8D9D4] gap-3 sm:gap-1">
        <h3 className="sm:text-sm text-[12px] 2xl:text-[16px] font-semibold  w-[80px] sm:w-[120px]">
          Socials
        </h3>
        <div className="flex flex-wrap gap-1.5 ">
          <div className="h-[25px] w-[25px] sm:h-[32px] sm:w-[32px] items-center sm:text-xl justify-center flex  p-1 border rounded-md border-[#0E0E0E]">
            <FaYoutube className="text-red-600" />
          </div>
          <div className="h-[25px] w-[25px] sm:h-[32px] sm:w-[32px] items-center sm:text-xl justify-center flex  p-1 border rounded-md border-[#0E0E0E]">
            <FaInstagram className="text-pink-600" />
          </div>
          <div className="h-[25px] w-[25px] sm:h-[32px] sm:w-[32px] items-center sm:text-xl justify-center flex  p-1 border rounded-md border-[#0E0E0E]">
            <FaTiktok className="text-black" />
          </div>
        </div>
      </div>

      <div className="p-2 sm:p-4 2xl:p-6 flex items-center border-b border-[#D8D9D4] gap-3 sm:gap-1">
        <h3 className="sm:text-sm text-[12px] 2xl:text-[16px] font-semibold   w-[80px] sm:w-[120px]">
          Categories
        </h3>
        <div className="flex flex-wrap gap-1.5 ">
          {["brand", "Cosmetic", "Products", "Makeup"].map((lang, index) => (
            <span
              key={index}
              className="bg-[#F3F3F3] text-[#0E0E0E] h-[24px] flex items-center justify-center text-xs sm:text-sm 2xl:text-[16px] px-2  rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
      <div className="p-2 sm:p-4 2xl:p-6 flex items-center border-b border-[#D8D9D4] gap-3 sm:gap-1">
        <h3 className="sm:text-sm text-[12px] 2xl:text-[16px] font-semibold   w-[80px] sm:w-[120px]">
          Mobile No
        </h3>
        <div className="flex flex-wrap gap-1.5 ">
          <span className=" text-[#666666] flex items-center justify-center text-xs sm:text-sm 2xl:text-[16px]">
            +91 89******90
          </span>
        </div>
      </div>
      <div className="p-2 sm:p-4 2xl:p-6 flex items-center gap-3 sm:gap-1">
        <h3 className="sm:text-sm text-[12px] 2xl:text-[16px] font-semibold  w-[80px] sm:w-[120px]">
          website
        </h3>
        <div className="flex flex-wrap gap-1.5 ">
          <span className=" text-[#666666] flex items-center justify-center text-xs sm:text-sm 2xl:text-[16px]">
            <a href="https://www.loreal.co" className=" text-[#6E94FF]">
              www.loreal.co
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfileCard;
