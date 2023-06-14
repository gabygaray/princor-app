import { Navbar } from "../navbar/Navbar";

import "./styles.css";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <div className="main-component">{children}</div>
    </div>
  );
};
