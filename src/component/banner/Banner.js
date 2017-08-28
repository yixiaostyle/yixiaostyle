import React from 'react';
import ReactSwipe from 'react-swipe';
import './Banner.css';
class Banner extends React.Component{
	constructor(){
		super();
		this.state={indexs:0};
	}
	render(){
		let self=this;
		let opt={
			auto:1500,
			callback:function(index){
				self.setState({indexs:index});
				
			}
		}
		return (<div>
				<ReactSwipe className="carousel" swipeOptions={opt}>
				<div><img src="images/img1(2).jpg" /></div>
				<div><img src="images/img1(3).jpg" /></div>
				<div><img src="images/img1(5).jpg" /></div>
			</ReactSwipe>
			<div className="carousel_filed">
				<div className={this.state.indexs==0?"carousel_item active":"carousel_item"}></div>
				<div className={this.state.indexs==1?"carousel_item active":"carousel_item"}></div>
				<div className={this.state.indexs==2?"carousel_item active":"carousel_item"}></div>
			</div>
		</div>);
	}
}
export default Banner;