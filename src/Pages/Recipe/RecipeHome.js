import React from "react";
import "./RecipeHome.scss";
import RecipeHomeCategory from "../Recipe/RecipeHomeCategory";
import Navbar from "../../Components/Home/Navbar";
import BestRecipe from "../../Components/Home/BestRecipe";
import Data from "../Home/Data";
let category = [
  {
    title: "국가",
    items: ["한국", "중국", "일본", "이탈리아"]
  },
  {
    title: "재료",
    items: ["돼지고기", "소고기", "샐러드", "닭고기"]
  }
];

class RecipeHome extends React.Component {
  constructor() {
    super();
    this.state = { state: 0 };
  }
  onChangedRadio = () => {
    this.setState({});
  };
  render() {
    let DataA = Data;
    return (
      <>
        <Navbar />

        <div className="RecipeHome-tag">
          <div className="RecipeHome">
            <div className="tag_round">
              <div className="tag">
                {category.map((el, key) => {
                  return (
                    <RecipeHomeCategory
                      key={key}
                      title={el.title}
                      items={el.items}
                    />
                  );
                })}
              </div>
              <div className="btn_wrap">
                <button onClick={this.onChangedRadio} className="btn">
                  확인
                </button>
              </div>
            </div>
            <div className="design">
              <div className="title_line">
                <h1>Best Recipes</h1>
              </div>
              <div className="recipe_tap">
                <BestRecipe baseRecipeList={DataA} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecipeHome;
