import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { WiStars } from "react-icons/wi";
import {
  IoChevronBackOutline,
  IoChevronForwardSharp,
  IoCloseOutline,
  IoCaretDownSharp,
  IoCaretUpSharp,
} from "react-icons/io5";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import TextArea from "@/src/components/reuseable/TextArea";
import { Menu, MenuItem } from "@mui/material";
import Accordion from "../../../All-Influencers/Approval-board/overview-popup/Accordion";
import SelectInput from "@/src/components/reuseable/SelectInput";
import Input from "@/src/components/reuseable/Input";
import { RiFolderImageLine } from "react-icons/ri";
import { FaImages } from "react-icons/fa6";
import { TiInfoLarge } from "react-icons/ti";
import ConvertIconToImg from "@/src/utils/ConvertIconToImg";
import FilteredAutocomplete from "@/src/components/reuseable/FilteredAutocomplete";
import NestedDropdownAlternate from "./nested-dropdown";
import { options } from "../../../campaign/create/Create-Campaign-Steps/GoalPayout";

const socialMediaOptions = [
  { title: "Social Media" },
  { title: "WhatsApp" },
  { title: "Facebook" },
  { title: "Telegram" },
  { title: "Snapchat" },
  // Add other options as needed
];

const NewPost = ({ isOpen, onClose }) => {
  const [imageGallery, setImageGallery] = useState([]);
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState([]); // Initialize as empty array

  const handleAccountSelect = (accounts) => {
    setSelectedAccount(accounts);
  };

  console.log("selected ", selectedAccount);

  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setAnchorEl(null);
  };

  const handleFileChange = async (event) => {
    const newFiles = Array.from(event.target.files);
    const allowedFiles = newFiles.slice(0, 4); // Limit to 4 files
    const newProgress = allowedFiles.map((file) => ({ file, progress: 0 }));

    setFiles((prevFiles) => [...prevFiles, ...allowedFiles]);
    setProgress((prevProgress) => [...prevProgress, ...newProgress]);

    for (let i = 0; i < allowedFiles?.length; i++) {
      await handleUpload(allowedFiles[i], newProgress[i]);
      setImageGallery((prevGallery) => [
        ...prevGallery,
        URL.createObjectURL(allowedFiles[i]),
      ]);
    }
  };

  const handleUpload = async (file, fileProgress) => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const updatedProgress = prevProgress.map((prog) => {
          if (prog.file === file) {
            const newProgress = Math.min(prog.progress + 10, 100);
            if (newProgress === 100) {
              // If progress reaches 100, remove the file from progress state
              setTimeout(() => {
                setProgress((prevProgress) =>
                  prevProgress.filter((p) => p.file !== file)
                );
              }, 1000); // Wait for 1 second before removing the progress
              clearInterval(interval); // Clear the interval to stop further updates
            }
            return { ...prog, progress: newProgress };
          }
          return prog;
        });
        return updatedProgress;
      });
    }, 140);
  };

  const getFilePreview = (file) => {
    if (file.type === "application/pdf") {
      return "/assets/pdf-fallback.png"; // Use your PDF fallback image here
    }
    return URL.createObjectURL(file);
  };
  console.log("page render");
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
              <WiStars />
            </span>
            <span className="text-[#101018] font-semibold text-[12px] sm:text-sm 2xl:text-base">
              New post
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
            <div className="md:w-[40%] md:max-h-[390px] shadow-[#5E17EB26] rounded-lg shadow-lg p-4 flex flex-col items-center mb-4">
              <div className="flex justify-between items-center mb-4 w-full">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-[18px] sm:text-[20px] 2xl:text-[22px] text-[#1E1E1E] font-semibold">
                      Uploaded Creatives
                    </p>
                    <div className="flex-1 w-full h-full flex items-center">
                      {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="mySwiper"
                      >
                        {files.map((file, index) => (
                          <SwiperSlide
                            key={index}
                            className="flex flex-wrap items-center gap-1 justify-center relative"
                          >
                            <img
                              src={getFilePreview(file)}
                              alt={`file preview ${index}`}
                              className="object-cover rounded-lg max-w-full max-h-full"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deal Info & Rework Comment */}
            <div className="flex-1 overflow-y-auto no-scrollbar sm:ml-4 flex flex-col">
              <Accordion title="Deal Info" icon={TiInfoLarge}>
                <div className="space-y-4 mt-2 ml-2.5 mb-4">
                  <SelectInput
                    label="Deal Name"
                    // value={selectedValue}
                    // onChange={handleChange}
                    placeholder="Select Name"
                    options={options}
                    size="small"
                    padding="4px"
                  />
                  <SelectInput
                    label="Product Category"
                    // value={selectedValue}
                    // onChange={handleChange}
                    placeholder="Select Category"
                    options={options}
                    size="small"
                    padding="4px"
                  />
                  <SelectInput
                    label="Budget Type"
                    // value={selectedValue}
                    // onChange={handleChange}
                    placeholder="Select Budget"
                    options={options}
                    size="small"
                    padding="4px"
                  />
                  <Input
                    label="Min Budget Amount"
                    placeholder="Min Budget Amount"
                    size="small"
                    padding="4px 0px"
                  />
                  <Input
                    label="Max Budget Amount"
                    placeholder="Max Budget Amount"
                    size="small"
                    padding="4px 0px"
                  />
                </div>
              </Accordion>

              <Accordion title="Upload Creatives" icon={RiFolderImageLine}>
                <div className="my-4">
                  <FilteredAutocomplete
                    label="Select Account"
                    placeholder="Select Account"
                    options={socialMediaOptions}
                    value={selectedAccount}
                    onChange={(account) => handleAccountSelect(account)}
                  />
                </div>
                {selectedAccount.length > 0 && (
                  <NestedDropdownAlternate
                    title={`Selected Account: ${selectedAccount[0].title}`}
                    items={[
                      `${selectedAccount[0].title} Item 1`,
                      `${selectedAccount[0].title} Item 2`,
                      `${selectedAccount[0].title} Item 3`,
                    ]}
                  />
                )}

                <div className="flex items-start gap-2">
                  {files?.length > 0 && (
                    <div className="flex items-start  flex-wrap gap-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="w-[130px] h-[130px] sm:w-[100px] sm:h-[100px] xl:w-[120px] xl:h-[120px] relative"
                        >
                          <img
                            src={getFilePreview(file)}
                            alt={`file preview ${index}`}
                            className="object-cover rounded-lg w-full h-full"
                          />
                          {progress.find((prog) => prog.file === file)
                            ?.progress < 100 && (
                            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                              <p className="text-white text-[10px] sm:text-[12px] xl:text-[14px]">
                                {
                                  progress.find((prog) => prog.file === file)
                                    ?.progress
                                }
                                %
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <label
                    htmlFor="uploadInput"
                    className="flex cursor-pointer flex-col items-center justify-center border-2 border-dashed border-[#CBD0D3] rounded-lg w-[110px] h-[110px] sm:w-[100px] sm:h-[100px] xl:w-[120px] xl:h-[120px]"
                  >
                    <span className="  ">
                      <ConvertIconToImg
                        icon={FaImages}
                        src="/assets/kyc.svg"
                        // width={74}
                        // height={74}
                        className={
                          "rounded-full w-[35px] h-[35px] sm:w-[60px] sm:h-[60px]"
                        }
                        alt="Profile Picture"
                        size={45}
                      />
                    </span>
                    <span className="text-[8px] sm:text-[9px] xl:text-[10px] font-medium text-[#52575C]">
                      Upload Creatives
                    </span>
                    <input
                      type="file"
                      id="uploadInput"
                      onChange={handleFileChange}
                      multiple
                      accept="image/*,video/*"
                      className="hidden"
                    />
                  </label>
                </div>
              </Accordion>

              <Accordion title="Rework Comment" icon={LuMessageSquare}>
                <div className="px-2.5 mt-2.5 mb-4">
                  <TextArea
                    placeholder="Add reason"
                    // value={textAreaValue}
                    // onChange={handleTextAreaChange}
                    size="medium"
                    rows={4}
                    cols={4}
                  />
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Footer */}
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
                  className="cursor-pointer mx-3 hover
                    my-1 rounded-full text-[12px] sm:text-[14px] 2xl
                    flex justify-center py-1.5 px-3"
                >
                  Schedule
                </MenuItem>
              </div>
              <MenuItem
                onClick={() => {
                  console.log("Completed clicked");
                  handleMoreClose();
                }}
                className="cursor-pointer mx-3 hover
                    my-1 rounded-full text-[12px] sm:text-[14px] 2xl
                    flex justify-center py-1.5 px-3"
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

export default NewPost;
