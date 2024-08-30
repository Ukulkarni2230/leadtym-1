import React, { useState } from "react";
import InputField from "@/src/components/reuseable/textField";
import PrimaryButton from "@/src/components/reuseable/primaryButton";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import useResendOTP from "@/src/hooks/onboardHooks/useResendOTP";
import useVerifyOTP from "@/src/hooks/onboardHooks/useVerifyOTP";
import BackBtn from "../whoAreYou/BackBtn";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const origin = useSelector((state) => state.onboarding.origin);
  const mobileNumber = useSelector(
    (state) => state.user.userDetails.mobileNumber
  );
  const { countdown, canResend, handleResendOTP, isResending } =
    useResendOTP(10);
  const { isLoading, handleVerifyOTP } = useVerifyOTP(origin, isOtpValid);

  const handleNumberChange = () => {
    router.push(origin === "login" ? "/login" : "/signup");
  };

  const validateOtp = (value) => {
    const isValid = value.length === 4 && /^\d{4}$/.test(value);
    setIsOtpValid(isValid);
    setOtp(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && isOtpValid) {
      handleVerifyOTP(mobileNumber, otp);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="mt-4">
        <BackBtn value={"Back To The Website"} />
      </div>
      <div className="flex justify-center mt-10 sm:mt-5 2xl:mt-10 2xl:items-start  w-full h-full px-2 md:px-12 rounded-lg">
        <div className="w-full sm:max-w-md">
          <h2 className="sm:text-[46px] text-[30px] whitespace-nowrap font-bold text-center mb-2 text-[#525252]">
            {origin === "login"
              ? "Login to your Account"
              : "Signup to your Account"}
          </h2>
          <p className="text-center font-bold text-sm sm:text-base 2xl:text-lg text-[#525252] sm:px-4 mb-2">
            {mobileNumber}{" "}
            <span
              className="text-[#5E17EB] hover:underline font-normal cursor-pointer"
              onClick={handleNumberChange}
            >
              Change
            </span>
          </p>
          <div className="w-full flex justify-center">
            <p className="text-center sm:w-[88%] w-[90%] text-[#0E0E0E] text-[14px] sm:text-[16px] 2xl:text-[18px] mb-6 font-bold">
              A 6-digit OTP has been sent to your phone number. OTP will expire
              in 5 mins.
            </p>
          </div>
          <div className="mt-4 px-1">
            <InputField
              label="Enter OTP"
              placeholder="Enter your OTP"
              required
              inputProps={{
                inputMode: "numeric",
                maxLength: 4,
              }}
              validationType="numeric"
              value={otp}
              onChange={(e) => validateOtp(e.target.value)}
              onKeyDown={handleKeyDown}
              validationFunc={(value) =>
                value.length === 4 && /^\d{4}$/.test(value)
              }
              errorText="Invalid OTP."
            />
          </div>
          <p
            className="text-[#] text-sm sm:text-base 2xl:text-base ml-1 cursor-pointer mt-0.5 mb-5 text-start"
            onClick={() => handleResendOTP(mobileNumber, origin)}
            style={{
              color: canResend ? "#0D41C9" : "#0E0E0E99",
              pointerEvents: canResend ? "auto" : "none",
            }}
          >
            {canResend
              ? "Resend OTP"
              : `Resend OTP in ${Math.floor(countdown / 60)}:${(
                  "0" +
                  (countdown % 60)
                ).slice(-2)}`}
          </p>
          <PrimaryButton
            onClick={() => handleVerifyOTP(mobileNumber, otp)}
            isLoading={isLoading}
            disabled={!isOtpValid || isLoading || isResending}
            className="w-full py-3 sm:text-lg text-base font-extrabold text-white"
          >
            {origin === "login" ? "Login" : "Submit OTP"}
          </PrimaryButton>

          <p className="text-xs sm:text-sm 2xl:text-base text-center text-[#666666] mt-6">
            By creating an account or continuing by logging in, you agree to our{" "}
            <a href="#" className="text-[#111111] font-bold hover:underline">
              Terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#111111] font-bold hover:underline">
              Privacy Policy
            </a>
          </p>
          <div className="flex justify-around mt-6 space-x-2">
            <a
              href="#"
              className="text-[#111111] sm:text-sm 2xl:text-base font-bold hover:underline text-xs"
            >
              Terms of service
            </a>
            <a
              href="#"
              className="text-[#111111] sm:text-sm 2xl:text-base font-bold hover:underline text-xs"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#111111] sm:text-sm 2xl:text-base font-bold hover:underline text-xs"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
