import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  Skeleton,
} from "@mui/material";
import { IoArrowBackSharp } from "react-icons/io5";
import { formatAccountNumber } from "@/src/utils/formatAccountNumber";
import { useUser } from "@/src/hooks/user-service/useUser";
import Input from "@/src/components/reuseable/Input";
import { useAddFunds } from "@/src/hooks/wallet/add-funds/useAddFunds";
import { useSelector } from "react-redux";

function AddFundModal({ open, handleClose }) {
  const latestDeposit = useSelector((state) => state?.lastDeposit?.lastDeposit);
  const [useLatestDeposit, setUseLatestDeposit] = useState(false);
  const { userDetails } = useUser();
  const wallet = useSelector((state) => state.wallet);

  const {
    view,
    selectedAmount,
    customAmount,
    isContinueDisabled,
    setSelectedAmount,
    hasInteracted,
    handleAmountChange,
    handleBack,
    handleContinue,
    handleAddFunds,
    resetView,
  } = useAddFunds(handleClose);

  useEffect(() => {
    if (open) {
      resetView();
      setUseLatestDeposit(false); // Reset checkbox state on modal open
      if (!latestDeposit) {
        setSelectedAmount("custom"); // Automatically select custom amount if no latest deposit
      }
    }
  }, [open, latestDeposit]);

  // Handle Checkbox Change
  const handleCheckboxChange = (e) => {
    setUseLatestDeposit(e.target.checked);
    if (e.target.checked) {
      setSelectedAmount(latestDeposit.amount); // Set selected amount to the latest deposit amount
    } else {
      setSelectedAmount("custom"); // Reset to custom amount
    }
  };

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
      {view === "addFunds" && (
        <>
          <DialogTitle className="text-base sm:text-lg 2xl:text-xl font-normal text-[#434343]">
            Add funds
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

            {/* Payment Amount Section */}
            <h4 className="text-[#666666] font-normal text-[13px] sm:text-[15px] 2xl:text-base mb-3">
              Payment amount
            </h4>

            {/* Checkbox for the Latest Deposit if available */}

            {/* Show RadioGroup only when latest deposit is available and not selected */}
            {!useLatestDeposit && latestDeposit && (
              <RadioGroup
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(e.target.value)}
              >
                <FormControlLabel
                  value={latestDeposit?.amount || "8876"} // Dynamically use latest deposit amount
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#9181f4",
                        "&.Mui-checked": {
                          color: "linear-gradient(to right, #9181f4, #5038ed)",
                        },
                      }}
                    />
                  }
                  label={
                    <div className="text-[#666666] text-xs sm:text-sm 2xl:text-base font-normal">
                      <p>₹{latestDeposit?.amount || "8876.00"}</p>
                      <p className="-mt-[4px]">
                        Last payment on {latestDeposit?.date || "Jul 26"}
                      </p>
                    </div>
                  }
                />
                <FormControlLabel
                  value="custom"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#9181f4",
                        "&.Mui-checked": {
                          color: "linear-gradient(to right, #9181f4, #5038ed)",
                        },
                      }}
                    />
                  }
                  label={
                    <p className="text-[#666666] text-xs sm:text-sm 2xl:text-base font-normal">
                      Other amount
                    </p>
                  }
                />
              </RadioGroup>
            )}

            {/* Show Input for Custom Amount when "Other amount" is selected or if no latest deposit is available */}
            {(selectedAmount === "custom" || !latestDeposit) && (
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
                    `Amount should be between ₹100 and ₹${(
                      500000 / 1.18
                    ).toFixed(0)} (excluding GST)`
                  }
                  value={customAmount}
                  onChange={handleAmountChange} // Use the new handler
                />
              </div>
            )}

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
                You can add ₹100 - ₹{(100000 / 1.18).toFixed(0)}
                (excluding 18% GST) via UPI/QR and ₹100 - ₹
                {(500000 / 1.18).toFixed(0)} (excluding 18% GST) through cards
                or net banking.
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
      {view === "reviewPayment" && (
        <>
          <DialogTitle className="text-base flex flex-row items-center gap-x-3 sm:text-lg 2xl:text-xl font-normal text-[#434343]">
            <IoArrowBackSharp
              className="hover:text-opacity-30 cursor-pointer"
              size={24}
              onClick={handleBack}
            />
            <p className="text-[#434343] text-base sm:text-lg 2xl:text-xl">
              Review your payment
            </p>
          </DialogTitle>
          <DialogContent>
            {/* Account Information */}
            <Typography className="flex flex-row gap-x-2 mb-2">
              <p className="text-sm sm:text-base 2xl:text-lg font-normal text-[#666666]">
                Account:
              </p>{" "}
              <span className="text-sm sm:text-base 2xl:text-lg text-[#666666] leading-6 font-bold">
                Wallet A/C {formatAccountNumber(userDetails.accountNumber)}
              </span>
            </Typography>

            {/* Payment Method */}
            <Typography className="flex flex-row gap-x-2 mb-2">
              <p className="text-sm sm:text-base 2xl:text-lg font-normal text-[#666666]">
                Payment method:
              </p>{" "}
              <span className="text-sm sm:text-base 2xl:text-lg text-[#666666] leading-6 font-bold">
                Pay with Razorpay
              </span>
            </Typography>

            {/* Amount Details */}
            <Typography className="flex flex-row gap-x-2 mb-2">
              <p className="text-sm sm:text-base 2xl:text-lg font-normal text-[#666666]">
                Amount to be added:
              </p>{" "}
              <span className="text-sm sm:text-base 2xl:text-lg text-[#666666] leading-6 font-bold">
                ₹
                {selectedAmount === "custom"
                  ? customAmount
                  : latestDeposit?.amount || 8876}
              </span>
            </Typography>

            {/* Added GST */}
            <Typography className="text-[15px] flex flex-row gap-x-2 font-normal mb-1 text-[#666666] border-b border-gray-300 pb-2">
              <p className="text-sm sm:text-base 2xl:text-lg font-normal text-[#666666]">
                Added GST 18%:{" "}
              </p>
              <span className="text-[#666666] font-bold ">
                ₹
                {(
                  parseFloat(
                    selectedAmount === "custom"
                      ? customAmount
                      : latestDeposit?.amount || 8876
                  ) * 0.18
                ).toFixed(2)}
              </span>
            </Typography>

            {/* Total Payable */}
            <Typography className="flex flex-row gap-x-2 mb-2 mt-4 pt-2">
              <p className="text-sm sm:text-base 2xl:text-lg font-normal text-[#666666]">
                Total Payable:{" "}
              </p>
              <span className="text-[#666666] font-bold ">
                ₹
                {(
                  parseFloat(
                    selectedAmount === "custom"
                      ? customAmount
                      : latestDeposit?.amount || "8876"
                  ) * 1.18
                ).toFixed(2)}
              </span>
            </Typography>

            {/* Terms and Conditions */}
            <Box className="mb-4 mt-4">
              <p className="text-xs sm:text-xs font-normal text-[#666666] mb-1">
                Terms and Conditions:
              </p>
              <p className="text-xs sm:text-xs text-[#666666]">
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
                . Please note that payments are subject to processing delays due
                to banking procedures.
              </p>
            </Box>

            {/* Notice About Potential Delays */}
            <Box className="mb-4">
              <p className="text-xs sm:text-xs font-normal text-[#666666] mb-1">
                Important Notice:
              </p>
              <p className="text-xs sm:text-xs text-[#FF6F61]">
                Payments may take up to 24 hours to reflect in your account
                depending on your bank’s processing times. If you experience any
                issues, please contact our support team.
              </p>
            </Box>

            {/* Final Reminder and Continue Button */}
            <div className="flex flex-row items-center 2xl:text-sm sm:text-xs gap-x-1 mt-6 text-[#666666] text-xs">
              <p>
                You’ll be redirected to complete your payment.{" "}
                <span className="text-[#0F62FE] cursor-pointer">
                  Learn more about Razorpay
                </span>
              </p>
            </div>
            <Box display="flex" justifyContent="end" mt={4}>
              <button
                type="button"
                onClick={handleAddFunds}
                className={`gradient-bg rounded-full text-white font-semibold py-2 px-4 ml-2 `}
              >
                Add funds
              </button>
            </Box>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

export default AddFundModal;
