import { useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import axios from "axios";
import { useUser } from "../../user-service/useUser";
import { useDispatch } from "react-redux";
import { fetchWallet } from "@/src/Redux/wallet/walletSlice";
import { fetchEarnings } from "@/src/Redux/wallet/earningsSlice";
import { fetchExpenses } from "@/src/Redux/wallet/expensesSlice";
import {
  addWalletBalance,
  WALLET_ACCOUNT_NUMBER,
} from "@/src/utils/wallet/fetchWalletFunc";
import { USER_ID } from "../useRecentTransactions";

export const useAddFunds = (handleClose) => {
  const { userDetails } = useUser();
  const dispatch = useDispatch();
  const [view, setView] = useState("addFunds");
  const [selectedAmount, setSelectedAmount] = useState(8876);
  const [customAmount, setCustomAmount] = useState("");
  const [isContinueDisabled, setIsContinueDisabled] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const resetView = () => {
    setView("addFunds");
  };

  const validateAmount = (amount) => {
    const gstPercentage = 0.18;
    const totalAmount = amount * (1 + gstPercentage);

    if (!amount || isNaN(amount) || amount < 100 || totalAmount > 500000) {
      setIsContinueDisabled(true);
    } else {
      setIsContinueDisabled(false);
    }
  };

  useEffect(() => {
    if (selectedAmount === "custom") {
      const amount = parseFloat(customAmount);
      validateAmount(amount);
    } else {
      setIsContinueDisabled(false);
    }
  }, [customAmount, selectedAmount, hasInteracted]);

  const handleAmountChange = (e) => {
    setHasInteracted(true);
    const { value } = e.target;
    setCustomAmount(value);
    if (selectedAmount === "custom") {
      const amount = parseFloat(value);
      validateAmount(amount);
    }
  };

  const handleBack = () => setView("addFunds");

  const handleContinue = () => {
    setView("reviewPayment");
  };

  const handleAddFunds = async () => {
    try {
      handleClose();

      const amount =
        selectedAmount === "custom"
          ? parseFloat(customAmount)
          : parseFloat(selectedAmount);
      if (isNaN(amount) || amount < 100) {
        console.error("Invalid amount.");
        return;
      }

      // Fetch base URL from environment variable
      const baseUrl = "http://localhost:3004/api";

      // Fetch Razorpay key
      const {
        data: { key_id },
      } = await axios.get(`${baseUrl}/pay/get-key`, {
        headers: { Authorization: "Bearer IAmAuthorized" },
      });

      // Create an order on the server
      const {
        data: { order },
      } = await axios.post(
        `${baseUrl}/pay/checkout`,
        {
          amount: amount,
          tax: ((amount * 18) / 100).toFixed(0),
          currency: "INR",
        },
        {
          headers: {
            Authorization: "Bearer IAmAuthorized",
          },
        }
      );

      const options = {
        key: key_id,
        amount: order.amount,
        currency: order.currency,
        name: "LeadTym",
        description: "Wallet Topup",
        image: "/assets/logo.svg",
        order_id: order.id,
        callback_url: `${baseUrl}/pay/verification`,
        prefill: {
          name: userDetails?.name,
          email: userDetails?.email,
          contact: userDetails?.mobileNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#5e17eb",
        },
      };

      if (window.Razorpay) {
        const razor = new window.Razorpay(options);
        razor.open();
        razor.on("payment.success", () => {
          // Refetch data from API after successful payment
          setHasInteracted(false);
          dispatch(fetchWallet());
          dispatch(fetchEarnings());
          dispatch(fetchExpenses());
          addWalletBalance(USER_ID, order.amount, WALLET_ACCOUNT_NUMBER);
        });
      } else {
        console.error("Razorpay script not loaded.");
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return {
    resetView,
    view,
    selectedAmount,
    customAmount,
    isContinueDisabled,
    setSelectedAmount,
    handleAmountChange,
    hasInteracted,
    handleBack,
    handleContinue,
    handleAddFunds,
  };
};
