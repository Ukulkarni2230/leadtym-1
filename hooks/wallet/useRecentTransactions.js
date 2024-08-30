import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getApiCall } from "@/src/Apicalls/apiUtils";
import { setLastDeposit } from "@/src/Redux/wallet/last-deposit/LastDepositSlice.js";

export const WALLET_ID = "66c0903c786ce6837fbc37c2";
export const USER_ID = "UserIdIsMandatory";

export const useRecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [latestTransaction, setLatestTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch(); // Redux dispatch

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await getApiCall(
          `/transaction/get-transaction-details?walletId=${WALLET_ID}&userId=${USER_ID}`
        );

        const {
          cardTransactions = [],
          upiTransactions = [],
          netbankingTransactions = [],
        } = response.data.data;

        const combinedTransactions = [
          ...cardTransactions,
          ...upiTransactions,
          ...netbankingTransactions,
        ].sort((a, b) => b.created_at - a.created_at);

        const latestTransactions = combinedTransactions.slice(0, 10);
        setTransactions(latestTransactions);

        if (latestTransactions.length > 0) {
          setLatestTransaction({
            date: new Date(
              latestTransactions[0].created_at * 1000
            ).toLocaleString(),
            amount: (latestTransactions[0].amount / 100).toFixed(2),
          });
        }

        const depositTransaction = combinedTransactions.find(
          (transaction) => transaction.transactionType === "Credited"
        );

        if (depositTransaction) {
          const lastDeposit = {
            date: new Date(
              depositTransaction.created_at * 1000
            ).toLocaleString(),
            amount: (depositTransaction.amount / 100).toFixed(2),
          };

          // Dispatch the last deposit to the Redux store
          dispatch(setLastDeposit(lastDeposit));
        }
      } catch (err) {
        setError(err.message || "Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions();
  }, [dispatch]);

  return { transactions, latestTransaction, loading, error };
};
