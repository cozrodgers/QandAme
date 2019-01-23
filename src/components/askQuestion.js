import React, {Component}  from 'react';
import './askQuestion.css';
class AskQuestion extends Component {


	render(){
		return (
			<div>
		<form>
		<label>Enter your question 
		<input type="text"></input>
		 </label>
		<button type="button" onclick="alert('Hello World!')">Ask</button>
		
	
		</form>
		</div>

			)
	}
}



export default AskQuestion
