import React from 'react';
import './Toolbar.css'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Navbar = () => {
    return (
		<header className='toolbar'>
			<nav className='toolbar_navigtion'>
				<div>
					<DrawerToggleButton />
				</div>
                <div className='toolbar_logo'><a href="/">The Logo</a></div>
                <div className='spacer'/>
                
				<div className='toolbar_navigtion-items'>
					<ul>
						<li>Link1</li>
						<li>Link1</li>
					</ul>
				</div>
			</nav>
		</header>
		);
}

export default Navbar;
