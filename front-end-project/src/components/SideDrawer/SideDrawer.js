import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
// import Modal from '../Component/Modal';

const SideDrawer = props => {
	let drawerClasses = ['side-drawer'];
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	// const { signOut, username, profileURL } = this.props
	
	return (
		<nav className={drawerClasses}>
			<div className="side-drawer-button">
				{/* <h1>hello</h1> */}
				{/* <button onClick={props.close}>close</button> */}

				<Link className="fas fa-home -btn" to="/">
					Home
				</Link>

				<Link
					onClick={props.showModal}
					className="fas fa-sign-in-alt"
					to="sign-in"
				>
					Sign in
				</Link>

				<Link
					onClick={props.showModal}
					className="fas fa-user-plus"
					to="sign-up"
				>
					Sign up
				</Link>
				{props.username ? (
					<div>
						<button onClick={props.signOut}>Log Out</button>
					</div>
				) : null}

				{props.username ? (
					<div>
						<Link to={props.profileURL}>My Profile</Link>
					</div>
				) : null}

				<br></br>
			</div>
		</nav>
	);
};

export default SideDrawer;
