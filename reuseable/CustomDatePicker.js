import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { InputAdornment, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#D9D9DC",
              borderWidth: "1px",
              borderRadius: "10px",
              backgroundColor: "#F0F0F2",
              color: "#000000",
            },
            "&:hover fieldset": {
              borderColor: "#5E17EB",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5E17EB",
              borderWidth: "1px",
              backgroundColor: "transparent",
            },
            "&.Mui-error fieldset": {
              borderColor: "#FF2E2E",
            },
            "& input": {
              position: "relative",
              zIndex: 1,
              color: "#000000", // Default input text color
            },
            "&.Mui-focused input": {
              color: "#000000", // Focused input text color
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#3C4071", // Placeholder color
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
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#5E17EB", // Change hover color
          },
        },
        daySelected: {
          backgroundColor: "#5E17EB", // Change selected day background color
          "&:hover": {
            backgroundColor: "#4e14cb", // Darken on hover
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
          backgroundColor: "#5E17EB", // Change toolbar background color
        },
      },
    },
    MuiPickersModalDialog: {
      styleOverrides: {
        dialogRoot: {
          backgroundColor: "#f0f0f0", // Change dialog background color
        },
      },
    },
    MuiPickerDTToolbar: {
      styleOverrides: {
        toolbar: {
          backgroundColor: "#5E17EB", // Change DateTime Picker toolbar background color
        },
      },
    },
  },
});

export default function CustomDatePicker({
  value,
  onChange,
  error,
  helperText,
}) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date of Birth"
          sx={{ width: "100%" }}
          value={value}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth={true}
              error={error}
              helperText={helperText}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon style={{ color: "#5E17EB" }} />
                    {error && (
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
}
