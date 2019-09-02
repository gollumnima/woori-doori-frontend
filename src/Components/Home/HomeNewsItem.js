import React from "react";

class HomeNewsItem extends React.Component {
  render() {
    return (
      <div className="info_container">
        <div className="info_title">
          <span>{this.props.category}</span>
          <h1>{this.props.title}</h1>
          <h2>{this.props.summary}</h2>
        </div>

        <div className="info_content">
          <img src={this.props.thumbnail} alt={this.props.title}></img>
        </div>
      </div>
    );
  }
}
export default HomeNewsItem;
