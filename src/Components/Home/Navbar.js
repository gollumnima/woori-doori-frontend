import React from "react";
import Menu from "../../Pages/Menu/Menu";
import { Link } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  openMenu = e => {
    if (e.currentTarget.name === "menu_off") {
      this.state.isOpen = 0;
    } else {
      this.state.isOpen = !this.state.isOpen;
    }
<<<<<<< HEAD
=======

>>>>>>> 8a87a340cbe4949bdb803f73b265b63d6949c6a5
    this.setState({
      isOpen: this.state.isOpen
    });
  };

  render() {
    return (
      <div className="nav_container">
        <nav className="nav_bar">
          <div className="menu_wrap_container page_wrapper">
            {this.state.isOpen === true ? (
              <Menu onClickHandle={this.openMenu} />
            ) : null}
<<<<<<< HEAD
=======

>>>>>>> 8a87a340cbe4949bdb803f73b265b63d6949c6a5
            <div className="logo_wrap">
              <Link to="/Home" name="menu_off" onClick={this.openMenu}>
                <h1>Wooridoori.com</h1>
              </Link>
            </div>
            <div className="right">
              <div className="menu_wrap">
                <h1 className="menu_btn" onClick={this.openMenu}>
                  Menu
                </h1>
              </div>
              <div className="login_wrap">
                <Link to="/login" name="menu_off" onClick={this.openMenu}>
                  <h1>Login</h1>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
