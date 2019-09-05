import React from "react";

class NewsHomeCategory extends React.Component {
  onClickHandler = e => {
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
                  className="NewsButton"
                  key={index}
                  value={index}
                  name={this.props.title}
                  onClick={this.onClickHandler}
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

export default NewsHomeCategory;
