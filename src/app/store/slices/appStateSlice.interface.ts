export interface AppStateSliceInitialState {
  searcherValue: string;
  filters: Filters;
  cart: ICartItem[];
  products: {
    data: IProduct[];
    isLoading: boolean;
    hasError: boolean;
  };
  productById: {
    data: IProduct;
    isLoading: boolean;
    hasError: boolean;
  };
  updateProductState: {
    isLoading: boolean;
    hasError: boolean;
  };
  customerFormData: ICustomer;
  customers: {
    data: ICustomer[];
    isLoading: boolean;
    hasError: boolean;
  };
  customerByDni: {
    data: ICustomer;
    isLoading: boolean;
    hasError: boolean;
  };
  createCustomer: {
    isLoading: boolean;
    hasError: boolean;
  };
  updateCustomerByDni: {
    isLoading: boolean;
    hasError: boolean;
  };
  brands: {
    data: IBrand[];
    isLoading: boolean;
    hasError: boolean;
  };
  categories: {
    data: ICategory[];
    isLoading: boolean;
    hasError: boolean;
  };
}

export interface Filters {
  category: ICategory;
  brand: IBrand;
}

export interface IProduct {
  product_id: number;
  name: string;
  price: number;
  unity: string;
  description: string;
  stock: number;
  image_id: string;
  category_id: number;
  brand_id: number;
}

export interface ICategory {
  category_id: number;
  name: string;
}

export interface IBrand {
  brand_id: number;
  name: string;
}

export interface ICartItem {
  id: number;
  quantity: number;
  product: IProduct;
}

export interface ICustomer {
  dni: number;
  name: string;
  lastname: string;
  address: string;
  telephone: number;
  email: string;
}
