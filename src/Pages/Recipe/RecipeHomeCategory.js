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
        <div className="RecipeButton">
          <p id={this.props.value} onClick={this.onClinkHandler}>
            {this.props.name}
          </p>
        </div>
      </div>
    );
  }
}

export default RecipeHomeCategory;
