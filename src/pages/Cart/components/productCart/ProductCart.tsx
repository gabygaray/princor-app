import "./styles.css";

import TrashIcon from "../../../../assets/tarrito-basura.png";
import ArrowIcon from "../../../../assets/flecha.png";

import { CartItem } from "../../../../app/store/slices/appStateSlice.interface";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { setCart } from "../../../../app/store/slices/appStateSlice";

export interface ProductCartProps {
  cartItem: CartItem;
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
          {`Dulce de Leche Vacalin Repostero ${"x10 kg."}`}
        </div>
      </div>

      <div className="cart-product-table-row-item">
        <b>{"$13.000"}</b>
      </div>

      <div className="cart-product-table-row-item">
        <input className="quantity-input" type="text" />

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
        <b>{"$13.000"}</b>
      </div>

      <div className="trash-icon-container" onClick={handleRemoveFromCart}>
        <img className="trash-icon" src={TrashIcon} />
      </div>
    </div>
  );
};
