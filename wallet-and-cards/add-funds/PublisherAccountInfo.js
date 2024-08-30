import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";
import FundsCalculationPopup from "./models/FundsCalculationPopup";
import WithdrawFundsModal from "./models/WithdrawFundsModal"; // Import the new WithdrawFundsModal component
import { useWithdrawFunds } from "@/src/hooks/wallet/withdraw-funds/useWithdrawFunds"; // Use the new custom hook for withdrawals
import useVisibility from "@/src/hooks/user-service/useVisibility";

import { useSelector } from "react-redux";

const PublisherAccountInfo = () => {
  const [isFundsCalculationPopupOpen, setFundsCalculationPopupOpen] =
    useState(false);
  const [isWithdrawFundModalOpen, setWithdrawFundModalOpen] = useState(false); // State for withdraw modal
  const { resetView } = useWithdrawFunds(); // Use withdraw hook for reset view
  const visible = useVisibility(["brand", "agency"]);
  const wallet = useSelector((state) => state.wallet);
  const earnings = useSelector((state) => state.earnings);

  const handleFundsCalculationPopupOpen = () => {
    setFundsCalculationPopupOpen(true);
  };

  const handleFundsCalculationPopupClose = () => {
    setFundsCalculationPopupOpen(false);
  };

  const handleWithdrawFundModalOpen = () => {
    // New handler for opening Withdraw Funds Modal
    resetView();
    setWithdrawFundModalOpen(true);
    console.log("Withdraw fund setting");
  };

  const handleWithdrawFundModalClose = () => {
    // New handler for closing Withdraw Funds Modal
    setWithdrawFundModalOpen(false);
  };

  return (
    <div className="flex-1 lg:min-h-full bg-white shadow-lg py-3 shadow-[#5E17EB26] border border-[#D8D9D4] sm:rounded-xl rounded-md sm:p-4 p-4 w-full lg:h-auto">
      <div className="flex justify-between mb-4">
        <h2 className="2xl:text-xl text-base sm:text-lg font-bold text-[#111111]">
          Main Account
        </h2>
        <p className="text-[#35353A] 2xl:text-xl text-base sm:text-lg font-bold">
          Available Funds
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="2xl:text-2xl text-xl sm:text-2xl font-bold text-[#35353A]">
            {wallet?.walletAccountNumber || "N/A"}
          </p>
          <p className="text-[#666666] sm:text-sm text-xs 2xl:text-base">
            Wallet Account:
          </p>
        </div>
        <div>
          <p className="text-[#7661F5] 2xl:text-2xl text-xl sm:text-2xl font-bold mt-1 sm:mt-0 sm:text-right">
            ₹{wallet?.availableFunds || 0}
          </p>
        </div>
      </div>

      <div
        className={`grid grid-cols-3 xl:grid-cols-4
         gap-2 mb-4`}
      >
        <div className=" ">
          <>
            <div className="flex items-center mb-1.5 ">
              <div className="w-8 h-8 rounded-md bg-[#FFFBDB] flex items-center justify-center">
                <FaRegCircle className="text-[#EBC917] text-xl" />
              </div>
              <p className="text-[#35353A] text-xs sm:text-sm 2xl:text-base ml-2">
                Pending
              </p>
            </div>

            <p className="text-[#2A2E33] flex items-center gap-2">
              <span className="text-sm sm:text-base 2xl:text-lg mt-0.5 font-bold">
                ₹{wallet?.pending}{" "}
              </span>
              <span className="text-[#27AE60] text-base">
                <FaArrowTrendUp />
              </span>
            </p>
          </>
        </div>
        <div className=" ">
          <div className="flex items-center mb-1.5">
            <div className="w-8 h-8 rounded-md bg-[#E7DBFF] flex items-center justify-center">
              <IoIosArrowRoundDown className="text-[#5E17EB] text-xl" />
            </div>
            <p className="text-[#35353A] text-xs sm:text-sm 2xl:text-base ml-2">
              Earned
            </p>
          </div>
          <p className="text-[#2A2E33] flex items-center gap-2">
            <span className="text-sm sm:text-base 2xl:text-lg mt-0.5 font-bold">
              ₹{earnings?.totalEarned || 0}{" "}
            </span>
            <span className="text-[#EB5757] text-base">
              <FaArrowTrendDown />
            </span>
          </p>
        </div>
        <div className=" ">
          <div className="flex items-center mb-1.5 ">
            <div className="w-8 h-8 rounded-md bg-[#FFDFD2] flex items-center justify-center">
              <IoIosArrowRoundDown className="text-[#DA5B27] text-xl" />
            </div>
            <p className="text-[#35353A] text-xs sm:text-sm 2xl:text-base ml-2">
              Withdraw
            </p>
          </div>
          <p className="text-[#2A2E33] flex items-center gap-2">
            <span className="text-sm sm:text-base 2xl:text-lg mt-0.5 font-bold">
              ₹{wallet?.totalWithdrawal || 0}{" "}
            </span>
            <span className="text-[#EB5757] text-base">
              <FaArrowTrendDown />
            </span>
          </p>
        </div>
      </div>

      <div className="text-center flex justify-between items-center mt-5 mb-[4px]">
        <p
          className="text-[#6E94FF] hover:text-blue-500 underline sm:text-sm text-xs 2xl:text-base cursor-pointer"
          onClick={handleFundsCalculationPopupOpen}
        >
          See how this is calculated
        </p>
        <button
          onClick={handleWithdrawFundModalOpen} // Use new handler
          className="gradient-bg w-[110px] h-[44px] items-center justify-center  text-white font-semibold text-sm sm:text-base 2xl:text-base rounded-full"
        >
          Withdraw
        </button>
      </div>
      <FundsCalculationPopup
        open={isFundsCalculationPopupOpen}
        handleClose={handleFundsCalculationPopupClose}
      />
      <WithdrawFundsModal // Updated to use WithdrawFundsModal
        open={isWithdrawFundModalOpen}
        handleClose={handleWithdrawFundModalClose}
        balance={wallet?.availableFunds}
      />
    </div>
  );
};

export default PublisherAccountInfo;
