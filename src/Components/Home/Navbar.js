import React from "react";
// import Menu from "../../Pages/Menu/Menu";
import "./Navbar.scss";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // nav_drawer = () => {
    //   <Menu />;
    // };
    return (
      <>
        <nav className="nav_bar">
          <div className="menu_wrap">
            <img
              className="menu_btn"
              src={require("../../img/menu_btn.png")}
              alt="menu_btn"
              // onClick={this.nav_drawer}
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
  }
}
export default Navbar;
