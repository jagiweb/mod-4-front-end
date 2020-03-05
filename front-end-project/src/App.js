import React from 'react';
import MainPage from './MainPage';
import './MoreImages.css'
// import Navbar from './components/Toolbar/Navbar';



class App extends React.Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return (
			<div >
          <button className='moreImages'>show more</button>
				<MainPage />
			</div>
		)
  }
}
 
export default App

