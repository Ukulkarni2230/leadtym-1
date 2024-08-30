import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { encrypt } from "@/src/utils/crypto";
import { Message } from "@/src/components/reuseable/ToastNotification";
import useApi from "@/src/Apicalls/apiCalls";


const useSignUp = (isLogin, isMobileValid) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { postApiCall } = useApi();

  const handleSignUp = async (mobileNumber) => {
    if (!isMobileValid || isLoading) return; // Prevent multiple calls

    setIsLoading(true);

    const payload = {
      mobile_number: mobileNumber,
      type: isLogin ? "login" : "signup",
    };

    try {
      const response = await postApiCall("send-otp", payload);
      

      if (response.status === 200) {
        Message.success(response.message);

        // Encrypt and set the cookie for onboarding step
        const nextStep = "/verify-otp";
        const encryptedStep = encrypt(nextStep);
        Cookies.set("onboard-step", encryptedStep, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          path: "/",
        });

        router.push(`${nextStep}?from=${isLogin ? "login" : "signup"}`);
      } else {
        Message.error(`Failed to send OTP. Status: ${response.status}`);
      }
    } catch (error) {
      Message.error(error.message);
     
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSignUp };
};

export default useSignUp;
