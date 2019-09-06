import React from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import "./About.scss";
// import { MapContainer } from "./MapContainer";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="about_container page_wrapper">
          <h1 className="about_title">Meet Our Team Members!</h1>
          <div className="profile_box">
            <Profile
              h1="김두리"
              span="Front-end"
              h3="Home, About, Recipe_Page, News_Home"
              button="Contact"
            />
            <Profile
              h1="배민혁"
              span="Back-end"
              h3="Login Api, Signup Api"
              button="Contact"
            />
            <Profile
              h1="최경용"
              span="Front-end"
              h3="Login, Recipe_Home,
              News_Page"
              button="Contact"
            />
            <Profile
              h1="최승윤"
              span="Back-end"
              h3="News Api"
              button="Contact"
            />
            <Profile
              h1="한광훈"
              span="Full Stack"
              h3="SignUp, Routing, Recipe Api"
              button="Contact"
            />
          </div>
          <div className="map_container">{/* <MapContainer /> */}</div>
          <Link to="Home">
            <button>Home</button>
          </Link>
          <footer>
            <ul>
              <li>주식회사 : 우리두리닷컴</li>
              <li>대표자명 : 김예리</li>
              <li>사업자번호: 222-22-22222</li>
              <li>사업장 주소 : 서울시 강남구 테헤란로 427, Graceful Rain</li>
              <li></li>
            </ul>
          </footer>
        </div>
      </>
    );
  }
}

export default About;
