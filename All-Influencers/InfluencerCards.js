import React, { useEffect, useState } from "react";
import { TbMail } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoTiktok } from "react-icons/bi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";
import SkeletonLoader from "./SkeletonLoader";

const influencerData = [
  {
    name: "Kathryn Murphy",
    location: "Phoenix",
    followers: "10M",
    platforms: ["Instagram", "YouTube", "TikTok"],
    niche: "Entertainment",
    price: "₹50-80k",
    img: "/assets/influencer-images/i1.png", // Replace with actual image paths
  },
  {
    name: "Bessie Cooper",
    location: "San Antonio",
    followers: "600k",
    platforms: ["Instagram", "YouTube"],
    niche: "Lifestyle",
    price: "₹12-20k",
    img: "/assets/influencer-images/i4.png", // Replace with actual image paths
  },
  {
    name: "Ben Guigot",
    location: "San Antonio",
    followers: "600k",
    platforms: ["Instagram", "YouTube"],
    niche: "Lifestyle",
    price: "₹12-20k",
    img: "/assets/influencer-images/i5.png", // Replace with actual image paths
  },
  {
    name: "Kathryn Murphy",
    location: "Phoenix",
    followers: "10M",
    platforms: ["Instagram", "YouTube", "TikTok"],
    niche: "Entertainment",
    price: "₹50-80k",
    img: "/assets/influencer-images/i1.png", // Replace with actual image paths
  },
  {
    name: "Bessie Cooper",
    location: "San Antonio",
    followers: "600k",
    platforms: ["Instagram", "YouTube"],
    niche: "Lifestyle",
    price: "₹12-20k",
    img: "/assets/influencer-images/i2.png", // Replace with actual image paths
  },
  {
    name: "Ben Guigot",
    location: "San Antonio",
    followers: "600k",
    platforms: ["Instagram", "YouTube"],
    niche: "Lifestyle",
    price: "₹12-20k",
    img: "/assets/influencer-images/i6.png", // Replace with actual image paths
  },
  // Add more influencer data here
];

const InfluencerCards = () => {
  const [liked, setLiked] = useState(Array(influencerData.length).fill(false));
  const [loading, setLoading] = useState(
    Array(influencerData.length).fill(false)
  );
  const [added, setAdded] = useState(Array(influencerData.length).fill(false));
  const [isLoading, setIsLoading] = useState(true); // State to manage global loading

  const navigate = useDynamicNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop showing skeleton after 10 seconds
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const handleAddClick = (index) => {
    const newLoading = [...loading];
    const newAdded = [...added];

    newLoading[index] = true;
    setLoading(newLoading);

    setTimeout(() => {
      newLoading[index] = false;
      newAdded[index] = true;
      setLoading(newLoading);
      setAdded(newAdded);
    }, 2000); // Simulate loading for 2 seconds
  };

  const handleNavigate = () => {
    const allowedUserTypes = ["brand", "agency"];
    navigate("/influencers/all-influencer/single", allowedUserTypes);
  };

  if (isLoading) {
    return (
      <div className="gap-4 justify-stretch grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-[2px]">
        {Array(6) // Number of skeletons to show
          .fill(0)
          .map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
      </div>
    );
  }

  return (
    <div className="gap-4 justify-stretch grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-[2px]">
      {influencerData.map((influencer, index) => (
        <div
          key={index}
          className="p-4 w-full rounded-md shadow-md shadow-[#5E17EB26] border border-gray-200"
        >
          <div
            onClick={handleNavigate}
            className="relative cursor-pointer w-full mb-4"
          >
            <img
              src={influencer.img}
              alt={influencer.name}
              className="rounded-md w-full"
            />
          </div>
          <div className="flex justify-between border-b border-[#D8D9D4] pb-1 items-center">
            <div>
              <div className="flex gap-1 items-center">
                <p className="text-[12px] whitespace-nowrap text-[#000000] sm:text-[14px] 2xl:text-[16px] font-semibold">
                  {influencer.name}
                </p>
                <img src="/assets/icons/verify.svg" alt="verified" />
              </div>
              <p className="text-[10px] -mt-[1px] sm:text-[12px] 2xl:text-[14px] font-semibold text-[#00000080]">
                {influencer.location}
              </p>
            </div>
            <div>
              <p className="text-[12px] text-[#000000] sm:text-[14px] 2xl:text-[16px] font-semibold flex justify-end text-end">
                {influencer.followers}
              </p>
              <p className="text-[10px] text-[#000000] -mt-[1px] font-normal sm:text-[12px] 2xl:text-[14px]">
                Followers
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-1">
            <div className="flex space-x-1.5 my-2">
              {influencer.platforms.map((platform, index) => (
                <div
                  key={index}
                  className="w-6 h-6 text-[#36363A] rounded-[3.45px] border border-[#D8D9D4] p-[1px]"
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
            <p className="text-[10px] sm:text-[12px] 2xl:text-[14px] text-[#808080] font-semibold">
              Advertising Price
            </p>
            <p className="text-[12px] text-[#000000] font-semibold sm:text-[14px] 2xl:text-[16px]">
              {influencer.price}
            </p>
          </div>
          <div className="flex justify-between mt-2 items-center gap-1">
            <div className="flex space-x-1.5">
              <div className="w-6 flex justify-center items-center h-6 text-[#36363A] rounded-[3.45px] border hover:text-red-600 cursor-pointer border-[#D8D9D4] p-[1px]">
                <TbMail />
              </div>
              <div
                onClick={() => toggleLike(index)}
                className="w-6 flex justify-center items-center h-6 text-[#36363A] rounded-[3.45px] border cursor-pointer border-[#D8D9D4] p-[1px]"
              >
                {liked[index] ? (
                  <GoHeartFill className="text-red-600" />
                ) : (
                  <GoHeart />
                )}
              </div>
            </div>
            {loading[index] ? (
              <div className="bg-[#FFF4E5] rounded-full w-[58px] h-[24px] flex items-center justify-center font-semibold cursor-pointer text-[#16A249]">
                <img
                  src="/assets/icons/load.svg"
                  alt="loading"
                  className="animate-spin"
                />
              </div>
            ) : added[index] ? (
              <div className="bg-[#F2FDF5] rounded-full w-[58px] h-[24px] text-[20px] flex items-center justify-center font-semibold px-4 cursor-pointer text-[#16A249]">
                <IoIosCheckmark />
              </div>
            ) : (
              <div
                onClick={() => handleAddClick(index)}
                className="gradient-bg rounded-full h-[24px] text-[12px] flex items-center justify-center font-semibold sm:text-[14px] 2xl:text-[16px] px-4 cursor-pointer text-white"
              >
                + Add
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfluencerCards;
