import React from "react";
import "./BestRecipe.scss";

class BestRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="home_recipe_wrapper">
          <div className="home_recipe_container">
            <div className="home_recipe_img_container">
              <img src={require("../../img/toppokki.jpg")} alt="grill"></img>
              <div className="home_recipe_words_container">
                <h4 className="home_recipe_category">Korean</h4>
                <h2 className="home_recipe_name">Toppokki</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BestRecipe;
