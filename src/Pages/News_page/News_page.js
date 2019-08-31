import React from "react";
import News_page_son from "./News_page_son.js";
import "./News_page.scss";
import Navbar from "../../Components/Home/Navbar";

let Data = [
  {
    title: "요리정보",
    text: "맛있게만든다",
    img:
      "https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_960_720.jpg"
  }
];
class News_page extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {Data.map((el, item) => {
          return <News_page_son title={el.title} text={el.text} img={el.img} />;
        })}
      </div>
    );
  }
}

export default News_page;
