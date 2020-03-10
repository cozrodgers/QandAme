import React, { Component } from "react";
import Menu from "../Menu_Items/menu.js/index.js.js";
import "./hello.css";
import "./menu.css";

//add time functions
var currentTime = new Date(),
  hour = currentTime.getHours(),
  mins = currentTime.getMinutes();

class Hello extends Component {
  render() {
    return (
      <div className="banner bg-light-blue">
        <div className="title">
          <h1>QandAme</h1>
          <p className="subtitle">Ask them anything</p>
          <span className="time">{hour + ":" + mins}</span>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    );
  }
}

export default Hello;
