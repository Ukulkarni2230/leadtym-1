"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Hero from "./hero";
import Navbar from "./navbar";
import WhyLeadtym from "./sections/why-leadtym";
import Features from "./sections/Features";
import Analytics from "./sections/Analytics";
import HowLeadtymWorks from "./sections/HowLeadtymWorks";
import Benifits from "./Benifits";
import InfluencerCarousel from "./sections/InfluencerCarousel";
import Intrigration from "./sections/intrigrations";
import FAQ from "./sections/FAQ";
import BlogPage from "./sections/blogPage";
import FooterSection from "./sections/footerSection";
import TestimonialCarousel from "./sections/TestimonialCarousel";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const getGridBackgroundClass = (index) => {
    if (index % 2 === 0) {
      return themeMode === "dark"
        ? "grid-background-dark grid-background"
        : "grid-background-light grid-background";
    }
    return "";
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-white dark:bg-black min-h-screen relative">
      <div className="w-full max-w-screen-2xl md:space-y-24">
        <div
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            0
          )}`}
        >
          <Navbar />
          <Hero />
        </div>
        <div
          id="why-leadtym"
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            1
          )}`}
        >
          <WhyLeadtym />
        </div>
        <div
          id="features"
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            2
          )}`}
        >
          <Features />
        </div>
        <div
          // id="how-it-works"
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            3
          )}`}
        >
          <Analytics />
        </div>
        <div
          id="how-it-works"
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            4
          )}`}
        >
          <HowLeadtymWorks />
        </div>
        <div
          id="benefits"
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            5
          )}`}
        >
          <Benifits />
        </div>
        <div
          id="intrigrations"
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            5
          )}`}
        >
          <Intrigration />
        </div>
        <div id="influencers" className={` ${getGridBackgroundClass(6)}`}>
          <InfluencerCarousel />
        </div>
        <div
          id="faq"
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            9
          )}`}
        >
          <FAQ />
        </div>
        <div id="testi" className={` ${getGridBackgroundClass(10)}`}>
          <TestimonialCarousel />
        </div>
        <div
          id="blogs"
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            9
          )}`}
        >
          <BlogPage />
        </div>
        <div
          id="fotter"
          className={`px-2 sm:px-6 lg:px-8 mx-auto ${getGridBackgroundClass(
            9
          )}`}
        >
          <FooterSection themeMode={themeMode} />
        </div>
      </div>
      {showScrollButton && (
        <button
          className="sm:py-4 sm:px-5 py-3 px-3  sm:text-xl text-base fixed bottom-4 right-4 lg:bottom-6 lg:right-8 font-bold text-white gradient-bg flex items-center justify-center rounded-lg"
          onClick={scrollToTop}
        >
          <FaArrowUpLong />
        </button>
      )}
    </div>
  );
};

export default Landing;
