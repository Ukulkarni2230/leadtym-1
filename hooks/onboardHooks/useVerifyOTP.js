import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setUserDetails } from "@/src/Redux/user/userReducer";
import { encrypt } from "@/src/utils/crypto";
import { Message } from "@/src/components/reuseable/ToastNotification";
import useApi from "@/src/Apicalls/apiCalls";
import useFetchUserDetails from "../user-service/useFetchUserDetails";
import { useUser } from "../user-service/useUser";
import { getFcmToken } from "@/firebase";
import { fetchWallet } from "@/src/Redux/wallet/walletSlice";
import { fetchEarnings } from "@/src/Redux/wallet/earningsSlice";
import { fetchExpenses } from "@/src/Redux/wallet/expensesSlice";
const userTypeMapping = {
  Brand: 1,
  Agency: 2,
  Affiliate: 3,
  Influencer: 4,
  Individual: 5,
};
const useVerifyOTP = (origin, isOtpValid) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { postApiCall } = useApi();
  const { userDetails } = useUser();
  const { updateUserDetails } = useFetchUserDetails();
  console.log(userDetails, "userDetails");

  const handleVerifyOTP = async (mobileNumber, otp) => {
    if (!isOtpValid || isLoading) return; // Prevent multiple calls

    setIsLoading(true);

    // Get the FCM token
    const fcmToken = await getFcmToken();
    console.log(fcmToken, "fcmToken");
    const payload = {
      mobile_number: mobileNumber,
      otp: otp,
      fcmToken: fcmToken,
    };

    try {
      let endpoint = "verify-otp";
      if (origin === "login") {
        endpoint = "login";
      }

      const response = await postApiCall(endpoint, payload);

      if (response.status === 200) {
        Message.success(response.message);

        if (origin === "login") {
          const data = response.data;

          const user = {
            userType: userTypeMapping[data.userDetails.user_type],
            isEmailVerified: data.isEmailVerified,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            lastLogin: data.lastLogin,
            userEligible: true,
            dynamicRoute: "dashboard",
            token: data.token,
            name: data.name,
            mobileNumber: data.mobile_number,
            userTypeString: data.userDetails.user_type,
            status: data.status,
            userApproval: data.userDetails.status,
            userId: data._id,
            userTypeId: data.userDetails.user_type_id,
            groupId: data.userDetails.group_id,
            accountNumber: data.userDetails.account_number,
            balance: data.userDetails.balance,
            referral_code: data.referral_code,
          };
          // Dispatch the user details to Redux store
          dispatch(setUserDetails(user));
          dispatch(fetchWallet());
          dispatch(fetchEarnings());
          dispatch(fetchExpenses());

          // Set user details in cookie for middleware
          Cookies.set("userDetails", JSON.stringify(user), {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            path: "/",
          });

          // Set token in cookie
          Cookies.set("token", user.token, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            path: "/",
          });

          // Redirect to the user-specific dashboard
          const userTypeMap = {
            1: "brand",
            2: "agency",
            3: "affiliate",
            4: "influencer",
            5: "individual",
          };
          const userTypePath = userTypeMap[user.userType] || "dashboard";
          console.log(`/${userTypePath}/dashboard`);
          router.push(`/${userTypePath}/dashboard`);

          updateUserDetails(data._id, data.token);
        } else {
          const nextStep = "/who-are-you";
          const encryptedStep = encrypt(nextStep);
          Cookies.set("onboard-step", encryptedStep, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            path: "/",
          });
          router.push(nextStep);
        }
      } else {
        Message.error(`Failed to verify OTP. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error); // Debug the error
      Message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleVerifyOTP };
};

export default useVerifyOTP;
