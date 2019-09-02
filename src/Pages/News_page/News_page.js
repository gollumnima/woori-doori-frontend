import React from "react";
import NewsPageSon from "./NewsPageSon.js";
import "./NewsPage.scss";
import Navbar from "../../Components/Home/Navbar";

let Data = [
 {
    title: "요리정보",
    text:
      "맛있게다다",
    img:
      "https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_960_720.jpg"
  },
  {
    title: "CamelCase",
    text:
      "CamelCase란 단어가 합쳐진 부분마다 맨 처음 글자를 대문자로 표기하는 방법입니다.두 개 이상의 단어가 모인 합성어에서 사용됩니다. 쌍봉낙타의 등과 닮았다고 하여 CamelCase라는 이름이 붙었습니다.[ ex) MsgBoxBtn1, sockBind, PrintLblText,… ]◇ lowerCamelCasecamelCase에서, 맨 앞글자를 소문자로 표기하는 것을 뜻합니다. 나머지 뒤에 따라붙는 단어들의 앞글자는 모두 대문자로 표기합니다.",
    img:
      "https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_960_720.jpg"
  },
  {
    title: "Spake case",
    text:
      "snake_case란 단어가 합쳐진 부분마다 중간에 언더라인을 붙여 주는 방법입니다.일반적으로는 언더라인을 사용하나, 언더라인 대신 하이픈(-)을 써도 snake-case라고 할 수 있습니다. (참조)그렇지만 가능한 한 언더라인을 사용하는 편이 무난합니다.[ ex) Night_Of_Knights, noumi_kudryavka_anatolyevna_strugatskaya,… ]snake_case는 Train_Case와 spinal_case로 세부적으로 나눌 수 있습니다.",
    img:
      "https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_960_720.jpg"
  }
];
class NewsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {Data.map((el, item) => {
          return <NewsPageSon title={el.title} text={el.text} img={el.img} />;
        })}
      </div>
    );
  }
}

export default NewsPage;
