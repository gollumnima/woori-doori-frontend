import React from "react";
import NewsHomeCategory from "./NewsHomeCategory";

class NewsHome extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
      selectedCategory: {},
      NewsList: []
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

  // state안에 카테고리값과 뉴스리스트 빈 스트링으로 정의
  // newshomecategory 컴포넌트(선택, 클릭하는 부분) 태그 쓰기
  // fetch로 카테고리 데이터 불러오기(동적)
  // onclick 되었을 때, 선택된 뉴스리스트 뜨게 하기
  // 선택된 뉴스리스트만 뜨는 함수 만들기
  // 그 함수 실행시키기

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
                      title={el.title[1]}
                      items={el.items}
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
