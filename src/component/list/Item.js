import React from 'react';
import './Item.css';
class Item extends React.Component{
	constructor(){
		super();
		this.state={};
	}
	fn(){
		this.state.checked=(this.state.checked===1?0:1);
		this.props.onresult(this.state.id);
	}
	del(){
		this.props.ondelete(this.state.id);
	}
	componentDidMount(){
		this.state=this.props.name;
	}
	render(){
		if(this.state.close) return (<div></div>);
		return (<div className="item">
			<div className="list_img">
				<img src={this.props.name.img}/>
			</div>
			<div>
				<h3>{this.props.name.name}</h3>
				<p className="count">件数:{this.props.name.count}</p>
				<p className="price">小计:{this.props.name.price}</p>
				<input type="radio" onClick={this.fn.bind(this)} />
			</div>
			<div className="cha" onClick={this.del.bind(this)}>
				<img src="images/050.png" />
			</div>
		</div>)
	}
}
export default Item;
