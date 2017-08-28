import React from 'react';
import './Header.css';
class Header extends React.Component{
	render(){
		return (<div className="header">
					<div className="left_header"><i className="fa fa-user fa-2x"></i></div>
					<div className="center_header"><h1>生鲜大卖场</h1></div>
					<div className="right_header"><input type="search" placeholder="请输入关键字" /></div>
				</div>);
	}
}
export default Header;
