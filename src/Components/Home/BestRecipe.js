import React from "react";

const BestRecipe = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default BestRecipe;
