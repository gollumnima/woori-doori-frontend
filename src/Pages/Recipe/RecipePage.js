import React from "react";

class RecipePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="Recipe_container">
          <img
            className="Recipe_img"
            src={require("../../img/pot.jpg")}
            alt="taco"
          ></img>
        </div>
      </>
    );
  }
}
export default RecipePage;
