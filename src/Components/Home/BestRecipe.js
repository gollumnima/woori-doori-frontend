import React from "react";
import { Link } from "react-router-dom";
import HomeRecipeItem from "./HomeRecipeItem";

class BestRecipe extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.el !== this.props.el;
  // }
  render() {
    return (
      <>
        {this.props.recipe.map((el, index) => {
          debugger;
          let category = el.category_item__item_number;
          return (
            <Link to={`/recipe_page/${category}/${index}`}>
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
