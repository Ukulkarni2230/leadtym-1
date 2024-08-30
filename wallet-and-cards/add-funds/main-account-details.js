import React, { useState } from "react";
import FundsCalculationPopup from "./models/FundsCalculationPopup";

function MainAccountDetails() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="bg-white border-[1px] border-[#D9D9D9]  mb-4 sm:mb-0 flex flex-col justify-between rounded-md w-full sm:p-4 p-2">
        <div className="flex flex-col">
          <div className="flex justify-between leading-6 font-bold sm:text-lg text-base 2xl:text-xl items-center">
            <h2 className="text-heading-main ">Main Account</h2>
            <h2 className="text-heading-main text-[#0E0E0E] text-base sm:text-lg 2xl:text-xl font-bold">
              Total Funds
            </h2>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <div className="text-sm sm:text-base 2xl:text-lg">
              <h2 className="text-heading-sub leading-6 font-semibold">
                Wallet Account
              </h2>
              <h2 className="text-heading-sub font-normal">255-569-943-3392</h2>
            </div>
            <h2 className="text-heading-main leading-6 font-bold text-[22px] sm:text-2xl 2xl:text-[26px]">
              ₹ 1,00,000.00
            </h2>
          </div>
          <div className="">
            <p
              onClick={handleClickOpen}
              className="text-link cursor-pointer text-xs sm:text-sm 2xl:text-base my-4 leading-4 font-medium hover:underline"
            >
              See how this is calculated
            </p>
          </div>
        </div>

        <div className="sm:flex inline-block items-center justify-between">
          <div className="flex flex-row gap-x-2">
            <div className="flex items-center flex-row gap-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="5.5"
                  fill="#FFFBDB"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="5.5"
                  stroke="#EBC917"
                />
                <path
                  d="M16.3359 11V21.6688"
                  stroke="#EBC917"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-xs font-bold sm:text-sm 2xl:text-base">
                  ₹ 50K
                </span>
                <p className="sm:text-xs font-normal text-heading-sub text-[10px] 2xl:text-sm">
                  Pending{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-row gap-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="5.5"
                  fill="#E7DBFF"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="5.5"
                  stroke="#5E17EB"
                />
                <path
                  d="M16.3359 11V21.6688"
                  stroke="#5E17EB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.6688 16.3359L16.3344 21.6703L11 16.3359"
                  stroke="#5E17EB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-xs font-bold sm:text-sm 2xl:text-base">
                  ₹ 50K
                </span>
                <p className="sm:text-xs font-normal text-heading-sub text-[10px] 2xl:text-sm">
                  Available
                </p>
              </div>
            </div>
            <div className="flex items-center flex-row gap-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="-0.5"
                  width="31"
                  height="31"
                  rx="5.5"
                  transform="matrix(1 0 0 -1 0 31)"
                  fill="#FFDFD2"
                />
                <rect
                  x="0.5"
                  y="-0.5"
                  width="31"
                  height="31"
                  rx="5.5"
                  transform="matrix(1 0 0 -1 0 31)"
                  stroke="#DA5B27"
                />
                <path
                  d="M16.3359 21V10.3312"
                  stroke="#DA5B27"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.6688 15.6641L16.3344 10.3297L11 15.6641"
                  stroke="#DA5B27"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-xs font-bold sm:text-sm 2xl:text-base">
                  ₹ 8.45K
                </span>
                <p className="sm:text-xs font-normal text-heading-sub text-[10px] 2xl:text-sm">
                  Total Withdrawal
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/4 mt-4 sm:mt-0 flex items-end justify-end">
            <button className="flex-1 gradient-bg border sm:max-w-lg rounded-full border-none text-white leading-5 p-2 px-4 py-3">
              Withdraw Fund
            </button>
          </div>
        </div>
      </div>
      <FundsCalculationPopup open={open} handleClose={handleClose} />
    </>
  );
}

export default MainAccountDetails;
