import React, { Component } from "react";
import Item from "./item.js";
import "./questionView.css";

class QuestionView extends Component {
  render() {
    return (
      <div className="view">
        <ul>
          <Item type="answer" user="Corey" text="Awesome!" img="1" />
          <Item
            type="question"
            user="Sam"
            text="Hello what is your favourite color"
            img="2"
          />
          <Item
            type="answer"
            user="John"
            text="I think you should all calm down because you are beginning to annoy me from the way you are both talking about things that should not be spoken about"
            img="3"
          />
          <Item type="answer" user="Taylor" text="and Green" img="4" />
          <Item type="answer" user="Brigita" text="Yellow" img="5" />
          <Item type="answer" user="James" text="Eat" img="6" />
          <Item type="answer" user="Mat" text="Lmao" img="7" />
          <Item type="answer" user="Simon" text="Shh" img="8" />
          <Item type="answer" user="Will" text=":)" img="9" />
          <Item type="answer" user="Jen" text="Hello" img="10" />
          <Item type="answer" user="Tony" text="Hi guys" img="11" />
          <Item type="answer" user="Luke" text="Ssssss" img="12" />
        </ul>
      </div>
    );
  }
}
export default QuestionView;
