import React from "react";
import "./NewsHome.scss";
import HomeNewsItem from "../../Components/Home/HomeNewsItem";

class NewsHome extends React.Component {
  render() {
    return (
      <div className="news_home_container">
        <div className="news_category_bar"></div>
        <div className="news_home_thumbnail"></div>
        <div className="news_list">
          <HomeNewsItem />
        </div>
      </div>
    );
  }
}

export default NewsHome;
