import React from "react";
import "./Profile.scss";

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="profile_container">
          <div className="profile_box">
            <img src={this.props.img} alt={this.props.h1} />
            <div className="words_wrapper">
              <h1>{this.props.h1}</h1>
              <span>{this.props.span}</span>
              <h3>{this.props.h3}</h3>
              <a href={this.props.url}>{this.props.button}</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
