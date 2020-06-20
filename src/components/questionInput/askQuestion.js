import React, { Component } from "react";
import "./askQuestion.css";
import "../tachyons.min.css"

class AskQuestion extends Component {
  constructor() {
    super();
    this.state = {
      newItem: {}
    };
  }

  onClick() {
    if (this.textInput.value) {
      this.setState(
        {
          newItem: {
            type: "question", //later will be fetched from the user account
            user: "Unregistered",
            img: this.props.img,
            text: this.textInput.value
          }
        },
        () => {
          this.props.addItem(this.state.newItem);
        }
      );
      this.textInput.value = "";
    }
  }

  sendMsg(e) {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Enter your question
            <input
              ref={input => (this.textInput = input)}
              className="inputQ"
              placeholder="Type your question..."
              type="text"
            />
          </label>
          <button
            onClick={this.onClick.bind(this)}
            className="bg-light-blue"
            type="button"
          >
            <span>Ask</span>
          </button>
        </form>
      </div>
    );
  }
}

export default AskQuestion;
