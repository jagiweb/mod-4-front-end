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
				<div className="side-drawer-button">
					{/* <h1>hello</h1> */}

					<button className="fas fa Times" onClick={props.toggleShowSideDrawer}>
						close
					</button>
					<Link to="/" className="fas fa-home">
						Home
					</Link>
					<Link to="sign-in" className="fas fa-sign-in-alt">
						Sign in
					</Link>
					<Link to="sign-up" className="fas fa-user-plus">
						Sign up
					</Link>
				</div>
			</nav>
		);
}

export default SideDrawer;

