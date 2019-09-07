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
      active_category: 1
    };
  }

  componentDidMount() {
    fetch("http://10.58.4.51:8080/news/tags", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          category: response[1].id
        });
      });

    this.requestNewsList(this.state.active_category);
  }

  requestNewsList(categoryItem_number) {
    fetch(`http://10.58.4.51:8080/news/${this.categoryItem_number}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      Params: {
        category_item_number: categoryItem_number,
        start_offset: 0,
        recipe_count: 8
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          newsList: response
        });
      });
  }
  onChangeCategory = e => {
    let categoryItem_number = Number(e.currentTarget[0].id);
    this.requestNewsList(categoryItem_number);
  };
  render() {
    console.log(this.state.category, "요기요");
    return (
      <>
        <div className="NewsWrap">
          <div className="NewsHome-tag">
            <div className="NewsHome page_wrapper">
              <div className="tag_round">
                {this.state.category.map((el, key) => {
                  return (
                    <NewsHomeCategory
                      key={key}
                      name={el.name}
                      value={el.item_no}
                      onChangeCategory={this.onChangeCategory}
                    />
                  );
                })}
              </div>
              <div className="design">
                {this.state.recipeList.map((item, index) => {
                  return (
                    <Link to={`/recipe_page/${item.recipe_no}`}>
                      <HomeNewsItem
                        key={index}
                        img={item.image}
                        desc={item.categoryItem__name}
                        title={item.title}
                        name={item.name}
                      />
                    </Link>
                  );
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
