import { useState } from "react";
import "./styles.css";

import { CustomerRegister } from "./components/customerRegister/CustomerRegister";
import { ProductCartTable } from "./components/producCartTable/ProductCartTable";

export const Cart = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      return setStep(2);
    } else {
      console.log("comprar");
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-container-body">
        {step === 1 ? <ProductCartTable /> : <CustomerRegister />}
      </div>
      <div className="summary-container">
        <div className="cart-total">
          <div>{"Total"}</div>
          <div>{"$13.000"}</div>
        </div>

        <button className="cart-styled-button" onClick={handleSubmit}>
          {step === 1 ? "Confirmar pedido" : "Finalizar compra"}
        </button>
      </div>
    </div>
  );
};
