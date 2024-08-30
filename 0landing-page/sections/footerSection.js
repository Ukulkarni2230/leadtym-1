import React from "react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import {
  FaTelegram,
  FaFacebook,
  FaArrowUpLong,
  FaLinkedin,
} from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FooterSection = ({ themeMode }) => {
  const router = useRouter();

  const navigate = () => {
    router.push("/contact-us");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const sec = document.getElementById(sectionId);
        if (sec) {
          sec.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  };

  return (
    <div className="bg-[#FFFFFE] py-5 text-[#1C1C1C] dark:bg-[#000000] dark:text-[#FFFFFF]">
      <div className="w-full relative flex flex-col pt-10">
        <div className="w-full overflow-hidden p-2 items-center relative bg-[#604AEF] grid grid-cols-1 md:grid-cols-2 rounded-[30px] md:rounded-full m] effectnet-background">
          <div className="z-40 flex items-center justify-center">
            <img
              className="w-[70%] h-[50%]"
              src="/assets/landing/footers2.svg"
              alt=""
            />
          </div>
          <div className="w-full z-40 text-center md:text-start items-center text-white md:items-start py-4 justify-start md:justify-center gap-y-6 flex flex-col">
            <h3 className="text-base sm:text-[25px] xl:text-[40px] font-bold">
              Book a Demo Now
            </h3>
            <p className="text-xs sm:text-[18px] md:text-[16px] xl:text-[24px] leading-6 xl:leading-7 font-normal md:font-medium">
              Ready to see how Leadtym can transform your marketing strategy?
              Book a personalized demo with our experts today and discover how
              our success-based pricing model can work for you.
            </p>
            <button
              onClick={navigate}
              className="py-2.5 bg-white hover:text-[#604AEF] text-[#1e1e1e] w-fit px-10 rounded-full font-bold text-sm sm:text-base 2xl:text-lg"
            >
              Book a Demo
            </button>
          </div>
        </div>

        <div className="md:p-12 w-full mt-6 md:mt-0 pb-0">
          <div className="flex w-full flex-col gap-y-3">
            <div className="text-center flex flex-col gap-y-6 lg:flex-row items-center justify-center w-full dark:text-[#A9A8A8] text-[#1e1e1e] text-sm sm:text-base 2xl:text-lg font-normal md:gap-x-10">
              <div className="dark:text-[#A9A8A8] text-[#1C1C1C] w-full md:w-auto flex flex-col md:flex-row justify-center items-center gap-y-3 md:gap-x-10 text-center">
                <div className="grid grid-cols-3 gap-4 md:gap-10 md:mr-10">
                  <p
                    onClick={() => scrollToSection("why-leadtym")}
                    className="cursor-pointer whitespace-nowrap"
                  >
                    About Leadtym
                  </p>
                  <p
                    onClick={() => scrollToSection("features")}
                    className="cursor-pointer whitespace-nowrap"
                  >
                    Features
                  </p>
                  <p
                    onClick={() => scrollToSection("how-it-works")}
                    className="cursor-pointer whitespace-nowrap"
                  >
                    How It Works
                  </p>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-10 mt-4 md:mt-0">
                  <p
                    onClick={() => scrollToSection("benefits")}
                    className="cursor-pointer whitespace-nowrap"
                  >
                    Benefits
                  </p>
                  <p
                    onClick={() => scrollToSection("faq")}
                    className="cursor-pointer whitespace-nowrap"
                  >
                    FAQ
                  </p>
                  <p
                    onClick={() => scrollToSection("blogs")}
                    className="cursor-pointer whitespace-nowrap"
                  >
                    Blogs
                  </p>
                  <p
                    onClick={navigate}
                    className="cursor-pointer whitespace-nowrap"
                  >
                    Contact
                  </p>
                </div>
              </div>

              <div className="flex flex-row w-full md:w-auto items-center justify-center md:items-start dark:text-white text-black md:pl-6 gap-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61556210603802"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    className="cursor-pointer whitespace-nowrap"
                    size={24}
                  />
                </a>
                <a
                  href="https://www.instagram.com/leadtym/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuInstagram
                    className="cursor-pointer whitespace-nowrap"
                    size={24}
                  />
                </a>
                <a
                  href="https://x.com/Leadtym?t=9pOf-BHXAbH6MKvgm10DUg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiTwitterXLine
                    className="cursor-pointer whitespace-nowrap"
                    size={24}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/leadtymofficial/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    className="cursor-pointer whitespace-nowrap"
                    size={24}
                  />
                </a>
              </div>
            </div>
            <div className="space-y-2 mt-0 md:mt-6 gap-2 items-center justify-center xl:gap-x-10">
              <div className="flex flex-col items-center justify-center mt-4 gap-y-1.5 lg:gap-y-2 lg:flex-row lg:items-start dark:text-[#A9A8A8] text-[#1e1e1e] text-sm sm:text-base 2xl:text-lg font-normal md:gap-x-10">
                <div className="flex flex-row items-start gap-x-1 sm:gap-x-2">
                  <GrLocation className="font-bold mt-0.5 sm:mt-0 text-base lg:text-[24px] dark:text-white text-black" />
                  <p className="dark:text-[#A9A8A8] text-xs md:text-sm text-center md:text-left">
                    A321, Master Mind 4, Royal Palms,
                    <br /> Goregaon(E), Mumbai, 400065
                  </p>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <AiOutlineMail className="font-bold mt-0.5 sm:mt-0 text-base lg:text-[24px] dark:text-white text-black" />
                  <a
                    href="mailto:admin@leadtym.com"
                    className="dark:text-[#A9A8A8] text-xs md:text-base"
                  >
                    admin@leadtym.com
                  </a>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <BsTelephoneInbound className="font-bold mt-0.5 sm:mt-0 text-base lg:text-[24px] dark:text-white text-black" />
                  <a
                    href="tel:+916207275745"
                    className="dark:text-[#A9A8A8] text-xs md:text-sm"
                  >
                    +91-6207275745
                  </a>
                </div>
                <div className="flex flex-row gap-x-4 items-center justify-center">
                  {themeMode === "light" ? (
                    <img src="/assets/landing/fotters4.svg" alt="" />
                  ) : (
                    <img src="/assets/landing/footers.svg" alt="" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl w-full  text-white text-center">
        <h4
          className={`font-urbanist   bgg font-bold leading-snug tracking-wide ${
            themeMode === "light" ? "gradient-text" : "text-white"
          } text-center max-w-full overflow-hidden whitespace-nowrap responsive-text-leadtym`}
        >
          LeadTym
        </h4>
        <div className="lg:flex inline-block justify-between z-30 w-full md:w-[80%] -mt-4 md:-mt-8 lg:-mt-14 mx-auto dark:bg-[#282828] bg-white border border-[#1C1C1C] dark:border-none rounded-xl lg:rounded-full p-3 px-1 lg:p-6 items-center text-sm sm:text-base 2xl:text-lg font-normal text-[#1C1C1C] dark:text-white">
          <span className="font-normal text-sm lg:text-base">
            © 2024 LeadTym All Rights Reserved.
          </span>
          <div className="flex flex-wrap text-center mt-2 lg:mt-0 items-center gap-y-2 justify-center xl:justify-start md:flex-row gap-x-1 sm:gap-x-3 text-xs lg:text-sm font-extralight">
            <p className="dark:hover:text-gray-300 hover:text-gray-800 gap-x-1">
              Terms And Refund
            </p>
            <span>·</span>
            <p className="dark:hover:text-gray-300 hover:text-gray-800 gap-x-1">
              Privacy Policy
            </p>
            <span>·</span>
            <p
              // href="/cookies"
              className="dark:hover:text-gray-300 hover:text-gray-800"
            >
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
