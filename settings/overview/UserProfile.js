import React from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";
import { useUser } from "@/src/hooks/user-service/useUser";
import { formatJoinedDate } from "@/src/utils/formatJoinedDate";
import useVisibility from "@/src/hooks/user-service/useVisibility";
import { getUserCategories } from "@/src/utils/getUserCategories";

const UserProfile = () => {
  const navigate = useDynamicNavigate();
  const isInfluencer = useVisibility(["influencer"]);
  const { userDetails } = useUser();
  const categories = getUserCategories(userDetails);
  const handleNavigate = () => {
    navigate("/settings/overview/edit");
  };

  return (
    <div className="bg-white shadow-lg shadow-[#5E17EB26] w-full  md:min-w-[350px] md:max-w-[25rem] 2xl:max-w-[30rem] rounded-md h-full pb-5 overflow-hidden  ">
      <div className="relative w-full">
        <Image
          src="/assets/profile/profileBg.svg"
          height={200}
          width={800}
          className="z-0"
          objectFit="cover"
          alt="Background"
        />
      </div>
      <div className="flex justify-start sm:ml-4 ml-1 -mt-11">
        <div className="relative w-[114px] h-[114px] 2xl:w-[124px] 2xl:h-[124px]">
          <Image
            src={
              !isInfluencer && userDetails?.picture
                ? userDetails.picture
                : userDetails?.avatar || "/assets/profile/defaultprofile.svg"
            }
            width={114}
            height={114}
            className="rounded-full border-4  h-[114px]  w-[114px] 2xl:w-[124px] 2xl:h-[124px] z-0 border-white"
            alt="User Avatar"
          />
          {/* Active badge implemented with span only */}
          <span className="absolute right-2 bottom-[19px] 2xl: 2xl: bg-[#7AE582] rounded-full w-[14px] h-[14px] 2xl:w-[18px] 2xl:h-[18px] "></span>
        </div>
      </div>
      <div className=" sm:px-4  text-start sm:text-start items-center justify-between px-2 py-[5px] flex ml-[134px] -mt-16 2xl:-mt-20 ">
        <div className="text-[10px] sm:text-[12px] 2xl:text-[14px] font-normal text-[#666666]">
          <h3 className="2xl:text-lg whitespace-nowrap text-[14px] sm:text-[16px] text-[#5649DF] font-bold">
            {`${userDetails?.name || ""} ${userDetails?.lastName || ""}`.trim()}
          </h3>
          <p className=" sm:flex mt-1 sm:gap-[14px] mb-1 flex-wrap">
            <span>Id: #Brand0123</span>{" "}
            <span>{formatJoinedDate(userDetails.createdAt)}</span>
          </p>
          <p className="">Last login: 8 days ago</p>
        </div>

        <FaRegEdit
          onClick={handleNavigate}
          className="text-[18px] sm:text-[20px] 2xl:text-[20px] text-[#666666] hover:text-black cursor-pointer"
        />
      </div>
      <div className="sm:pl-5 pl-2 py-2 pr-2 border-y mt-4 border-[#D8D9D4]">
        {[
          {
            label: "Mobile No.",
            value: userDetails.mobileNumber ? userDetails.mobileNumber : "N/A",
          },
          {
            label: "Email Id",
            value: userDetails.email ? userDetails.email : "N/A",
          },
          {
            label: "Gender",
            value: userDetails.gender ? userDetails.gender : "N/A",
          },
          { label: "Birth Date", value: "N/A" },
          {
            label: "Nationality",
            value: userDetails.nationality ? userDetails.nationality : "N/A",
          },
          {
            label: "Designation",
            value: userDetails?.designation || "N/A",
          },
        ].map((info, index) => (
          <div key={index} className="flex items-start  py-2">
            <span className="w-[120px] text-[#0E0E0E] font-semibold text-[12px] sm:text-[14px] 2xl:text-[16px]">
              {info.label}
            </span>
            <span className="ml-2 text-[12px] flex md:w-[200px] items-start sm:text-[14px] 2xl:text-[16px] text-[#666666] font-normal">
              {info.value}
            </span>
          </div>
        ))}
      </div>

      {(userDetails?.company ||
        userDetails?.companyName ||
        userDetails?.brandName ||
        userDetails?.website ||
        userDetails?.companyWebsite ||
        userDetails?.gst_number ||
        userDetails?.gstNo) && (
        <div className="sm:pl-5 pl-2 py-2 border-b border-[#D8D9D4]">
          {[
            {
              label:
                userDetails?.userTypeString == "Brand"
                  ? "Brand Name"
                  : "Company Name",
              value:
                userDetails?.companyName ||
                userDetails?.company ||
                userDetails?.brandName ||
                "N/A",
            },
            {
              label: "Website",
              value:
                userDetails?.website || userDetails?.companyWebsite || "N/A",
            },
            {
              label: "GST No.",
              value: userDetails?.gst_number || userDetails?.gstNo || "N/A",
            },
          ].map((info, index) => (
            <div key={index} className="flex items-start py-2">
              <span className="w-[120px] whitespace-nowrap text-[#0E0E0E] font-semibold text-[12px] sm:text-[14px] 2xl:text-[16px]">
                {info.label}
              </span>
              <span
                className={`ml-2 text-[12px] md:w-[200px] flex items-start sm:text-[14px] 2xl:text-[16px] text-[#666666] ${
                  info.label == "Website" &&
                  "text-[#6E94FF] cursor-pointer hover:text-blue-600 hover:underline"
                } font-normal`}
              >
                {info.value}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="sm:pl-5 pl-2 py-2  border-b border-[#D8D9D4]">
        <div className="py-2 flex">
          <span className="w-[120px] whitespace-nowrap text-[#0E0E0E] font-semibold text-[12px] sm:text-[14px] 2xl:text-[16px]">
            Categories
          </span>
          <div className="flex gap-1 sm:ml-1 ml-2 flex-wrap">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-transparent border-[#0E0E0E] border text-[#0E0E0E] text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal px-2 py-[1px] rounded-full"
                >
                  {category.title}
                </span>
              ))
            ) : (
              <span className="bg-transparent border-[#0E0E0E] border text-[#0E0E0E] text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal px-2 py-[1px] rounded-full">
                N/A
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="sm:pl-5 pl-2 pt-2">
        <div className="py-2 flex">
          <span className="w-[120px] text-[#0E0E0E] font-semibold text-[12px] sm:text-[14px] 2xl:text-[16px]">
            Address
          </span>
          <span
            className={`ml-2 text-[12px] md:max-w-[250px] flex items-start sm:text-[14px] 2xl:text-[16px] text-[#666666] 
              } font-normal`}
          >
            {userDetails?.address || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
