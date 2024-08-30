import React from "react";
import {
  ThemeProvider,
  createTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent", // No border by default
                borderWidth: "1px",
                borderRadius: "10px",
                backgroundColor: mode === "dark" ? "#151417" : "#F0F0F2",
                color: mode === "dark" ? "#BABFC5" : "#000000",
              },
              "&:hover fieldset": {
                borderColor: mode === "dark" ? "#888888" : "#5E17EB", // Border on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: mode === "dark" ? "#888888" : "#5E17EB", // Border on focus
                borderWidth: "1px",
                backgroundColor: "transparent",
              },
              "&.Mui-error fieldset": {
                borderColor: "#FF2E2E",
              },
              "& .MuiSelect-select": {
                position: "relative",
                zIndex: 1,
                color: mode === "dark" ? "#FFFFFF" : "#000000", // Ensuring select text is white in dark mode
              },
              "&.Mui-focused .MuiSelect-select": {
                color: mode === "dark" ? "#FFFFFF" : "#000000", // Ensuring focused select text is white in dark mode
              },
            },
            "& label.Mui-focused": {
              color: "#5E17EB",
            },
            "& .MuiInputLabel-root": {
              color: mode === "dark" ? "#FFFFFF" : "#3C4071",
            },
            "& .MuiFormHelperText-root.Mui-error": {
              textAlign: "left",
              marginLeft: 0,
              marginRight: 0,
            },
          },
        },
      },
    },
  });

const SelectField = ({
  label,
  fullWidth = true,
  sx,
  required = false,
  value,
  onChange,
  options,
  ...otherProps
}) => {
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <FormControl
        variant="outlined"
        fullWidth={fullWidth}
        required={required}
        sx={{
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // No border by default
          },
          ...sx,
        }}
        {...otherProps}
      >
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          label={label}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent", // No border by default
                borderWidth: "1px",
                borderRadius: "10px",
                backgroundColor: themeMode === "dark" ? "#151417" : "#F0F0F2",
                color: themeMode === "dark" ? "#BABFC5" : "#000000",
              },
              "&:hover fieldset": {
                borderColor: themeMode === "dark" ? "#888888" : "#5E17EB", // Border on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: themeMode === "dark" ? "#888888" : "#5E17EB", // Border on focus
                borderWidth: "1px",
                backgroundColor: "transparent",
              },
              "&.Mui-error fieldset": {
                borderColor: "#FF2E2E",
              },
              "& .MuiSelect-select": {
                position: "relative",
                zIndex: 1,
                color: themeMode === "dark" ? "#FFFFFF" : "#000000", // Ensuring select text is white in dark mode
              },
              "&.Mui-focused .MuiSelect-select": {
                color: themeMode === "dark" ? "#FFFFFF" : "#000000", // Ensuring focused select text is white in dark mode
              },
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default SelectField;
