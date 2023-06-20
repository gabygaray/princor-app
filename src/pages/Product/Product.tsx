import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { setCart } from "../../app/store/slices/appStateSlice";

import {
  CartItem,
  IProduct,
} from "../../app/store/slices/appStateSlice.interface";

export const Product = () => {
  const params = useParams();

  const { products, cart } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<IProduct>();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    const productFinded = products.data.find(
      (pr) => pr.product_id === Number(params.productId)
    );

    setProduct(productFinded);
  }, [products.data, params.productId]);

  const handleQuantityChange = (e) => {
    const quantityValue = e.target.value;

    setQuantity(quantityValue);
  };

  const addToCart = () => {
    let currentCart: CartItem[] = cart;
    const newProductToCart: CartItem = {
      id: uuidv4(),
      product,
      quantity,
    };

    if (
      cart.find(
        (cartItem) => cartItem.product.product_id === product.product_id
      )
    ) {
      currentCart = cart.map((cartItem) => {
        if (cartItem.product.product_id === product.product_id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
        }
        return cartItem;
      });
    } else {
      return (currentCart = [...cart, newProductToCart]);
    }

    dispatch(setCart(currentCart));
  };

  return <div className="product-container">{params.productId}</div>;
};
