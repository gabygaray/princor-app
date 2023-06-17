import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { AppStateSliceInitialState, Filters } from "./appStateSlice.interface";
import { getProducts } from "../../services/products";

const initialState: AppStateSliceInitialState = {
  searcherValue: "",
  filters: {
    categories: [],
    brands: [],
  },
  cart: [],
  products: {
    data: [],
    isLoading: false,
    hasError: false,
  },
};

export const fetchProducts = createAsyncThunk("app/getProducts", async () => {
  const response = await getProducts();
  return response;
});

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
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.products.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.products.isLoading = false;
        state.products.hasError = false;
        state.products.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.products.isLoading = false;
        state.products.hasError = true;
      });
  },
});

export const { setSearcherValue, setFilters } = appStateSlice.actions;

export default appStateSlice.reducer;
