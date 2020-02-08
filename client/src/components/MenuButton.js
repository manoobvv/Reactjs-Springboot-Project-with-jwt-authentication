import React, { Component } from "react";
import "./MenuButton.css";

class MenuButton extends Component {
  render() {
    //return <button id="roundButton" onMouseDown={this.props.handleMouseDown} />;
    return (
      <i
        id="roundButton"
        style={{ marginRight: "0.8rem" }}
        className="fa fa-bars"
        onMouseDown={this.props.handleMouseDown}
      />
    );
  }
}

export default MenuButton;
