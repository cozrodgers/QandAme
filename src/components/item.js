import React, { Component } from "react";
import "./item.css";
import "./tachyons.min.css";

//add date functions
var currentDate = new Date(),
  day = currentDate.getDate(),
  month = currentDate.getMonth() + 1,
  year = currentDate.getFullYear();

class Item extends Component {
  render() {
    return (
      <div className="">
        <li className="item ">
          <img src={"http://flathash.com/" + this.props.img} alt="avatar" />
          <p className="type bg-light-green grow"> {this.props.type}</p>
          <p className="user"> {this.props.user}</p>
          <p className="textReply bg-light-red">
            {this.props.text}{" "}
            <span className="date">{day + "/" + month + "/" + year}</span>
          </p>
        </li>
      </div>
    );
  }
}
export default Item;
