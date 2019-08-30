import React, { Component } from "react";
import "./SmartInput.scss";

class SmartInput extends Component {
  onChangeValue = e => {
    this.props.onChangeDataForParents(e);
  };

  render() {
    console.log("render");

    return (
      <div className="smart_input_container">
        <input
          autoComplete="off"
          className="smart_input"
          name={this.props.name}
          type={this.props.inputType}
          placeholder={this.props.placeholder}
          onChange={this.onChangeValue}
        ></input>
      </div>
    );
  }
}

export default SmartInput;
