import React, { Component } from "react";
import "./App.css";
import Hello from "./components/hello.js";
import AskQuestion from "./components/askQuestion.js";
import QuestionView from "./components/questionView.js";
import Item from "./components/item.js";
import Menu from "./components/menu.js";
import Footer from "./components/footer.js";
//import mockItems from "./items";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      items: [],
    };
  }

  componentwillMount() {
    fetch('localhost:8084')
      .then(response => response.json())
      .then(data => this.setState({ items: data }))
  }
  // componentWillMount() {
  //   this.setState({ items: mockItems });
  // }

  handleAddItem(item) {
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items });
  }

  render() {
    console.log(this.state.items)
    return (
      <div className="App">
        <Hello />

        <QuestionView itemlist={this.state.items} />

        <AskQuestion addItem={this.handleAddItem.bind(this)} />

        <Footer />
      </div>
    );
  }
}

export default App;
