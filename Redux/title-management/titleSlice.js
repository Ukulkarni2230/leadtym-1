import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: {
    value: "Default Title",
  },
  reducers: {
    setTitle: (state, action) => {
      state.value = action.payload;
      document.title = action.payload; // Directly change the document title here
    },
  },
});

export const { setTitle } = titleSlice.actions;
export default titleSlice.reducer;
