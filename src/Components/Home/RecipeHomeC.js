import React from "react";
import "./RecipeHomeC.scss";

class RecipeHomeC extends React.Component {
  render() {
    return (
      <div className="Recipe-home-component">
        <div className="RecipeHomeC-img">
          <img src={require("../../img/steak.jpg")} alt="steaks" />
        </div>
        <div className="RecipeHomeC-text">
          <div className="RecipeHomeC-text-tittle">test</div>
          <div className="RecipeHomeC-text-subtittle">text</div>
        </div>
      </div>
    );
  }
}

export default RecipeHomeC;
