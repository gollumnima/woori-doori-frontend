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
      <div className="tag_menu1">
        {/* <div className="tag_menu_color"> {this.props.title}</div> */}
        <div className="check_box_warp">
          <div className="check_box">
            {this.props.items.map((item, index) => {
              return (
                // <label key={index}>
                //   <button
                //     className="checkbox"
                //     type="radio"
                //     key={index}
                //     name={this.props.title}
                //     value={index + 1}
                //     checked={this.state.selectedOption}
                //     onChange={this.onChangedRadio}
                //   />
                //   {item[1]}
                // </label>

                <div
                  className="RecipeButton"
                  key={index}
                  value={index}
                  name={this.props.title}
                  onClick={this.onClinkHandler}
                >
                  <p>{item[1]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeHomeCategory;
