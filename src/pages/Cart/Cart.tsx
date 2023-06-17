import { ProductCart } from "./components/ProductCart";

export const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-container-body">
        <div className="cart-product-table">
          {/* HEADER */}
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
          {/* BODY */}
          <ProductCart product={""} />
          <ProductCart product={""} />
          <ProductCart product={""} />
          <ProductCart product={""} />
          <ProductCart product={""} />
          <ProductCart product={""} />
          <ProductCart product={""} />
          <ProductCart product={""} />
          <ProductCart product={""} />
          <ProductCart product={""} />
          <ProductCart product={""} />
        </div>
      </div>
      <div className="summary-container"></div>
    </div>
  );
};
