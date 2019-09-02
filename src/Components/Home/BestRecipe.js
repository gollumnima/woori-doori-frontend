import React, { Component } from "react";
import "./BestRecipe.scss";
import HomeRecipeItem from "./HomeRecipeItem";

class BestRecipe extends Component {
  render() {
    return (
      <>
        {this.props.baseRecipeList.map(el => {
          return <HomeRecipeItem img={el.img} desc={el.desc} name={el.name} />;
        })}
      </>
    );
  }
}

export default BestRecipe;
