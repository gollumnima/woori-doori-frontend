import React from "react";
import "./info.scss";

const Info = () => {
  return (
    <>
      <div className="info_container">
        <img
          className="info_content"
          src={require("../../img/taco.jpg")}
          alt="taco"
        ></img>
        <div className="info_title">
          <h1>Would you taco me?</h1>
          <h2>The word 'taco' is used as 어쩌구저쩌규 요약글</h2>
        </div>
      </div>
    </>
  );
};

export default Info;
