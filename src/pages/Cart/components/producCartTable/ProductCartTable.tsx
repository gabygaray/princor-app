import "./styles.css";

import { useAppSelector } from "../../../../app/store/hooks";

import { ProductCart } from "../productCart/ProductCart";

export const ProductCartTable = () => {
  const { cart } = useAppSelector((state) => state.appState);
  return (
    <div className="cart-product-table">
      <div className="cart-product-table-header">
        <div
          className="cart-product-table-header-item"
          style={{ width: "100%" }}
        >
          Producto
        </div>
        <div className="cart-product-table-header-item">Precio</div>
        <div className="cart-product-table-header-item">Cantidad</div>
        <div className="cart-product-table-header-item">Subtotal</div>
      </div>

      <div className="cart-product-table-body">
        {cart.map((cartItem) => (
          <ProductCart cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};
