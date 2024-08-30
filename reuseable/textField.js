import React, { useState, useEffect } from "react";
import {
  TextField,
  ThemeProvider,
  createTheme,
  InputAdornment,
} from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { useSelector } from "react-redux";
const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
    components: {
      MuiTextField: {
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
                // backgroundColor: "transparent",
              },
              "&.Mui-error fieldset": {
                borderColor: "#FF2E2E",
              },
              "& input": {
                position: "relative",
                zIndex: 1,
                color: mode === "dark" ? "#FFFFFF" : "#000000", // Ensuring input text is white in dark mode
              },
              "&.Mui-focused input": {
                color: mode === "dark" ? "#FFFFFF" : "#000000", // Ensuring focused input text is white in dark mode
              },
              "& .MuiInputBase-input::placeholder": {
                color: mode === "dark" ? "#BABFC5" : "#3C4071",
              },
              "&:-webkit-autofill": {
                WebkitBoxShadow: `0 0 0 100px ${
                  mode === "dark" ? "#151417" : "#F0F0F2"
                } inset !important`,
                WebkitTextFillColor: `${
                  mode === "dark" ? "#FFFFFF" : "#000000"
                } !important`,
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

const InputField = ({
  label,
  fullWidth = true,
  variant = "outlined",
  sx,
  icon = null,
  required = false,
  inputProps = {},
  validationFunc,
  validationType,
  errorText,
  placeholder,
  value,
  onChange,
  onKeyDown,
  ...otherProps
}) => {
  const [internalValue, setInternalValue] = useState(value || "");
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);

  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    setInternalValue(value || "");
  }, [value]);

  useEffect(() => {
    if (touched && validationFunc) {
      setError(!validationFunc(internalValue));
    }
  }, [internalValue, validationFunc, touched]);

  const validateValue = (newValue) => {
    switch (validationType) {
      case "numeric":
        return /^[0-9]*$/.test(newValue);
      case "text":
        return /^[a-zA-Z\s]*$/.test(newValue);
      case "name":
        return /^[a-zA-Z\s]{0,30}$/.test(newValue) && !/^\s/.test(newValue);
      default:
        return true;
    }
  };

  const handleChange = (event) => {
    let newValue = event.target.value.replace(/\s{2,}/g, " ");
    if (
      validateValue(newValue) &&
      newValue.length <= (inputProps.maxLength || 30)
    ) {
      setInternalValue(newValue);
      setTouched(true);
      if (validationFunc) {
        setError(!validationFunc(newValue));
      }
      if (onChange) {
        onChange({ ...event, target: { ...event.target, value: newValue } });
      }
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (validationFunc) {
      setError(!validationFunc(internalValue));
    }
  };

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <TextField
        className={themeMode === "light" ? "light-theme  " : "dark-theme  "}
        label={label}
        fullWidth={fullWidth}
        variant={variant}
        placeholder={placeholder}
        value={internalValue}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "#FF2E2E" : "",
          },
          ...sx,
        }}
        required={required}
        error={error}
        helperText={touched && error ? errorText : null}
        InputProps={{
          startAdornment: icon ? (
            <InputAdornment position="start">{icon}</InputAdornment>
          ) : null,
          endAdornment: error ? (
            <InputAdornment position="end">
              <WarningRoundedIcon style={{ color: "#FF2E2E" }} />
            </InputAdornment>
          ) : null,
          inputMode:
            validationType === "numeric" ? "numeric" : inputProps.inputMode,
        }}
        onKeyDown={onKeyDown}
        {...otherProps}
      />
    </ThemeProvider>
  );
};

export default InputField;
