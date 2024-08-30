import { FaUserFriends } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { LuBadgePercent } from "react-icons/lu";

function HowEverythingWorks() {
  return (
    <div className="rounded-md mt-6 w-full shadow   lg:h-[317px] justify-between overflow-hidden md:items-start items-start  border-[1px] border-[#D8D9D4] bg-white flex flex-col-reverse md:flex-row ">
      <div className="w-full p-4 flex flex-col">
        <p className="flex text-base sm:text-lg 2xl:text-xl  font-bold text-[#101018]">
          How Everything Work
        </p>

        <div className="w-full items-center mt-7 justify-center inline-block">
          <div className="w-full hidden md:flex">
            <ol className="text-center lg:ml-28 w-full flex justify-center items-center mb-5 md:mb-2 ">
              <li className="flex w-full md:w-[340px] items-center after:content-[''] after:w-full after:h-0 after:border-t-2 after:border-dashed border-opacity-10 after:border-[#6E94FF] after:inline-block dark:after:border-gray-700">
                <div className="flex items-center justify-center w-10 h-10 bg-[#6E94FF] shadow-lg shadow-[#4b5162] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <FaUserFriends size={24} className=" text-white" />
                </div>
              </li>
              <li className="flex w-full md:w-[320px] items-center after:content-[''] after:w-full after:h-0 after:border-t-2 after:border-dashed after:border-[#6E94FF] after:inline-block dark:after:border-gray-700">
                <div className="flex items-center justify-center text-center w-10 h-10 shadow-lg shadow-gray-600 bg-[#A717EB] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <FaGift size={24} className=" text-white" />
                </div>
              </li>
              <li className="flex w-full md:w-[260px] items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-[#17C928] shadow-lg shadow-[#455847] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <LuBadgePercent size={28} className=" text-white" />
                </div>
              </li>
            </ol>
          </div>
          {/* data */}
          <div className="w-full space-y-5 md:space-y-0 mt-4 lg:mt-0 lg:flex inline-block items-center justify-start md:px-10">
            <div className="w-full 2xl:px-20 md:px-2 md:-ml-4  mb-4 lg:mb-0 items-center  text-center justify-center lg:w-1/3">
              <div className="flex mx-auto mb-3 md:hidden items-center justify-center w-10 h-10 bg-[#6E94FF] shadow-lg shadow-[#4b5162] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <FaUserFriends size={24} className="" />
              </div>
              <p className="font-normal text-[12px] sm:text-sm 2xl:text-base">
                Invite Your Friends{" "}
              </p>
              <p className="text-[12px] sm:text-sm 2xl:text-base font-light leading-5  text-[#35353A]">
                Share link with your friends and let them create new account
              </p>
            </div>
            <div className="inline-block w-full items-center text-center justify-center md:ml-0 md:px-5 lg:w-[300px]">
              <div className="flex mx-auto mb-3 md:hidden items-center justify-center text-center w-10 h-10 shadow-lg shadow-gray-600 bg-[#A717EB] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <FaGift size={24} />
              </div>
              <p className="font-normal text-[12px] sm:text-sm 2xl:text-base">
                Invite Your Friends{" "}
              </p>
              <p className="text-[12px] sm:text-sm 2xl:text-base font-light leading-5  text-[#35353A]">
                Share link with your friends and let them create new account
              </p>
            </div>

            <div className="inline-block mb-3 w-full items-center text-center justify-center ml-0 lg:ml-10 md:px-5  lg:w-[300px]">
              <div className="flex md:hidden mx-auto items-center justify-center w-10 h-10 bg-[#17C928] shadow-lg shadow-[#455847] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <LuBadgePercent size={28} className="" />
              </div>
              <p className="font-normal text-[12px] sm:text-sm 2xl:text-base">
                Invite Your Friends{" "}
              </p>
              <p className="text-[12px] sm:text-sm 2xl:text-base font-light leading-5  text-[#35353A]">
                Share link with your friends and let them create new account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowEverythingWorks;
