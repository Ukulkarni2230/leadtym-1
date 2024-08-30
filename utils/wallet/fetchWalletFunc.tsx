import { getApiCall, postApiCall } from "@/src/Apicalls/apiUtils";

// Fetch Total Expenses using Query Parameters
export const WALLET_ACCOUNT_NUMBER = "2743-7386-6850"
export async function fetchTotalExpenses(walletAccountNumber: string, userId: string) {
  try {
    // Include parameters as query parameters in the URL
    const response = await getApiCall(`/expense/get-total-expenses?walletAccountNumber=${WALLET_ACCOUNT_NUMBER}`);
    console.log('Total Expenses:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching total expenses:', error);
  }
}

// Fetch Total Earnings using Query Parameters
export async function fetchTotalEarnings(walletAccountNumber: string, userId: string) {
  try {
    // Include parameters as query parameters in the URL

    const response = await getApiCall(`/earning/get-total-earnings?walletAccountNumber=${WALLET_ACCOUNT_NUMBER}`);
    console.log('Total Earnings:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching total earnings:', error);
  }
}

// Fetch Wallet Details
export async function fetchWalletDetails(userId: string) {
  try {
    // User ID is part of the URL, as specified
    const response = await getApiCall(`/wallet/get-wallet/${userId}`);
    console.log('Wallet Details:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching wallet details:', error);
  }
}

export async function addWalletBalance(userId: string, amount: Number, walletAccountNumber: string) {
  try {
    const response = await postApiCall(`/wallet/add-wallet-fund`, {
      walletAccountNumber,
      userId,
      fundAmount: amount
    });
    console.log(response.data)
    return response.data
  } catch (err) {
    console.error(err)
  }
}
