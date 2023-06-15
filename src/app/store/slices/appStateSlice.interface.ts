export interface AppStateSliceInitialState {
  searcherValue: string;
  filters: Filters;
}

export interface Filters {
  categories: Category[];
  brands: Brand[];
}

export interface Product {
  product_id: number;
  name: string;
  price: number;
  unity: string;
  description: string;
  stock: number;
  image_id: string;
  category: Category;
  brand: Brand;
}

export interface Category {
  category_id: number;
  name: string;
}

export interface Brand {
  brand_id: number;
  name: string;
}
