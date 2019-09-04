import React from "react";
import "./NewsPage.scss";
import Comment from "../../Components/Home/Comment";
import Navbar from "../../Components/Home/Navbar";
import axios from "axios";

class NewsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      news_data: {}
    };
  }

  componentDidMount() {
    fetch("http://10.58.4.51:8080/news/0/0")
      .then(response => response.json())
      .then(result =>
        this.setState({
          isLoaded: true,
          news_data: result[0]
        })
      );
  }

  // show_news = async () => {
  //   const response = await fetch("http://10.58.4.51:8080/news/0/0", {
  //     method: "GET",
  //     body: JSON.stringify()
  //   });
  // };
  // componentDidMount() {
  //   this.show_news();
  // }

  render() {
    const { news_data } = this.state;

    return (
      <>
        <Navbar />
        <div className="recipe_page_total_wrap">
          <div className="recipe_page_container">
            <div className="food_name">
              <h1>{this.state.news_data.title}</h1>
            </div>
            <div className="recipe_container">
              <div className="cooking_process">
                <div className="ingredients_box">
                  <h1 className="title_line">{this.state.news_data.tag}</h1>
                  <h5> </h5>
                </div>
                <div className="recipe_box">
                  <h1 className="title_line">빈값</h1>
                  <h5>
                    <ul>
                      <li>{this.state.news_data.content}</li>
                    </ul>
                  </h5>
                </div>
              </div>
              <div className="foodie">
                <img src={this.state.news_data.image_url} alt="hamburger"></img>
              </div>
            </div>
          </div>
          <Comment />
        </div>
      </>
    );
  }
}

export default NewsPage;

// 1차 시도 fetch
// return (
//   <>
//     {this.state.news_data.map(el => {
//       return (
//         <>
//           <Navbar />
//           <div className="recipe_page_total_wrap">
//             <div className="recipe_page_container">
//               <div className="food_name">
//                 <h1>{el.title}</h1>
//               </div>
//               <div className="recipe_container">
//                 <div className="cooking_process">
//                   <div className="ingredients_box">
//                     <h1 className="title_line">{el.tag}</h1>
//                     <h5> </h5>
//                   </div>
//                   <div className="recipe_box">
//                     <h1 className="title_line">빈값</h1>
//                     <h5>
//                       <ul>
//                         <li>{el.content}</li>
//                       </ul>
//                     </h5>
//                   </div>
//                 </div>
//                 <div className="foodie">
//                   <img src={el.image_url} alt="hamburger"></img>
//                 </div>
//               </div>
//             </div>
//             <Comment />
//           </div>
//         </>
//       );
//     })}
//   </>
// );

// 2차시도 news_data가 undefined라는 오류뜸
// show_news = async () => {
//   const {
//     data: {
//       data: { news_data }
//     }
//   } = await axios.get("http://10.58.4.51:8080/news/0/0");
//   this.setState({ news_data: false });
// };
// componentDidMount() {
//   this.show_news();
// }
