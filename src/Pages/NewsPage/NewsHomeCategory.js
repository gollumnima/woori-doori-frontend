import React from "react";

class NewsHomeCategory extends React.Component {
  onClinkHandler = e => {
    this.props.onChangeCategory(e);
  };

  render() {
    return (
      <div className="check_box">
        <div className="NewsButton">
          <p id={this.props.value} onClick={this.onClinkHandler}>
            {this.props.name}
          </p>
        </div>
      </div>
    );
  }
}

export default NewsHomeCategory;
