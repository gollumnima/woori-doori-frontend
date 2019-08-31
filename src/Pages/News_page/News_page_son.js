import React from "react";
import "./News_page.scss";

class News_page_son extends React.Component {
  render() {
    return (
      <div className="news_page_scss">
        <div className="wrap">
          <div className="tittle">{this.props.title} </div>
          <div className="line"></div>
          <div className="newsbox_wrap">
            <div className="newsbox1">
              <div className="img">{this.props.text} </div>
            </div>
            <div className="newsbox2">
              <img className="img" src={this.props.img}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News_page_son;
