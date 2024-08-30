import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { IoArrowBackSharp } from "react-icons/io5";
import { formatAccountNumber } from "@/src/utils/formatAccountNumber";
import { useUser } from "@/src/hooks/user-service/useUser";
import Input from "@/src/components/reuseable/Input";
import { useSelector } from "react-redux";
import { useWithdrawFunds } from "@/src/hooks/wallet/withdraw-funds/useWithdrawFunds";

function WithdrawFundsModal({ open, handleClose, balance }) {
  const { userDetails } = useUser();
  const wallet = useSelector((state) => state.wallet);
  const {
    view,
    amount,
    isContinueDisabled,
    handleAmountChange,
    handleBack,
    handleContinue,
    handleWithdrawFunds,
    hasInteracted,
    resetView,
  } = useWithdrawFunds(handleClose, balance); // Pass balance to hook

  useEffect(() => {
    if (open) {
      resetView();
    }
  }, [open]);

  return (
    <Dialog
      PaperProps={{
        style: {
          borderRadius: "8px",
        },
      }}
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
    >
      {view === "withdrawFunds" && (
        <>
          <DialogTitle className="text-base sm:text-lg 2xl:text-xl font-normal text-[#434343]">
            Withdraw Funds
          </DialogTitle>
          <DialogContent className="w-full">
            <Box
              sx={{ mb: 2 }}
              className="border-b-[1px] w-full items-center py-1.5 flex justify-between text-[#666666] text-xs sm:text-sm 2xl:text-base font-bold border-t-[1px] border-[#D1D1D1]"
            >
              <Typography
                className="text-sm flex flex-row gap-x-2 items-center sm:text-base 2xl:text-lg font-medium text-[#666666]"
                variant="subtitle1"
                gutterBottom
              >
                <img src="/assets/logo.svg" alt="lead logo" />
                Wallet A/C {wallet?.walletAccountNumber || "N/A"}
              </Typography>
              <Typography
                className="flex flex-col text-[#666666]"
                variant="body2"
                gutterBottom
              >
                <p className="text-sm sm:text-base 2xl:text-lg text-end font-bold">
                  ₹{wallet?.availableFunds || 0}
                </p>
                <p className="text-xs sm:text-sm 2xl:text-base font-normal text-end">
                  Available funds
                </p>
              </Typography>
            </Box>

            {/* Withdrawal Amount Section */}
            <h4 className="text-[#666666] font-normal text-[13px] sm:text-[15px] 2xl:text-base mb-3">
              Withdrawal amount
            </h4>

            {/* Input for Withdrawal Amount */}
            <div className="mt-2 flex items-center gap-2">
              <Input
                label="Enter Amount"
                placeholder="Enter amount"
                size="small"
                maxLength={6}
                error={hasInteracted && isContinueDisabled}
                helperText={
                  hasInteracted &&
                  isContinueDisabled &&
                  `Amount should be between ₹100 and ₹${Math.min(
                    500000,
                    balance
                  ).toFixed(0)}.`
                }
                value={amount}
                onChange={handleAmountChange} // Use the new handler
              />
            </div>

            {/* Terms and Conditions */}
            <Box className="mb-4 mt-4">
              <p className="text-xs sm:text-xs font-normal text-blue-600 mb-1">
                Terms and Conditions:
              </p>
              <p className="text-xs sm:text-xs text-yellow-600">
                By proceeding with this transaction, you agree to our
                <span className="text-[#0F62FE] cursor-pointer">
                  {" "}
                  Terms of Service
                </span>{" "}
                and
                <span className="text-[#0F62FE] cursor-pointer">
                  {" "}
                  Privacy Policy
                </span>
              </p>
              <p className="text-xs sm:text-xs text-yellow-600 mt-2">
                You can withdraw between ₹100 - ₹500,000. Our finance team will
                contact you after you confirm the withdrawal.
              </p>
            </Box>

            {/* Continue and Cancel Buttons */}
            <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
              <button
                className="py-2 px-4 font-semibold text-base text-[#5e17eb] hover:bg-gray-100 rounded-full"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleContinue}
                className={`gradient-bg rounded-full text-white font-semibold py-2 px-4 ml-2 ${
                  isContinueDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isContinueDisabled}
              >
                Continue
              </button>
            </Box>
          </DialogContent>
        </>
      )}

      {view === "reviewWithdrawal" && (
        <>
          <DialogTitle className="text-base flex flex-row items-center gap-x-3 sm:text-lg 2xl:text-xl font-normal text-[#434343]">
            <IoArrowBackSharp
              className="hover:text-opacity-30 cursor-pointer"
              size={24}
              onClick={handleBack}
            />
            <p className="text-[#434343] text-base sm:text-lg 2xl:text-xl">
              Confirm Withdrawal
            </p>
          </DialogTitle>
          <DialogContent>
            {/* Withdrawal Details */}
            <Typography className="flex flex-row gap-x-2 mb-2">
              <p className="text-sm sm:text-base 2xl:text-lg font-normal text-[#666666]">
                Account:
              </p>{" "}
              <span className="text-sm sm:text-base 2xl:text-lg text-[#666666] leading-6 font-bold">
                Wallet A/C {formatAccountNumber(userDetails.accountNumber)}
              </span>
            </Typography>

            {/* Amount Details */}
            <Typography className="flex flex-row gap-x-2 mb-2">
              <p className="text-sm sm:text-base 2xl:text-lg font-normal text-[#666666]">
                Amount to be withdrawn:
              </p>{" "}
              <span className="text-sm sm:text-base 2xl:text-lg text-[#666666] leading-6 font-bold">
                ₹{amount}
              </span>
            </Typography>

            {/* Withdrawal Notice */}
            <Box className="mb-4 mt-4">
              <p className="text-xs sm:text-xs font-normal text-[#666666] mb-1">
                Important Notice:
              </p>
              <p className="text-xs sm:text-xs text-[#FF6F61]">
                After confirming the withdrawal, our finance team will connect
                with you to process the request. This process may take up to 24
                hours.
              </p>
            </Box>

            {/* Confirm and Cancel Buttons */}
            <Box display="flex" justifyContent="end" mt={4}>
              <button
                type="button"
                onClick={handleWithdrawFunds}
                className={`gradient-bg rounded-full text-white font-semibold py-2 px-4 ml-2 `}
              >
                Confirm Withdrawal
              </button>
            </Box>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

export default WithdrawFundsModal;
