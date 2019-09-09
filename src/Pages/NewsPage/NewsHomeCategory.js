import React from "react";
import "./NewsHome.scss";

class NewsHomeCategory extends React.Component {
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
          className="NewsButton"
          style={{
            borderBottom: `${borderColor}`
          }}
        >
          <p
            id={this.props.value}
            onClick={this.onClinkHandler}
            style={{
              color: `${charColor}`
            }}
          >
            {this.props.name}
          </p>
        </div>
      </div>
    );
  }
}

export default NewsHomeCategory;
