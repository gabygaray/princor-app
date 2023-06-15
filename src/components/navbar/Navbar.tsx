import "./styles.css";

import PrincorLogo from "../../../public/princor-logo.png";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="logo">
          <img src={PrincorLogo} />
        </div>
      </div>
    </div>
  );
};
