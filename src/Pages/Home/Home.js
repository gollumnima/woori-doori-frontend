import React from "react";
import Rolling from "../../Components/Home/Rolling";
import Info from "../../Components/Home/Info";
// import Navbar from "../../Components/Home/Navbar";
// import Data from "./Data.js";
// import Data2nd from "./Data2nd.js";
import DataNews from "./DataNews.js";
import "./Home.scss";
import BestRecipe from "../../Components/Home/BestRecipe";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      bestRecipe: []
    };
  }

  componentDidMount() {
    console.log("componetDidMount BestRecipe");
    fetch("http://10.58.6.255:8000/recipe/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        command: 3,
        recipe_no: 1,
        categoryItem_no: 2,
        start_no: 0,
        recipe_cnt: 3
      })
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          bestRecipe: response
        });
        // console.log(response);
      });
  }
  componentDidMount() {
    fetch("http://10.58.6.255:8000/recipe/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        command: 3,
        recipe_no: 1,
        categoryItem_no: 2,
        start_no: 0,
        recipe_cnt: 3
      })
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          bestRecipe: response
        });
      });

  render() {
    let DataC = DataNews;

  render() {
    return (
      <div className="home_container page_wrapper">
        <div className="home_total_page_wrapper">
          <Rolling />
          <div className="recipe_tap">
            <div className="title_line">
              <h1>Best Recipes</h1>
            </div>
            <div className="BRWrapper">
              <BestRecipe recipe={this.state.bestRecipe} />
            </div>
            <div className="title_line">
              <h1>Recipes of the Month</h1>
            </div>
            <div className="BRWrapper">
              <BestRecipe recipe={this.state.bestRecipe} />
            </div>
          </div>
          <div className="news_tap">
            <div className="title_line">
              <h1>Food News</h1>
            </div>
            <div className="food_news_container"></div>
            <Info newslist={this.state.HomeNewsList} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
