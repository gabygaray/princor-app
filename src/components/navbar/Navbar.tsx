import "./styles.css";

import { useAppDispatch } from "../../app/store/hooks";

import PrincorLogo from "../../assets/princor-logo.png";
import CartIcon from "../../assets/icons/cart.png";

import { setSearcherValue } from "../../app/store/slices/appStateSlice";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setSearcherValue(value));
  };

  const { pathname } = useLocation();

  return (
    <div className="nav-container">
      <div className="logo-container" onClick={() => navigate("/")}>
        <div className="logo">
          <img src={PrincorLogo} />
        </div>
      </div>

      {pathname === "/" && (
        <div className="searcher-container">
          <input
            type="text"
            className={"styled-navbar-input"}
            onChange={handleChange}
            placeholder="Buscar producto"
          />
        </div>
      )}

      {pathname !== "/cart" && (
        <div className="cart-icon-container" onClick={() => navigate("/cart")}>
          <img className="cart-icon" src={CartIcon} />
        </div>
      )}
    </div>
  );
};
