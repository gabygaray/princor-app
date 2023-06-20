import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchBrands } from "../../services/brands";

// Thunk para obtener marcas
export const fetchBrandsThunk = createAsyncThunk(
  "app/fetchBrands",
  async () => {
    const response = await fetchBrands();
    return response;
  }
);
