import React, { Component } from "react";
import "./HomeRecipeItem.scss";

class HomeRecipeItem extends Component {
  render() {
    return (
      <>
        <div className="home_recipe_wrapper">
          <div className="home_recipe_container">
            <div className="home_recipe_img_container">
              <img src={this.props.img} alt={this.props.name}></img>
              <div className="home_recipe_words_container">
                <h4 className="home_recipe_category">{this.props.desc}</h4>
                <h2 className="home_recipe_name">{this.props.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HomeRecipeItem;
