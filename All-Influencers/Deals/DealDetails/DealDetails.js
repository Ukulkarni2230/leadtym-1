import React from "react";
import { AiFillFilePdf } from "react-icons/ai";

const DealDetails = () => {
  return (
    <div>
      <p className="text-[22px] sm:text-[24px] 2xl:text-[26px] font-bold text-[#FEBF00] mb-0">
        Summer Vibes Collection
      </p>
      <p className="text-sm sm:text-base 2xl:text-[18px] font-normal text-[#333333] mb-4">
        {`" It is very rewarding to educate the public about what we do and why it matters. "`}
      </p>
      <div className="flex flex-col sm:flex-row mb-4">
        <div className="sm:w-1/2 mb-4 sm:mb-0">
          <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
            Preview URL
          </h3>
          <ul className="list-disc list-inside text-sm text-[#175AE4]">
            <li>
              <a
                href="http://www.trendythreads.com/preview"
                className="text-[#175AE4] text-sm"
              >
                www.trendythreads.com/preview
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
            <li>YouTube</li>
            <li>Facebook</li>
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
                Yellow -<span className="text-[#FFEE00]">#FFBF00</span>
              </span>
              <div className="w-4 h-4 rounded-full bg-[#FFEE00] ml-2"></div>
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
            <li>Posts: 4</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mb-4">
        <div className="sm:w-1/2 mb-4 sm:mb-0">
          <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-2">
            Product Category
          </h3>
          <ul className="list-disc list-inside text-sm sm:text-base 2xl:text-lg text-[#6E6E71]">
            <li>Fashion and Apparel</li>
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
        Influencers are required to create engaging content showcasing Trendy
        Threads' Summer Vibes Collection. The content should highlight the
        versatility, comfort, and style of the clothing line, including various
        match outfits, OOTD (Outfit Of The Day) posts, and styling tips. We are
        providing some image and video ideas to help you.
      </p>
      <h3 className="text-sm sm:text-base 2xl:text-lg text-[#101018] font-bold mb-3">
        Milestone
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
              Live Status: Scheduled
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
      <div className=" mb-4">
        <div className="flex gap-2 items-center mb-2.5">
          <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold m">
            Budget Type
          </h3>
          <p className="text-sm sm:text-base 2xl:text-lg text-[#6E6E71]">
            Flexible
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold m">
            Budget Amount
          </h3>
          <p className="text-sm sm:text-base 2xl:text-lg text-[#6E6E71]">
            ₹3,000 - ₹10,000
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
      <h3 className="text-sm sm:text-base 2xl:text-lg text-[#555555] font-bold mb-3">
        Brand Guideline & Contract PDF Document
      </h3>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center px-3  py-2.5 border border-[#EAECF0] hover:border-black  rounded-lg shadow-sm shadow-[#5E17EB26] hover:shadow-lg transition-shadow duration-300"
        >
          
          <AiFillFilePdf className="text-[#EF4444] text-[42px] " />


          <span className="text-sm sm:text-base 2xl:text-lg text-[#292929] font-semibold">
            Brand Guideline
          </span>
          <span className="text-sm ml-1 sm:text-base 2xl:text-lg text-[#16B364] font-extrabold">
            2.4 MB
          </span>
        </a>
        <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center px-3  py-2.5 border border-[#EAECF0] hover:border-black  rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          
          <AiFillFilePdf className="text-[#EF4444] text-[42px] " />


          <span className="text-sm sm:text-base 2xl:text-lg text-[#292929] font-semibold">
            Contract Pdf
          </span>
          <span className="text-sm ml-1 sm:text-base 2xl:text-lg text-[#16B364] font-extrabold">
            2.4 MB
          </span>
        </a>
      </div>
    </div>
  );
};

export default DealDetails;
