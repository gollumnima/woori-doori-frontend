import React from "react";
import { Link } from "react-router-dom";

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
          {/* <Link to={`/recipe_page/:${this.props.id}`}> */}
          {/* <Link to={"/recipe_page/:1"}> */}
          <img src={this.props.thumbnail} alt={this.props.title}></img>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}
export default HomeNewsItem;