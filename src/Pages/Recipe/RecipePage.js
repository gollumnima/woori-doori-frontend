import React from "react";
import "./RecipePage.scss";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeNo: this.props.match.params.recipe_number,
      recipeDetail: {
        name: "",
        method: "",
        image: ""
      }
    };
  }

  componentDidMount() {
    fetch(
      `http://10.58.6.255:8000/recipe/recipes?category_item_number=${this.categoryItem_number}&start_offset=0&recipe_count=8`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        Params: {
          category_item_number: this.props.categoryItem_number,
          start_offset: 0,
          recipe_count: 8
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          recipeDetail: response
        });

        // console.log(response);
      });
  }

  render() {
    let { recipeDetail } = this.state;

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
          </div>
          {/* <Comment /> */}
        </div>
        {/* <Comment /> */}
      </>
    );
  }
}

export default RecipePage;
