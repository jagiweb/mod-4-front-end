import React from 'react';
import './Toolbar.css'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => {
    return (
			<header className="toolbar">
				<nav className="toolbar_navigtion">
					<div>
						<DrawerToggleButton click={props.drawToggleClickHandler} />
					</div>
					{/* <div className="toolbar_logo">
						<a href="/">The Logo</a>
					</div> */}
					<div className="spacer" />

					<div className="toolbar_navigtion-items"></div>
				</nav>
			</header>
		);
}

export default Toolbar;
