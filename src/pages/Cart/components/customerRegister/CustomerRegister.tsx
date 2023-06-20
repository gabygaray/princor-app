import "./styles.css";

export const CustomerRegister = () => {
  return (
    <div className="cart-customer-register">
      <div className="customer-register-title">Datos personales y de envío</div>
      <input
        type="text"
        name="name"
        placeholder="Nombre*"
        value=""
        onChange={() => console.log("")}
        className="cart-styled-input"
        style={{ width: "49%" }}
        required
      />
      <input
        type="text"
        name="lastname"
        placeholder="Apellido*"
        value=""
        onChange={() => console.log("")}
        className="cart-styled-input"
        style={{ width: "49%" }}
        required
      />
      <input
        type="text"
        name="dni"
        placeholder="DNI*"
        value=""
        onChange={() => console.log("")}
        className="cart-styled-input"
      />
      <input
        type="text"
        name="address"
        placeholder="Dirección de envío (calle, número, localidad, CP.)*"
        value=""
        onChange={() => console.log("")}
        className="cart-styled-input"
      />
      <input
        type="text"
        name="cellphone"
        placeholder="Teléfono*"
        value=""
        onChange={() => console.log("")}
        className="cart-styled-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        value=""
        onChange={() => console.log("")}
        className="cart-styled-input"
      />
    </div>
  );
};
