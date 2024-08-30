// src/redux/wallet/walletSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWalletDetails } from "@/src/utils/wallet/fetchWalletFunc";
import { postApiCall } from "@/src/Apicalls/apiUtils";

export const USER_ID = "UserIdIsMandatory";

// Thunk to fetch wallet details from the API
export const fetchWallet = createAsyncThunk(
  "wallet/fetchWallet",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchWalletDetails(USER_ID);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    availableFunds: 0,
    totalWithdrawal: 0,
    pending: 0,
    walletAccountNumber: "",
    loading: false,
    error: null,
  },
  reducers: {
    updateWallet: (state, action) => {
      state.availableFunds = action.payload.availableFunds;
      state.totalWithdrawal = action.payload.totalWithdrawal;
      state.pending = action.payload.pending;
      state.walletAccountNumber = action.payload.walletAccountNumber;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWallet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWallet.fulfilled, (state, action) => {
        state.loading = false;
        state.availableFunds = action.payload.availableFunds;
        state.totalWithdrawal = action.payload.totalWithdrawal;
        state.pending = action.payload.pending;
        state.walletAccountNumber = action.payload.walletAccountNumber;
      })
      .addCase(fetchWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateWallet } = walletSlice.actions;
export default walletSlice.reducer;
