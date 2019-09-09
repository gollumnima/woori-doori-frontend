import React from "react";
import "./NewsPage.scss";

class NewsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      NewsList: []
    };
  }

  componentDidMount() {
    fetch(`http://13.209.12.87:8000/news?offset=0`)
      .then(response => response.json())
      .then(result => {
        this.setState({
          NewsList: result[0].news_data.map(el => {
            return el;
          })
        });
      });
  }

  render() {
    const { NewsList } = this.state;
    console.log(this.state.NewsList, "sddsfaasddsdfz");
    return (
      <>
        {/* {this.state.result ? this.renderNews() : null} */}
        {NewsList.map(el => {
          return (
            <div className="news_page_total_wrap">
              <div className="news_page_container">
                <div className="news_name">
                  <h1>{el.title}</h1>
                </div>
                <div className="news_container">
                  <div className="cooking_process">
                    <div className="ingredients_box">
                      <h1 className="title_line">{el.tag}</h1>
                      <h5> </h5>
                    </div>
                    <div className="news_box">
                      <ul>
                        <li>{el.content}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="newsie">
                    <img src={el.image_url} alt={el.title}></img>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default NewsPage;

//저장쓰
// componentDidMount() {
//   fetch("http://10.58.4.51:8080/news/0/0")
//     .then(response => response.json())
//     .then(result =>
//       this.setState({
//         news_data: result[0],
//         title: result[0].title,
//         tag: result[0].tag,
//         content: result[0].content.toString().split("\n"),
//         image_url: result[0].image_url
//       })
//     );
// }

// render() {
//   console.log(this.state.content, "sssssss");
//   const { news_data } = this.state;
//   return (
//     <>
//       <Navbar />
//       <div className="news_page_total_wrap">
//         <div className="news_page_container">
//           <div className="food_name">
//             <h1>{this.state.title}</h1>
//           </div>
//           <div className="news_container">
//             <div className="cooking_process">
//               <div className="ingredients_box">
//                 <h1 className="title_line">{this.state.tag}</h1>
//                 <h5> </h5>
//               </div>
//               <div className="news_box">
//                 <h1 className="title_line">빈값</h1>
//                 <h5>
//                   <ul>
//                     <li>{this.state.content}</li>
//                   </ul>
//                 </h5>
//               </div>
//             </div>
//             <div className="foodie">
//               <img src={this.state.image_url} alt="hamburger"></img>
//             </div>
//           </div>
//         </div>
//         <Comment />
//       </div>
//     </>
//   );
// }
// }

// export default NewsPage;

// 1차 시도 fetch
// return (
//   <>
//     {this.state.news_data.map(el => {
//       return (
//         <>
//           <Navbar />
//           <div className="news_page_total_wrap">
//             <div className="news_page_container">
//               <div className="food_name">
//                 <h1>{el.title}</h1>
//               </div>
//               <div className="news_container">
//                 <div className="cooking_process">
//                   <div className="ingredients_box">
//                     <h1 className="title_line">{el.tag}</h1>
//                     <h5> </h5>
//                   </div>
//                   <div className="news_box">
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

// class NewsPage extends Component{
//   constructor() {
//     this.state={}
//   }
//   componentDidMount() {
//     this.getNews()
//   }
//   renderNews = () => {
//     const news = this.state.news.map((el,i) => {
//       title: el.title
//     })
//   }
//   getNews = async () => {
//     const news = await this.callApi();
//     this.setState({
//       news,
//     });
//   }
//   callApi = () =>{
//     return fetch(
//       "http://10.58.4.51:8080/news/0/0",
//       {
//         method: 'GET',
//         headers : {
//           'Authorization' : 'asdfa',
//         },
//       },
//     )
//     .then(response => response.json())
//     .then(response => response.DATA)
//   }
//   render() {
//     return()
//   }
// }
