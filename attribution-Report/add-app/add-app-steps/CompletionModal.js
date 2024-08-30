import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
  IconButton,
} from "@mui/material";
import { FaCopy } from "react-icons/fa";
import { AiOutlineInfoCircle, AiOutlineClose } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { BiKey } from "react-icons/bi";

const CompletionModal = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle className="flex justify-between items-center">
        <span>Great, you're almost done!</span>
        <IconButton onClick={handleClose} className="text-gray-500">
          <AiOutlineClose size={20} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div className="mb-4 flex items-start space-x-2">
          <MdOutlineDone size={30} className="text-blue-500" />
          <p className="text-sm">
            Your app was added. For data to start showing on the dashboard, see
            "What's next"?
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold mb-2">What's next?</p>
          <div className="flex items-start space-x-2">
            <BiKey size={30} className="text-blue-500" />
            <p className="text-sm">
              Implement the dev key. Your developer should install and integrate
              the SDK, and embed the dev key.
              <a href="#" className="text-blue-500 ml-1">
                Learn how
              </a>
            </p>
          </div>
          <p className="text-sm mt-2">
            This is the dev key for your developer.
          </p>
          <div className="flex items-center mt-2">
            <input
              type="text"
              readOnly
              value="5faa2e470880c027d08ff24b"
              className="border border-gray-300 rounded px-2 py-1 flex-grow"
            />
            <button className="ml-2 text-blue-500">
              <FaCopy />
            </button>
            <Tooltip
              title="The dev key is a unique identifier used to verify the authenticity of events sent from an app to AppsFlyer."
              arrow
            >
              <IconButton className="ml-2 text-gray-500">
                <AiOutlineInfoCircle size={20} />
              </IconButton>
            </Tooltip>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Note: You can copy the key later from the App Settings page.
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <button
          onClick={handleClose}
          className="border border-gray-300 text-gray-500 px-4 py-2 rounded-full mr-2"
        >
          Close
        </button>
        <button
          onClick={handleClose}
          className="gradient-bg border border-transparent text-white px-4 py-2 rounded-full"
        >
          + Add Another App
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default CompletionModal;
