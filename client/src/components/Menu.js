import React, { Component } from "react";
import "../App.css";
import "./Menu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";

class Menu extends Component {
  // state = {
  //   link: ""
  // };
  // whichLink = event => {
  //   this.setState({ link: event.target.innerHTML }, () =>
  //     this.props.identifyLink(this.state.link)
  //   );

  //   //browserHistory.push("/login");
  // };
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu" className={visibility}>
        <div className="container">
          {/* <ul>
            <li
              onClick={e => {
                this.whichLink(e);
              }}
            >
              Home
            </li>
            <li
              onClick={e => {
                this.whichLink(e);
              }}
            >
              About
            </li>
          </ul> */}
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
