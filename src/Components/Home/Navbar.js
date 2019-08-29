import React from "react";
import Menu from "../../Pages/Menu/Menu";
import "./Navbar.scss";
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // openMenu = () => {
  //   return (
  //     <div className="menu_container">
  //       <ul>
  //         <li>X</li>
  //         <li>Home</li>
  //         <li>About</li>
  //         <li>Recipes</li>
  //         <li>Food News</li>
  //       </ul>
  //     </div>
  //   );
  // };
  // closeMenu = () => {};
  openMenu = () => {
    return <Menu />;
  };
  render() {
    return (
      <div className="nav_container">
        <div className="menu_container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Recipes</li>
            <li>Food News</li>
          </ul>
        </div>
        <nav className="nav_bar">
          <div className="menu_wrap">
            <img
              className="menu_btn"
              src={require("../../img/menu_btn.png")}
              alt="menu_btn"
              onClick={this.openMenu}
              // onClick={(this.menu_container.style.overflow = "visible")}
              // onClick={(this.menu_container.style.left = 0 + `px`)}
              // onClick={this.openMenu}
              // onClick={this.openMenu}
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
      </div>
    );
  }
}
export default Navbar;
