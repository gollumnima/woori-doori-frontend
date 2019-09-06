import React from "react";
import "./RecipePage.scss";

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
    console.log("componetDidMount BestRecipe");
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
      .then(response => {
        // console.log("1: ", response);
        return response.json();
      })
      .then(response => {
        // console.log("2: ", response.message);
        this.setState({
          recipeDetail: response
        });

        // console.log(response);
      });
  }

  render() {
    let { recipeDetail } = this.state;
    // console.log(recipeDetail.method);

    return (
      <>
        <div className="recipe_page_total_wrap">
          <div className="recipe_page_container">
            <div className="food_name">
              <h1>{recipeDetail.name}</h1>
            </div>
            <div className="recipe_container">
              <div className="cooking_process">
                <div className="recipe_box">
                  <h1 className="title_line">recipe</h1>
                  <h5>{recipeDetail.method}</h5>
                </div>
              </div>
              <div className="foodie">
                <img src={recipeDetail.image} alt=""></img>
              </div>
            </div>
            <div className="foodie">
              <img src={recipeDetail.image} alt=""></img>
            </div>
          </div>
          {/* <Comment /> */}
        </div>
      </>
    );
  }
}

export default RecipePage;
