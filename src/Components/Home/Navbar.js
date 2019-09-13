import React from "react";
import Menu from "../../Pages/Menu/Menu";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      token: false
    };
    this.getToken = localStorage.getItem("wooridoori-token");
  }

  componentDidMount() {
    console.log(this.getToken);
  }

  openMenu = e => {
    if (e.currentTarget.name === "menu_off") {
      this.state.isOpen = 0;
    } else {
      this.state.isOpen = !this.state.isOpen;
    }
    this.setState({
      isOpen: this.state.isOpen
    });
  };

  logout = () => {
    localStorage.clear();
    this.setState({ token: !this.state.token });
    this.props.history.push("/");
  };

  render() {
    console.log(this.getToken);
    return (
      <div className="nav_container">
        <nav className="nav_bar">
          <div className="menu_wrap_container page_wrapper">
            {this.state.isOpen === true ? (
              <Menu onClickHandle={this.openMenu} />
            ) : null}
            <div className="logo_wrap">
              <Link to="/Home" name="menu_off" onClick={this.openMenu}>
                <h1>Wooridoori.com</h1>
              </Link>
            </div>
            <div className="right">
              <div className="menu_wrap">
                <h1 className="menu_btn" onClick={this.openMenu}>
                  Menu
                </h1>
              </div>
              <div className="login_wrap">
                {!this.getToken ? (
                  <Link to="/login" name="menu_off">
                    <h1>Login</h1>
                  </Link>
                ) : (
                  <Link to="/" name="menu_off" onClick={this.logout}>
                    <h1>Logout</h1>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Navbar);
