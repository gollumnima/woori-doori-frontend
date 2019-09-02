import React, { Component } from "react";
import "./BestRecipe.scss";

class BestRecipe extends Component {
  render() {
    return (
      <>
        {this.props.baseRecipeList.map(el => {
          return (
            <div className="home_recipe_wrapper">
              <div className="home_recipe_container">
                <div className="home_recipe_img_container">
                  <img src={el.img} alt={el.name}></img>
                  <div className="home_recipe_words_container">
                    <h4 className="home_recipe_category">{el.desc}</h4>
                    <h2 className="home_recipe_name">{el.name}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default BestRecipe;
