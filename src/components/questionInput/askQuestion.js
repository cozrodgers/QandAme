import React, { Component } from "react";
import "./askQuestion.css";
import "./tachyons.min.css";
class AskQuestion extends Component {
  constructor() {
    super();
    this.state = {
      // define newMessage object to store values from new item (type, msg, img etc)
      newItem: {}
    };
  }

  //onClick : get the values from the text input
  onClick() {
    if (this.textInput.value) {
      //On click if the text input value has the following values
      this.setState(
        {
          newItem: {
            type: "question", //later will be fetched from the user account
            user: "Unregistered",
            img: this.props.img,
            text: this.textInput.value
          }
        },

        //create function and use add item function to push item to the questionview state
        () => {
          this.props.addItem(this.state.newItem);
        }
      );

      //clear the text input once post has been completed
      this.textInput.value = "";
      /* add auto scroll*/

      //function to manage autoscroll
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
