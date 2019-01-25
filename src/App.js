import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello.js";
import AskQuestion from "./components/askQuestion.js";
import QuestionView from "./components/questionView.js";
import Item from "./components/item.js";
import Menu from "./components/menu.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  render() {
    return (
      <div className="App">
        <Hello />

        <QuestionView />

        <AskQuestion />
      </div>
    );
  }
}

export default App;
