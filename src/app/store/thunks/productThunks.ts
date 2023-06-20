import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchProductById,
  fetchProducts,
  updateProductById,
} from "../../services/products";

import { IProduct } from "../slices/appStateSlice.interface";

// Thunk para obtener productos
export const fetchProductsThunk = createAsyncThunk(
  "app/fetchProducts",
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

// Thunk para obtener un producto por su ID
export const fetchProductByIdThunk = createAsyncThunk(
  "app/fetchProductById",
  async (id: number) => {
    const response = await fetchProductById(id);
    return response;
  }
);

// Thunk para actualizar un producto por su ID
export const updateProductByIdThunk = createAsyncThunk(
  "app/updateProductById",
  async (data: Partial<IProduct>) => {
    const response = await updateProductById(data);
    return response;
  }
);
