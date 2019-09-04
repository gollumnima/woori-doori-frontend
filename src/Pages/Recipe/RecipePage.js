import React from "react";
import "./RecipePage.scss";
import Data from "../../Pages/Home/Data";
import Navbar from "../../Components/Home/Navbar";
import Comment from "../../Components/Home/Comment";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeNo: this.props.match.params.id
    };
  }

  render() {
    let recipeData = Data[this.state.recipeNo];

    return (
      <>
        <Navbar />
        <div className="recipe_page_total_wrap">
          <div className="recipe_container">
            <div className="food_name">{/* <h1>{recipeData.name}</h1> */}</div>
            <div className="cooking_process_container">
              <div className="recipe_box">
                <div className="food_ingredients_box">
                  <h1 className="title_line">Ingredients</h1>
                  <h5>
                    햄, 번, 토마토, 치즈, 베이컨
                    <br />
                    기타 등등 가나다라마바사아~
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
                {/* <img
                  className="recipe_img"
                  src={recipeData.img}
                  alt="bulgogi"
                ></img> */}
              </div>
            </div>
          </div>
        </div>
        <Comment />
      </>
    );
  }
}
export default RecipePage;
