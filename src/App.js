import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello  from './components/hello.js';
import AskQuestion  from './components/askQuestion.js';
import QuestionView from './components/questionView.js';
import Item from './components/item.js';
class App extends Component {
  render() {
    return (
      <div className="App">


  <Hello/>
      <AskQuestion/>
      <QuestionView/>
      <Item/>

      </div>



    );
  }
}

export default App
