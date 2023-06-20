import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { appStateSlice } from "./slices/appStateSlice";

export const store = configureStore({
  reducer: {
    appState: appStateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "app/fetchProducts/fulfilled",
          "app/fetchProductById/fulfilled",
          "app/updateProductById/fulfilled",
          "app/fetchCustomers/fulfilled",
          "app/fetchCustomerByDni/fulfilled",
          "app/createCustomer/fulfilled",
          "app/updateCustomerByDni/fulfilled",
          "app/deleteCustomerByDni/fulfilled",
          "app/fetchBrands/fulfilled",
          "app/fetchCategories/fulfilled",
        ],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
