import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AppStateSliceInitialState, Filters } from "./appStateSlice.interface";

const initialState: AppStateSliceInitialState = {
  searcherValue: "",
  filters: {
    categories: [],
    brands: [],
  },
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setSearcherValue: (state, action: PayloadAction<string>) => {
      state.searcherValue = action.payload;
    },
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },
  },
});

export const { setSearcherValue, setFilters } = appStateSlice.actions;

export default appStateSlice.reducer;
