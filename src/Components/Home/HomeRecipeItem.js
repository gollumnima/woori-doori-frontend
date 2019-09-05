import React, { Component } from "react";
import "./HomeRecipeItem.scss";

class HomeRecipeItem extends Component {
  render() {
    return (
      <div className="home_recipe_img_container">
        <div className="home_img_box">
          <img src={this.props.img} alt={this.props.name}></img>
        </div>
        <div className="home_recipe_words_container">
          <div className="home_recipe_category">{this.props.desc}</div>
          <div className="home_recipe_name">{this.props.title}</div>
          <div className="home_recipe_subtitle">{this.props.name}</div>
        </div>
      </div>
    );
  }
}
export default HomeRecipeItem;
