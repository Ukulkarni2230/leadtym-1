"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/src/Redux/theme/themeActions";
import Link from "next/link";
import Landing from "@/src/0landing-page/Landing";

function Page() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    // Apply the dark class to the body tag based on themeMode
    if (themeMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeMode]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="">
      <Landing />
    </div>
  );
}

export default Page;
