import { AppStateSliceInitialState, IProduct } from "./appStateSlice.interface";

export const initialProduct: IProduct = {
  product_id: 0,
  name: "",
  price: 0,
  unity: "",
  description: "",
  stock: 0,
  image_id: "",
  category_id: 0,
  brand_id: 0,
};

export const appStateSliceInitialState: AppStateSliceInitialState = {
  searcherValue: "",
  filters: {
    category: null,
    brand: null,
  },
  cart: [],
  products: {
    data: [],
    isLoading: false,
    hasError: false,
  },
  productById: {
    data: initialProduct,
    isLoading: false,
    hasError: false,
  },
  updateProductState: {
    isLoading: false,
    hasError: false,
  },
  customerFormData: {
    dni: "",
    name: "",
    lastname: "",
    address: "",
    telephone: "",
    email: "",
  },
  customers: {
    data: [],
    isLoading: false,
    hasError: false,
  },
  customerByDni: {
    data: null,
    isLoading: false,
    hasError: false,
  },
  createCustomer: {
    isLoading: false,
    hasError: false,
  },
  updateCustomerByDni: {
    isLoading: false,
    hasError: false,
  },
  brands: {
    data: [],
    isLoading: false,
    hasError: false,
  },
  categories: {
    data: [],
    isLoading: false,
    hasError: false,
  },
};
