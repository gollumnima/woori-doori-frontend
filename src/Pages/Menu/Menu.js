import React from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="menu_container">
          <h1>X</h1>
          <>
            <Link to="Home">
              <h1>Home</h1>
            </Link>
            <h1>About</h1>
            <h1>Recipes</h1>
            <h1>Food News</h1>
          </>
        </div>
      </>
    );
  }
}

export default Menu;
