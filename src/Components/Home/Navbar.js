import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="nav_bar">
        <div className="menu_wrap">
          <img
            className="menu_btn"
            src={require("../../img/menu_btn.png")}
            alt="menu_btn"
          />
        </div>
        <div className="logo_wrap">
          <img
            className="logo"
            src={require("../../img/logo.png")}
            alt="logo"
          />
          <h1>Wooridoori.com</h1>
        </div>

        <div className="login_wrap">
          <img
            className="login_btn"
            src={require("../../img/chef.png")}
            alt="login"
          />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
