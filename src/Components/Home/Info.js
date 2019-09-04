import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNewsItem from "./HomeNewsItem";

class Info extends Component {
  render() {
    return (
      <>
        {this.props.baseNewsList.map(el => {
          return (
            <Link to={`/news_page/${el.id}`}>
              <HomeNewsItem
                category={el.category}
                title={el.title}
                summary={el.summary}
                thumbnail={el.thumbnail}
              />
            </Link>
          );
        })}
      </>
    );
  }
}

export default Info;
