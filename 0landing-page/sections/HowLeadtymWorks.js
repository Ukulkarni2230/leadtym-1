import React from "react";

const HowLeadtymWorks = () => {
  return (
    <section className="flex flex-col items-center sm:py-12 py-8">
      <h2 className="text-lg md:text-xl 2xl:text-2xl font-bold text-black dark:text-white mb-2">
        How Leadtym Works
      </h2>
      <h3 className="text-2xl text-center md:text-[46px] moreextrabold leading-tight md:leading-none text-black dark:text-white mb-4 sm:mb-8">
        Simple Setup, Seamless Collaboration,
        <br className="hidden lg:inline" /> and Powerful Analytics
      </h3>
      <div className="flex flex-col lg:flex-row items-center w-full md:mt-3">
        <div className="lg:w-auto w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src="/assets/landing/howleadtymworks.svg"
            alt="Illustration"
            className="rounded-lg w-full lg:w-auto"
          />
        </div>
        <div className="lg:w-1/2 w-full text-left lg:px-8 xl:px-14">
          <div className="lg:space-y-6 space-y-4">
            <div className="group  px-4 py-3 dark:hover:rounded-[10px] dark:rounded-none rounded-[10px]  dark:border-l-2 border border-[#000000] shadow-lg bg-white dark:border-l-[#FFFFFF2A] dark:bg-[#242424] dark:hover:border-l-[#5e17eb] transition duration-300">
              <h4 className="text-lg sm:text-xl px-2 moreextrabold text-black dark:text-white mb-1.5">
                1. Sign Up & Onboard
              </h4>
              <p className="text-black text-sm sm:text-base 2xl:text-lg dark:text-white">
                Create your account and set up your profile. It's quick and
                easy!
              </p>
            </div>
            <div className="group  px-4 py-3 dark:hover:rounded-[10px] dark:rounded-none rounded-[10px]  dark:border-l-2 border border-[#000000] shadow-lg bg-white dark:border-l-[#FFFFFF2A] dark:bg-[#242424] dark:hover:border-l-[#5e17eb] transition duration-300">
              <h4 className="text-lg sm:text-xl px-2 moreextrabold text-black dark:text-white mb-1.5">
                2. Connect & Collaborate
              </h4>
              <p className="text-black text-sm sm:text-base 2xl:text-lg dark:text-white">
                Link your platforms and start collaborating with brands,
                agencies, affiliates, and influencers.
              </p>
            </div>
            <div className="group  px-4 py-3 dark:hover:rounded-[10px] dark:rounded-none rounded-[10px]  dark:border-l-2 border border-[#000000] shadow-lg bg-white dark:border-l-[#FFFFFF2A] dark:bg-[#242424] dark:hover:border-l-[#5e17eb] transition duration-300">
              <h4 className="text-lg sm:text-xl px-2 moreextrabold text-black dark:text-white mb-1.5">
                3. Automate & Optimize
              </h4>
              <p className="text-black text-sm sm:text-base 2xl:text-lg dark:text-white">
                Use our automation tools to send personalized messages, share
                affiliate links, and manage campaigns.
              </p>
            </div>
            <div className="group  px-4 py-3 dark:hover:rounded-[10px] dark:rounded-none rounded-[10px]  dark:border-l-2 border border-[#000000] shadow-lg bg-white dark:border-l-[#FFFFFF2A] dark:bg-[#242424] dark:hover:border-l-[#5e17eb] transition duration-300">
              <h4 className="text-lg sm:text-xl px-2 moreextrabold text-black dark:text-white mb-1.5">
                4. Analyze & Improve
              </h4>
              <p className="text-black text-sm sm:text-base 2xl:text-lg dark:text-white">
                Access detailed analytics to track performance, optimize
                strategies, and maximize ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowLeadtymWorks;
