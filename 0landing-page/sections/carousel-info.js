import { useRouter } from "next/navigation";
import React from "react";

const CarouselInfo = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/contact-us");
  };
  return (
    <div className=" mb-8 w-full flex flex-wrap justify-between px-2 sm:px-6 lg:px-8 mx-auto">
      <div>
        <p className="text-lg mb-4 sm:text-xl 2xl:text-2xl text-black dark:text-white font-bold">
          Benefits
        </p>
        <h3 className="text-3xl md:text-[46px] moreextrabold 2xl:text-[56px] leading-tight md:leading-none text-black dark:text-white mb-4">
          Create,
          <br /> collaborate your
          <br /> work in 1 place
        </h3>
      </div>
      <div>
        <p className="text-black dark:text-white max-w-sm text-sm sm:text-base 2xl:text-lg">
          Save time and coordinate with your team and push projects forward with
          the tools you use every day – all within Leadtym.
        </p>
        <button
          onClick={navigate}
          className="gradient-bg mt-6 border border-transparent w-1/2 text-white px-6 py-3 sm:w-[165px] h-[46px] 2xl:w-[175px]  font-bold sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg  rounded-full"
        >
          Request a demo
        </button>
      </div>
    </div>
  );
};

export default CarouselInfo;
