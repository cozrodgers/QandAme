import React, { Component } from "react";
import Item from "./item.js";
import "./questionView.css";

class QuestionView extends Component {

  render() {
      const listItems = this.props.itemlist.map(item => {    
        return <Item type={item.type} user={item.user} text={item.text} img={item.img}/>
  })
    return (
      <div className="view">

        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
export default QuestionView;
