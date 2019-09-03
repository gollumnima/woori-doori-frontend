import React from "react";
import Menu from "../../Pages/Menu/Menu";
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
          <div className="menu_wrap_container">
            {this.state.isOpen === true ? <Menu /> : null}
            <div className="logo_wrap">
              <h1>Wooridoori.com</h1>
            </div>
            <div className="right">
              <div className="menu_wrap">
                <h1 className="menu_btn" onClick={this.openMenu}>
                  Menu
                </h1>
              </div>
              <div className="login_wrap">
                <h1>Login</h1>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
