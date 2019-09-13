import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  render() {
    let data = this.props.item.updated_at;
    return (
      <div className="review_Item">
        <div className="reiew_User_Time">
          <div className="review_Item_UserInfoWrap">
            {this.props.item.content}
          </div>
          <div className="review_Item_TextWrap_Box">
            <div className="review_Item_TextWrap">{data.substring(0, 10)}</div>
          </div>
        </div>
        <div className="review_Item_ReviewTex_Box">
          <div className="review_Item_ReviewText">
            {this.props.item.user_name}
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
