"use client";
import React, { useState } from "react";

import Chatbot from "../create-ticket/Chatbot";
const TicketStatus = () => {
  const [userMessages, setUserMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const newMessage = {
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString(),
    };
    setUserMessages((prevMessages) => [newMessage, ...prevMessages]);
  };

  return (
    <div className="flex flex-col lg:flex-row sm:items-start gap-4 sm:gap-6 w-full lg:h-[660px] sm:p-6 p-2 bg-[#F8F8FA]">
      <div className="w-full lg:w-1/2 bg-white rounded-md shadow-[#5E17EB26] sm:p-4 p-2 shadow-md">
        <div>
          <h2 className="text-sm sm:text-base 2xl:text-lg font-semibold text-[#101018] mb-5">
            Status:
          </h2>
          <p className="sm:text-sm text-xs 2xl:text-base  text-[#35353A]">
            Your ticket is still under progress
          </p>
        </div>
        <div className=" border-b border-[#D8D9D4] pb-6">
          <div className="flex gap-1 items-center mt-4 ">
            <p className="text-[#6E6E71] w-[150px] truncate text-xs sm:text-sm 2xl:text-base">
              Ticket ID:
            </p>
            <p className=" text-[#35353A] text-xs sm:text-sm 2xl:text-base">
              001
            </p>
          </div>
          <div className="flex gap-1 items-center mt-4 ">
            <p className="text-[#6E6E71] w-[150px] truncate text-xs sm:text-sm 2xl:text-base">
              Status:
            </p>
            <p className=" text-[#35353A] text-xs sm:text-sm 2xl:text-base">
              Open
            </p>
          </div>
          <div className="flex gap-1 items-center mt-4 ">
            <p className="text-[#6E6E71] w-[150px] truncate text-xs sm:text-sm 2xl:text-base">
              Start Date:
            </p>
            <p className=" text-[#35353A] text-xs sm:text-sm 2xl:text-base">
              10/20/23
            </p>
          </div>
          <div className="flex gap-1 items-center mt-4 ">
            <p className="text-[#6E6E71] w-[150px] truncate text-xs sm:text-sm 2xl:text-base">
              Resolved Date:
            </p>
            <p className=" text-[#35353A] text-xs sm:text-sm 2xl:text-base">
              --
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-sm sm:text-base 2xl:text-lg font-semibold text-[#101018] mb-5">
            Details:
          </h2>
          <div className="flex gap-1 items-center">
            <p className="text-[#6E6E71] font-normal text-sm sm:text-base 2xl:text-lg ">
              Full Name:
            </p>
            <p className=" text-[#35353A] font-normal text-sm sm:text-base 2xl:text-lg ">
              John Smith
            </p>
          </div>
          <div className="flex gap-1 items-center mt-4">
            <p className="text-[#6E6E71] font-normal text-sm sm:text-base 2xl:text-lg ">
              Ticket Category:
            </p>
            <p className=" text-[#35353A] font-normal text-sm sm:text-base 2xl:text-lg ">
              Accounting Question
            </p>
          </div>
          <div className="flex gap-1 items-center mt-4">
            <p className="text-[#6E6E71] font-normal text-sm sm:text-base 2xl:text-lg ">
              Subject:
            </p>
            <p className=" text-[#35353A] font-normal text-sm sm:text-base 2xl:text-lg ">
              Cannot Access Account
            </p>
          </div>
          <div className="flex gap-1  mt-4">
            <p className="text-[#6E6E71] whitespace-nowrap font-normal text-sm sm:text-base 2xl:text-lg ">
              Description Line:
            </p>
            <p className=" text-[#35353A] font-normal text-sm sm:text-base 2xl:text-lg ">
              I am unable to log into my account. I have tried resetting my
              password, but it's still not working. Please help me resolve this
              issue as soon as possible.
            </p>
          </div>
          <div className="flex gap-1 items-center mt-4">
            <p className="text-[#6E6E71] font-normal text-sm sm:text-base 2xl:text-lg ">
              Urgency:
            </p>
            <p className=" text-[#35353A] font-normal text-sm sm:text-base 2xl:text-lg ">
              Low
            </p>
          </div>
          <div className="flex gap-1 items-center mt-4">
            <p className="text-[#6E6E71] font-normal text-sm sm:text-base 2xl:text-lg ">
              Attachment:
            </p>
            <p className=" text-[#35353A] font-normal text-sm sm:text-base 2xl:text-lg ">
              <a href="#" className="text-blue-600 underline">
                [Attached File: Click Here]
              </a>
            </p>
          </div>

          <p className="text-sm text-gray-800 mt-2">
            <strong></strong>{" "}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full">
        <Chatbot
          userMessages={userMessages}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default TicketStatus;
