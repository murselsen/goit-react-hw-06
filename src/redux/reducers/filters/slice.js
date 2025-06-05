import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
  selectors: {
    selectNameFilter: (state) => state.name,
  },
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
