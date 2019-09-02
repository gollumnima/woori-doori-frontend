import React from "react";
import "./RecipePage.scss";
import Navbar from "../../Components/Home/Navbar";

class RecipePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <>
          <Navbar />
        </>
        <div className="recipe_container">
          <div className="cooking_process_container">
            <div className="recipe_box">
              <div className="food_name">
                <h1>Hamburger</h1>
              </div>
              <div className="food_ingredients_box">
                <h1 className="title_line">Ingredients</h1>
                <h5>
                  {" "}
                  햄, 번, 토마토, 치즈, 베이컨
                  <br />
                  기타 등등 가나다라마바사아~{" "}
                </h5>
              </div>
              <div className="cooking_process">
                <h1>Recipe</h1>
                <h3>
                  1. 맥도날드에 간다 <br />
                  2. 베토디를 주문한다 <br />
                  3. 맛있게 먹는다 <br />
                  4. 아이스크림으로 마무리 한다.
                </h3>
              </div>
            </div>
            <div className="recipe_img_wrapper">
              <img
                className="recipe_img"
                src={require("../../img/hamburger.jpg")}
                alt="bulgogi"
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default RecipePage;
