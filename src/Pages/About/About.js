import React from "react";
import Profile from "./Profile";
import "./About.scss";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="about_container page_wrapper">
          <h1 className="about_title">Meet Our Team Members!</h1>
          <div className="profile_box">
            <Profile
              img={require("../../img/두리.jpg")}
              h1="김두리"
              span="Front-end"
              h3="Home, About, Recipe Page"
              button="Contact"
              url="https://gollumnima.github.io/"
            />
            <Profile
              img={require("../../img/민혁님.jpg")}
              h1="배민혁"
              span="Back-end"
              h3="Login Api, Signup Api"
              button="Contact"
              url="https://bmh8993.github.io"
            />
            <Profile
              img={require("../../img/경용님.jpg")}
              h1="최경용"
              span="Front-end"
              h3="Login, Recipe_Home"
              button="Contact"
              url="https://velog.io/@jingyong91"
            />
            <Profile
              img={require("../../img/가마니.jpg")}
              h1="최승윤"
              span="Back-end"
              h3="News Api, Comment Api"
              button="Contact"
              url="https://choiseungyoun.github.io"
            />
            <Profile
              img={require("../../img/광훈님.jpg")}
              h1="한광훈"
              span="Full-Stack"
              h3="SignUp, Dynamic Routing"
              button="Contact"
              url="https://hkhch.github.io/"
            />
          </div>
        </div>
      </>
    );
  }
}

export default About;
