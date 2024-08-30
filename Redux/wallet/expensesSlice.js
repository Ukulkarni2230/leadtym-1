// src/redux/wallet/expensesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTotalExpenses } from "@/src/utils/wallet/fetchWalletFunc";

const WALLET_ACCOUNT_NUMBER = "2743-7386-6850";

// Thunk to fetch expenses details from the API
export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchTotalExpenses(WALLET_ACCOUNT_NUMBER);
      return response.expenses[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    totalExpenses: 0,
    expensesHistory: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Reducer to update expenses if needed
    updateExpenses: (state, action) => {
      state.totalExpenses = action.payload.totalExpenses;
      state.expensesHistory = action.payload.expensesHistory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.totalExpenses = action.payload.totalExpenses;
        state.expensesHistory = action.payload.expensesHistory;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;
