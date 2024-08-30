// src/hooks/wallet/withdraw-funds/useWithdrawFunds.js
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWallet, USER_ID } from "@/src/Redux/wallet/walletSlice";
import { postApiCall } from "@/src/Apicalls/apiUtils";
import { WALLET_ACCOUNT_NUMBER } from "@/src/utils/wallet/fetchWalletFunc";
import { Message } from "@/src/components/reuseable/ToastNotification";

export const useWithdrawFunds = (handleClose, balance) => {
  const dispatch = useDispatch();
  const [hasInteracted, setHasInteracted] = useState(false);

  const [view, setView] = useState("withdrawFunds");
  const [amount, setAmount] = useState(""); // Single state for the withdrawal amount
  const [isContinueDisabled, setIsContinueDisabled] = useState(true); // Button is disabled by default

  const resetView = () => {
    setView("withdrawFunds");
    setAmount("");
  };

  const validateAmount = (amount) => {
    if (
      !amount ||
      isNaN(amount) ||
      amount < 100 ||
      amount > 500000 ||
      amount > balance
    ) {
      setIsContinueDisabled(true);
    } else {
      setIsContinueDisabled(false);
    }
  };

  useEffect(() => {
    validateAmount(amount);
  }, [amount]);

  const handleAmountChange = (e) => {
    setHasInteracted(true);

    const { value } = e.target;
    setAmount(value);
  };

  const handleBack = () => setView("withdrawFunds");

  const handleContinue = () => {
    setView("reviewWithdrawal");
  };

  const handleWithdrawFunds = async () => {
    try {
      handleClose();

      const withdrawalAmount = parseFloat(amount);
      if (isNaN(withdrawalAmount) || withdrawalAmount < 100) {
        console.error("Invalid amount.");
        return;
      }

      setIsContinueDisabled(true); // Disable the button while processing

      console.log(`Withdraw request for amount: ₹${withdrawalAmount}`);

      // Prepare the payload for the /wallet/withdraw-wallet-fund API request
      // const fundPayload = {
      //   walletAccountNumber: WALLET_ACCOUNT_NUMBER,
      //   userId: USER_ID,
      //   withdrawAmount: withdrawalAmount,
      // };

      // Make the first POST request to /wallet/withdraw-wallet-fund
      // const fundResponse = await postApiCall(
      //   "/wallet/withdraw-wallet-fund",
      //   fundPayload
      // );
      // console.log("Withdrawal fund response:", fundResponse.data);

      // If the first API call is successful, prepare the payload for /wallet/withdraw-request
      const requestPayload = {
        walletAccountNumber: WALLET_ACCOUNT_NUMBER,
        id: USER_ID,
        reqAmount: withdrawalAmount,
      };

      // Make the second POST request to /wallet/withdraw-request
      const requestResponse = await postApiCall(
        "/wallet/withdraw-request",
        requestPayload
      );
      // dispatch(fetchWallet());

      console.log("Withdrawal request response:", requestResponse.data);

      // Show success message and refresh the wallet data after a successful withdrawal
      Message.success(
        requestResponse.message || "Withdrawal request successfully created."
      );
    } catch (error) {
      console.error("Withdrawal error:", error);
    } finally {
      setIsContinueDisabled(false);
      setHasInteracted(true);
    }
  };

  return {
    resetView,
    view,
    amount,
    isContinueDisabled,
    handleAmountChange,
    hasInteracted,
    handleBack,
    handleContinue,
    handleWithdrawFunds,
  };
};
