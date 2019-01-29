import React, { Component } from "react";
import "./lobby.css";
import "./tachyons.min.css";

class Lobby extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  render() {
    return (
      <div className="lobby light-pink">
        <div class="sidenav">
          <a href="#">Users</a>
          <h3 user="corey">{this.props.user}</h3>

          <div className="tab">Lobby</div>
        </div>
      </div>
    );
  }
}

export default Lobby;
