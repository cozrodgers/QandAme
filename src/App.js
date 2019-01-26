import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello.js";
import AskQuestion from "./components/askQuestion.js";
import QuestionView from "./components/questionView.js";
import Item from "./components/item.js";
import Menu from "./components/menu.js";
import mockItems from './items'

class App extends Component {
  constructor(){
    super()
    this.state = {items : []}
  }

  componentWillMount(){
    this.setState({items:mockItems})
  }

  handleAddItem(item) {
    let items = this.state.items;
    items.push(item)
    this.setState({items: items})
  }



  render() {
    return (
      <div className="App">
        <Hello />

        <QuestionView itemlist = {this.state.items}/>

        <AskQuestion addItem = {this.handleAddItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
