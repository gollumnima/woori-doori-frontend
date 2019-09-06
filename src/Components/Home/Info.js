import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNewsItem from "./HomeNewsItem";

class Info extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {
  //   fetch("http://10.58.4.51:8080/main_news")
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
  //         HomeNewsList: result
  //       });
  //     });
  // }
  render() {
    // const { HomeNewsList } = this.state;
    // console.log(this.state.HomeNewsList, "ssssssddddd");
    return (
      <>
        {this.props.newslist.map((el, index) => {
          return (
            <Link to={`/news_page/${el.id}`}>
              <HomeNewsItem
                key={index}
                category={el.tag}
                title={el.title}
                summary={el.content}
                thumbnail={el.image_url}
              />
            </Link>
          );
        })}
      </>
    );
  }
}

export default Info;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import HomeNewsItem from "./HomeNewsItem";

// class Info extends Component {
//   render() {
//     return (
//       <>
//         {this.props.baseNewsList.map(el => {
//           return (
//             <Link to={`/news_page/${el.id}`}>
//               <HomeNewsItem
//                 category={el.category}
//                 title={el.title}
//                 summary={el.summary}
//                 thumbnail={el.thumbnail}
//               />
//             </Link>
//           );
//         })}
//       </>
//     );
//   }
// }

// export default Info;
