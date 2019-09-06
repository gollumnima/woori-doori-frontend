import React from "react";
import "./RecipeHome.scss";
import { Link } from "react-router-dom";
import RecipeHomeCategory from "../Recipe/RecipeHomeCategory";
import Navbar from "../../Components/Home/Navbar";
import HomeRecipeItem from "../../Components/Home/HomeRecipeItem";
import "./RecipeHome.scss";

class RecipeHome extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
      recipeList: [],
      active_category: 1
    };
  }

  onChangeCategory = e => {
    let categoryItem_number = Number(e.currentTarget.id);
    this.requestRecipeList(categoryItem_number);
  };
  componentDidMount() {
    // fetch (카타고리를 읽어오기)

    // for (let index = 0; index < CategoryData.length; index++) {
    //   this.state.selectedCategory[CategoryData[index].title[1]] = -1;
    // }
    fetch("http://10.58.6.255:8000/recipe/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ category: response });
      });

    this.requestRecipeList(this.state.active_category);
  }

  requestRecipeList(categoryItem_number) {
    fetch("http://10.58.6.255:8000/recipe/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        command: 2,
        recipe_no: 1,
        categoryItem_no: categoryItem_number,
        start_no: 0,
        recipe_cnt: 3
      })
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          recipeList: response
        });
        // console.log(response);
      });
  }
  onChangeCategory = e => {
    let categoryItem_number = Number(e.currentTarget.id);
    this.requestRecipeList(categoryItem_number);
  };
  render() {
    return (
      <>
        <div className="RecipeWrap">
          <Navbar />
          <div className="RecipeHome-tag">
            <div className="RecipeHome page_wrapper">
              <div className="tag_round">
                {this.state.category.map((el, key) => {
                  return (
                    <RecipeHomeCategory
                      key={key}
                      name={el.name}
                      value={el.item_no}
                      onChangeCategory={this.onChangeCategory}
                    />
                  );
                })}
              </div>
              <div className="design">
                {this.state.recipeList.map((item, index) => {
                  return (
                    <Link to={`/recipe_page/${item.recipe_no}`}>
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
