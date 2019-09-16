import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import Logo from "./wooridoori.png";
import { Link } from "react-router-dom";

const SIGN_IN_END_POINT = "http://10.58.5.78:8080/users/signin";
window.Kakao.init("291f1b347d863f6fa9e2359a36732f6c");
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogIn: false,
      valueId: "",
      valuePw: "",
      Kakao: {},
      isOpen: false
    };

    this.isSuccess = false;
  }
  inputValueId = e => {
    this.setState({ valueId: e.target.value });
  };
  inputValuePw = e => {
    this.setState({ valuePw: e.target.value });
  };

  clickLogin = () => {
    fetch(SIGN_IN_END_POINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.valueId,
        password: this.state.valuePw
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          localStorage.setItem("wooridoori-token", response.access_token);
          this.props.history.push("/");
        }
      });
  };

  componentDidMount() {
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

    // 내부변수 선언
    let isThereKey = localStorage.getItem("access_token");
    let UserName = localStorage.getItem("User");
    if (isThereKey !== null) {
      this.setState({
        isLogIn: true,
        user_id: UserName
      });
      this.isSuccess = true;
    }
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
            localStorage.setItem("access_token", response.access_token);
          });
      }
    });
    this.setState({
      isLogIn: !this.state.isLogIn
    });
    this.props.history.push("/");
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
              onClick={this.clickLogin}
              className={
                this.state.valueId && this.state.valuePw
                  ? "login-btnChange"
                  : "login-btn"
              }
            >
              Login
            </button>
            <Link to="/signup">
              <button className="login_page_signup">Signup</button>
            </Link>

            <div id="kakao_login_btn" onClick={this.onClickHandleKakaoLogin} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
