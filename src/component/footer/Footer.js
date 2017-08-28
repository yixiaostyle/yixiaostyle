import React from "react";
import "./Footer.css";
import IndexPage from '../page/indexPage';
import FootList from '../list/FootList';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
class Footer extends React.Component{
	change(){
		this.refs.ab.style.backgroundColor="green";
	}
	componentDidMount(){
		console.log(11111);
	}
	render(){
		return (
			<Router>
			<div>
			
				<Route exact path="/" component={IndexPage}></Route>
				<Route path="/goods" component={FootList}></Route>
			
				<div className="footer">
					<div>
						<div className="footer_item" ref="ab" onClick={this.change.bind(this)}><Link to="/">首页</Link></div>
						<div className="footer_item"><Link to="/goods">购物</Link></div>
						<div className="footer_item">联系</div>
						<div className="footer_item">个人</div>
					</div>
				</div>
			</div>
		
		</Router>)
	}
}
export default Footer;
