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
              <h1>Doori Kim</h1>
              <span>Front-End</span>
              <h3>메인 담당 및 어쩌구저쩌구</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
