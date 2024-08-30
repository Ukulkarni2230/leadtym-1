"use client";

import React, { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";

const GlobalPostback = () => {
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const [buttonBgColor, setButtonBgColor] = useState("gradient-bg");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`postback?click_id={REPLACE}`)
      .then(() => {
        setCopyButtonText("Copied!");
        setButtonBgColor("bg-green-700");
        setTimeout(() => {
          setCopyButtonText("Copy");
          setButtonBgColor(" bg-[#5E17EB] ");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full p-2 sm:p-6">
      <div className="flex flex-col w-full lg:flex-row lg:space-x-6">
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex-1 rounded-md p-2 sm:p-3 shadow-md border-[#D8D9D4] border bg-white">
            <h6 className="text-[#101018]">Postback</h6>
            <h6 className="mt-4 text-[#35353A]">
              How to Set Up Global Postback:
            </h6>
            <p className="mt-4 text-[#35353A] font-semibold">
              1. Copy the URI Link:
            </p>
            <p className="mt-2 text-[#6E6E71]">
              Locate the standard postback URL provided by your affiliate
              network or tracking platform.
            </p>
            <p className="mt-4 text-[#35353A] font-semibold">
              2. Replace the Macro:
            </p>
            <p className="mt-2 text-[#6E6E71]">
              Identify the macro (often denoted by ##OFFER_ID## or similar)
              within the URL that specifies the specific offer.
            </p>
            <p className="mt-4 text-[#35353A] font-semibold">
              3. Paste the Global Postback URL Link:
            </p>
            <p className="mt-2 text-[#6E6E71]">
              Navigate to the section for managing global postbacks. Paste the
              modified URL (with the macro removed) into the designated field.
              This single URL will now be used to track conversions for all your
              offers.
            </p>
          </div>

          <div className="flex-1 rounded-md mt-6 p-2 sm:p-3 shadow-md border-[#D8D9D4] border bg-white">
            <h6 className="text-[#101018]">Global Postback URL</h6>
            <p className="mt-4 text-[#35353A]">Postback URL:</p>
            <p className="text-[#6E6E71]">
              This is the web address/url where your script is located.
            </p>

            <div className="flex items-center md:space-y-0 md:py-0 justify-between pr-0 px-2 md:px-4 md:pr-0 bg-[#D9D9D9] mt-8 rounded-full">
              <p className="text-[#5E17EB] flex-1 mr-2 truncate">
                https://wisework10478249.o18.click/p?m=6863&tid=
                <strong>{"{REPLACE}"}</strong>
              </p>

              <button
                onClick={copyToClipboard}
                className={`${buttonBgColor} text-white md:hidden flex items-center justify-center gap-1 px-4 h-10 rounded-full`}
              >
                <IoCopy size={16} /> {copyButtonText}
              </button>
              <button
                onClick={copyToClipboard}
                className={`${buttonBgColor} text-white hidden md:flex items-center justify-center gap-1 w-40 h-10 rounded-full`}
              >
                <IoCopy size={16} /> {copyButtonText}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex-1 rounded-md mt-6 lg:mt-0 p-2 sm:p-3 shadow-md border-[#D8D9D4] border bg-white">
            <h6 className="text-[#101018] font-semibold">
              General Information
            </h6>
            <h6 className="mt-4 text-[#35353A] font-semibold">
              What is a Global Postback?
            </h6>
            <p className="mt-2 text-[#6E6E71]">
              A global postback URL is a single URL used to notify your
              affiliate network or tracking platform whenever a conversion
              occurs, regardless of the specific offer a user converts on. This
              simplifies the setup process and eliminates the need to create
              individual postback URLs for each offer.
            </p>
            <h6 className="mt-4 text-[#35353A] font-semibold">
              Where and How to Use It:
            </h6>
            <p className="mt-2 text-[#666666]">Affiliate Networks:</p>
            <p className="text-[#6E6E71]">
              Within your affiliate network interface, locate the section for
              managing postbacks or conversion tracking. Look for the option to
              set a global postback URL and paste the copied URL from Box 2.
            </p>
            <p className="mt-2 text-[#666666]">Tracking Platforms:</p>
            <p className="text-[#6E6E71]">
              In your tracking platform settings, find the area for managing
              conversion tracking or postbacks. Locate the dedicated field for a
              global postback URL and paste the copied URL.
            </p>
            <p className="mt-4 text-[#35353A] font-semibold">
              POST Variables Sent in Postbacks:
            </p>
            <div className="border border-[#D8D9D4] w-full overflow-x-auto no-scrollbar rounded-md mt-2">
              <table className="w-full text-[12px] sm:text-sm 2xl:text-base text-left rounded-2xl text-gray-400">
                <thead className="text-[#0E0E0E] font-semibold rounded-md">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      <div className="w-[50px]">Variable</div>
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#D8D9D4] text-[#0E0E0E] text-[12px] sm:text-[14px] 2xl:text-base font-normal">
                    <td className="px-6 py-3">
                      <div className="w-[60px]">click_id</div>
                    </td>
                    <td className="px-6 py-3">
                      <div className="w-[210px] text-[12px] sm:text-[14px]">
                        Unique identifier for the ad click that led to the
                        conversion
                      </div>
                    </td>
                    <td className="px-6 py-3">click_id=123456</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPostback;
