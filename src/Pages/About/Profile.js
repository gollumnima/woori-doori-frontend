import React from "react";
import "./Profile.scss";

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="profile_container">
          <div className="profile_box">
            <div className="photo_wrapper">
              <div className="triangle"></div>
              <img src={require("../../img/doori.jpg")} alt="doori" />
            </div>
            <div className="words_wrapper">
              <h1>{this.props.h1}</h1>
              <span>{this.props.span}</span>
              <h3>{this.props.h3}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
