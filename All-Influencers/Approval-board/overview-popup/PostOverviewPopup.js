import React, { useState, useEffect, useRef } from "react";
import Drawer from "@mui/material/Drawer";
import { TiInfoLarge } from "react-icons/ti";
import Accordion from "./Accordion";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import {
  IoChevronBackOutline,
  IoChevronForwardSharp,
  IoCloseOutline,
} from "react-icons/io5";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { LuLink, LuMessageSquare } from "react-icons/lu";
import TextArea from "@/src/components/reuseable/TextArea"; // Adjust the import path based on your project structure
import NestedDropdown from "./NestedDropdown"; // Import the NestedDropdown component
import { Menu, MenuItem } from "@mui/material";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";

const initialReworkComments = [
  {
    sender: "Ralph Edwards",
    date: "Aug 19, 2021",
    message:
      'Hi [Influencer\'s Name],\n\nThank you for submitting your content for the "Summer Vibes Collection" campaign. We appreciate your effort and creativity. However, we have a few suggestions to ensure the content aligns perfectly with our brand guidelines and campaign objectives.\n\nFeedback on the Submitted Content:',
  },
];

const PostOverviewPopup = ({ isOpen, onClose, post }) => {
  const [imageGallery] = useState(post.images);
  const [reworkComments, setReworkComments] = useState(initialReworkComments);
  const [comment, setComment] = useState("");
  const commentsEndRef = useRef(null);
  const reworkCommentsRef = useRef(null); // New ref for rework comments container

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    const newComment = {
      sender: "Rattandeep Tripathi",
      date: new Date().toLocaleDateString(),
      message: comment,
    };

    setReworkComments([...reworkComments, newComment]);
    setComment(""); // Clear the comment box after submission
  };

  useEffect(() => {
    if (reworkCommentsRef.current) {
      reworkCommentsRef.current.scrollTop =
        reworkCommentsRef.current.scrollHeight;
    }
  }, [reworkComments]);

  const socialMediaLinks = [
    {
      type: "Post",
      label: "Insert Instagram Post URL",
      url: "#",
    },
    {
      type: "Post",
      label: "Insert Instagram Post URL",
      url: "#",
    },
    {
      type: "Story",
      label: "Insert Instagram Post URL",
      url: "#",
    },
    {
      type: "Reel",
      label: "Insert Instagram Post URL",
      url: "#",
    },
  ];

  const facebookLinks = []; // Example with no links provided
  const snapchatLinks = [
    {
      type: "Snap",
      label: "Insert Snapchat Snap URL",
      url: "#",
    },
  ]; // Example with one link provided

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: "80%" },
          bgcolor: "#f9f9f9",
        },
      }}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 md:mb-6">
          <h2 className="text-lg font-semibold flex items-center">
            <span className="bg-[#C3A3FF] w-6 h-6 flex items-center justify-center text-white rounded mr-2">
              <MdOutlineAccessTimeFilled />
            </span>
            <span className="text-[#101018] font-semibold text-[12px] sm:text-sm 2xl:text-base">
              Pending for Approval (2)
            </span>
          </h2>
          <div className="flex items-center gap-1">
            <div className="flex px-4 gap-6  border-x border-[#D9D9DC]">
              <IoChevronBackOutline className="text-[#36434D] cursor-pointer hover:text-black" />
              <IoChevronForwardSharp className="text-[#36434D] cursor-pointer hover:text-black" />
            </div>
            <button
              onClick={onClose}
              className="text-[#1C1B1F] hover:text-gray-700"
            >
              <IoCloseOutline size={23} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
          <div className="md:flex h-full sm:p-4 p-2">
            {/* Image Gallery */}
            <div className="md:w-[40%]  md:max-h-[390px] shadow-[#5E17EB26] rounded-lg shadow-lg p-4 flex flex-col items-center mb-4">
              <div className="flex justify-between items-center mb-4 w-full">
                <div className="flex items-center gap-2">
                  <img
                    src={post.profilePicture}
                    alt={post.name}
                    className="rounded-full w-[40px] h-[40px] sm:w-[52px] sm:h-[52px]"
                  />
                  <div>
                    <p className="text-[18px] sm:text-[20px] 2xl:text-[22px] text-[#1E1E1E] font-semibold">
                      {post.name}
                    </p>
                    <p className="text-[10px] sm:text-[12px] -mt-1.5 2xl:text-sm text-[#616161]">
                      {post.role}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="sm:w-[27px] sm:h-[27px] w-[20px] h-[20px] justify-center rounded-md flex items-center gradient-bg">
                    <FaYoutube className="text-white text-[12px] sm:text-[16px]" />
                  </div>
                  <div className="sm:w-[27px] sm:h-[27px] w-[20px] h-[20px] justify-center rounded-md flex items-center gradient-bg">
                    <FaInstagram className="text-white text-[12px] sm:text-[16px]" />
                  </div>
                  <div className="sm:w-[27px] sm:h-[27px] w-[20px] h-[20px] justify-center rounded-md flex items-center gradient-bg">
                    <FaTiktok className="text-white text-[12px] sm:text-[16px]" />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full h-full md:max-h-[290px] flex items-center">
                {imageGallery.slice(0, 1).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Gallery ${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                ))}
              </div>
            </div>

            {/* Deal Info & Rework Comment */}
            <div className="flex-1 overflow-y-auto no-scrollbar sm:ml-4 flex flex-col">
              <Accordion title="Deal Info" icon={TiInfoLarge}>
                <div className="space-y-2 mt-4 ml-2.5 mb-6">
                  <div className="flex gap-1">
                    <p className="font-bold text-[#555555] text-sm sm:text-base 2xl:text-lg w-32 sm:w-40 truncate">
                      Deal Name:
                    </p>
                    <p className="text-[#6E6E71] text-sm sm:text-base 2xl:text-lg font-normal">
                      {post.dealName}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-bold text-[#555555] text-sm sm:text-base 2xl:text-lg w-32 sm:w-40 truncate">
                      Product Category:
                    </p>
                    <p className="text-[#6E6E71] text-sm sm:text-base 2xl:text-lg font-normal">
                      {post.productCategory}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-bold text-[#555555] text-sm sm:text-base 2xl:text-lg w-32 sm:w-40 truncate">
                      Budget Type:
                    </p>
                    <p className="text-[#6E6E71] text-sm sm:text-base 2xl:text-lg font-normal">
                      {post.budgetType}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-bold text-[#555555] text-sm sm:text-base 2xl:text-lg w-32 sm:w-40 truncate">
                      Budget Amount:
                    </p>
                    <p className="text-[#6E6E71] text-sm sm:text-base 2xl:text-lg font-normal">
                      {post.budgetAmount}
                    </p>
                  </div>
                </div>
              </Accordion>

              <Accordion title="Make Rework Comment" icon={LuMessageSquare}>
                <div ref={reworkCommentsRef}>
                  {reworkComments.map((comment, index) => (
                    <div key={index} className="rounded-md flex mb-4">
                      <img
                        src="https://via.placeholder.com/50"
                        alt={comment.sender}
                        className="rounded-full w-9 h-9 mr-2"
                      />
                      <div className="bg-[#EFF2FC] p-4 py-2.5 rounded-[10px] w-full">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-bold text-[#0B0F19] text-sm sm:text-base 2xl:text-lg">
                            {comment.sender}
                          </p>
                          <p className="text-xs sm:text-sm 2xl:text-base font-normal text-[#9397AD]">
                            {comment.date}
                          </p>
                        </div>
                        <p className="whitespace-pre-line sm:text-base 2xl:text-lg text-[#0B0F19] text-sm">
                          {comment.message}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={commentsEndRef} />
                  <div className="mt-4">
                    <TextArea
                      label="Description Line"
                      rows={3}
                      value={comment}
                      onChange={handleCommentChange}
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        className="gradient-bg text-white py-2 px-6 rounded-full"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion title="Posted Link" icon={LuLink}>
                <div className="space-y-2 mt-4 sm:ml-2.5 mb-6">
                  <div className="flex flex-col gap-2">
                    <NestedDropdown
                      title="Instagram URL"
                      links={socialMediaLinks}
                    />
                    <NestedDropdown
                      title="Facebook URL"
                      links={
                        facebookLinks.length
                          ? facebookLinks
                          : [
                              {
                                type: "URL",
                                label: "No URL Link Shared",
                                url: "#",
                              },
                            ]
                      }
                    />
                    <NestedDropdown
                      title="Snapchat URL"
                      links={snapchatLinks}
                    />
                    <NestedDropdown title="Twitter URL" links={[]} />
                    <NestedDropdown title="LinkedIn URL" links={[]} />
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
        {/* Action Button */}
        <div className="p-4 border-t border-gray-300">
          <li className="relative list-none flex justify-end">
            <div
              className={`flex items-center max-w-[100px] justify-end gradient-bg cursor-pointer text-white px-4 py-1.5 rounded-full text-[12px] xl:text-sm font-normal ${
                Boolean(anchorEl)
                  ? "border border-[#6200EE] text-[#6200EE]"
                  : ""
              }`}
              onClick={handleMoreClick}
            >
              <span className="mr-3">Actions</span>
              {anchorEl ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
            </div>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMoreClose}
              sx={{
                marginTop: "4px",
                "& .MuiPaper-root": {
                  borderColor: "#D8D9D4",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "8px", // Ensure the border radius is applied to the menu paper
                  overflow: "hidden",
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div className="border-b border-[#D8D9D4]">
                <MenuItem
                  onClick={() => {
                    console.log("Rework clicked");
                    handleMoreClose();
                  }}
                  className="cursor-pointer mx-3 hover:bg-gray-200 my-1 rounded-full text-[12px] sm:text-[14px] 2xl:text-base flex justify-center py-1.5 px-3"
                >
                  Rework
                </MenuItem>
              </div>
              <div className="border-b border-[#D8D9D4]">
                <MenuItem
                  onClick={() => {
                    console.log("Schedule clicked");
                    handleMoreClose();
                  }}
                  className="cursor-pointer mx-3 hover:bg-gray-200 my-1 rounded-full text-[12px] sm:text-[14px] 2xl:text-base flex justify-center py-1.5 px-3"
                >
                  Schedule
                </MenuItem>
              </div>
              <MenuItem
                onClick={() => {
                  console.log("Completed clicked");
                  handleMoreClose();
                }}
                className="cursor-pointer mx-3 hover:bg-gray-200 my-1 rounded-full text-[12px] sm:text-[14px] 2xl:text-base flex justify-center py-1.5 px-3"
              >
                Completed
              </MenuItem>
            </Menu>
          </li>
        </div>
      </div>
    </Drawer>
  );
};

export default PostOverviewPopup;
