import axios from "axios";

import { ICustomer } from "../store/slices/appStateSlice.interface";

const urlBase = "http://localhost:58146";

export const fetchCustomers = () =>
  axios
    .get(`${urlBase}/api/customer`)
    .then((response) => response)
    .catch((e) => console.log(e));

export const fetchCustomerByDni = (dni: number) =>
  axios
    .get(`${urlBase}/api/customer/` + dni)
    .then((response) => response)
    .catch((e) => console.log(e));

export const createCustomer = (data: ICustomer) => {
  axios
    .post(`${urlBase}/api/customer`, data)
    .then((response) => response)
    .catch((e) => console.log(e));
};

export const updateCustomerByDni = (dni: number, data: Partial<ICustomer>) => {
  axios
    .put(`${urlBase}/api/customer/` + dni, data)
    .then((response) => response)
    .catch((e) => console.log(e));
};

export const deleteCustomerByDni = (dni: number) =>
  axios
    .delete(`${urlBase}/api/customer/` + dni)
    .then((response) => response)
    .catch((e) => console.log(e));
