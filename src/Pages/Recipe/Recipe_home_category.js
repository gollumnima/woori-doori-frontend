import React from "react";
import "./Recipe_home_category.scss";

let category = [
  {
    category: "국가",
    national: ["한국", "중국", "일본", "이탈리아"]
  }
];

class Recipe_home_category extends React.Component {
  render() {
    return (
      <div className="tag_menu1">
        <div className="tag_menu_color"> {this.props.category}</div>
        <div className="check_box_warp">
          <div className="check_box">
            <input type="checkbox" />
            <label>
              {/* {category.map((el, item) => {
                return;
              })} */}
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe_home_category;
