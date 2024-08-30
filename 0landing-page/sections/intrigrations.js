import React from "react";

const Intrigration = () => {
  let borderAllowed = false;
  return (
    <div className="flex flex-col items-center  ">
      <h2 className="text-lg md:text-xl 2xl:text-2xl font-bold text-black dark:text-white mb-2">
        Integrations
      </h2>

      <h3 className="text-lg mt-3 text-center sm:text-[26px] lg:text-[46px] moreextrabold leading-tight md:leading-none text-black dark:text-white mb-4 sm:mb-8">
        Seamless Integrations with Leading Platforms
      </h3>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full md:mt-3">
        <div className="lg:w-auto w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src={"/assets/landing/int.svg"}
            alt={"benefits"}
            className={`rounded-[42px]  ${
              borderAllowed != false &&
              "border-black border dark:border-none dark:border-transparent"
            } w-full lg:w-auto`}
          />
        </div>
      </div>
    </div>
  );
};

export default Intrigration;
