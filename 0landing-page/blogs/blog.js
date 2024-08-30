"use client";
import React from "react";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
import BlogDetails from "./BlogDetails";
import FooterSection from "../sections/footerSection";

const BlogMainPage = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const getGridBackgroundClass = (index) => {
    if (index % 2 === 0) {
      return themeMode === "dark"
        ? "grid-background-dark grid-background"
        : "grid-background-light grid-background";
    }
    return "";
  };

  return (
    <div className="flex flex-col items-center bg-white dark:bg-black min-h-screen">
      <div className="w-full max-w-screen-2xl">
        <div className={`px-2 sm:px-6 lg:px-8 mx-auto`}>
          <Navbar />
        </div>
        <div className={`px-2 sm:px-6 lg:px-8 mx-auto`}>
          <BlogDetails />
        </div>
        <div id="fotter" className={`px-2 sm:px-6 lg:px-8 mx-auto`}>
          <FooterSection themeMode={themeMode} />
        </div>
      </div>
    </div>
  );
};

export default BlogMainPage;
