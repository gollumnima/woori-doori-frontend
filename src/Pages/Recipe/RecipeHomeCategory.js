import React from "react";
import "./RecipeHome.scss";

class RecipeHomeCategory extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  onClinkHandler = e => {
    this.props.onChangeCategory(e);
  };

  render() {
    return (
      <div className="check_box">
        <div
          className="RecipeButton"
          // onClick={this.onClinkHandler}
          style={{ borderBottom: this.state.borderBottom }}
        >
          <p
            id={this.props.value}
            onClick={this.onClinkHandler}
            style={{ color: this.state.color }}
          >
            {this.props.name}
          </p>
        </div>
      </div>
    );
  }
}

export default RecipeHomeCategory;
