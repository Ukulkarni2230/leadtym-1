import React, { useState, useRef, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Button, Menu, MenuItem, IconButton } from "@mui/material";
import { FaRobot, FaPaperclip } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";

const Chatbot = ({ userMessages = [] }) => {
  const initialMessages = [
    {
      sender: "bot",
      text: "Hello, how can I assist you today?",
      time: "10:00 AM",
    },
    {
      sender: "user",
      text: "Hello, how can I assist you today?",
      time: "10:00 AM",
    },
    {
      sender: "bot",
      text: "Hello, how can I assist you today?",
      time: "10:00 AM",
    },
  ];

  const [messages, setMessages] = useState([
    ...userMessages,
    ...initialMessages,
  ]);
  const [input, setInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: input, time: new Date().toLocaleTimeString() },
      ]);
      setInput("");
      scrollToBottom();
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  useEffect(() => {
    setMessages((prevMessages) => [...userMessages, ...prevMessages]);
  }, [userMessages]);

  return (
    <div className="flex flex-col h-full rounded-md text-gray-700 w-full">
      <div className="flex items-center px-4 py-2 bg-white shadow rounded-t-md border-b border-[#D8D9D4]">
        <FaRobot className="text-[#5E17EB] text-2xl" />
        <div className="ml-3">
          <div className="font-bold text-[#101018] text-xs sm:text-sm 2xl:text-base">
            Bot
          </div>
          <div className="text-[8px] sm:text-[10px] -mt-1 -ml-[2px] 2xl:text-xs  text-[#35353A] flex items-center">
            <GoDotFill className="text-[#7DDE86]" /> Always active
          </div>
        </div>
        <div className="relative ml-auto">
          <IconButton onClick={handleMenuOpen}>
            <HiOutlineDotsHorizontal size={25} className=" text-[#35353A]" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Clear Chat</MenuItem>
            <MenuItem onClick={handleMenuClose}>Export Chat</MenuItem>
            <MenuItem onClick={handleMenuClose}>End Session</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="flex-1 bg-[#ECECED] overflow-y-auto max-h-[640px] no-scrollbar p-4 flex flex-col">
        <div ref={messagesEndRef} />
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex my-0 items-start ${
              message.sender === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            {message.sender === "bot" && (
              <div className="bg-[#F2F8FF] w-[32px] h-[32px] rounded-full mr-2 flex justify-center items-center">
                <FaRobot className="text-[18px] text-[#0070F0]" />
              </div>
            )}
            <div>
              <div
                className={`max-w-xs text-[12px] sm:text-sm 2xl:text-base border border-[#D8D9D4] px-4 py-2 ${
                  message.sender === "bot"
                    ? "bg-white  text-[#35353A] rounded-r-[24px] rounded-bl-[24px]"
                    : "bg-[#2196F34D] bg-opacity-90  text-[#35353A] rounded-l-[24px] rounded-br-[24px]"
                }`}
              >
                {message.text}
              </div>
              <p
                className={`text-[8px] text-gray-500 mt-1 ${
                  message.sender !== "bot"
                    ? "w-full flex text-end justify-end"
                    : "ml-2"
                }`}
              >
                {message.time}
              </p>
            </div>
            {message.sender !== "bot" && (
              <div className="bg-[#FFFFFF] w-[32px] h-[32px] rounded-full ml-2 flex justify-center items-center">
                <RxPerson className="text-[18px] text-[#5E17EB]" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-2 py-2.5 border-t border-[#D8D9D4] bg-white rounded-b-md">
        <div className="flex items-center">
          <input
            placeholder="Type a message..."
            value={input}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="bg-white px-3 placeholder:text-[#72777A] text-[10px] sm:text-xs 2xl:text-sm w-full focus:outline-none focus:border-none"
          />
          <IconButton>
            <FaPaperclip className=" text-[#35353A] text-sm" />
          </IconButton>
          <IconButton onClick={handleSendMessage} className="ml-2">
            <IoIosSend className=" text-[#35353A] text-base" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
