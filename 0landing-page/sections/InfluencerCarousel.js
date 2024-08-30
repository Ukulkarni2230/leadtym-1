import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbMail } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import CarouselInfo from "./carousel-info";

const influencerData = [
  {
    name: "Kathryn Murphy",
    location: "Phoenix",
    followers: "10M",
    platforms: ["Instagram", "YouTube", "TikTok"],
    niche: "Entertainment",
    price: "₹50-80k",
    img: "/assets/influencer-images/i1.png",
  },
  {
    name: "Bessie Cooper",
    location: "San Antonio",
    followers: "600k",
    platforms: ["Instagram", "YouTube"],
    niche: "Lifestyle",
    price: "₹12-20k",
    img: "/assets/influencer-images/i4.png",
  },
  {
    name: "Ben Guigot",
    location: "San Antonio",
    followers: "600k",
    platforms: ["Instagram", "YouTube"],
    niche: "Lifestyle",
    price: "₹12-20k",
    img: "/assets/influencer-images/i5.png",
  },
  {
    name: "Kathryn Murphy",
    location: "Phoenix",
    followers: "10M",
    platforms: ["Instagram", "YouTube", "TikTok"],
    niche: "Entertainment",
    price: "₹50-80k",
    img: "/assets/influencer-images/i1.png",
  },
  {
    name: "Bessie Cooper",
    location: "San Antonio",
    followers: "600k",
    platforms: ["Instagram", "YouTube"],
    niche: "Lifestyle",
    price: "₹12-20k",
    img: "/assets/influencer-images/i2.png",
  },
  {
    name: "Ben Guigot",
    location: "San Antonio",
    followers: "600k",
    platforms: ["Instagram", "YouTube"],
    niche: "Lifestyle",
    price: "₹12-20k",
    img: "/assets/influencer-images/i6.png",
  },
];

const InfluencerCarousel = () => {
  const router = useRouter();

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    spaceBetween: 16,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 904,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNavigation = () => {
    router.push("/signup");
  };

  return (
    <div
      className="relative influencer-carousel-container bg-no-repeat hide-bg-up-to-md bg-center md:bg-top sm:py-12 py-8 max-w-screen-2xl "
      // style={{ backgroundImage: "url(/assets/landing/bg.svg)" }}
    >
      <CarouselInfo />
      <Slider
        {...settings}
        className="flex justify-center items-center mx-auto pl-[5%] sm:pl-0"
      >
        {influencerData.map((influencer, index) => (
          <div
            key={index}
            className="p-4 !w-[92%] mb-5 mx-auto rounded-md shadow-xl bg-white dark:bg-black shadow-[#5E17EB26] dark:shadow-[#5E17EB26] dark:border dark:border-opacity-30 dark:border-white"
          >
            <div
              className="relative cursor-pointer w-full mb-4"
              onClick={handleNavigation}
            >
              <img
                src={influencer.img}
                alt={influencer.name}
                className="rounded-md w-full"
              />
            </div>
            <div className="flex justify-between border-b border-[#D8D9D4] dark:border-gray-600 pb-1 items-center">
              <div>
                <div className="flex gap-1 items-center">
                  <p className="text-[12px] whitespace-nowrap text-[#000000] dark:text-white sm:text-[14px] 2xl:text-[16px] font-semibold">
                    {influencer.name}
                  </p>
                  <img src="/assets/icons/verify.svg" alt="verified" />
                </div>
                <p className="text-[10px] -mt-[1px] sm:text-[12px] 2xl:text-[14px] font-semibold text-[#00000080] dark:text-gray-400">
                  {influencer.location}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#000000] dark:text-white sm:text-[14px] 2xl:text-[16px] font-semibold flex justify-end text-end">
                  {influencer.followers}
                </p>
                <p className="text-[10px] text-[#000000] dark:text-gray-400 -mt-[1px] font-normal sm:text-[12px] 2xl:text-[14px]">
                  Followers
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-1">
              <div className="flex space-x-1.5 my-2">
                {influencer.platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 text-[#36363A] dark:text-gray-300 rounded-[3.45px] border border-[#D8D9D4] dark:border-gray-600 p-[1px]"
                  >
                    {platform === "YouTube" && (
                      <div className="flex w-full h-full justify-center items-center hover:text-red-600 cursor-pointer">
                        <FaYoutube />
                      </div>
                    )}
                    {platform === "Instagram" && (
                      <div className="flex w-full h-full justify-center items-center hover:text-pink-500 cursor-pointer">
                        <AiOutlineInstagram />
                      </div>
                    )}
                    {platform === "TikTok" && (
                      <div className="flex w-full h-full justify-center items-center hover:text-black cursor-pointer">
                        <BiLogoTiktok />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className={`flex items-center overflow-hidden space-x-2`}>
                <span
                  className={`text-xs h-[24px] px-2 py-1 rounded-full truncate overflow-hidden whitespace-nowrap ${
                    index % 2 === 0
                      ? "bg-[#FDF8ED] text-[#F47F65]"
                      : "bg-[#F7E9F7] text-[#B324AE]"
                  }`}
                >
                  {influencer.niche}
                </span>
                <span
                  className={`text-xs ${
                    index % 2 === 0
                      ? "bg-[#FDF8ED] text-[#F47F65]"
                      : "bg-[#F7E9F7] text-[#B324AE]"
                  } h-[24px] px-2 py-1 rounded-full`}
                >
                  +10
                </span>
              </div>
            </div>
            <div className="flex my-2 justify-between items-center gap-1">
              <p className="text-[10px] sm:text-[12px] 2xl:text-[14px] text-[#808080] dark:text-gray-400 font-semibold">
                Advertising Price
              </p>
              <p className="text-[12px] text-[#000000] dark:text-white font-semibold sm:text-[14px] 2xl:text-[16px]">
                {influencer.price}
              </p>
            </div>
            <div className="flex justify-between mt-2 items-center gap-1">
              <div className="flex space-x-1.5">
                <div
                  className="w-6 flex justify-center items-center h-6 text-[#36363A] dark:text-gray-300 rounded-[3.45px] border hover:text-red-600 cursor-pointer border-[#D8D9D4] dark:border-gray-600 p-[1px]"
                  onClick={handleNavigation}
                >
                  <TbMail />
                </div>
                <div
                  className="w-6 flex justify-center items-center h-6 text-[#36363A] dark:text-gray-300 rounded-[3.45px] border cursor-pointer border-[#D8D9D4] dark:border-gray-600 p-[1px]"
                  onClick={handleNavigation}
                >
                  <GoHeartFill className="text-red-600" />
                </div>
              </div>
              <div
                className="bg-[#F2FDF5] dark:bg-[#c3f3cf] hover:bg-[#c5f0d1] font-bold  rounded-full  h-[24px] text-[10px] flex items-center justify-center  px-4 cursor-pointer text-[#16A249]"
                onClick={handleNavigation}
              >
                Connect
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfluencerCarousel;
