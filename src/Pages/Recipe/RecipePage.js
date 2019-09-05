import React from "react";
import "./RecipePage.scss";
// import Data from "../../Pages/Home/Data";
import Comment from "../../Components/Home/Comment";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeNo: this.props.match.params.id,
      recipeDetail: {
        name: "",
        method: "",
        image: ""
      }
    };
  }

  componentDidMount() {
    fetch("http://10.58.6.255:8000/recipe/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        command: 1,
        recipe_no: this.props.match.params.id,
        categoryItem_no: 2,
        start_no: 0,
        recipe_cnt: 3
      })
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          recipeDetail: response
        });
      });
  }
  render() {
    let { recipeDetail } = this.state;

    return (
      <div className="recipe_page_total_wrap">
        <div className="recipe_page_container">
          <div className="food_name">
            <h1>{recipeDetail.name}</h1>
          </div>
          <div className="recipe_container">
            <div className="cooking_process">
              <div className="ingredients_box">
                <h1 className="title_line">Ingredients</h1>
                <h5> 햄, 번, 토마토, 치즈, 베이컨</h5>
              </div>
              <div className="recipe_box">
                <h1 className="title_line">recipe</h1>
                <h5>{recipeDetail.method}</h5>
              </div>
            </div>
            <div className="foodie">
              <img src={recipeDetail.image} alt=""></img>
            </div>
          </div>
        </div>
        <Comment />
      </div>
    );
  }
}

export default RecipePage;
