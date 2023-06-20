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

      {cart.length ? (
        <div className="cart-product-table-body">
          {cart.map((cartItem) => (
            <ProductCart key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      ) : (
        <div className="empty-cart-container">
          <div> El carrito de compras esta vacío.</div>
          <div>
            Puedes agregar productos desde el botón agregar en el catálogo.
          </div>
        </div>
      )}
    </div>
  );
};
