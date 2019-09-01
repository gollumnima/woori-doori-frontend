import React from "react";
import Rolling from "../../Components/Home/Rolling";
import BestRecipe from "../../Components/Home/BestRecipe";
import Info from "../../Components/Home/Info";
import Navbar from "../../Components/Home/Navbar";
import Data from "./Data.js";
import Data2nd from "./Data2nd.js";
import DataNews from "./DataNews.js";
import "./Home.scss";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  render() {
    let DataA = Data;
    let DataB = Data2nd;
    let DataC = DataNews;

    return (
      <div className="home_container">
        <>
          <Navbar />
        </>
        <div className="page_wrapper">
          <Rolling />
          <div className="recipe_tap">
            <div className="title_line">
              <h1>Best Recipes</h1>
            </div>
            <div className="BRWrapper">
              <BestRecipe baseRecipeList={DataA} />
            </div>
            <div className="title_line">
              <h1>Recipes of the Month</h1>
            </div>
            <div className="BRWrapper">
              <BestRecipe baseRecipeList={DataB} />
            </div>
          </div>
          <div className="news_tap">
            <div className="title_line">
              <h1>Food News</h1>
            </div>
            <div className="food_news_container"></div>
            <Info baseNewsList={DataC} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
