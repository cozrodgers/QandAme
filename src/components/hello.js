import React, { Component } from "react";
import Menu from "./menu.js";
import "./hello.css";
import "./menu.css";

class Hello extends Component {
  render() {
    return (
      <div className="banner bg-light-blue">
        <div className="title">
          <h1>QandAme</h1>
          <p className="subtitle">Ask them anything</p>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    );
  }
}

export default Hello;
