import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
// import Modal from '../Component/Modal';

const SideDrawer = props => {
	let drawerClasses = ['side-drawer'];
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<div className="side-drawer-button">
				{/* <h1>hello</h1> */}
				<button className="fas fa-home -btn" onClick={props.close}>
					close
				</button>
				<button>
					<Link to="/">Home</Link>
				</button>
				<button onClick={props.showModal} className="fas fa-sign-in-alt">
					<Link to="sign-in">Sign in</Link>
				</button>
				
				<button onClick={props.showModal} className="fas fa-user-plus">
					<Link to="sign-up">Sign up</Link>
				</button>
				

				<br></br>
			</div>
		</nav>
	);
};

export default SideDrawer;
