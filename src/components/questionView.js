import React, {Component}  from 'react';
import Item from './item.js';
//import './questionView.css';





class QuestionView extends Component {


	render(){

		return (

		<div ClassName="view">
	<ul>
 <Item type="answer" user="s1" text="Awesome!"/>
        <Item type="suestion" user="s2" text="Hello what is your favourite color"/>
           <Item type="answer" user="s3" text="Blue"/>
           <Item type="answer" user="s3" text="and Green"/>
           <Item type="answer" user="s3" text="and Green"/>


	</ul>
		</div>

			)
	}


}
export default QuestionView
