import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu_container">
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
    );
  }
}

export default Menu;
