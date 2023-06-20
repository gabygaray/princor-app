import { Outlet } from "react-router-dom";

import { Layout } from "../../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { IProduct } from "../../app/store/slices/appStateSlice.interface";
import { updateProductByIdThunk } from "../../app/store/thunks/productThunks";

export const Main = () => {
  const { products } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  // const updateAllProducts = () => {
  //   products.data.map((pr) => updateProduct(pr));
  // };

  const updateProduct = () => {
    // const data = {
    //   id: product.product_id,
    //   image_id: `${"img_" + product.product_id}`,
    // };
    const data = {
      id: 1,
      image_id: `${"img_" + 1}`,
    };

    dispatch(updateProductByIdThunk(data));
  };

  // updateProduct();

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
