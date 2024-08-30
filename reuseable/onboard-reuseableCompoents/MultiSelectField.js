import React from "react";
import { Autocomplete, TextField, Chip, styled } from "@mui/material";

// Style the div containing chips to allow horizontal scrolling and fixed height
const StyledChipContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px", // space between chips
  maxHeight: "80px", // set a maximum height for the chip container
  overflowY: "auto", // enable vertical scroll if chips overflow the container
  zIndex: 2, // Ensure the chips are on top
});

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiOutlinedInput-root": {
    paddingTop: "8px", // top padding for the input
    paddingBottom: "8px", // bottom padding for the input
    "& fieldset": {
      borderColor: "#D9D9DC",
      borderWidth: "1px",
      borderRadius: "10px",
      backgroundColor: "#F0F0F2",
      color: "#000000",
      zIndex: 0,
    },
    "&:hover fieldset": {
      borderColor: "#5E17EB", // border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5E17EB", // border color when focused
      borderWidth: "1px",
      backgroundColor: "transparent",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#666666", // normal label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#5E17EB", // label color when focused
  },
  "& input": {
    // color: "#5E17EB", // Default input text color
    position: "relative",
    zIndex: 1, // Ensure the text is on top
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#666666", // placeholder color
    opacity: 1, // make sure the placeholder color is applied
  },
  "& .MuiInputBase-input:focus::placeholder": {
    color: "black", // placeholder color when focused
  },
});

const MultiSelectField = ({ label, placeholder, options, value, onChange }) => {
  return (
    <StyledAutocomplete
      multiple
      id="multi-select-field"
      options={options}
      getOptionLabel={(option) => option.title}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      filterSelectedOptions
      renderTags={(value, getTagProps) => (
        <StyledChipContainer>
          {value.map((option, index) => (
            <Chip
              key={index}
              label={option.title}
              {...getTagProps({ index })}
              size="small"
            />
          ))}
        </StyledChipContainer>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
          fullWidth
        />
      )}
    />
  );
};

export default MultiSelectField;
