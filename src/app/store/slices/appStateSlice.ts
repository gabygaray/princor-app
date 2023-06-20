import { createSlice } from "@reduxjs/toolkit";
import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { Filters, ICartItem, ICustomer } from "./appStateSlice.interface";

import { appStateSliceInitialState, initialProduct } from "./contants";

import {
  fetchProductByIdThunk,
  fetchProductsThunk,
  updateProductByIdThunk,
} from "../thunks/productThunks";
import {
  createCustomerThunk,
  fetchCustomerByDniThunk,
  updateCustomerByDniThunk,
} from "../thunks/customerThunks";
import { fetchBrandsThunk } from "../thunks/brandThunks";
import { fetchCategoriesThunk } from "../thunks/categoryThunks";

export const appStateSlice = createSlice({
  name: "appState",
  initialState: appStateSliceInitialState,
  reducers: {
    setSearcherValue: (state, action: PayloadAction<string>) => {
      state.searcherValue = action.payload;
    },
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },
    setCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.cart = action.payload;
    },
    setCustomerFormData: (state, action: PayloadAction<ICustomer>) => {
      state.customerFormData = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder
      //GET ALL PRODUCTS
      .addCase(fetchProductsThunk.pending, (state) => {
        state.products.isLoading = true;
      })
      .addCase(
        fetchProductsThunk.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.products.isLoading = false;
          state.products.hasError = false;
          state.products.data = Array.isArray(action.payload?.data)
            ? action.payload.data
            : [];
        }
      )
      .addCase(fetchProductsThunk.rejected, (state) => {
        state.products.isLoading = false;
        state.products.hasError = true;
      })
      //GET PRODUCT BY ID
      .addCase(fetchProductByIdThunk.pending, (state) => {
        state.productById.isLoading = true;
      })
      .addCase(
        fetchProductByIdThunk.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.productById.isLoading = false;
          state.productById.hasError = false;
          state.productById.data = action.payload?.data
            ? action.payload.data
            : initialProduct;
        }
      )
      .addCase(fetchProductByIdThunk.rejected, (state) => {
        state.productById.isLoading = false;
        state.productById.hasError = true;
      })
      //UPDATE PRODUCT BY ID
      .addCase(updateProductByIdThunk.pending, (state) => {
        state.updateProductState.isLoading = true;
      })
      .addCase(updateProductByIdThunk.fulfilled, (state) => {
        state.updateProductState.isLoading = false;
        state.updateProductState.hasError = false;
      })
      .addCase(updateProductByIdThunk.rejected, (state) => {
        state.updateProductState.isLoading = false;
        state.updateProductState.hasError = true;
      })
      //FETCH CUSTOMER BY DNI
      .addCase(fetchCustomerByDniThunk.pending, (state) => {
        state.customerByDni.isLoading = true;
      })
      .addCase(
        fetchCustomerByDniThunk.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.customerByDni.isLoading = false;
          state.customerByDni.hasError = false;
          state.customerByDni.data = action.payload?.data
            ? action.payload.data
            : null;
        }
      )
      .addCase(fetchCustomerByDniThunk.rejected, (state) => {
        state.customerByDni.isLoading = false;
        state.customerByDni.hasError = true;
      })
      //CREATE CUSTOMER
      .addCase(createCustomerThunk.pending, (state) => {
        state.createCustomer.isLoading = true;
      })
      .addCase(createCustomerThunk.fulfilled, (state) => {
        state.createCustomer.isLoading = false;
        state.createCustomer.hasError = false;
      })
      .addCase(createCustomerThunk.rejected, (state) => {
        state.createCustomer.isLoading = false;
        state.createCustomer.hasError = true;
      })
      //UPDATE CUSTOMER BY DNI
      .addCase(updateCustomerByDniThunk.pending, (state) => {
        state.updateCustomerByDni.isLoading = true;
      })
      .addCase(updateCustomerByDniThunk.fulfilled, (state) => {
        state.updateCustomerByDni.isLoading = false;
        state.updateCustomerByDni.hasError = false;
      })
      .addCase(updateCustomerByDniThunk.rejected, (state) => {
        state.updateCustomerByDni.isLoading = false;
        state.updateCustomerByDni.hasError = true;
      })
      //FETCH BRANDS
      .addCase(fetchBrandsThunk.pending, (state) => {
        state.brands.isLoading = true;
      })
      .addCase(
        fetchBrandsThunk.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.brands.isLoading = false;
          state.brands.hasError = false;
          state.brands.data = Array.isArray(action.payload?.data)
            ? action.payload.data
            : [];
        }
      )
      .addCase(fetchBrandsThunk.rejected, (state) => {
        state.brands.isLoading = false;
        state.brands.hasError = true;
      })
      //FETCH CATEGORIES
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.categories.isLoading = true;
      })
      .addCase(
        fetchCategoriesThunk.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.categories.isLoading = false;
          state.categories.hasError = false;
          state.categories.data = Array.isArray(action.payload?.data)
            ? action.payload.data
            : [];
        }
      )
      .addCase(fetchCategoriesThunk.rejected, (state) => {
        state.categories.isLoading = false;
        state.categories.hasError = true;
      });
  },
});

export const { setSearcherValue, setFilters, setCart, setCustomerFormData } =
  appStateSlice.actions;

export default appStateSlice.reducer;
