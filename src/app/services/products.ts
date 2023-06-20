import axios from "axios";

import { IProduct } from "../store/slices/appStateSlice.interface";

const urlBase = "http://localhost:58146";

export const fetchProducts = () =>
  axios
    .get(`${urlBase}/api/product`)
    .then((response) => response)
    .catch((e) => console.log(e));

export const fetchProductById = (id: number) =>
  axios
    .get(`${urlBase}/api/product/` + id)
    .then((response) => response)
    .catch((e) => console.log(e));

export const updateProductById = (data: Partial<IProduct>) => {
  const { product_id: id, ...rest } = data;
  axios
    .put(`${urlBase}/api/product/` + id, rest)
    .then((response) => response)
    .catch((e) => console.log(e));
};
