import React, {Component} from 'react';
import './item.css';

class Item extends Component {


	render(){
		return (
<div>

<li className="item">
<p> {this.props.type}</p>
<p> {this.props.user}</p> 
<p>{this.props.text}</p>
</li>


</div>
			)
	}
}


export default Item
