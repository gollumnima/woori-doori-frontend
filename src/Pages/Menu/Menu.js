import React from "react";
import "./Menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu_container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Recipes</li>
          <li>Food News</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
