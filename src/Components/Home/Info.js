import React, { Component } from "react";
import "./info.scss";

class Info extends Component {
  render() {
    return (
      <>
        {this.props.baseNewsList.map(el => {
          return (
            <div className="info_container">
              <div className="info_title">
                <span>{el.category}</span>
                <h1>{el.title}</h1>
                <h2>{el.summary}</h2>
              </div>

              <div className="info_content">
                <img src={el.thumbnail} alt={el.title}></img>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Info;
