import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCategories } from "../../services/categories";

// Thunk para obtener categorias
export const fetchCategoriesThunk = createAsyncThunk(
  "app/fetchCategories",
  async () => {
    const response = await fetchCategories();
    return response;
  }
);
