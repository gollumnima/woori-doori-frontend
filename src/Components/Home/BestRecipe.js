import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeRecipeItem from "./HomeRecipeItem";

class BestRecipe extends Component {
  render() {
    return (
      <>
        {this.props.baseRecipeList.map(el => {
          return (
            <Link to={`/recipe_page/${el.id}`}>
              <HomeRecipeItem
                id={el.id}
                img={el.img}
                desc={el.desc}
                name={el.name}
              />
            </Link>
          );
        })}
      </>
    );
  }
}

export default BestRecipe;
