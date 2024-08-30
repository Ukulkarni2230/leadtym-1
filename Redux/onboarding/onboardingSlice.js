import { createSlice } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";

const initialState = {
  step: "/signup",
  origin: null,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    resetOnboarding: (state) => {
      state.step = "/signup";
      state.origin = null;
    },
  },
});

export const { setStep, setOrigin, resetOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;
