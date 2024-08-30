import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setUserDetails } from "@/src/Redux/user/userReducer";
import { encrypt } from "@/src/utils/crypto";
import { useRouter } from "next/navigation";
import { Message } from "@/src/components/reuseable/ToastNotification";
import useApi from "@/src/Apicalls/apiCalls";
import { getFcmToken } from "@/firebase";
const userTypeMapping = {
  Brand: 1,
  Agency: 2,
  Affiliate: 3,
  Influencer: 4,
  Individual: 5,
};
const useUserTypeSelection = (onUserTypeSelect) => {
  const dispatch = useDispatch();
  const { postApiCall } = useApi();

  const router = useRouter();
  const { userDetails } = useSelector((state) => state.user);
  const [selectedUserType, setSelectedUserType] = useState({
    name: userDetails.userType ? userDetails.userTypeString : "",
    id: userDetails.userTypeId || "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const getNumber = userDetails.mobileNumber;
  const userName = userDetails.name || "";
  const [name, setName] = useState(userName);
  const [isNameValid, setIsNameValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      if (currentPath === "/who-are-you") {
        Cookies.remove("onboard-step");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (name) {
      validateName(name);
    }
  }, [name]);

  const handleSelectUserType = (name, id) => {
    setSelectedUserType({ name, id });
    onUserTypeSelect(name);
  };

  const validateName = (value) => {
    const isValid =
      value.length >= 3 &&
      /^[a-zA-Z\s]{0,30}$/.test(value) &&
      !/\s{2,}/.test(value) &&
      !/^\s/.test(value);

    setIsNameValid(isValid);
    setName(value);

    if (!isValid) {
      if (value.length < 3) {
        setErrorMessage("Name must be at least 3 characters long.");
      } else if (/\s{2,}/.test(value)) {
        setErrorMessage("Name must not contain consecutive spaces.");
      } else if (!/^[a-zA-Z\s]{0,30}$/.test(value)) {
        setErrorMessage("Name must not contain special characters.");
      } else if (/^\s/.test(value)) {
        setErrorMessage("Name must not start with a space.");
      }
    } else {
      setErrorMessage(null);
    }

    return isValid;
  };

  const handleButtonClick = async () => {
    if (!isNameValid || !selectedUserType.name) return;

    setIsLoading(true);

    // Get the FCM token
    const fcmToken = await getFcmToken();

    if (!fcmToken) {
      Message.error(
        "Failed to generate FCM token. Please check your notification settings."
      );
      setIsLoading(false);
      return;
    }

    const payload = {
      name: name,
      mobile_number: getNumber,
      user_type: selectedUserType.name,
      user_type_id: selectedUserType.id,
      fcmToken: fcmToken,
    };

    try {
      const response = await postApiCall("/register", payload);

      if (response.status == 200 || response.status == 201) {
        Message.success(response.message);

        const responseData = response.data;

        dispatch(
          setUserDetails({
            name: responseData.name,
            mobileNumber: responseData.mobile_number,
            status: responseData.status,
            userId: responseData._id,
            isEmailVerified: responseData.isEmailVerified,
            createdAt: responseData.createdAt,
            updatedAt: responseData.updatedAt,
            token: responseData.token,
            dynamicRoute: "dashboard",
            userEligible: true,
            userType: userTypeMapping[responseData.userDetails.user_type],
            userTypeString: responseData.userDetails.user_type,
            userTypeId: responseData.userDetails.user_type_id,
            groupId: responseData.userDetails.group_id,
            accountNumber: responseData.userDetails.account_number,
            balance: responseData.userDetails.balance,
            userApproval: responseData.userDetails.status,
            referral_code: responseData.referral_code,
          })
        );

        const nextStep = "/info";
        const encryptedStep = encrypt(nextStep);
        Cookies.set("onboard-step", encryptedStep, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          path: "/",
        });

        router.push(nextStep);
      } else {
        Message.error(`Failed to register user. Status: ${response.status}`);
      }
    } catch (error) {
      Message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    selectedUserType,
    handleSelectUserType,
    handleContinue: handleButtonClick,
    name,
    isNameValid,
    isLoading,
    errorMessage,
    validateName,
  };
};

export default useUserTypeSelection;
