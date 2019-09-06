import React from "react";
import "./RecipeHome.scss";

class RecipeHomeCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      borderBottom: "",
      color: ""
    };
  }
  onClinkHandler = e => {
    this.props.onChangeCategory(e);
    this.setState({
      borderBottom: "3px solid orange",
      color: "orange"
    });
  };

  render() {
    return (
      <div className="check_box">
        <div
          className="RecipeButton"
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
