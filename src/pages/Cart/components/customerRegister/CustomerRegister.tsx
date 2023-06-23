import "./styles.css";

import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { setCustomerFormData } from "../../../../app/store/slices/appStateSlice";

export const CustomerRegister = () => {
  const dispatch = useAppDispatch();
  const { customerFormData } = useAppSelector((state) => state.appState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(
      setCustomerFormData({
        ...customerFormData,
        [name]: value,
      })
    );
  };

  return (
    <div className="cart-customer-register">
      <div className="customer-register-title">Datos personales y de envío</div>
      <input
        type="text"
        name="lastname"
        placeholder="Apellido*"
        value={customerFormData.lastname}
        onChange={handleInputChange}
        className="cart-styled-input"
        style={{ width: "49%" }}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Nombre*"
        value={customerFormData.name}
        onChange={handleInputChange}
        className="cart-styled-input"
        style={{ width: "49%" }}
        required
      />
      <input
        type="text"
        name="dni"
        placeholder="DNI*"
        value={customerFormData.dni}
        onChange={handleInputChange}
        className="cart-styled-input"
      />
      <input
        type="text"
        name="address"
        placeholder="Dirección de envío (calle, número, localidad, CP.)*"
        value={customerFormData.address}
        onChange={handleInputChange}
        className="cart-styled-input"
      />
      <input
        type="text"
        name="telephone"
        placeholder="Teléfono*"
        value={customerFormData.telephone}
        onChange={handleInputChange}
        className="cart-styled-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={customerFormData.email}
        onChange={handleInputChange}
        className="cart-styled-input"
      />
    </div>
  );
};
