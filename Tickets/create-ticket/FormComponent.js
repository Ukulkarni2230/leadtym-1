import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import Chatbot from "./Chatbot"; // Assuming you have a Chatbot component
import Input from "@/src/components/reuseable/Input";
import SelectInput from "@/src/components/reuseable/SelectInput";
import TextArea from "@/src/components/reuseable/TextArea";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import { FaPaperclip } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const CreateNewTicket = () => {
  const router = useRouter();
  const [attachedFile, setAttachedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    ticketCategory: "",
    subject: "",
    description: "",
    urgency: null,
    termsAccepted: false,
    attachedFile: null,
  });

  const [userMessages, setUserMessages] = useState([]);
  const fileInputRef = useRef(null);
  const options = [
    { value: "1", label: "India" },
    { value: "2", label: "Pakistan" },
    { value: "3", label: "Maharashtra" },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file.size > 1000000) {
        // Handle file size error
        setFormData((prevState) => ({ ...prevState, attachedFile: null }));
        return;
      } else {
        setFormData((prevState) => ({ ...prevState, attachedFile: file }));
        setAttachedFile(URL.createObjectURL(file));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleUrgencyChange = (value) => {
    setFormData((prevState) => ({ ...prevState, urgency: value }));
  };

  const handleTermsChange = (checked) => {
    setFormData((prevState) => ({
      ...prevState,
      termsAccepted: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const newMessage = {
      sender: "user",
      text: `Full Name: ${formData.fullName}\nTraffic Source: ${formData.ticketCategory}\nSubject: ${formData.subject}\nDescription: ${formData.description}\nUrgency: ${formData.urgency}`,
      time: new Date().toLocaleTimeString(),
    };
    setUserMessages((prevMessages) => [newMessage, ...prevMessages]);
  };

  const handleRemoveFile = () => {
    setFormData((prevState) => ({
      ...prevState,
      attachedFile: null,
    }));
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col lg:flex-row sm:items-start gap-4 sm:gap-6 w-full lg:h-[630px]">
      <div className="w-full lg:max-w-full rounded-md p-6 bg-white h-full lg:overflow-y-auto lg:no-scrollbar">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
          <Input
            name="fullName"
            label="Full Name"
            placeholder="John Smith"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
            size="small"
            padding="4px 0px"
            required
          />
          <SelectInput
            label="Traffic Source"
            placeholder="Traffic Source"
            options={options}
            size="small"
            padding="4px"
            name="ticketCategory"
            value={formData.ticketCategory}
            onChange={handleChange}
          />
          <Input
            name="subject"
            label="Subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
            size="small"
            padding="4px 0px"
            required
          />
          <TextArea
            name="description"
            label="Description"
            placeholder="Description Line"
            value={formData.description}
            onChange={handleChange}
            rows={3}
          />

          <div>
            <span className="mb-2 text-[#6E6E71] text-xs sm:text-sm 2xl:text-base font-normal">
              Urgency
            </span>
            <div className="flex items-center gap-4 mt-2">
              {["Low", "Medium", "High", "Critical"].map((level, index) => (
                <CustomCheckbox
                  key={level}
                  label={level}
                  checked={formData.urgency === level}
                  onCheckedChange={() => handleUrgencyChange(level)}
                  id={`urgency-${index}`} // Pass id to the CustomCheckbox
                />
              ))}
            </div>
          </div>

          <div>
            <span className="block mb-2 text-[#6E6E71] text-xs sm:text-sm 2xl:text-base">
              Attachment:
            </span>
            {!formData.attachedFile ? (
              <label className="text-[12px] items-center gap-1 sm:text-[14px] 2xl:text-[16px] hover:text-black flex text-[#6E6E71] cursor-pointer">
                Attach File <FaPaperclip size={12} />
                <input
                  ref={fileInputRef}
                  name="attachedFile"
                  type="file"
                  onChange={handleChange}
                  accept=".png, .jpg, .jpeg, .pdf"
                  className="hidden"
                />
              </label>
            ) : (
              <div className="text-gray-700 flex items-center">
                <a
                  href={attachedFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#101018] text-[12px] sm:text-sm 2xl:text-base underline"
                >
                  [Attached File: Click Here]
                </a>
                &nbsp;
                <span className="cursor-pointer" onClick={handleRemoveFile}>
                  <IoCloseOutline className="text-red-500 text-base cursor-pointer" />
                </span>
              </div>
            )}
          </div>

          <div>
            <span className="block text-[#6E6E71] mb-2 text-xs sm:text-sm 2xl:text-base">
              Terms and Conditions:
            </span>
            <div className="flex items-center gap-2">
              <CustomCheckbox
                label="I agree to your Terms & Conditions"
                labelStyle="text-[12px] sm:text-[14px] 2xl:text-base "
                checked={formData.termsAccepted}
                onCheckedChange={handleTermsChange}
                id="privacy-pol"
              />
            </div>
          </div>

          <div className="flex justify-start gap-2 mt-2">
            <button
              onClick={() => router.back()}
              className="rounded-full border-purple-600 py-1.5 px-6
          hover:border-purple-700 text-purple-600 hover:text-black text-[14px] sm:text-[16px] 2xl:text-[18px] font-normal border"
            >
              Cancel
            </button>
            <button className="py-1.5 px-6 gradient-bg text-white rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>

      <Chatbot userMessages={userMessages} />
    </div>
  );
};

export default CreateNewTicket;
