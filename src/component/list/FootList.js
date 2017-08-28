import React from 'react';
import Item from './Item';
class FootList extends React.Component{
	constructor(){
		super();
		this.state={
			foods:[{
				id:0,
				checked:0,
				close:false,
				img:"images/img1(2).jpg",
				name:"可口可乐",
				count:1,
				price:1.90
			},{
				id:1,
				checked:0,
				close:false,
				img:"images/img1(3).jpg",
				name:"王老吉",
				count:1,
				price:6.50
			},{
				id:2,
				checked:0,
				close:false,
				img:"images/img1(5).jpg",
				name:"冰糖雪梨",
				count:1,
				price:3.50
			}]
		}
	}
	clk(index){
		this.state.foods.splice(index,1);
		this.forceUpdate();
	}
	comp(index){
		this.forceUpdate();
	}
	render(){
		console.log(this.state);
		if(this.state.foods.length==0) return (<div>没有数据</div>);
		return (<div>
			{this.state.foods.map((food)=><Item name={food} ondelete={this.clk.bind(this)} onresult={this.comp.bind(this)} />)}
			{this.state.foods.map((food)=><center>{food.checked}</center>)}
			<p><center>数量:{this.state.foods.map((food)=>food.checked===1?food.count:0).reduce((prev,cur)=>prev+cur)}</center></p>
			<p><center>总价:{this.state.foods.map((food)=>food.checked===1?food.price*food.count:0).reduce((prev,cur)=>prev+cur)}</center></p>
		</div>)
	}
}
export default FootList;