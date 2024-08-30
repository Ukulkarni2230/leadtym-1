// src/components/navbar.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { toggleTheme } from "../Redux/theme/themeActions";
import { BiMoon, BiSun, BiMenu } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navigate = () => {
    router.push("/contact-us");
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const sec = document.getElementById(sectionId);
        // console.log(sec, sectionId, section, "seccc   ");
        if (sec) {
          sec.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
      // });
    }
  };

  return (
    <nav className="relative flex items-center justify-between py-3">
      <div className="flex items-center space-x-4">
        <img
          onClick={() => router.push("/")}
          src={
            themeMode === "dark"
              ? "/assets/onboard/Logow.svg"
              : "/assets/onboard/Logo.svg"
          }
          className="overflow-hidden cursor-pointer transition-all 2xl:w-44 w-[146px] -mt-[3px] h-[25px] sm:h-[30px]"
          alt="Leadtum Logo"
        />
      </div>
      <div className="hidden lg:flex flex-grow items-center justify-center space-x-4 xl:space-x-8">
        <a
          onClick={() => scrollToSection("why-leadtym")}
          className="cursor-pointer text-black dark:text-white text-sm sm:text-base 2xl:text-lg font-bold"
        >
          About Leadtym
        </a>
        <a
          onClick={() => scrollToSection("features")}
          className="cursor-pointer text-black dark:text-white text-sm sm:text-base 2xl:text-lg font-bold"
        >
          Features
        </a>
        <a
          onClick={() => scrollToSection("how-it-works")}
          className="cursor-pointer text-black dark:text-white text-sm sm:text-base 2xl:text-lg font-bold"
        >
          How It Works
        </a>
        <a
          onClick={() => scrollToSection("benefits")}
          className="cursor-pointer text-black dark:text-white text-sm sm:text-base 2xl:text-lg font-bold"
        >
          Benefits
        </a>
        <a
          onClick={() => scrollToSection("faq")}
          className="cursor-pointer text-black dark:text-white text-sm sm:text-base 2xl:text-lg font-bold"
        >
          FAQ
        </a>
      </div>
      <div className="flex items-center sm:space-x-4 lg:space-x-6 xl:space-x-8   last:space-x-0">
        <div className="flex sm:pr-4 lg:pr-6 xl:pr-8 pr-2 sm:border-r gap-1 sm:gap-2 h-6 md:h-8 border-[#1C1C1C] dark:border-[#FFFFFF] justify-center">
          <div
            className="relative md:w-[68px] w-[46px] bg-[#1C1C1C] dark:bg-[#FFFFFF] rounded-full sm:p-1 p-[0px]"
            onClick={handleThemeToggle}
          >
            <div
              className={`absolute left-1 top-1 md:w-6 md:h-6 w-[16px] h-[16px] rounded-full transition-transform duration-300 gradient-bg text-white ${
                themeMode === "dark" ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                transform: `translateX(${
                  themeMode === "dark" ? "0%" : "150%"
                })`,
                boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="absolute inset-0 rounded-full animate-pulse border-2 border-transparent border-l-purple-100"></div>
            </div>
            <BiMoon
              className={`absolute left-1 md:left-2 md:top-1.5 top-[4px] text-[16px] md:text-[20px] text-white transition-opacity duration-300 ${
                themeMode !== "dark" ? "opacity-100" : "opacity-0"
              }`}
            />
            <BiSun
              className={`absolute right-1 md:right-2 md:top-1.5 top-[4px] text-[16px] md:text-[20px] text-black transition-opacity duration-300 ${
                themeMode !== "dark" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
        <Link href="/log" className="sm:block hidden">
          <p className="text-black hover:text-gray-900 dark:hover:text-gray-200 dark:text-white text-sm font-bold sm:text-base 2xl:text-lg">
            Log In
          </p>
        </Link>
        {!pathname.includes("contact-us") && (
          <button
            onClick={navigate}
            className="gradient-bg hidden  border border-transparent w-1/2 text-white px-6 py-3 sm:w-[165px] h-[46px] 2xl:w-[175px]  font-bold sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg  rounded-full"
          >
            Request a demo
          </button>
        )}

        <button
          className="inline-flex items-center justify-center rounded-md text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 lg:hidden"
          onClick={handleMenuToggle}
        >
          <BiMenu className="h-6 w-6" />
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute top-0 left-0 w-72 h-screen bg-white dark:bg-black py-6 px-2 shadow-md z-50`}
      >
        <div className="flex flex-col items-start space-y-4 pt-16">
          <a
            onClick={() => {
              scrollToSection("why-leadtym");
              handleMenuToggle();
            }}
            className="cursor-pointer text-black dark:text-white text-base sm:text-lg 2xl:text-xl font-bold"
          >
            About Leadtym
          </a>
          <a
            onClick={() => {
              scrollToSection("features");
              handleMenuToggle();
            }}
            className="cursor-pointer text-black dark:text-white text-base sm:text-lg 2xl:text-xl font-bold"
          >
            Features
          </a>
          <a
            onClick={() => {
              scrollToSection("how-it-works");
              handleMenuToggle();
            }}
            className="cursor-pointer text-black dark:text-white text-base sm:text-lg 2xl:text-xl font-bold"
          >
            How It Works
          </a>
          <a
            onClick={() => {
              scrollToSection("benefits");
              handleMenuToggle();
            }}
            className="cursor-pointer text-black dark:text-white text-base sm:text-lg 2xl:text-xl font-bold"
          >
            Benefits
          </a>
          <a
            onClick={() => {
              scrollToSection("faq");
              handleMenuToggle();
            }}
            className="cursor-pointer text-black dark:text-white text-base sm:text-lg 2xl:text-xl font-bold"
          >
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-4 mt-6">
          <p
            onClick={() => router.push("/log")}
            className="text-black whitespace-nowrap hover:text-gray-900 dark:hover:text-gray-200 dark:text-white text-base font-bold sm:text-lg 2xl:text-xl"
          >
            Log In
          </p>
          <button
            onClick={navigate}
            className="gradient-bg w-1/2 text-white  px-7 text-base py-3 h-10 2xl:h-14 font-bold flex items-center justify-center whitespace-nowrap rounded-full"
          >
            Request a demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
