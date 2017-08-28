import React from "react";
import Header from "./header/Header";
import FootList from "./list/FootList";
class Box extends React.Component{
	render(){
		return (<div>
			<Header />
			<FootList />	
		</div>)
	}
}
export default Box;