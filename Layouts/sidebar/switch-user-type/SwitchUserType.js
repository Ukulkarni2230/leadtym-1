import React, { useState } from "react";
import {
  MdBusiness,
  MdPeople,
  MdBrandingWatermark,
  MdPerson,
  MdWork,
} from "react-icons/md";
import { Menu, Button } from "@mui/material";
import { useUser } from "@/src/hooks/user-service/useUser";
import useSwitchUserType from "@/src/hooks/user-service/useSwitchUserType";
import { MdWarning } from "react-icons/md";
import ConfirmationModal from "@/src/components/reuseable/ConfirmationModal";

const SwitchUserType = ({ expanded, setExpanded }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const { userDetails } = useUser();
  const [selected, setSelected] = useState(userDetails?.userTypeString);
  const { switchUserType, loading } = useSwitchUserType();

  const options = [
    { label: "Agency", icon: <MdBusiness /> },
    { label: "Affiliate", icon: <MdPeople /> },
    { label: "Brand", icon: <MdBrandingWatermark /> },
    { label: "Influencer", icon: <MdPerson /> },
    { label: "Individual", icon: <MdWork /> },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option) => {
    if (option.label !== userDetails?.userTypeString) {
      setSelectedOption(option);
      setConfirmationOpen(true);
    }
  };

  const handleConfirm = async () => {
    if (selectedOption) {
      const userTypeId = userDetails.userId;
      const response = await switchUserType(
        selectedOption.label.toLowerCase(),
        userTypeId
      );

      if (response && (response.status === 200 || response.status === 201)) {
        setSelected(selectedOption.label);
        setConfirmationOpen(false);
        handleMenuClose();
      }
    }
  };

  const handleCancel = () => {
    setConfirmationOpen(false);
    setSelectedOption(null);
    setAnchorEl(null);
  };

  return (
    <div className="relative w-full">
      {expanded ? (
        <button
          onClick={handleMenuOpen}
          className={`border-purple-800 border text-[16px] rounded-full font-medium py-2 px-4 flex items-center justify-between w-full text-black ${
            isMenuOpen ? "gradient-bg text-white" : ""
          }`}
        >
          <span>{selected}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform ${isMenuOpen ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={handleMenuOpen}
          className={`border rounded-full border-[#5E17EB] text-black font-normal py-2 px-4 flex items-center justify-center w-10 h-10 ${
            isMenuOpen ? "gradient-bg text-white" : ""
          }`}
        >
          <span>{selected?.charAt(0).toUpperCase()}</span>
        </button>
      )}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            minWidth: "200px",
            padding: "0 6px",
          },
        }}
      >
        {options.map((option) => (
          <div
            key={option.label}
            onClick={() => handleSelect(option)}
            className={`flex items-center px-4 text-sm mb-1 2xl:text-base font-semibold py-1.5 rounded-full gap-2 cursor-pointer ${
              selected?.toLowerCase() === option.label.toLowerCase()
                ? "gradient-bg text-white"
                : "hover:bg-gray-200"
            } ${
              selected?.toLowerCase() === option.label.toLowerCase()
                ? "pointer-events-none opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {option.icon}
            {option.label}
          </div>
        ))}
      </Menu>
      <ConfirmationModal
        open={confirmationOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        title="Confirm Switch User Type"
        message={`Are you sure you want to switch from your ${userDetails?.userTypeString} to ${selectedOption?.label}?`}
        loading={loading}
        icon={<MdWarning size={30} className="text-yellow-500" />}
      />
    </div>
  );
};

export default SwitchUserType;
