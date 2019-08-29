import React from "react";
// import Navbar from "../../Components/Home/Navbar";
import Profile from "./Profile";
import "./About.scss";

class About extends React.Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <div className="about_container">
          <h1 className="about_title">Meet Our Team Members!</h1>
          <div className="profile_box">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
        </div>
      </>
    );
  }
}

export default About;
