import React from "react";
import "./Login.scss";
import Logo from "./wooridoori.png";

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

  render() {
    console.log(this.state);
    return (
      <div className="wrap">
        <div className="bgBox">
          <div className="boxText">Great to see you again!</div>
        </div>
        <div className="loginPage">
          {/* <div className="loginHeader">Great to see you again!</div> */}
          <img className="img" src={Logo} alt="wooriduri" />
          <input
            onChange={this.inputValueId}
            className="loginId"
            type="text"
            placeholder="User Name"
          />
          <input
            onChange={this.inputValuePw}
            className="loginPw"
            type="password"
            placeholder="Password"
          />
          {/* <div className="btnMom"> */}
          <div class="checkbox-container">
            <input type="checkbox" />
            <label>remember</label>
          </div>
          <button
            onClick={this.buttonAlret}
            className={
              this.state.valueId && this.state.valuePw ? "btnChange" : "btn"
            }
          >
            Login
          </button>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Login;
