import React from "react";
import Navbar from "../navbar";
import HeroSection from "./HeroSection";
import { useSelector } from "react-redux";
import ContactForm from "./contact-form";
import FAQ from "../sections/FAQ";
import BlogPage from "../sections/blogPage";
import FooterSection from "../sections/footerSection";

const ContactUs = () => {
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
      <div className="w-full max-w-screen-2xl space-y-0 md:space-y-24">
        <div
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            0
          )}`}
        >
          <Navbar />
          <HeroSection />
        </div>
        <div
          className={`px-2 sm:px-6  lg:px-8 mx-auto ${getGridBackgroundClass(
            1
          )}`}
        >
          <ContactForm />
        </div>
        <div
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            2
          )}`}
        >
          <FAQ />
        </div>
        <div className={`px-2 sm:px-6 lg:px-8 mx-auto `}>
          <BlogPage />
        </div>
        <div id="fotter" className={`px-2 sm:px-6 lg:px-8 mx-auto`}>
          <FooterSection themeMode={themeMode} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
