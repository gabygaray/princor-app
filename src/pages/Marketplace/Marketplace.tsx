import { useEffect } from "react";
import "./styles.css";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { setFilters } from "../../app/store/slices/appStateSlice";
import { firstLetterUpperCase } from "../../utils/utils";

import { fetchProductsThunk } from "../../app/store/thunks/productThunks";
import { fetchBrandsThunk } from "../../app/store/thunks/brandThunks";
import { fetchCategoriesThunk } from "../../app/store/thunks/categoryThunks";

import { ProductCard } from "./components/product/Product";

import {
  IBrand,
  ICategory,
  IProduct,
} from "../../app/store/slices/appStateSlice.interface";

export const Marketplace = () => {
  const { products, searcherValue, categories, brands, filters } =
    useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
    dispatch(fetchBrandsThunk());
    dispatch(fetchCategoriesThunk());
  }, []);

  const filterProductsList = (products: IProduct[]): IProduct[] => {
    let filteredProductsList = products.filter((pr) =>
      pr.name.toLowerCase().trim().includes(searcherValue.toLowerCase().trim())
    );

    if (filters.brand) {
      filteredProductsList = filteredProductsList.filter(
        (prod) => prod.brand_id === filters.brand.brand_id
      );
    }

    if (filters.category) {
      filteredProductsList = filteredProductsList.filter(
        (prod) => prod.category_id === filters.category.category_id
      );
    }

    return filteredProductsList;
  };

  const setCategoryFilter = (cat: ICategory) => {
    dispatch(setFilters({ ...filters, category: cat }));
  };

  const setBrandFilter = (brand: IBrand) => {
    dispatch(setFilters({ ...filters, brand: brand }));
  };

  return (
    <div className="marketplace-container">
      <div className="sidebar">
        <div className="filters">
          <h2 className="filter-title">FILTROS</h2>
          <div className="filter">
            <h4>Categorías</h4>
            {categories.data.map((cat) => (
              <div
                className={`${
                  filters.category?.category_id === cat.category_id &&
                  "filter-active"
                }`}
                key={cat.category_id}
                onClick={() => setCategoryFilter(cat)}
              >
                {firstLetterUpperCase(cat.name)}
              </div>
            ))}
          </div>
          <div className="filter">
            <h4>Marcas</h4>
            {brands.data.map((brand) => (
              <div
                className={`${
                  filters.brand?.brand_id === brand.brand_id && "filter-active"
                }`}
                key={brand.brand_id}
                onClick={() => setBrandFilter(brand)}
              >
                {firstLetterUpperCase(brand.name)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="products-container">
        {filterProductsList(products.data).map((prod) => (
          <ProductCard key={prod.product_id} product={prod} />
        ))}
      </div>
    </div>
  );
};
