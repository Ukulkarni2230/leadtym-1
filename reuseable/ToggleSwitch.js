import React, { useState } from "react";

const ToggleSwitch = ({
  label,
  checked,
  onChange,
  error,
  disabled,
  loading,
}) => {
  const [internalChecked, setInternalChecked] = useState(checked || false);

  const handleChange = () => {
    if (disabled) return;
    if (onChange) {
      onChange(!checked);
    } else {
      setInternalChecked(!internalChecked);
    }
  };

  return (
    <div className="flex flex-col items-start">
      {label && <span className="mb-1 text-sm">{label}</span>}
      <label
        className={`relative inline-flex items-center ${
          disabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <input
          type="checkbox"
          checked={checked !== undefined ? checked : internalChecked}
          onChange={handleChange}
          className="sr-only peer"
          disabled={disabled}
        />
        <div className="w-7 h-4 bg-[#697077] rounded-full peer-checked:bg-[#16A249] transition duration-200 ease-in-out relative"></div>
        {loading ? (
          <div
            className={`absolute top-[2.1px] flex items-center justify-center w-3 h-3 border-[2px] border-white border-t-transparent rounded-full animate-spin ${
              (checked !== undefined ? checked : internalChecked)
                ? "right-[2px]"
                : "left-[2px]"
            }`}
          ></div>
        ) : (
          <div
            className={`absolute left-[2px] top-[2.1px] bg-white border-gray-300 border rounded-full h-3 w-3 transition-transform duration-200 ease-in-out ${
              (checked !== undefined ? checked : internalChecked)
                ? "translate-x-full bg-white border-none"
                : ""
            }`}
          ></div>
        )}
      </label>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default ToggleSwitch;
