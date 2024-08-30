import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded"; // Import the success icon
import { styled } from "@mui/material/styles";

// Optionally styled for more customization
const CustomTextField = styled(TextField)(({ size, error, readOnly }) => ({
  "& label.Mui-focused": {
    color: readOnly ? "#837A88" : error ? "#FF2E2E" : "#837A88",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: readOnly ? "#837A88" : error ? "#FF2E2E" : "#837A88",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: readOnly ? "#837A88" : error ? "#FF2E2E" : "#837A88",
    },
    "&:hover fieldset": {
      borderColor: readOnly ? "#837A88" : error ? "#FF2E2E" : "#837A88",
    },
    "&.Mui-focused fieldset": {
      borderColor: readOnly ? "#837A88" : error ? "#FF2E2E" : "#5E17EB",
      border: readOnly
        ? "1.5px solid #837A88"
        : error
        ? "1.5px solid #FF2E2E"
        : "1.5px solid #5E17EB",
    },
    borderRadius: "6px",
  },
  "& input::placeholder": {
    fontSize: size === "small" ? "14px" : "",
  },
  "& .MuiFormHelperText-root": {
    marginLeft: "0px",
    marginTop: "0px",
    fontWeight: "8px",
  },
  "& .MuiOutlinedInput-input": {
    cursor: readOnly ? "default" : "text",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-input": {
    cursor: readOnly ? "default" : "text",
  },
}));

const Input = ({
  zeroChar = false,
  className,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  size = "Normal",
  error = false,
  helperText = "",
  maxLength,
  required = false,
  maxSpaces = Infinity,
  numeric = false,
  readOnly = false,
}) => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(helperText);

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
        setErrorMessage(helperText);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showError, helperText]);

  const handleChange = (e) => {
    const { value } = e.target;
    const consecutiveSpaces = value.match(/ {2,}/g) || [];

    if (numeric && /\D/.test(value)) {
      setShowError(true);
      setErrorMessage("Only numeric characters are allowed");
    } else if (value.startsWith(" ")) {
      setShowError(true);
      setErrorMessage("The first character cannot be a space");
    } else if (value.length > maxLength) {
      setShowError(true);
      setErrorMessage(`Maximum length of ${maxLength} characters exceeded`);
    } else if (consecutiveSpaces.some((spaces) => spaces.length > maxSpaces)) {
      setShowError(true);
      setErrorMessage(`Maximum ${maxSpaces + 1} consecutive spaces allowed`);
    } else {
      setShowError(false);
      onChange(e);
    }
  };

  const handleBlur = () => {
    if (!zeroChar && required && value.trim().length < 3) {
      setShowError(true);
      setErrorMessage("At least 3 characters are required");
    }
  };

  return (
    <CustomTextField
      label={label}
      value={value}
      className={className}
      onChange={handleChange}
      onBlur={handleBlur}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      size={size}
      error={error || showError}
      helperText={showError ? errorMessage : helperText}
      InputProps={{
        readOnly: readOnly,
        endAdornment: (
          <InputAdornment position="end">
            {(error || showError) && (
              <WarningRoundedIcon
                style={{ color: "#FF2E2E", fontSize: "18px" }}
              />
            )}
            {readOnly && !error && !showError && (
              <CheckCircleRoundedIcon
                style={{ color: "#4CAF50", fontSize: "18px" }}
              />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
