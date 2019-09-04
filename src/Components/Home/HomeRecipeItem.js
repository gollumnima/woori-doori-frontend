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
          <div className="home_recipe_category">{this.props.desc}한식</div>
          <div className="home_recipe_name">
            {this.props.name}백종원의 제욱복음 만드는 방법
          </div>
          <div className="home_recipe_subtitle">제육복음</div>
        </div>
      </div>
    );
  }
}
export default HomeRecipeItem;
