import React from "react";
import Navbar from "../../Components/Home/Navbar";
import "./Login.scss";
import Logo from "./wooridoori.png";
import { Link } from "react-router-dom";

const SIGN_IN_END_POINT = "http://10.58.1.192:8050/users/signin";
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
  buttonAlret = () => {
    if (this.state.valueId === "") {
      alert("아이디를 입력해주세요");
    } else if (this.state.valuePw === "") {
      alert("비번을 입력해주세요");
    }

    if (this.isSuccess === false) {
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
        .then(response => {
          // console.log("1: ", response);
          if (response.status === 200) {
            this.isSuccess = true;
          } else {
            this.isSuccess = false;
          }

          return response.json();
        })
        .then(response => {
          // console.log("2: ", response.message);
          if (this.isSuccess === true) {
            localStorage.setItem("access_token", response.access_token);
            localStorage.setItem("User", this.state.valueId);
            this.props.history.push("/home");
            // this.setState({
            //   isLogin: true
            // });
            // alert(`정상적으로 로그인이 진행되었습니다.`);
          } else {
            alert(`로그인 중 에러가 발생하였습니다. [${response.message}]`);
          }
        });
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("User");
      // this.setState({
      //   isLogin: false
      // });
      this.isSuccess = false;
    }
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
            console.log(response);
          });
      }
    });
    this.setState({
      isLogIn: !this.state.isLogIn
    });
    this.props.history.push("/");
  };

  render() {
    console.log(this.state.isLogIn);
    // console.log(this.state.Kakao);
    // console.log(this.state.isLogin);
    // console.log(this.state.isOpen);
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
              {this.isSuccess ? "Logout" : "Login"}
            </button>
            <Link to="/signup">
              <button className="login_page_signup">Signup</button>
            </Link>
            {/* <Link to="/home"> */}
            <div id="kakao_login_btn" onClick={this.onClickHandleKakaoLogin} />
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
