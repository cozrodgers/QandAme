import React, { Component } from "react";
import Item from "../questionItem/item.js";
import "./questionView.css";

class QuestionView extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const listItems = this.props.itemList.map(item => {
      return (
        <Item
          type={item.type}
          user={item.user}
          text={item.text}
          img={item.img}
        />
      );
    });
    return (
      <div className="view">
        <ul className="ItemList">
          {listItems}

          <div
            style={{ float: "left", clear: "both" }}
            ref={el => {
              this.messagesEnd = el;
            }}
          ></div>
        </ul>
      </div>
    );
  }
}
export default QuestionView;
