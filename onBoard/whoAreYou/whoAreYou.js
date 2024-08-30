import React from "react";
import PrimaryButton from "@/src/components/reuseable/primaryButton";
import BackBtn from "../whoAreYou/BackBtn";
import InputField from "@/src/components/reuseable/textField";
import useUserTypeSelection from "@/src/hooks/onboardHooks/useUserTypeSelection";
import useFetchUserTypes from "@/src/hooks/onboardHooks/useFetchUserTypes";

const WhoAreYou = ({ onUserTypeSelect }) => {
  const {
    selectedUserType,
    handleSelectUserType,
    handleContinue,
    name,
    isNameValid,
    isLoading: isContinuing,
    errorMessage,
    validateName,
  } = useUserTypeSelection(onUserTypeSelect);

  const { userTypes, isLoading, error } = useFetchUserTypes();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && isNameValid && selectedUserType.name) {
      handleContinue();
    }
  };

  return (
    <div className="w-full h-full mb-5">
      <div className="mt-5">
        <BackBtn value={"Back"} />
      </div>
      <div className="flex justify-center mt-5 sm:mt-5 2xl:mt-10 2xl:items-start w-full h-full px-2 md:px-12">
        <div className="w-full sm:max-w-md">
          <h2 className="lg:text-[36px] sm:text-[30px] text-[26px] whitespace-nowrap font-bold text-center text-[#525252]">
            How should we call you?
          </h2>
          <p className="text-center sm:text-lg text-base 2xl:text-xl text-[#666666] mb-6 -mt-[2px]">
            Enter Your Name Below
          </p>
          <div className="my-4 sm:px-2">
            <InputField
              label="Name"
              placeholder="Enter name"
              required
              value={name}
              validationType="name"
              validationFunc={validateName}
              errorText={errorMessage}
              inputProps={{
                inputMode: "text",
                maxLength: 30,
              }}
              onChange={(e) => validateName(e.target.value)}
              onBlur={(e) => validateName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <h2 className="lg:text-[36px] sm:text-[30px] text-[26px] whitespace-nowrap font-bold text-center text-[#525252] sm:px-2">
            What kind of user you are?
          </h2>
          <p className="text-center sm:text-lg text-base 2xl:text-xl text-[#666666] sm:mb-8 mb-6 -mt-[2px]">
            Choose your options below
          </p>
          {isLoading ? (
            <p>Loading user types...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <div className="grid sm:px-2 lg:grid-cols-3 grid-cols-2 gap-3 mb-8 justify-center">
              {userTypes.map((type) => (
                <button
                  key={type._id}
                  className={`rounded-full 2xl:text-lg h-[52px] flex items-center justify-center text-center text-sm sm:text-base font-bold ${
                    selectedUserType.name === type.name
                      ? "gradient-bg text-white"
                      : "bg-white text-[#0E0E0E] border border-[#0E0E0E]"
                  }`}
                  onClick={() => handleSelectUserType(type.name, type._id)}
                >
                  {type.name}
                </button>
              ))}
            </div>
          )}

          <PrimaryButton
            onClick={handleContinue}
            className="w-full py-3 sm:text-lg text-base font-extrabold text-white"
            isLoading={isContinuing}
            disabled={!isNameValid || !selectedUserType.name}
          >
            Continue
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default WhoAreYou;
