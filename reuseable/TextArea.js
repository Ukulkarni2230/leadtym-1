import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { styled } from "@mui/material/styles";

// Styled TextField for more customization
const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#837A88",
    },
    "&:hover fieldset": {
      borderColor: "#837A88",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5E17EB",
      border: "1.5px solid #5E17EB",
    },
    borderRadius: "6px",
  },
  "& label.Mui-focused": {
    color: "#837A88",
  },
  "& .MuiFormHelperText-root": {
    margin: 0,
  },
});

const TextArea = ({
  label,
  value,
  onChange,
  rows = 4,
  placeholder = "",
  variant = "outlined",
  showValidationError = false,
  error = false,
  helperText = "",
}) => {
  const [charCount, setCharCount] = useState(value?.length);
  const [showError, setShowError] = useState(error);
  const [errorMessage, setErrorMessage] = useState(helperText);

  useEffect(() => {
    setShowError(error);
    setErrorMessage(helperText);
  }, [error, helperText]);

  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    // Prevent first character from being a space
    if (inputValue.startsWith(" ")) {
      setShowError(true);
      setErrorMessage("The first character cannot be a space");
      return;
    }

    // Allow only one consecutive space
    inputValue = inputValue.replace(/\s\s+/g, " ");

    if (inputValue.length <= 500) {
      setCharCount(inputValue.length);
      onChange(inputValue);
    }
  };

  const handleBlur = () => {
    if (value.trim().length === 0) {
      setShowError(true);
      setErrorMessage("Description is mandatory");
    }
  };

  return (
    <div>
      <StyledTextField
        fullWidth
        label={label}
        variant={variant}
        multiline
        rows={rows}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        error={showError}
        helperText={showError ? errorMessage : `${charCount} / 500 characters`}
        onBlur={handleBlur}
        InputProps={{
          endAdornment: showValidationError && (
            <InputAdornment position="end">
              {showError && (
                <WarningRoundedIcon
                  style={{ color: "#FF2E2E", fontSize: "18px" }}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default TextArea;
