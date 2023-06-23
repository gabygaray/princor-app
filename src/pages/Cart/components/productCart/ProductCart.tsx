import "./styles.css";

import TrashIcon from "../../../../assets/tarrito-basura.png";
import ArrowIcon from "../../../../assets/flecha.png";

import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { setCart } from "../../../../app/store/slices/appStateSlice";

import { ICartItem } from "../../../../app/store/slices/appStateSlice.interface";

export interface ProductCartProps {
  cartItem: ICartItem;
}

export const ProductCart: React.FC<ProductCartProps> = ({ cartItem }) => {
  const { id, product, quantity } = cartItem;

  const { cart } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
    dispatch(setCart(updatedCart));
  };

  const increaseQuantity = (increase: boolean) => {
    const cartUpdated = cart.map((cartItem) => {
      if (cartItem.id === id) {
        const newQuantity = increase
          ? cartItem.quantity + 1
          : cartItem.quantity > 1
          ? cartItem.quantity - 1
          : 1;

        return { ...cartItem, quantity: newQuantity };
      }

      return cartItem;
    });

    dispatch(setCart(cartUpdated));
  };

  const handleChangeQuantity = (e) => {
    const value = e.target.value;

    const cartUpdated = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: Number(value) };
      }

      return cartItem;
    });

    dispatch(setCart(cartUpdated));
  };

  return (
    <div className="cart-product-table-row">
      <div className="cart-product-table-row-item" style={{ width: "100%" }}>
        <div className="cart-product-image">
          <img
            src={`https://raw.githubusercontent.com/gabygaray/princor-images-rep/main/images/${product.image_id}.png`}
          />
        </div>

        <div className="cart-list-product-name">
          {`${product.name.toUpperCase()} x${product.unity}`}
        </div>
      </div>

      <div className="cart-product-table-row-item">
        <b>{`$${product.price}`}</b>
      </div>

      <div className="cart-product-table-row-item">
        <input
          className="quantity-input"
          type="text"
          value={quantity}
          onChange={handleChangeQuantity}
        />

        <div className="quantity-button-container">
          <div
            className="quantity-button button-rotate"
            onClick={() => increaseQuantity(true)}
          >
            <img src={ArrowIcon} />
          </div>

          <div
            className="quantity-button"
            onClick={() => increaseQuantity(false)}
          >
            <img src={ArrowIcon} />
          </div>
        </div>
      </div>

      <div className="cart-product-table-row-item">
        <b>{`$${(product.price * quantity).toFixed(2)}`}</b>
      </div>

      <div className="trash-icon-container" onClick={handleRemoveFromCart}>
        <img className="trash-icon" src={TrashIcon} />
      </div>
    </div>
  );
};
