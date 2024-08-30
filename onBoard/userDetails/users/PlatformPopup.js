import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "@/src/components/reuseable/primaryButton";

// Styled Dialog component to customize the paper properties
const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "16px", // Custom border radius
    width: "400px", // Fixed width
    padding: theme.spacing(2),
  },
}));

// Custom Radio Button with specified color
const CustomRadio = styled(Radio)({
  color: "#5E17EB",
  "&.Mui-checked": {
    color: "#5E17EB",
  },
});

const PlatformPopup = ({ onAddLink, onClose }) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [customPlatform, setCustomPlatform] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    let platform = selectedPlatform;
    if (selectedPlatform === "Other") {
      if (customPlatform.trim() === "") {
        setError("Platform name cannot be empty or spaces");
        return;
      }
      platform = customPlatform;
    }
    onAddLink(platform);
    onClose();
  };

  return (
    <CustomDialog open={true} onClose={onClose}>
      <DialogTitle>
        <div className="flex flex-col items-start">
          <p className="text-[20px] leading-none sm:text-[30px] text-[#525252] font-bold">
            Choose the platform
          </p>
          <p className="text-sm sm:text-base 2xl:text-lg text-[#525252]">
            You want to add the link for
          </p>
        </div>
      </DialogTitle>
      <DialogContent>
        <RadioGroup
          aria-label="platform"
          name="platform"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <FormControlLabel
            value="Twitter"
            control={<CustomRadio />}
            label="Twitter"
            className="flex items-center mb-2"
          />
          <FormControlLabel
            value="LinkedIn"
            control={<CustomRadio />}
            label="LinkedIn"
            className="flex items-center mb-2"
          />
          <FormControlLabel
            value="YouTube"
            control={<CustomRadio />}
            label="YouTube"
            className="flex items-center mb-2"
          />
          <FormControlLabel
            value="Other"
            control={<CustomRadio />}
            label={
              <div className="flex flex-col">
                Other Name
                {selectedPlatform === "Other" && (
                  <input
                    type="text"
                    value={customPlatform}
                    onChange={(e) => setCustomPlatform(e.target.value)}
                    className="mt-1 p-1 border-b border-gray-400 focus:outline-none focus:border-black"
                  />
                )}
              </div>
            }
            className="flex items-center mb-2"
          />
        </RadioGroup>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </DialogContent>
      <DialogActions className="p-6">
        <PrimaryButton onClick={handleSubmit} isLoading={false} py="py-2">
          Continue
        </PrimaryButton>
      </DialogActions>
    </CustomDialog>
  );
};

export default PlatformPopup;
