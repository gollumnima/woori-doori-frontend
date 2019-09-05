import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeRecipeItem from "./HomeRecipeItem";

class BestRecipe extends Component {
  render() {
    return (
      <>
        {this.props.recipe.map((el, index) => {
          return (
            <Link to={`/recipe_page/${el.recipe_no}`}>
              <HomeRecipeItem
                key={index}
                title={el.title}
                img={el.image}
                desc={el.categoryItem__name}
              />
            </Link>
          );
        })}
      </>
    );
  }
}

export default BestRecipe;
