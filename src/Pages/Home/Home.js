import React from "react";
import Rolling from "../../Components/Home/Rolling";
import Info from "../../Components/Home/Info";
import "./Home.scss";
import BestRecipe from "../../Components/Home/BestRecipe";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      bestRecipe: [],
      recentRecipe: [],
      homeNews: []
    };
  }

  componentDidMount() {
    fetch(
      "http://10.58.5.78:8080/recipe/recipes?category_item_number=5&start_offset=0&recipe_count=4",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          recentRecipe: response.result
        });
      });
    fetch(
      "http://10.58.5.78:8080/recipe/recipes?category_item_number=1&start_offset=0&recipe_count=4",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          bestRecipe: response.result
        });
      });
    fetch(`http://10.58.5.78:8080/news?offset=${this.newsIndex}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          homeNews: result[0].news_data
        });
      });
  }

  randomNum = () => {
    return Math.floor(Math.random() * 40);
  };

  newsIndex = this.randomNum();

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
              <BestRecipe recipe={this.state.recentRecipe} />
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
            <Info newslist={this.state.homeNews} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
