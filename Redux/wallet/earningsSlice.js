// src/redux/wallet/earningsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTotalEarnings } from "@/src/utils/wallet/fetchWalletFunc";

const WALLET_ACCOUNT_NUMBER = "2743-7386-6850";

// Thunk to fetch earnings details from the API
export const fetchEarnings = createAsyncThunk(
  "earnings/fetchEarnings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchTotalEarnings(WALLET_ACCOUNT_NUMBER);
      return response.earnings[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const earningsSlice = createSlice({
  name: "earnings",
  initialState: {
    totalEarned: 0,
    earningHistory: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Reducer to update earnings if needed
    updateEarnings: (state, action) => {
      state.totalEarned = action.payload.totalEarned;
      state.earningHistory = action.payload.earningHistory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEarnings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEarnings.fulfilled, (state, action) => {
        state.loading = false;
        state.totalEarned = action.payload.totalEarned;
        state.earningHistory = action.payload.earningHistory;
      })
      .addCase(fetchEarnings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateEarnings } = earningsSlice.actions;
export default earningsSlice.reducer;
