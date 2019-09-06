import React from "react";
import NewsHomeCategory from "./NewsHomeCategory";

class NewsHome extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
      newsList: [],
      active_category: 1
    };
  }

  // componentDidMount() {
  //   for (let index = 0; index < CategoryData.length; index++) {
  //     this.state.selectedCategory[CategoryData[index].title[1]] = -1;
  //   }

  //   this.setState({
  //     category: this.state.category,
  //     selectedCategory: this.state.selectedCategory
  //   });
  // }
  componentDidMount() {
    fetch("http://10.58.4.51:8080/news/1/0", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ category: response });
      });

    this.requestNewsList(this.state.active_category);
  }

  requestNewsList(categoryItem_number) {
    fetch("http://10.58.4.51:8080/news/1/0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
    let categoryItem_number = Number(e.currentTarget.id);
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
                  return (
                    <NewsHomeCategory
                      key={key}
                      title={el.title}
                      items={el.items}
                      value={el.item_no}
                      onChangeCategory={this.onChangeCategory}
                    />
                  );
                })}
              </div>
              <div className="design"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsHome;
