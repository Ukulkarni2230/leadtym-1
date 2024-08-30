import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userDetails: {
    userType: null,
    userEligible: false,
    dynamicRoute: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserTypeId: (state, action) => {
      state.userId = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = {
        ...state.userDetails,
        ...action.payload,
      };
    },
    clearUserData: (state) => {
      return { ...initialState };
    },
  },
});

export const { setUserTypeId, setUserDetails, clearUserData } =
  userSlice.actions;
export default userSlice.reducer;
