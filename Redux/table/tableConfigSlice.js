import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const tableConfigSlice = createSlice({
  name: "tableConfig",
  initialState,
  reducers: {
    setColumnsConfig(state, action) {
      const { tableId, columns } = action.payload;
      state[tableId] = columns;
    },
    resetColumnsConfig(state, action) {
      const { tableId } = action.payload;
      delete state[tableId];
    },
  },
});

export const { setColumnsConfig, resetColumnsConfig } = tableConfigSlice.actions;
export default tableConfigSlice.reducer;
