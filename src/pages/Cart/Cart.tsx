import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import { CustomerRegister } from "./components/customerRegister/CustomerRegister";
import { ProductCartTable } from "./components/producCartTable/ProductCartTable";
import { useAppSelector } from "../../app/store/hooks";

export const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.appState);

  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      return setStep(2);
    } else {
      console.log("comprar");
    }
  };

  const getTotalCost = () => {
    let total = 0;

    cart.map((cartItem) => {
      const totalByItem = Number(cartItem.product.price) * cartItem.quantity;
      total = total + totalByItem;
    });

    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-container-body">
        <div className="steps-container">
          <div onClick={() => navigate("/")}>{"Catálogo"}</div>
          <div
            onClick={() => setStep(1)}
            className={`${step === 1 && "step-active"}`}
          >
            {"> Carrito de Compras"}
          </div>
          {step === 2 && (
            <div
              onClick={() => setStep(2)}
              className={`${step === 2 && "step-active"}`}
            >
              {"> Registro de Cliente"}
            </div>
          )}
        </div>
        {step === 1 ? <ProductCartTable /> : <CustomerRegister />}
      </div>
      <div className="summary-container">
        <div className="cart-total">
          <div>{"Total"}</div>
          <div>{`$${getTotalCost()}`}</div>
        </div>

        <button className="cart-styled-button" onClick={handleSubmit}>
          {step === 1 ? "Confirmar pedido" : "Finalizar compra"}
        </button>
      </div>
    </div>
  );
};
