import React, { Component } from "react";
import "./askQuestion.css";
import "./tachyons.min.css";
class AskQuestion extends Component {
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
              className="inputQ"
              placeholder="Type your question..."
              type="text"
            />
          </label>
          <button className="bg-light-blue" type="button">
            Ask
          </button>
        </form>
      </div>
    );
  }
}

export default AskQuestion;
