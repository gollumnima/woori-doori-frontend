import React from "react";
import "./RecipeHome.scss";

// let category = [
//   {
//     title: "국가",
//     item: ["한국", "중국", "일본", "이탈리아"]
//   },
//   {
//     title: "재료",
//     item: ["돼지고기", "수박", "양파", "닭고기"]
//   }
// ];

class RecipeHomeCategory extends React.Component {
  onClinkHandler = e => {
    this.props.onChangeCategory(e);
  };

  render() {
    return (
      <div className="check_box">
        {/* {this.props.items.map((item, index) => {
              return ( */}
        <div
          className="RecipeButton"

          // category__name={this.props.category__name}
          // onClick={this.onClinkHandler}
        >
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default RecipeHomeCategory;
