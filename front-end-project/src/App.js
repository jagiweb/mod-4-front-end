import React from 'react';
import MainPage from './MainPage';

// import Navbar from './components/Toolbar/Navbar';



class App extends React.Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return (
			<div style={{ height: '100%' }}>
			
				<MainPage />
				
			</div>
		);
  }
}
 
export default App

