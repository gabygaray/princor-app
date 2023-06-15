import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@fontsource/open-sans";

import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { Marketplace } from "./pages/Marketplace/Marketplace.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { Product } from "./pages/Product/Product.tsx";
import { Cart } from "./pages/Cart/Cart.tsx";
import { Main } from "./pages/Main/Main.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Marketplace /> },
      { path: "products/:productId", element: <Product /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={2000} preventDuplicate maxSnack={1}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
