import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SmartInput from "../../Components/SmartInput/SmartInput.js";
import Logo from "../../img/logo.png";
import "./Signup.scss";

/*************************************************************************
 * SIGNUP GLOBAL VALUE
 *************************************************************************/
const INPUT_ELEMENTS = [
  { name: "ID", inputType: "text", placehoder: "User ID" },
  { name: "Name", inputType: "text", placehoder: "User Name" },
  { name: "E_Mail", inputType: "text", placehoder: "E-Mail" },
  { name: "Password", inputType: "password", placehoder: "Password" },
  { name: "RePassword", inputType: "password", placehoder: "Password 확인" }
  // { name: "Profile", inputType: "text", placehoder: "Profile" }
];

const ALARM_MESSAGE = {
  WRONG_DATA: "입력하신 데이터를 확인하셔야 합니다.",
  WRONG_PW: "Password가 다릅니다."
};

const SIGN_UP_END_POINT = "http://10.58.1.192:8050/users/signup";

/*************************************************************************
 * SIGNUP CLASS
 *************************************************************************/
class Signup extends React.Component {
  constructor(props) {
    // 부호객체 생성자 호출
    super(props);

    // 맴버변수 정의
    this.state = {
      ID: "",
      Name: "",
      E_Mail: "",
      Password: "",
      RePassword: ""
      // Profile: ""
    };

    // 내부변수 선언
    this.isThereMessage = false;

    // 생성자 호출 상태 확인
    console.log("constructor");
  }

  // 자식 객체에서 이벤트가 발생되었을때 호출되는 Callback함수
  onChangeDataForParents = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Sign up 버튼을 눌렸을때 호출되는 Callback함수
  onClickSignup = e => {
    let ID = this.state.ID.trim();
    let Name = this.state.Name.trim();
    let E_Mail = this.state.E_Mail.trim();
    let Password = this.state.Password.trim();
    let RePassword = this.state.RePassword.trim();

    // 데이터 무결성 체크
    ID.trim();
    if (
      ID === "" ||
      Name === "" ||
      E_Mail === "" ||
      Password === "" ||
      RePassword === ""
    ) {
      alert(ALARM_MESSAGE.WRONG_DATA);
    } else if (Password !== RePassword) {
      alert(ALARM_MESSAGE.WRONG_PW);
    } else {
      // API 호출
      fetch(SIGN_UP_END_POINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: ID,
          name: Name,
          email: E_Mail,
          password: Password
        })
      })
        .then(response => {
          // console.log("1: ", response);
          if (response.status !== 200) {
            this.isThereMessage = true;
            return response.json();
          } else {
            this.isThereMessage = false;
            alert("정상적으로 회원가입이 처리되었습니다.");
          }
        })
        .then(response => {
          // console.log("2: ", response.message);
          if (this.isThereMessage === true) {
            alert(`회원가입 중 에러가 발생하였습니다. [${response.message}]`);
          }
        });
    }
  };

  onClickHome = e => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="signup_container">
        <div className="signup_left_part">
          <div className="signup_boxText">Great to see you again!</div>
        </div>

        <div className="signup_right_part">
          <img className="signup_img" src={Logo} alt="wooriduri" />
          <div className="signup_input_wrap">
            {INPUT_ELEMENTS.map((el, idx) => (
              <SmartInput
                key={idx}
                name={el.name}
                inputType={el.inputType}
                placeholder={el.placehoder}
                onChangeDataForParents={this.onChangeDataForParents}
              ></SmartInput>
            ))}
          </div>
          <div className="signup_button_wrap">
            <button onClick={this.onClickSignup} className="signup_button">
              Sign up
            </button>
            <button onClick={this.onClickHome} className="signup_button">
              Home
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
