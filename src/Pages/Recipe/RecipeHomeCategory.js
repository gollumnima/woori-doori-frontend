import React from "react";
import "./RecipeHome.scss";

class RecipeHomeCategory extends React.Component {
  onClinkHandler = e => {
    this.props.onChangeCategory(e);
  };

  render() {
    return (
      <div className="tag_menu1">
        <div className="check_box_warp">
          <div className="check_box">
            {this.props.items.map((item, index) => {
              return (
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
