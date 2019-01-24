import React, {Component} from 'react';
import './item.css';
import './tachyons.min.css';

class Item extends Component {


	render(){
		return (

<div className=''>
<li className="item ">
<img src="http://flathash.com/150"/>
<p className='bg-light-green grow'> {this.props.type}</p>
<p> {this.props.user}</p>
<p>{this.props.text}</p>
</li>
</div>

)
}
}
export default Item
