import React from "react";
import "./NewsPage.scss";

class NewsPageSon extends React.Component {
  render() {
    return (
      <div className="news_page_scss">
        <div className="wrap">
          <div className="tittle">{this.props.title}</div>
          {/* <div className="line"></div> */}
          <div className="newsbox_wrap">
            <div className="newsbox1">
              <div className="imgtext">{this.props.text} </div>
            </div>
            <div className="newsbox2">
              <img src={this.props.img}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPageSon;
