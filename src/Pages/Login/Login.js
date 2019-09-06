import React from "react";
import "./Login.scss";
import Logo from "./wooridoori.png";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      valueId: "",
      valuePw: "",
      Kakao: {}
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

  componentDidMount() {
    window.Kakao.init("291f1b347d863f6fa9e2359a36732f6c");
    window.Kakao.Auth.createLoginButton({
      container: "#kakao_login_btn",
      success: function(authObj) {
        alert(JSON.stringify(authObj));
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
    this.setState({
      Kakao: window.Kakao
    });
  }

  onClickHandleKakaoLogin = () => {
    this.state.Kakao.Auth.login({
      success: kakaotoken => {
        console.log(kakaotoken);
        fetch("http://10.58.1.192:8050/users/kakao", {
          headers: {
            Authorization: kakaotoken.access_token
          }
        })
          .then(response => response.json())
          .then(response => {
            console.log(response);
          });
      }
    });
  };

  render() {
    console.log(this.state.Kakao);
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
            <div id="kakao_login_btn" onClick={this.onClickHandleKakaoLogin} />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
