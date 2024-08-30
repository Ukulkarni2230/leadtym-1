import React from "react";
import Link from "next/link";
import Spinner from "./spinner";

const PrimaryButton = ({
  children,
  onClick,
  isLoading,
  disabled,
  className = "",
  href,
  py = "py-3",
  borderGradient = false,
  ...props
}) => {
  const buttonContent = (
    <button
      type="button"
      className={`relative w-full px-6 ${py} rounded-full font-extrabold text-[16px] sm:text-lg transition-colors duration-300 ${className} ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : borderGradient
          ? "border border-purple-500 text-purple-600 hover:text-black"
          : "gradient-bg hover:from-[#7f6ae0] hover:to-[#4738ed] text-white"
      }`}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      <span
        className="flex items-center justify-center rounded-full w-full h-full"
        style={borderGradient ? { boxSizing: "border-box" } : {}}
      >
        {isLoading ? <Spinner /> : children}
      </span>
    </button>
  );

  return href ? (
    <Link href={href} legacyBehavior passHref>
      <a className="w-full">{buttonContent}</a>
    </Link>
  ) : (
    buttonContent
  );
};

export default PrimaryButton;
