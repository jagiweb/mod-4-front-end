import React from 'react';
import "./SideDrawer.css"

const SideDrawer = props => {
	let drawerClasses = ['side-drawer'];
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
    return (
			<nav className={drawerClasses}>
				
			</nav>
		);
}

export default SideDrawer;
