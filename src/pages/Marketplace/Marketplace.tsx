import { useEffect } from "react";
import "./styles.css";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";

import { ProductCard } from "./components/product/Product";
import { fetchProductsThunk } from "../../app/store/thunks/productThunks";

export const Marketplace = () => {
  const { products } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);

  useEffect(() => {
    console.log(products.data);
  }, [products]);
  return (
    <div className="marketplace-container">
      <div className="sidebar"></div>
      <div className="products-container">
        {products.data.map((prod) => (
          <ProductCard key={prod.product_id} product={prod} />
        ))}
      </div>
    </div>
  );
};
