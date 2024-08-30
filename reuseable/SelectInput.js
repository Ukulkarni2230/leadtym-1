import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  FormHelperText,
  styled,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

const StyledSelect = styled(Select)(({ error }) => ({
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    "&:focus": {
      backgroundColor: "transparent", // Maintain the background color when focused
    },
  },
  "& fieldset": {
    borderColor: error ? "#FF2E2E" : "#837A88", // Initial border color
  },
  "&:hover fieldset": {
    borderColor: error ? "#FF2E2E" : "#837A88", // Border color on hover
  },
  "&.Mui-focused fieldset": {
    borderColor: error ? "#FF2E2E" : "#5E17EB", // Border color on focus
    borderWidth: "1.5px",
  },
  borderRadius: "6px",
}));

const StyledInputLabel = styled(InputLabel)(({ error }) => ({
  transform: "translate(10px, 9px) scale(1)", // Initial position and scale of the label
  zIndex: 1,
  paddingBottom: "10px",
  pointerEvents: "none", // Make sure the label does not intercept mouse events
  marginBottom: "2px", // Add margin bottom when unfocused
  color: error ? "#FF2E2E" : "#837A88",
  "&.Mui-focused, &.MuiFormLabel-filled": {
    transform: "translate(14px, -6px) scale(0.75)", // Position and scale of the label when focused or filled
    color: error ? "#FF2E2E" : "#837A88",
    marginBottom: "0px", // Remove margin bottom when focused
  },
}));

const StyledFormHelperText = styled(FormHelperText)({
  marginLeft: "0px",
  marginTop: "0px",
  fontWeight: "8px",
});

const SelectInput = ({
  label,
  value,
  placeholder,
  onChange,
  options,
  error = false,
  helperText = "",
  size = "Normal",
}) => {
  return (
    <FormControl fullWidth variant="outlined" className="mt-4" error={error}>
      <StyledInputLabel error={error}>{label}</StyledInputLabel>
      <StyledSelect
        value={value}
        size={size}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        label={label}
        IconComponent={ArrowDropDownIcon}
        error={error}
        endAdornment={
          error && (
            <InputAdornment position="end">
              <WarningRoundedIcon
                style={{ color: "#FF2E2E", fontSize: "18px" }}
              />
            </InputAdornment>
          )
        }
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
      {helperText && (
        <StyledFormHelperText error={error}>{helperText}</StyledFormHelperText>
      )}
    </FormControl>
  );
};

export default SelectInput;
