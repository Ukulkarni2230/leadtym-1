import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

const theme = createTheme({
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
            },
            "&.Mui-focused input": {
              color: "#000000",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#3C4071",
            },
          },
          "& label.Mui-focused": {
            color: "#5E17EB",
          },
          "& .MuiInputLabel-root": {
            color: "#3C4071",
          },
          "& .MuiFormHelperText-root.Mui-error": {
            textAlign: "left",
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#F0F0F2",
            "& fieldset": {
              borderColor: "#D9D9DC",
              borderWidth: "1px",
              borderRadius: "10px",
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
            "& select": {
              color: "#000000",
            },
            "&.Mui-focused select": {
              color: "#000000",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#3C4071",
            },
          },
          "& label.Mui-focused": {
            color: "#5E17EB",
          },
          "& .MuiInputLabel-root": {
            color: "#3C4071",
          },
          "& .MuiFormHelperText-root.Mui-error": {
            textAlign: "left",
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderStyle: "solid",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "1px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#5E17EB",
            color: "white",
            "&:hover": {
              backgroundColor: "#5E17EB",
            },
          },
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
  },
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  "&.Mui-selected": {
    backgroundColor: "#5E17EB",
    color: "white",
    "&:hover": {
      backgroundColor: "#5E17EB",
    },
  },
  borderBottom: "1px solid #D8D9D4",
}));

const SelectField = ({
  label,
  value,
  onChange,
  required = false,
  error = false,
  helperText = "",
}) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl
        fullWidth
        variant="outlined"
        error={error}
        required={required}
      >
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          label={label}
          endAdornment={
            error ? (
              <WarningRoundedIcon
                style={{ color: "#FF2E2E", marginRight: "10px" }}
              />
            ) : null
          }
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          }}
          sx={{
            color: "#5E17EB",
            borderRadius: "10px",
            "& .MuiInputLabel-root": {
              color: "#3C4071", // Label color in default state
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#FF2E2E" : "#5E17EB",
              borderWidth: "1px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#5E17EB",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#5E17EB",
              borderWidth: "1px",
              backgroundColor: "transparent",
            },
          }}
        >
          <StyledMenuItem value="">
            <em>None</em>
          </StyledMenuItem>
          <StyledMenuItem value="Male">Male</StyledMenuItem>
          <StyledMenuItem value="Female">Female</StyledMenuItem>
          <StyledMenuItem value="Other">Other</StyledMenuItem>
        </Select>
        {error && <p className="text-red-500 text-sm mt-1">{helperText}</p>}
      </FormControl>
    </ThemeProvider>
  );
};

export default SelectField;
