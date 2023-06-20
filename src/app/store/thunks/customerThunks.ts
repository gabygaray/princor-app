import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createCustomer,
  deleteCustomerByDni,
  fetchCustomerByDni,
  fetchCustomers,
  updateCustomerByDni,
} from "../../services/customers";

import { ICustomer } from "../slices/appStateSlice.interface";

// Thunk para obtener clientes
export const fetchCustomesThunk = createAsyncThunk(
  "app/fetchCustomers",
  async () => {
    const response = await fetchCustomers();
    return response;
  }
);

// Thunk para obtener un cliente por su DNI
export const fetchCustomerByDniThunk = createAsyncThunk(
  "app/fetchCustomerByDni",
  async (dni: number) => {
    const response = await fetchCustomerByDni(dni);
    return response;
  }
);

// Thunk para crear un cliente por su DNI
export const createCustomerThunk = createAsyncThunk(
  "app/createCustomer",
  async (data: ICustomer) => {
    const response = await createCustomer(data);
    return response;
  }
);

// Thunk para actualizar un cliente por su DNI
export const updateCustomerByDniThunk = createAsyncThunk(
  "app/updateCustomerByDni",
  async (data: Partial<ICustomer>) => {
    const { dni, ...rest } = data;
    const response = await updateCustomerByDni(dni, rest);
    return response;
  }
);

// Thunk para eliminar un cliente por su DNI
export const deleteCustomerByDniThunk = createAsyncThunk(
  "app/deleteCustomerByDni",
  async (dni: number) => {
    const response = await deleteCustomerByDni(dni);
    return response;
  }
);
