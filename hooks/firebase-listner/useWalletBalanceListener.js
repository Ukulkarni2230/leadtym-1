// src/hooks/useWalletBalanceListener.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ref, onValue } from "firebase/database";

import { updateWallet } from "@/src/Redux/wallet/walletSlice";
import { database } from "@/lib/firebase";

const useWalletBalanceListener = (userId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) return;

    // Reference to the user's wallet data in the Realtime Database
    const walletRef = ref(database, `wallets/${userId}`);

    // Set up a listener for changes to the wallet data
    const unsubscribe = onValue(walletRef, (snapshot) => {
      const walletData = snapshot.val();
      if (walletData) {
        console.log("Realtime Wallet Data:", walletData);

        // Dispatch Redux action to update the wallet state
        dispatch(updateWallet(walletData));
      } else {
        console.log("No wallet data found!");
      }
    });

    // Clean up listener on component unmount
    return () => {
      unsubscribe();
    };
  }, [userId]);
};

export default useWalletBalanceListener;
