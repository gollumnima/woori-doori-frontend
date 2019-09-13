import React from "react";
import "./NewsPage.scss";
import Comment from "../../Components/Home/Comment";
import { userInfo } from "os";
class NewsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      NewsList: [],
      isComment: [],
      isValue: ""
    };
    this.token = localStorage.getItem("wooridoori-token");
  }
  changeValue = e => {
    this.setState({ isValue: e.target.value });
  };
  componentDidMount() {
    fetch(`http://13.209.12.87:8000/news/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          NewsList: response
        });
      });
  }
  commentBtn = () => {
    fetch("http://13.209.12.87:8000/news_comments/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.token
      },
      body: JSON.stringify({
        user_id: "2",
        news_id: "1",
        content: this.state.isValue
      })
    })
      .then(response => response.json())
      .then(response => {
        fetch("http://13.209.12.87:8000/news_comments/1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(response => {
            this.setState({
              isComment: response.data
            });
          });
      });
  };
  render() {
    console.log(this.state.isValue);
    const { NewsList, isComment } = this.state;
    return (
      <div className="news_page_total_wrap">
        <div className="news_page_container">
          <div className="news_name">
            <h1>{NewsList.title}</h1>
          </div>
          <div className="news_container">
            <div className="cooking_process">
              <div className="ingredients_box">
                <h1 className="title_line">{NewsList.tag}</h1>
                <h5> </h5>
              </div>
              <div className="news_box">
                <ul>
                  <li>{NewsList.content}</li>
                </ul>
              </div>
            </div>
            <div className="newsie">
              <img src={NewsList.image_url} alt={NewsList.title}></img>
            </div>
            <div className="commnet_title">댓글</div>
          </div>
          <div className="comment_warp">
            <textarea
              className="comment_input_box"
              onChange={this.changeValue}
            ></textarea>
            <div className="btn_box_wrap">
              <button className="btn_box" onClick={this.commentBtn}>
                등록
              </button>
            </div>
          </div>

          <div>
            {isComment.map(el => {
              return <Comment item={el} />;
            })}
          </div>
        </div>
      </div>
      // {/* })} */}
    );
  }
}
export default NewsPage;
