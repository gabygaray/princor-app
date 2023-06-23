import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useSnackbar } from "notistack";

import "./styles.css";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { setCart } from "../../app/store/slices/appStateSlice";

import { fetchProductByIdThunk } from "../../app/store/thunks/productThunks";

import ArrowIcon from "../../assets/flecha.png";

import { ICartItem } from "../../app/store/slices/appStateSlice.interface";

export const Product = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { productById, cart } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(Number(params.productId)));
  }, []);

  const increaseQuantity = (increase: boolean) => {
    if (increase) {
      setQuantity(quantity + 1);
    } else {
      quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
    }
  };

  const handleQuantityChange = (e) => {
    const quantityValue = e.target.value;
    setQuantity(Number(quantityValue));
  };

  const addToCart = () => {
    let currentCart: ICartItem[] = cart;
    const newProductToCart: ICartItem = {
      id: uuidv4(),
      product: productById.data,
      quantity,
    };

    if (quantity < 1) {
      return enqueueSnackbar("Debes agregar por lo menos una unidad.", {
        variant: "error",
      });
    }

    if (
      cart.find(
        (cartItem) =>
          cartItem.product.product_id === productById.data.product_id
      )
    ) {
      currentCart = cart.map((cartItem) => {
        if (cartItem.product.product_id === productById.data.product_id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
        }
        return cartItem;
      });
    } else {
      currentCart = [...cart, newProductToCart];
    }

    dispatch(setCart(currentCart));

    enqueueSnackbar("Producto agregado con éxito.", {
      variant: "success",
    });

    navigate("/cart");
  };

  return (
    <div className="product-container">
      <div className="product-page-body-container">
        <div className="product-image-description-container">
          <div className="unity-container-product-page">
            {productById.data.unity}
          </div>
          <img
            src={`https://raw.githubusercontent.com/gabygaray/princor-images-rep/main/images/${productById.data.image_id}.png`}
          />
        </div>
        <div className="product-aside-container">
          <h1 className="product-page-title">
            {productById.data.name.toUpperCase()}
          </h1>
          <h2 className="product-page-price">{`$${productById.data.price}`}</h2>

          <div className="product-page-qty-submit-container">
            <input
              className="product-page-qty-input"
              type="text"
              onChange={handleQuantityChange}
              value={quantity}
            />
            <div className="product-page-qty-button-container ">
              <div
                className="product-page-quantity-button button-rotate"
                onClick={() => increaseQuantity(true)}
              >
                <img src={ArrowIcon} />
              </div>

              <div
                className="product-page-quantity-button"
                onClick={() => increaseQuantity(false)}
              >
                <img src={ArrowIcon} />
              </div>
            </div>
            <button className="product-page-styled-button" onClick={addToCart}>
              Agregar al Carro
            </button>
          </div>
        </div>
      </div>
      <div className="product-footer-description">
        <div className="product-footer-description-title">Descripción</div>
        {productById.data.description || "Este producto no posee descripción."}
      </div>
    </div>
  );
};
