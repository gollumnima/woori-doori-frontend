import React from "react";
import NewsHomeCategory from "./NewsHomeCategory";
import { Link } from "react-router-dom";
import HomeNewsItem from "../../Components/Home/HomeNewsItem";
import "./NewsHome.scss";

class NewsHome extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
      newsList: [],
      active_category: 1,
      selectedIndex: 0,
      indexCount: 0
    };
  }

  componentDidMount() {
    fetch("http://10.58.5.78:8080/news/tags", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        let categoryList = response.map(el => {
          return el.tag;
        });

        this.setState({
          category: categoryList
        });
      });
  }

  requestNewsList(categoryItem_number) {
    fetch(
      `http://10.58.5.78:8080/news?offset=1&tag_num=${categoryItem_number}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          newsList: response[0].news_data.map(el => {
            if (el.tag_id === categoryItem_number) {
              return el;
            } else {
              return "";
            }
          }),
          active_category: categoryItem_number
        });
      });
  }
  onChangeCategory = e => {
    let categoryItem_number = Number(e.currentTarget.id);
    this.setState({
      selectedIndex: categoryItem_number - 1
    });
    this.requestNewsList(categoryItem_number);
  };

  render() {
    return (
      <>
        <div className="NewsWrap">
          <div className="NewsHome-tag">
            <div className="NewsHome page_wrapper">
              <div className="tag_round">
                {this.state.category.map((el, key) => {
                  let selectedStatus =
                    key === this.state.selectedIndex ? true : false;
                  return (
                    <NewsHomeCategory
                      key={key}
                      name={el}
                      value={key + 1}
                      onChangeCategory={this.onChangeCategory}
                      selected={selectedStatus}
                    />
                  );
                })}
              </div>
              <div className="design">
                {this.state.newsList.map((item, index) => {
                  // if (item !== "") {
                  return (
                    <Link to={`/news/${item.id}`}>
                      <HomeNewsItem
                        key={index}
                        category={item.tag}
                        title={item.title}
                        summary={item.content}
                        thumbnail={item.image_url}
                      />
                    </Link>
                  );
                  // }
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsHome;
