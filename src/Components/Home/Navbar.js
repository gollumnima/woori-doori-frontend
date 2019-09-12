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
    this.getToken = localStorage.getItem("access_token");
  }

  openMenu = e => {
    if (e.currentTarget.name === "menu_off") {
      this.state.isOpen = 0;
    } else {
      this.state.isOpen = !this.state.isOpen;
    }
    this.setState({
      isOpen: this.state.isOpen
    });
  };

  statetoken = () => {
    localStorage.removeItem("access_token");
  };
  render() {
    console.log(this.props);
    return (
      <div className="nav_container">
        <nav className="nav_bar">
          <div className="menu_wrap_container page_wrapper">
            {this.state.isOpen === true ? (
              <Menu onClickHandle={this.openMenu} />
            ) : null}
            <div className="logo_wrap">
              <Link to="/Home" name="menu_off" onClick={this.openMenu}>
                <h1>Wooridoori.com</h1>
                <img
                  id="image_logo"
                  src={require("../../img/logo.png")}
                  alt="logo"
                ></img>
              </Link>
            </div>
            <div className="right">
              <div className="menu_wrap">
                <h1 className="menu_btn" onClick={this.openMenu}>
                  Menu
                </h1>
              </div>
              <div className="login_wrap" onClick={this.statetoken}>
                {this.getToken ? (
                  <Link to="/" name="menu_off" onClick={this.openMenu}>
                    <h1>Logout</h1>
                  </Link>
                ) : (
                  <Link to="/login" name="menu_off" onClick={this.openMenu}>
                    <h1>Login</h1>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
