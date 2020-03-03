import React from 'react';
import MainPage from './MainPage';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Navbar from './components/Toolbar/Navbar';



class App extends React.Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return (
			<div style={{ height: '100%' }}>
				<MainPage />
				<SideDrawer />
				<Backdrop />
				<Navbar />
			</div>
		);
  }
}
 
export default App

