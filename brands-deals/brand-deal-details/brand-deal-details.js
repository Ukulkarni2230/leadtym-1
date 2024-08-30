"use client";
import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
import { useRouter } from "next/navigation";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";

const DealDetails = () => {
  const router = useRouter();
  const [updatesOnWhatsApp, setUpdatesOnWhatsApp] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    link.download = "Guidelines_and_Contract.pdf";
    document.body.appendChild(link);
    link.click();
    document?.body?.removeChild(link);
  };

  return (
    <div className="p-2 sm:p-6">
      <div className="bg-white shadow-lg rounded-md flex flex-col lg:flex-row shadow-[#5E17EB26]">
        <div className="lg:w-1/3 lg:border-r m-2 sm:m-4 lg:my-6 lg:pr-4 border-[#D8D9D4]">
          <button
            onClick={() => router.back()}
            className="text-[#666666] text-[14px] mb-6 hover:text-black sm:text-[16px] 2xl:text-[18px] font-bold rounded-full text-center items-center flex gap-[1px] justify-center cursor-pointer"
          >
            <IoChevronBackOutline className="text-[19px]" />
            Back
          </button>
          <div className="flex items-center mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Brand Logo"
              className="w-[90px] h-[90px] sm:h-[120px] sm:w-[120px] rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg sm:text-[20px] 2xl:text-[22px] font-bold text-[#5649DF]">
                Super Indo
              </h2>
              <p className="text-[12px] sm:text-sm 2xl:text-base text-[#666666] font-normal">
                Brand Id: #Brand0123
              </p>
            </div>
          </div>
          <h1 className="text-[#101018] text-sm sm:text-base 2xl:text-lg font-bold mb-3">
            About Bewakoof
          </h1>
          <p className="text-[12px] sm:text-sm 2xl:text-base font-light  text-[#35353A] pb-10 border-b border-[#C5C5C7]">
            Trendy Threads is a premier fashion brand dedicated to offering
            stylish, affordable, and high-quality clothing for both men and
            women. We believe that everyone deserves to express their unique
            style with confidence, and our mission is to make that possible.
            Based in Boston, MA, we operate as a Large Company with a passionate
            team committed to making a big impact in the fashion world. Join us
            in celebrating individuality and fashion-forward thinking with
            Trendy Threads.
          </p>
          <div className="flex items-center justify-between w-full mt-4">
            <button className="text-[#5E17EB] py-2 gap-2 rounded-full flex text-center text-[14px] sm:text-base 2xl:text-lg w-full mr-1 border border-[#9181F4] justify-center items-center">
              Message <LuMessageSquare className="mt-1" />
            </button>
            <button
              className={`flex items-center  mr-1 text-2xl`}
              onClick={() => setLiked(!liked)}
            >
              {liked ? <GoHeartFill className="text-[#FF2E2E]" /> : <GoHeart />}
            </button>
          </div>
        </div>
        <div className="lg:w-2/3 px-2 sm:px-4 lg:px-0 lg:pr-4 py-2 sm:py-4">
          <div>
            <h1 className="text-[#FEBF00] text-[22px] sm:text-[24px] 2xl:text-[26px] font-bold mb-0">
              Urban Chic Collection
            </h1>
            <p className="text-sm sm:text-base 2xl:text-[18px] font-normal text-[#333333] mb-4">
              {`" It is very rewarding to educate the public about what we do and why it matters. "`}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="sm:w-1/2 mb-4 sm:mb-0">
              <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
                Preview URL
              </h3>
              <ul className="list-disc list-inside text-sm text-[#175AE4]">
                <li>
                  <a
                    href="http://www.urbanwear.com/preview"
                    className="text-[#175AE4] text-sm"
                  >
                    www.urbanwear.com/preview
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:w-1/2 sm:pl-6">
              <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
                Platform
              </h3>
              <ul className="list-disc list-inside text-sm sm:text-base 2xl:text-lg text-[#6E6E71]">
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="sm:w-1/2 mb-4 sm:mb-0">
              <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
                Brand Color
              </h3>
              <ul className="text-sm sm:text-base 2xl:text-lg text-[#333333] space-y-2">
                <li className="flex items-center text-sm sm:text-base 2xl:text-lg">
                  <span className="text-[#333333] mr-2">•</span>
                  <span>
                    Red -<span className="text-[#FF2E2E]">#FF2E2E</span>
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#FF2E2E] ml-2"></div>
                </li>
                <li className="flex items-center text-sm sm:text-base 2xl:text-lg">
                  <span className="text-[#333333] mr-2">•</span>
                  <span>Black - #000000</span>
                  <div className="w-4 h-4 rounded-full bg-black ml-2"></div>
                </li>
              </ul>
            </div>
            <div className="sm:w-1/2 sm:pl-6">
              <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
                Deliverable
              </h3>
              <ul className="list-disc list-inside text-sm sm:text-base 2xl:text-lg text-[#6E6E71]">
                <li>Story: 3</li>
                <li>Reel: 2</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="sm:w-1/2 mb-4 sm:mb-0">
              <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
                Product Category
              </h3>
              <ul className="list-disc list-inside text-sm sm:text-base 2xl:text-lg text-[#6E6E71]">
                <li>Streetwear</li>
              </ul>
            </div>
          </div>
          <h3 className="text-sm sm:text-base 2xl:text-lg text-[#101018] font-bold mb-2">
            Who Can Apply
          </h3>
          <p className="text-[12px] sm:text-[14px] font-light 2xl:text-base  text-[#35353A] mb-4">
            Influencers with a minimum of 5,000 followers on any platform.
          </p>
          <h3 className="text-sm sm:text-base 2xl:text-lg text-[#101018] font-bold mb-2">
            Task Description
          </h3>
          <p className="text-[12px] sm:text-[14px] font-light 2xl:text-base  text-[#35353A] mb-4">
            Influencers will create a series of content pieces showcasing
            UrbanWear's latest Urban Chic Collection. The content should focus
            on the unique designs, comfort, and versatility of the clothing,
            including styled outfits, street style shots, and fashion tips.
          </p>
          <h3 className="text-sm sm:text-base 2xl:text-lg text-[#101018] font-bold mb-3">
            Milestones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
            <div>
              <h4 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
                Content Approval
              </h4>
              <ul className="list-none text-sm sm:text-base 2xl:text-lg text-[#6E6E71] space-y-1">
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['•'] before:text-[#6E6E71]">
                  Timeline: 3 days
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['•'] before:text-[#6E6E71]">
                  Completion Status: Completed
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
                Post
              </h4>
              <ul className="list-none text-sm sm:text-base 2xl:text-lg text-[#6E6E71] space-y-1">
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['•'] before:text-[#6E6E71]">
                  Story, Reel & Post: 2 days
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['•'] before:text-[#6E6E71]">
                  Live Status: Live
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
                Content Upload Times
              </h4>
              <ul className="list-none text-sm sm:text-base 2xl:text-lg text-[#6E6E71] space-y-1">
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['•'] before:text-[#6E6E71]">
                  Morning Upload Time: 11:30 AM
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['•'] before:text-[#6E6E71]">
                  Evening Upload Time: 07:20 PM
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex gap-2 items-center mb-2.5">
              <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold m">
                Budget Type
              </h3>
              <p className="text-sm sm:text-base 2xl:text-lg text-[#6E6E71]">
                Fixed
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold m">
                Budget Amount
              </h3>
              <p className="text-sm sm:text-base 2xl:text-lg text-[#6E6E71]">
                ₹18,000
              </p>
            </div>
          </div>
          <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-3">
            Images
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Example 1"
              className="w-full h-auto rounded-[30px]"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Example 2"
              className="w-full h-auto rounded-[30px]"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Example 3"
              className="w-full h-auto rounded-[30px]"
            />
          </div>
          <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
            Video
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            <video className="w-full h-[180px] rounded-[30px]" controls>
              <source
                src="https://via.placeholder.com/video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4">
            <div className="mb-4 flex max-w-full sm:max-w-none truncate items-center">
              <CustomCheckbox
                label="Uploaded Guideline and Contract PDF:"
                id="uploaded-guideline"
                checked={updatesOnWhatsApp}
                onCheckedChange={setUpdatesOnWhatsApp}
                required={false}
                errorText=""
              />
              <button
                onClick={handleDownload}
                className="text-[#175AE4] text-sm sm:text-base max-w-full sm:max-w-none truncate ml-1 hover:underline"
              >
                Download Guidelines and Contract.
              </button>
            </div>

            <div className="mb-6">
              <CustomCheckbox
                label="Terms & Condition"
                id="terms-condition"
                checked={acceptedTerms}
                onCheckedChange={setAcceptedTerms}
                required={true}
                errorText=""
              />
            </div>
            <button className="gradient-bg text-white px-5 text-sm sm:text-base 2xl:text-lg py-2 rounded-full">
              I Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetails;
