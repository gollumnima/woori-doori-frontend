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
              img="https://gollumnima.github.io/photo.jpg"
              h1="김두리"
              span="Front-end"
              h3="Home, About, Recipe Page"
              button="Contact"
            />
            <Profile
              img="https://files.slack.com/files-pri/TH0U6FBTN-FN45DGQGG/20190907_142520.jpg"
              h1="배민혁"
              span="Back-end"
              h3="Login Api, Signup Api"
              button="Contact"
            />
            <Profile
              img="https://files.slack.com/files-pri/TH0U6FBTN-FN45WQ537/image_from_ios.jpg"
              h1="최경용"
              span="Front-end"
              h3="Login, Recipe_Home"
              button="Contact"
            />
            <Profile
              img="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-9/12744247_957404471009720_5070514958313577704_n.jpg?_nc_cat=101&_nc_oc=AQlA1OCear0JyLnij-VTwU5Or5pU_MuKdC1mW5SYxNeDuZZKrvcOn1-VE-JWNF7oGdc&_nc_ht=scontent-gmp1-1.xx&oh=89faf91984473abee59576a502150cbd&oe=5DF6ED4F"
              h1="최승윤"
              span="Back-end"
              h3="News Api"
              button="Contact"
            />
            <Profile
              img="https://files.slack.com/files-pri/TH0U6FBTN-FN6HFCLDU/20181013_013305.jpg"
              h1="한광훈"
              span="Full-Stack"
              h3="SignUp, Dynamic Routing, Recipe Api"
              button="Contact"
            />
          </div>
          <div className="map_container">{/* <MapContainer /> */}</div>
          {/* <Link to="Home">
            <button>Home</button>
          </Link> */}
          {/* <footer>
            <ul>
              <li>주식회사 : 우리두리닷컴</li>
              <li>대표자명 : 김예리</li>
              <li>사업자번호: 222-22-22222</li>
              <li>사업장 주소 : 서울시 강남구 테헤란로 427, Graceful Rain</li>
              <li></li>
            </ul>
          </footer> */}
        </div>
      </>
    );
  }
}

export default About;
