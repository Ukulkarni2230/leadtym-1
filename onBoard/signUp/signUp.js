import React from "react";
import { PiWhatsappLogoFill } from "react-icons/pi";
import InputField from "@/src/components/reuseable/textField";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import PrimaryButton from "@/src/components/reuseable/primaryButton";
import GoogleButton from "@/src/components/reuseable/googleLogin";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import useSignUp from "@/src/hooks/onboardHooks/useSignUp";
import { setOrigin, setStep } from "@/src/Redux/onboarding/onboardingSlice";
import { setUserDetails } from "@/src/Redux/user/userReducer";
import BackBtn from "../whoAreYou/BackBtn";
import Link from "next/link";
import { Message } from "@/src/components/reuseable/ToastNotification";

const SignUp = () => {
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  const [updatesOnWhatsApp, setUpdatesOnWhatsApp] = React.useState(false);
  const [isMobileValid, setIsMobileValid] = React.useState(false);
  const [mobileNumber, setMobileNumberState] = React.useState("");
  const { isLoading, handleSignUp } = useSignUp(isLogin, isMobileValid);
  const dispatch = useDispatch();
  const router = useRouter();

  const validateMobileNumber = (value) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    const isValid = mobileRegex.test(value);
    setIsMobileValid(isValid);
    setMobileNumberState(value);
    return isValid;
  };

  const handleButtonClick = async () => {
    if (!isMobileValid) return;

    dispatch(setOrigin(isLogin ? "login" : "signup"));
    dispatch(setStep("/verify-otp"));
    dispatch(setUserDetails({ mobileNumber }));
    await handleSignUp(mobileNumber);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  const navigateToSignUp = () => {
    router.push("/signup");
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="w-full h-full ">
      <div className="mt-5">
        <BackBtn value={"Back To The Website"} />
      </div>
      <div className="flex justify-center mt-5 sm:mt-5 2xl:mt-10 2xl:items-start w-full h-full px-2 md:px-12  ">
        <div className="w-full sm:max-w-md">
          <h2 className="sm:text-[46px] text-[30px] whitespace-nowrap font-bold text-center mb-2 text-[#525252]">
            {isLogin ? "Login to your Account" : "Join Leadtym Today!"}
          </h2>
          <p className="text-center font-bold text-sm sm:text-base 2xl:text-lg text-[#525252] sm:px-4 mb-6">
            {isLogin
              ? "Welcome Back! Access your personalized dashboard and continue your journey with Leadtym."
              : "Unlock the power of influencer and affiliate marketing. Sign up now and see the difference."}
          </p>
          <div className="my-4 px-1">
            <InputField
              label="Mobile Number"
              placeholder="9456784567"
              required
              inputProps={{
                inputMode: "numeric",
                maxLength: 10,
              }}
              validationType="numeric"
              validationFunc={validateMobileNumber}
              errorText="Invalid Mobile Number."
              onKeyDown={handleKeyDown}
            />
          </div>
          {!isLogin && (
            <div className="flex items-center mb-6 px-1">
              <CustomCheckbox
                label="Get account updates on WhatsApp"
                id={"whatsapp-checked"}
                className={"!w-[20px] !h-[20px] !rounded-[4px] "}
                checked={updatesOnWhatsApp}
                onCheckedChange={setUpdatesOnWhatsApp}
                required={false}
                errorText=""
              />
              <PiWhatsappLogoFill className="text-green-500 ml-2 shadow-md" />
            </div>
          )}
          <PrimaryButton
            onClick={handleButtonClick}
            isLoading={isLoading}
            disabled={!isMobileValid}
            className="w-full py-3 sm:text-lg text-base font-extrabold text-white"
          >
            Send OTP
          </PrimaryButton>

          {isLogin ? (
            <>
              <div className="flex items-center justify-center my-8">
                <div className="bg-[#DDDDDD]  h-px flex-grow"></div>
                <span className="flex-shrink font-bold sm:text-[12px] text-[10px] px-4 text-[#A1A1A1]">
                  or continue with
                </span>
                <div className="bg-[#DDDDDD] h-px flex-grow"></div>
              </div>
              <p className="text-center text-gray-600 mb-8">
                {isLogin ? (
                  <>
                    <span className="text-[#0E0E0E] sm:text-base text-sm 2xl:text-lg font-bold">
                      Don't have an account?{" "}
                    </span>
                    <button
                      onClick={navigateToSignUp}
                      className="text-[#5038ED] hover:underline sm:text-base text-sm 2xl:text-lg font-bold"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-[#0E0E0E] sm:text-base text-sm 2xl:text-lg font-bold">
                      Already a user?{" "}
                    </span>
                    <button
                      onClick={navigateToLogin}
                      className="text-[#5038ED] hover:underline sm:text-base text-sm 2xl:text-lg font-bold"
                    >
                      Sign In
                    </button>
                  </>
                )}
              </p>
              <GoogleButton>Continue with Google</GoogleButton>
            </>
          ) : (
            <p className="text-center text-gray-600 mt-7">
              {isLogin ? (
                <>
                  <span className="text-[#0E0E0E] sm:text-base text-sm 2xl:text-lg font-bold">
                    Don't have an account?{" "}
                  </span>
                  <button
                    onClick={navigateToSignUp}
                    className="text-[#5038ED] hover:underline sm:text-base text-sm 2xl:text-lg font-bold"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <span className="text-[#0E0E0E] sm:text-base text-sm 2xl:text-lg font-bold">
                    Already a user?{" "}
                  </span>
                  <button
                    onClick={navigateToLogin}
                    className="text-[#5038ED] hover:underline sm:text-base text-sm 2xl:text-lg font-bold"
                  >
                    Sign In
                  </button>
                </>
              )}
            </p>
          )}
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

export default SignUp;
