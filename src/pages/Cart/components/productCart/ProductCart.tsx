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

  return (
    <div className="cart-product-table-row">
      <div className="cart-product-table-row-item" style={{ width: "100%" }}>
        <div className="cart-product-image">
          <img
            src={`https://raw.githubusercontent.com/gabygaray/princor-app/main/public/products/${"IMG_001"}.png`}
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
        <input className="quantity-input" type="text" value={quantity} />

        <div className="quantity-button-container">
          <div className="quantity-button button-rotate">
            <img src={ArrowIcon} />
          </div>

          <div className="quantity-button">
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
