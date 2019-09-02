import React, { Component } from "react";
import "./info.scss";
import HomeNewsItem from "./HomeNewsItem";

class Info extends Component {
  render() {
    return (
      <>
        {this.props.baseNewsList.map(el => {
          return (
            <HomeNewsItem
              category={el.category}
              title={el.title}
              summary={el.summary}
              thumbnail={el.thumbnail}
            />
          );
        })}
      </>
    );
  }
}

export default Info;
