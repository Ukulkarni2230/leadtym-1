import React from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { TextField, InputAdornment } from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

// Create a theme for MUI components
export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#837A88",
              borderWidth: "1px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              color: "#000000",
              height: "45px",
            },
            "&:hover fieldset": {
              borderColor: "#837A88",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#837A88",
              borderWidth: "1px",
              backgroundColor: "transparent",
            },
            "&.Mui-error fieldset": {
              borderColor: "#837A88",
            },
            "& input": {
              position: "relative",
              zIndex: 1,
              color: "#000000", // Default input text color
              height: "auto", // Adjust height for proper alignment
              padding: "10px 12px", // Adjust padding for proper alignment
            },
            "&.Mui-focused input": {
              color: "#000000", // Focused input text color
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#3C4071", // Placeholder color
              fontSize: "14px",
            },
          },
          "& label.Mui-focused": {
            color: "#5E17EB", // Label color when focused
          },
          "& .MuiInputLabel-root": {
            color: "#3C4071", // Default label color
          },
          "& .MuiFormHelperText-root.Mui-error": {
            textAlign: "left",
            marginLeft: "0px",
            marginTop: "0px",
            fontWeight: "8px",
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent", // Change hover color
          },
        },
        daySelected: {
          backgroundColor: "transparent", // Change selected day background color
          "&:hover": {
            backgroundColor: "transparent", // Darken on hover
          },
        },
        current: {
          color: "#5E17EB", // Change current day color
        },
      },
    },
    MuiDatePickerToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent", // Change toolbar background color
        },
      },
    },
    MuiPickersModalDialog: {
      styleOverrides: {
        dialogRoot: {
          backgroundColor: "transparent", // Change dialog background color
        },
      },
    },
    MuiPickerDTToolbar: {
      styleOverrides: {
        toolbar: {
          backgroundColor: "transparent", // Change DateTime Picker toolbar background color
        },
      },
    },
  },
});

// Styled TextField component for customization
const CustomTextField = styled(TextField)(({ size, error }) => ({
  "& label.Mui-focused": {
    color: error ? "#FF2E2E" : "#837A88",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: error ? "#FF2E2E" : "#837A88",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: error ? "#FF2E2E" : "#837A88",
    },
    "&:hover fieldset": {
      borderColor: error ? "#FF2E2E" : "#837A88",
    },
    "&.Mui-focused fieldset": {
      borderColor: error ? "#FF2E2E" : "#837A88",
      border: error ? "1.5px solid #FF2E2E" : "1.5px solid #5E17EB",
    },
    borderRadius: "6px",
    height: size === "small" ? "45px" : "",
  },
  "& input::placeholder": {
    fontSize: size === "small" ? "14px" : "",
  },
  "& .MuiFormHelperText-root": {
    marginLeft: "0px",
    marginTop: "0px",
    fontWeight: "8px",
  },
}));

const DatePicker = ({
  label,
  value,
  onChange,
  placeholder = "",
  size = "small",
  error = false,
  helperText = "",
}) => {
  const validateDate = (date) => {
    const minAge = 16;
    const isValid = dayjs().diff(date, "year") >= minAge;
    return isValid;
  };

  const handleDateChange = (date) => {
    if (validateDate(date)) {
      onChange(date);
    } else {
      onChange(null);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          label={label}
          value={value}
          onChange={handleDateChange}
          renderInput={(params) => (
            <CustomTextField
              {...params}
              placeholder={placeholder}
              variant="outlined"
              fullWidth
              size={size}
              error={error || !validateDate(value)}
              helperText={
                helperText ||
                (!validateDate(value) && "Must be at least 16 years old")
              }
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon style={{ color: "#5E17EB" }} />
                    {(error || !validateDate(value)) && (
                      <WarningRoundedIcon style={{ color: "#FF2E2E" }} />
                    )}
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DatePicker;
