import React, {Component}  from 'react';
import './askQuestion.css';
class AskQuestion extends Component {

sendMsg(e){
	console.log(this.props)
}


	render(){
		return (
			<div>
		<form>
		<label>Enter your question
		<input className="inputQ" type="text"></input>
		 </label>
		<button type="button" onClick={this.sendMsg.bind(this)}>Ask</button>
		</form>
		</div>

			)
	}
}



export default AskQuestion
