import React from "react";
import "./HomeNewsItem.scss";

class HomeNewsItem extends React.Component {
  render() {
    return (
      <div className="info_container">
        <div className="info_title">
          <h3>{this.props.category}</h3>
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
