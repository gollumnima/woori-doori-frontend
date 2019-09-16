import React from "react";
import Carousel from "nuka-carousel";

class Rolling extends React.Component {
  state = {};
  componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <div className="Carousel_container">
        <Carousel>
          <img src={require("../../img/steak.jpg")} alt="steak" />
          <img src={require("../../img/yogurt.jpg")} alt="steak" />
          <img src={require("../../img/kebab.jpg")} alt="steak" />
          <img src={require("../../img/waffle.jpg")} alt="steak" />
          <img src={require("../../img/pasta.jpg")} alt="steak" />
        </Carousel>
      </div>
    );
  }
}

export default Rolling;
