import React, { Component } from "react";
import Item from "./item.js";
import "./questionView.css";

class QuestionView extends Component {


 
scrollToBottom() {
  //getting the element with the class ItemList scroll height and height 
  //than substructing the scroll height from the height and storing it in the maxScrollTop variable
  // and then setting the class ItemList's scrollTop to the value 0 if it bigger than zero
  const scrollHeight = this.itemList.scrollHeight;  
  const height = this.itemList.clientHeight;
  const maxScrollTop = scrollHeight - height;
  this.itemList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
}

componentDidUpdate() {
  // call this function when a change event happen
  this.scrollToBottom();
}

  render() {
      const listItems = this.props.itemlist.map(item => {    
        return <Item type={item.type} user={item.user} text={item.text} img={item.img}/>
  })
    return (
      <div className="view">
        <ul     className="ItemList"
        ref={(div) => {
          this.itemList = div;
        }}
        >
 
            {listItems}

        </ul>
       
      </div>
    );
  }
}
export default QuestionView;
