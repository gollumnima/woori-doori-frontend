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
  openMenu = () => {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true
      });
    } else {
      this.setState({
        isOpen: false
      });
    }
  };
  render() {
    return (
      <div className="nav_container">
        <nav className="nav_bar">
          <div className="menu_wrap_container page_wrapper">
            {this.state.isOpen === true ? <Menu /> : null}
            <Link to="/Home">
              <div className="logo_wrap">
                {/* <img src={require("../../img/logo.png")} alt="logo"></img> */}
                <h1>Wooridoori.com</h1>
              </div>
            </Link>
            <div className="right">
              <div className="menu_wrap">
                <h1 className="menu_btn" onClick={this.openMenu}>
                  Menu
                </h1>
              </div>
              <div className="login_wrap">
                <Link to="/login">
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
