import React from "react";
import Rolling from "../../Components/Home/Rolling";
import BestRecipe from "../../Components/Home/BestRecipe";
import Info from "../../Components/Home/Info";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <nav className="nav_bar">
        <div className="menu_wrap">
          <img
            className="menu_btn"
            src={require("../../img/menu_btn.png")}
            alt="menu_btn"
          />
        </div>
        <div className="logo_wrap">
          <img
            className="logo"
            src={require("../../img/logo.png")}
            alt="logo"
          />
          <h1>Wooridoori.com</h1>
        </div>

        <div className="login_wrap">
          <img
            className="login_btn"
            src={require("../../img/chef.png")}
            alt="login"
          />
        </div>
      </nav>
      <div className="empty_space"></div>
      <div className="rolling_container">
        <Rolling />
      </div>
      <BestRecipe />
      <BestRecipe />
      <div className="ad">잠시 광고보고 가실게요~</div>
      <Info />
    </div>
  );
};

export default Home;
