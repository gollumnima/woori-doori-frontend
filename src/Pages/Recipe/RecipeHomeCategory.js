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
    let borderColor = this.props.selected
      ? "3px solid orange"
      : "2px solid #bdbdbd";

    let charColor = this.props.selected ? "orange" : "black";

    return (
      <div className="check_box">
        <div
          className="RecipeButton"
          style={{
            borderBottom: `${borderColor}`
          }}
        >
          <p
            id={this.props.value}
            style={{
              color: `${charColor}`
            }}
            onClick={this.onClinkHandler}
          >
            {this.props.name}
          </p>
        </div>
      </div>
    );
  }
}

export default RecipeHomeCategory;
