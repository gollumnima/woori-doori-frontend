import React from "react";
// import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeRecipeItem from "./HomeRecipeItem";

// const RECIPE_END_POINT = "http://10.58.6.255:8000/recipe/recipes";

class BestRecipe extends React.Component {
  constructor() {
    super();
  }

  // onChangeCategory = e => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   this.state.selectedCategory[name] = Number(value);
  //   this.setState({
  //     selectedCategory: this.state.selectedCategory
  //   });
  // };

  render() {
    console.log(this.props);
    // const { homeRecipe1 } = t÷his.state;
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
                // name={el.name}
              />
            </Link>
          );
        })}
      </>
    );
  }
}

export default BestRecipe;
