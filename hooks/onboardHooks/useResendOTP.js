import { useState, useCallback } from "react";
import useCountdownTimer from "./useCountdownTimer";
import { Message } from "@/src/components/reuseable/ToastNotification";
import useApi from "@/src/Apicalls/apiCalls";

const useResendOTP = (initialTime) => {
  const [isResending, setIsResending] = useState(false);
  const { countdown, canResend, resetCountdown } =
    useCountdownTimer(initialTime);
  const { postApiCall } = useApi();

  const handleResendOTP = useCallback(
    async (mobileNumber, type) => {
      if (!canResend || isResending) return;

      setIsResending(true);

      try {
        const payload = { mobile_number: mobileNumber, type: type };
        const response = await postApiCall("send-otp", payload);

        if (response.status === 200) {
          Message.success(response.message);
          resetCountdown();
        } else {
          Message.error(`Failed to resend OTP. Status: ${response.status}`);
        }
      } catch (error) {
        Message.error(error.message);
      } finally {
        setIsResending(false);
      }
    },
    [canResend, isResending, resetCountdown]
  );

  return { countdown, canResend, handleResendOTP, isResending };
};

export default useResendOTP;
