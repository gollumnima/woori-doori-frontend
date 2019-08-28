import React from "react";
import Rolling from "../../Components/Home/Rolling";
import BestRecipe from "../../Components/Home/BestRecipe";
import Info from "../../Components/Home/Info";
import Navbar from "../../Components/Home/Navbar";
import "./Home.scss";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
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

            <div className="home_recipe_container">
              <>
                <BestRecipe />
                <BestRecipe />
                <BestRecipe />
                <BestRecipe />
              </>
            </div>
            <div className="title_line">
              <h1>Recipes of the Month</h1>
            </div>
            <div className="home_recipe_container">
              <BestRecipe />
              <BestRecipe />
              <BestRecipe />
              <BestRecipe />
            </div>
          </div>
          <div className="news_tap">
            <div className="title_line">
              <h1>Food News</h1>
            </div>
            <div className="food_news_container"></div>
            <Info />
            <Info />
            <Info />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
