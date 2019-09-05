import React from "react";
import "./RecipeHome.scss";

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
