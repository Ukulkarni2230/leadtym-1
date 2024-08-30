import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastDeposit: null,
};

const lastDepositSlice = createSlice({
  name: "lastDeposit",
  initialState,
  reducers: {
    setLastDeposit: (state, action) => {
      state.lastDeposit = action.payload;
    },
    clearLastDeposit: (state) => {
      state.lastDeposit = null;
    },
  },
});

export const { setLastDeposit, clearLastDeposit } = lastDepositSlice.actions;
export default lastDepositSlice.reducer;
