import React from "react";
import "./Login.scss";
import Logo from "./wooridoori.png";
import KakaoLogin from "react-kakao-login";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      valueId: "",
      valuePw: ""
    };
  }
  inputValueId = e => {
    this.setState({ valueId: e.target.value });
  };
  inputValuePw = e => {
    this.setState({ valuePw: e.target.value });
  };
  buttonAlret = () => {
    if (this.state.valueId === "") {
      alert("아이디를 입력해주세요");
    } else if (this.state.valuePw === "") {
      alert("비번을 입력해주세요");
    }
  };

  responseKakao = res => {
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname,
      provider: "kakao"
    });
  };
  render() {
    return (
      <div className="login-wrap ">
        <div className="login-bgBox">
          <div className="login-boxText">Great to see you again!</div>
        </div>
        <div className="login-page-box">
          <div className="login-page">
            <img className="login-img" src={Logo} alt="wooriduri" />
            <input
              onChange={this.inputValueId}
              className="login-id"
              type="text"
              placeholder="User Name"
            />
            <input
              onChange={this.inputValuePw}
              className="login-pw"
              type="password"
              placeholder="Password"
            />
            <div className="login-checkbox-container">
              <input type="checkbox" className="login-remember" />
              <label className="login-remember">remember</label>
            </div>
            <button
              onClick={this.buttonAlret}
              className={
                this.state.valueId && this.state.valuePw
                  ? "login-btnChange"
                  : "login-btn"
              }
            >
              Login
            </button>
            <KakaoLogin></KakaoLogin>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
