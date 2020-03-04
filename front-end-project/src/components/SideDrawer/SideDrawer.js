import React from 'react';
import "./SideDrawer.css"
import {  Link } from 'react-router-dom';


const SideDrawer = props => {
	let drawerClasses = ['side-drawer'];
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
    return (
			<nav className={drawerClasses}>
				<Link to="/">Home</Link>
				<Link to="sign-in">Sign In</Link>
			</nav>
		);
}

export default SideDrawer;
