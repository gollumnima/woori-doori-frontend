import React from "react";
import "./RecipeHome.scss";
// import RecipeHomeC from "../../Components/Home/RecipeHomeC";
import Navbar from "../../Components/Home/Navbar";

class RecipeHome extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tittle: ""
  //   };
  // }

  // funtion_tittle = () => {
  //   this.setState({ tittle:  });
  // };
  render() {
    return (
      <div className="RecipeHome-tag">
        <Navbar />
        <div className="RecipeHome">
          <div className="tag_round">
            <div className="tag">
              <div className="tag_menu1">
                <div className="tag_menu_color"> test</div>
                <div className="check_box_warp">
                  <div className="check_box">
                    <input type="checkbox" />
                    <label>test</label>
                  </div>
                  <div className="check_box">
                    <input type="checkbox" />
                    <label>test</label>
                  </div>
                  <div className="check_box">
                    <input type="checkbox" />
                    <label>test</label>
                  </div>
                  <div className="check_box">
                    <input type="checkbox" />
                    <label>test</label>
                  </div>
                </div>
              </div>
              <div className="tag_menu2">
                <div className="tag_menu_color"> test</div>
                <div className="check_box_warp">
                  <div className="check_box">
                    <input type="checkbox" />
                    <label>test</label>
                  </div>
                  <div className="check_box">
                    <input type="checkbox" />
                    <label>test</label>
                  </div>
                  <div className="check_box">
                    <input type="checkbox" />
                    <label>test</label>
                  </div>
                  <div className="check_box">
                    <input type="checkbox" />
                    <label>test</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="design"></div>
        </div>
      </div>
    );
  }
}

export default RecipeHome;
