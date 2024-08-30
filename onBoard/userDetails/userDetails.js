import React, { useState } from "react";
import BackBtn from "../whoAreYou/BackBtn";
import PrimaryButton from "@/src/components/reuseable/primaryButton";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/hooks/user-service/useUser";
import BrandUser from "./users/BrandUser";
import AdvertiserPublisherUser from "./users/AdvertiserPublisherUser";
import InfluencerUser from "./users/InfluencerUser";
import BrandUser2 from "./users/BrandUser2";
import useUserDetailsNavigation from "@/src/hooks/onboardHooks/useUserDetailsNavigation";
import { Message } from "@/src/components/reuseable/ToastNotification";
import IndividualUser from "./users/IndividualUser";

const userComponents = {
  1: BrandUser,
  2: AdvertiserPublisherUser,
  3: AdvertiserPublisherUser,
  4: InfluencerUser,
  5: IndividualUser,
};

const UserDetails = () => {
  const { handleUserSubmit, isLoading, setIsLoading } =
    useUserDetailsNavigation();
  const router = useRouter();
  const user = useUser();
  const [isFormValid, setIsFormValid] = useState(false);
  const [brandName, setBrandName] = useState(user.userDetails.brandName || "");
  const [gstNumber, setGstNumber] = useState(user.userDetails.gst_number || "");
  const [designation, setDesignation] = useState(
    user.userDetails.designation || ""
  );
  const [websiteURL, setWebsiteURL] = useState(
    user.userDetails.websiteURL || ""
  );
  const [categories, setCategories] = useState(
    user.userDetails.categories || []
  );
  const [about, setAbout] = useState(user.userDetails.about || {});
  const [company, setCompanyName] = useState(user.userDetails.company || "");
  const [dateOfBirth, setDateOfBirth] = useState(
    user.userDetails.dateOfBirth || ""
  );
  const [gender, setGender] = useState(user.userDetails.gender || "");
  const [individualCategories, setindividualCategories] = useState(
    user.userDetails.individualCategories || []
  );

  const UserComponent = userComponents[user.userDetails.userType];

  const handleFormValidation = (isValid) => {
    setIsFormValid(isValid);
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;
    setIsLoading(true);
    try {
      let payload;
      const userType = user.userDetails.userType;
      if (userType === 4) {
        payload = {
          user_id: user.userDetails.userId,
          about: JSON.stringify(about),
        };
      } else if (userType === 2 || userType === 3) {
        payload = {
          user_id: user.userDetails.userId,
          company,
          website: websiteURL,
          gst_number: gstNumber,
        };
      } else if (userType === 5) {
        payload = {
          user_id: user.userDetails.userId,
          dateOfBirth,
          gender,
          category: JSON.stringify(individualCategories),
        };
      } else {
        payload = {
          user_id: user.userDetails.userId,
          brandName,
          designation,
          category: JSON.stringify(categories),
          website: websiteURL,
          gst_number: gstNumber,
        };
      }
      await handleUserSubmit(payload);

      router.push("/next-step"); // Adjust the route as needed
    } catch (error) {
      Message.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="w-full h-full">
      <div className="mt-5">
        <BackBtn previousStep="/who-are-you" currentStep="/info" />
      </div>
      <div className="flex justify-center mt-5 sm:mt-5 2xl:mt-10 2xl:items-start  w-full h-full px-2 md:px-12">
        <div className="w-full sm:max-w-md">
          <h2 className="lg:text-[36px] sm:text-[30px] text-[26px] whitespace-nowrap font-bold text-start text-[#525252]">
            Share info about you
          </h2>
          <p className="text-[#666666] text-base sm:text-lg 2xl:text-xl -mt-[2px] sm:-mt-[4px]">
            Fill the basic info about yourself
          </p>
          <div className="my-4">
            {user.userDetails.userType === 1 ? (
              <>
                <BrandUser
                  onFormValidation={handleFormValidation}
                  user={user}
                  setBrandName={setBrandName}
                  setGstNumber={setGstNumber}
                />
                <BrandUser2
                  onFormValidation={handleFormValidation}
                  user={user}
                  setDesignation={setDesignation}
                  setWebsiteURL={setWebsiteURL}
                  setCategories={setCategories}
                />
                <PrimaryButton
                  onClick={handleSubmit}
                  className="w-full py-3 sm:text-lg text-base font-extrabold text-white mt-6"
                  isLoading={isLoading}
                  disabled={!isFormValid || isLoading}
                >
                  Submit
                </PrimaryButton>
              </>
            ) : (
              <>
                {UserComponent && (
                  <UserComponent
                    onFormValidation={handleFormValidation}
                    user={user}
                    setCompanyName={setCompanyName} // Assuming companyName is analogous to brandName for Advertiser/affiliate
                    setWebsiteUrl={setWebsiteURL}
                    setGstNumber={setGstNumber}
                    setAbout={setAbout}
                    setDateOfBirth={setDateOfBirth}
                    setGender={setGender}
                    setCategories={setindividualCategories}
                  />
                )}
                <PrimaryButton
                  onClick={handleSubmit}
                  className="w-full py-3 sm:text-lg text-base font-extrabold text-white mt-6"
                  isLoading={isLoading}
                  disabled={!isFormValid || isLoading}
                >
                  Continue
                </PrimaryButton>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
