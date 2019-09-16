import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNewsItem from "./HomeNewsItem";

class Info extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.newslist.map((el, index) => {
          return (
            <Link to={`/news/${el.id}`}>
              <HomeNewsItem
                key={index}
                category={el.tag}
                title={el.title}
                summary={el.content}
                thumbnail={el.image_url}
              />
            </Link>
          );
        })}
      </>
    );
  }
}

export default Info;
