import React from "react";
import "./Profile.scss";

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="profile_container">
          <div>
            <img src={require("../../img/doori.jpg")} alt="doori" />
          </div>
          <div className="words_wrapper">
            <h1>김두리</h1>
            <h2>Front-End</h2>
            <h3>메인 담당 및 어쩌구저쩌구</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
