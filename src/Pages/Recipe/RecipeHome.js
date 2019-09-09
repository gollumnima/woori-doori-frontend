import React from "react";
import { Link } from "react-router-dom";
import RecipeHomeCategory from "../Recipe/RecipeHomeCategory";
// import Navbar from "../../Components/Home/Navbar";
import HomeRecipeItem from "../../Components/Home/HomeRecipeItem";
import "./RecipeHome.scss";

class RecipeHome extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
      recipeList: [],
      active_category: 1,
      selectedIndex: 0
    };
  }

  componentDidMount() {
    fetch("http://13.209.12.87:8000/recipe/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ category: response.result });
      });
    this.requestRecipeList(this.state.active_category);
  }

  requestRecipeList(categoryItem_number) {
    fetch(
      `http://13.209.12.87:8000/recipe/recipes?category_item_number=${categoryItem_number}&start_offset=0&recipe_count=8`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        response.json();
      })
      .then(response => {
        this.setState({
          active_category: categoryItem_number,
          recipeList: response.result
        });
      });
  }

  onChangeCategory = e => {
    let categoryItem_number = Number(e.currentTarget.id);
    this.setState({
      selectedIndex: categoryItem_number - 1
    });
    this.requestRecipeList(categoryItem_number);
  };

  render() {
    console.log(this.state.recipeList, "레시피 리스트야");
    return (
      <>
        <div className="RecipeWrap">
          <div className="RecipeHome-tag">
            <div className="RecipeHome page_wrapper">
              <div className="tag_round">
                {this.state.category.map((el, key) => {
                  let selectedStatus =
                    key === this.state.selectedIndex ? true : false;

                  return (
                    <RecipeHomeCategory
                      key={key}
                      name={el.name}
                      value={el.item_number}
                      onChangeCategory={this.onChangeCategory}
                      selected={selectedStatus}
                    />
                  );
                })}
              </div>
              <div className="design">
                {this.state.recipeList.map((item, index) => {
                  let category = item.category_item__item_number;

                  return (
                    <Link to={`/recipe_page/${category}/${index}`}>
                      <HomeRecipeItem
                        key={index}
                        img={item.image}
                        desc={item.categoryItem__name}
                        title={item.title}
                        name={item.name}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default RecipeHome;
