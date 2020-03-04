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
					<Link to="/">
						<button>Home</button>
					</Link>
					<Link to="sign-in">
						<button>Sign in</button>
					</Link>
					<Link to="sign-up">
						<button>Sign up</button>
					</Link>
				</div>
			</nav>
		);
}

export default SideDrawer;
