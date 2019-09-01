import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      replyBox: [],
      user_id: "로그인한 아이디"
    };
  }
  handleChange = e => {
    this.setState({
      reply: e.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.reply !== "") {
      this.addReply();
    }
  };

  addReply = () => {
    this.setState({
      replyBox: [
        { user_id: this.state.user_id, reply: this.state.reply },
        ...this.state.replyBox
      ],
      reply: ""
    });
  };

  render() {
    let { reply } = this.state;

    return (
      <div className="reply_container">
        <div className="text_container">
          <textarea
            placeholder="댓글을 입력해주세요 :)"
            value={reply}
            onChange={this.handleChange}
            maxLength="300"
          ></textarea>
          <div className="count_box">
            <span className="min_count">{reply.length}</span>/
            <span className="max_count">300</span>
          </div>
          <button className="btn_reply" onClick={this.handleSubmit}>
            확인
          </button>
        </div>
        <div className="reply_box">
          {this.state.replyBox.map((el, i) => (
            <div key={i} className="reply">
              <h3>dooreplay</h3>
              <span>{el.reply}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Comment;
