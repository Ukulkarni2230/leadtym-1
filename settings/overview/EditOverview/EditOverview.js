"use client";
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im"; // Spinner icon for loading
import DetailsForm from "./DetailsForm";
import useVisibility from "@/src/hooks/user-service/useVisibility";
import useFetchAvatars from "@/src/hooks/user-service/useFetchAvatars";
import { useUser } from "@/src/hooks/user-service/useUser";
import useUploadImage from "@/src/hooks/user-service/useUploadImage";

const EditOverview = () => {
  const { userDetails } = useUser();
  const [logos, setLogos] = useState(
    userDetails?.picture
      ? [{ url: userDetails?.picture, id: new Date().getTime() }]
      : []
  ); // Store multiple logo files
  const [selectedAvatar, setSelectedAvatar] = useState(
    userDetails?.avatar || null
  ); // Selected avatar state
  const showForBrand = useVisibility(["brand"]);
  const showForAgencyOrAffiliate = useVisibility(["agency", "affiliate"]);
  const showForInfluencer = useVisibility(["influencer"]);
  const showForIndividual = useVisibility(["individual"]);

  const { avatars, loading: avatarsLoading } = useFetchAvatars();
  const { uploading, uploadedImage, uploadImage, deleteImage } =
    useUploadImage();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const handleRemoveLogo = () => {
    if (logos.length > 0) {
      deleteImage(logos[0].url);
      setLogos([]); // Remove the logo
    }
  };

  const getUploadMessage = () => {
    if (showForBrand) return "Upload Your Brand Logo";
    if (showForAgencyOrAffiliate) return "Upload Your Logo";
    if (showForInfluencer) return "Upload Your Profile Picture";
    return "Upload Your Picture";
  };

  const toggleAvatarSelection = (avatarUrl) => {
    setSelectedAvatar((prevSelectedAvatar) =>
      prevSelectedAvatar === avatarUrl ? prevSelectedAvatar : avatarUrl
    );
  };

  useEffect(() => {
    if (avatars && avatars.length > 0 && !selectedAvatar) {
      setSelectedAvatar(avatars[0].url);
    }
  }, [avatars, selectedAvatar]);

  useEffect(() => {
    if (uploadedImage) {
      setLogos([{ url: uploadedImage, id: new Date().getTime() }]);
    }
  }, [uploadedImage]);

  return (
    <div className="p-2 sm:p-6">
      <div className="bg-white shadow-lg rounded-md sm:p-4 p-2 md:p-6">
        {!showForIndividual && logos.length === 0 && (
          <div>
            <p className="text-[#000000DE] text-[14px] sm:text-[16px] 2xl:text-[18px] font-semibold">
              {getUploadMessage()}
            </p>
            <div className="flex flex-wrap items-center my-5">
              <div className="flex flex-wrap items-center justify-evenly sm:space-x-4 space-x-1 space-y-2">
                <label
                  htmlFor="upload-input"
                  className="relative cursor-pointer"
                >
                  <input
                    id="upload-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="h-20 w-20 md:h-[118px] md:w-[118px] hover:border-black border-dashed border rounded-full border-[#B1BFD0] flex items-center justify-center text-lg">
                    <img
                      src="/assets/kyc.svg"
                      width={60}
                      height={60}
                      alt="upload doc"
                    />
                  </div>
                </label>
                {uploading && (
                  <ImSpinner2 className="animate-spin ml-2 text-2xl" />
                )}
              </div>
              <div className="md:ml-4 flex md:block justify-center ml-2">
                <div>
                  <p className="text-[#132A00] text-[10px] sm:text-[12px] 2xl:text-[14px]">
                    Drop your image here, or
                  </p>
                  <p className="text-[#969DB2] text-[8px] 2xl:text-[10px]">
                    Supports: PNG, JPG, JPEG, WEBP
                  </p>
                  <button
                    className="text-purple-600 roboto text-[12px] sm:text-[13px] 2xl:text-[15px] font-normal"
                    onClick={() =>
                      document.getElementById("upload-input").click()
                    }
                  >
                    UPLOAD
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {!showForIndividual &&
          logos.map((logo) => (
            <div
              key={logo.id}
              className="relative group mb-5 h-20 w-20 md:h-[120px] md:w-[120px]"
            >
              <img
                src={logo.url}
                alt="Uploaded logo"
                className="h-20 w-20 md:h-[120px] md:w-[120px] rounded-full border-2 border-transparent group-hover:border-2 group-hover:border-[#4172AC] box-border"
                style={{ transition: "border 0.3s ease-in-out" }}
              />
              <button
                className="absolute top-0 right-0 md:top-1 md:right-[2px] gradient-bg md:h-[28px] md:w-[28px] h-[24px] w-[24px] rounded-full hidden group-hover:block"
                onClick={handleRemoveLogo}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <FaTrash className="text-white md:text-[15px] text-[12px] hover:text-gray-100 flex justify-center mx-auto" />
              </button>
            </div>
          ))}
        {!showForInfluencer && (
          <div>
            <p className="text-[#000000DE] text-[14px] sm:text-[16px] 2xl:text-[18px] font-semibold">
              Select your avatar you want to set
            </p>
            <div className="flex space-x-2 items-center sm:space-x-4 flex-wrap justify-evenly my-5 sm:justify-start">
              {avatarsLoading ? (
                <ImSpinner2 className="animate-spin ml-2 text-xl" />
              ) : (
                avatars?.map((avatar) => (
                  <img
                    key={avatar._id}
                    src={avatar.url}
                    alt={avatar.name}
                    className={`h-20 w-20 md:h-[120px] md:w-[120px] rounded-full cursor-pointer transition duration-300 ${
                      selectedAvatar === avatar.url
                        ? "border-4 border-[#5E17EB]"
                        : "border-2 border-transparent hover:border-2 hover:border-[#5E17EB]"
                    }`}
                    onClick={() => toggleAvatarSelection(avatar.url)}
                  />
                ))
              )}
            </div>
          </div>
        )}
        <DetailsForm
          logo={logos[0]?.url || ""}
          selectedAvatar={selectedAvatar}
          userId={userDetails.userId}
        />
      </div>
    </div>
  );
};

export default EditOverview;
