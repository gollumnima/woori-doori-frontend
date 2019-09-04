import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

class Menu extends React.Component {
  render() {
    // let changeMenu = 0;
    // let menu_css = changeMenu ? "menu_container1" : "menu_container2";
    return (
      //       <div className={menu_css}>
      <div className="menu_container">
        <div className="list_wrap">
          <ul>
            <Link to="/Home">
              <li>Home</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
            <Link to="/recipeHome">
              <li>Recipes</li>
            </Link>
            <Link to="/newsHome">
              <li>Food News</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
