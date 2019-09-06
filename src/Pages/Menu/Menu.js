import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
// import { highlightTrailingWhitespace } from "jest-matcher-utils";

class Menu extends React.Component {
  onClickHandle = e => {
    this.props.onClickHandle(e);
  };

  render() {
    // let changeMenu = 0;
    // let menu_css = changeMenu ? "menu_container1" : "menu_container2";
    return (
      //       <div className={menu_css}>
      <div className="menu_container">
        <div className="list_wrap">
          <ul>
            <Link to="/home" onClick={this.onClickHandle}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={this.onClickHandle}>
              <li>About</li>
            </Link>
            <Link to="/recipeHome" onClick={this.onClickHandle}>
              <li>Recipes</li>
            </Link>
            <Link to="/newsHome" onClick={this.onClickHandle}>
              <li>Food News</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
