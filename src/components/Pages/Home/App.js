import React, { Component } from "react";
import "./App.css";
import Hello from "../../layout/Header/hello";
import AskQuestion from "../../questionInput/askQuestion";
import QuestionView from "../../questionView/questionView";
import Footer from "../../layout/Footer/footer";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  fetchItems = () => {
    axios
      .get("http://localhost:8085")
      .then(result => this.setState({ items: result.data }))
      .catch(e => console.log(e));
  };

  componentDidMount() {
    this.fetchItems();
    //console.log(this.items)
  }
  // componentWillMount() {
  //   this.setState({ items: []});
  // }

  // componentWillMount() {
  //   this.setState({ items: mockItems });
  // }

  handleAddItem(item) {
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items });
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        <Hello />

        <QuestionView itemList={this.state.items} />

        <AskQuestion addItem={this.handleAddItem.bind(this)} />

        <Footer />
      </div>
    );
  }
}

export default App;
