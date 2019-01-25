import React, { Component } from "react";
import "./item.css";
import "./tachyons.min.css";

class Item extends Component {
  render() {
    return (
      <div className="">
        <li className="item ">
          <img src={"http://flathash.com/" + this.props.img} alt="avatar" />
          <p className="type bg-light-green grow"> {this.props.type}</p>
          <p className="user"> {this.props.user}</p>
          <p className="textReply bg-light-red">{this.props.text}</p>
        </li>
      </div>
    );
  }
}
export default Item;
