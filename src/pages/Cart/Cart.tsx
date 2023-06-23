import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { createCustomerThunk } from "../../app/store/thunks/customerThunks";

import { CustomerRegister } from "./components/customerRegister/CustomerRegister";
import { ProductCartTable } from "./components/producCartTable/ProductCartTable";
import { useSnackbar } from "notistack";

export const Cart = () => {
  const navigate = useNavigate();
  const { cart, customerFormData } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [step, setStep] = useState(1);

  const validateForm = () => {
    const values = Object.values(customerFormData);

    if (values.every((value) => value)) {
      return true;
    } else {
      enqueueSnackbar("Debes completar todos los campos", {
        variant: "error",
      });
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      cart.length
        ? setStep(2)
        : enqueueSnackbar("Debes agregar por lo menos un producto.", {
            variant: "error",
          });
    } else {
      if (validateForm()) dispatch(createCustomerThunk(customerFormData));
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
