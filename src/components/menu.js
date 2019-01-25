import React, { Component } from "react";
import "./tachyons.min.css";

class Menu extends Component {
  render() {
    return (
      <div className="menu-items">
        <p>My Sessions</p>
        <p>My Account</p>
        <p>Settings</p>
        <img className="grow" src="http://flathash.com/random" alt="profile" />
      </div>
    );
  }
}

export default Menu;
