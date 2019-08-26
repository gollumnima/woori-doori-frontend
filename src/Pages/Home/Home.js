import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <nav className="nav_bar">
        <div>
          <img src={require("../../static/menu_btn.png")} alt="menu_btn" />
        </div>
        <div>
          <img src={require("../../static/logo.png")} alt="logo" />
          <h1>Wooridoori.com</h1>
        </div>
        <div>
          <img src={require("../../static/chef.png")} alt="chef" />
        </div>
      </nav>
      <div className="rolling_container">
        <div></div>
      </div>
      <div className="home_recipe_wrapper">
        <div className="home_recipe_container">
          <div className="home_recipe_img_container">
            <div>이미지1</div>
            <div>이미지2</div>
            <div>이미지3</div>
            <div>이미지4</div>
          </div>
          <div className="home_recipe_words_container">
            <div className="home_recipe_category">한식</div>
            <div className="home_recipe_name">떡볶이얌얌</div>
          </div>
          <div className="home_recipe_words_container">
            <div className="home_recipe_category">중식</div>
            <div className="home_recipe_name">짬뽕맛나</div>
          </div>
          <div className="home_recipe_words_container">
            <div className="home_recipe_category">양식</div>
            <div className="home_recipe_name">내사랑스테이크</div>
          </div>
          <div className="home_recipe_words_container">
            <div className="home_recipe_category">한식</div>
            <div className="home_recipe_name">초밥도한식임</div>
          </div>
        </div>
        <div className="home_recipe_container">
          <div className="home_recipe_img_container">
            <div>이미지4</div>
            <div>이미지5</div>
            <div>이미지6</div>
            <div>이미지7</div>
          </div>
          <div className="home_recipe_words_container">
            <div className="home_recipe_category">채식</div>
            <div className="home_recipe_name">콥샐러드</div>
          </div>
          <div className="home_recipe_words_container">
            <div className="home_recipe_category">양식</div>
            <div className="home_recipe_name">타코만들기</div>
          </div>
          <div className="home_recipe_words_container">
            <div className="home_recipe_category">한식</div>
            <div className="home_recipe_name">식혜</div>
          </div>
          <div className="home_recipe_words_container">
            <div className="home_recipe_category">한식</div>
            <div className="home_recipe_name">즉떡최고</div>
          </div>
        </div>
      </div>
      <div className="ad">잠시 광고보고 가실게요~</div>
      <div className="info_container">
        <div className="info_content">
          <h1>아이스크림 맛있게 먹는 법</h1>
          <div className="info_thumnail">썸네일1</div>
        </div>
        <div className="info_content">
          <h1>아이스크림 맛있게 먹는 법</h1>
          <div className="info_thumnail">썸네일22</div>
        </div>
        <div className="info_content">
          <h1>아이스크림 맛있게 먹는 법</h1>
          <div className="info_thumnail">썸네일333</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
