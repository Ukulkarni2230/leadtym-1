import React from "react";
import { Autocomplete, TextField, Chip, styled } from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

const StyledChipContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  maxHeight: "80px",
  overflowY: "auto",
});

const StyledAutocomplete = styled(Autocomplete)(({ theme, error }) => ({
  "& .MuiOutlinedInput-root": {
    paddingTop: "8px",
    paddingBottom: "8px",
    "& fieldset": {
      borderColor: error ? "#FF2E2E" : "#837A88",
    },
    "&:hover fieldset": {
      borderColor: error ? "#FF2E2E" : "#837A88",
    },
    "&.Mui-focused fieldset": {
      borderColor: error ? "#FF2E2E" : "#5E17EB",
    },
  },
  "& .MuiInputLabel-root": {
    color: error ? "#FF2E2E" : "#666666",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: error ? "#FF2E2E" : "#5E17EB",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#666666",
    opacity: 1,
  },
  "& .MuiInputBase-input:focus::placeholder": {
    color: "#666666",
  },
  "& .MuiFormHelperText-root": {
    marginTop: 0,
    marginLeft: 0,
  },
  "& .MuiAutocomplete-groupLabel": {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
}));

const GroupedAutocomplete = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
  helperText,
  groupBy,
  groupLabels,
}) => {
  return (
    <StyledAutocomplete
      size="small"
      multiple
      id="grouped-autocomplete"
      options={options}
      groupBy={groupBy}
      getOptionLabel={(option) => option.title}
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      filterSelectedOptions
      renderTags={(value, getTagProps) => (
        <StyledChipContainer>
          {(value ?? []).map((option, index) => (
            <Chip
              key={index}
              label={option.title}
              {...getTagProps({ index })}
              size="small"
            />
          ))}
        </StyledChipContainer>
      )}
      renderGroup={(params) => (
        <div key={params.key} className="">
          <div className="MuiAutocomplete-groupLabel px-2  text-base font-bold text-black">
            {groupLabels[params.group] || params.group}
          </div>
          <div className="MuiAutocomplete-groupItems ">{params.children}</div>
        </div>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
          fullWidth
          error={error}
          helperText={helperText}
          InputProps={{
            ...params.InputProps,
            endAdornment: error ? (
              <WarningRoundedIcon
                style={{ color: "#FF2E2E", marginRight: 0, fontSize: "18px" }}
              />
            ) : null,
          }}
        />
      )}
    />
  );
};

export default GroupedAutocomplete;
