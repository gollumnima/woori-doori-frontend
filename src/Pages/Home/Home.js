import React from "react";
import Rolling from "../../Components/Home/Rolling";
import BestRecipe from "../../Components/Home/BestRecipe";
import Info from "../../Components/Home/Info";
import Navbar from "../../Components/Home/Navbar";
import "./Home.scss";

// const data = [
//   { id: 1, name: "복희", img: "url어쩌구저쩌구", desc: "존맛탱" },
//   { id: 2, name: "치킨", img: "url어쩌구저쩌구", desc: "jmt" },
//   { id: 3, name: "마카롱", img: "url어쩌구저쩌구", desc: "달달쓰" }
// ];
class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // let food = [];
    // for(let i=0; i < data.length; i++) {
    //   food.push(<BestRecipe id={data[i].id, desc={data[i].desc}}/>)
    // }
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
              {/* {data.map(el => {
                return <BestRecipe key={index} info={el} />;
              })} */}

              <BestRecipe />
              <BestRecipe />
              <BestRecipe />
              <BestRecipe />
            </div>
            <div className="title_line">
              <h1>Recipes of the Month</h1>
            </div>
            <div className="BRWrapper">
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
