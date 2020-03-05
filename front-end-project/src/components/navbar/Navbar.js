import React, { Fragment } from 'react'
import SignIn from './SignIn'
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Toolbar from '../Toolbar/Toolbar';
import SignUp from './SignUp'
import { Route,} from 'react-router-dom'


class Navbar extends React.Component {

    
    state = {
        sideDraweropen: false
    }

    drawToggleClickHandler = () => {
        this.setState({
            sideDraweropen: !this.state.sideDraweropen 

        })
    }

    backdropClickHandler = () => {
        this.setState({ sideDraweropen: false })
    }

    
        
       
        
    render() {
            
        
        let backdrop 

        if (this.state.sideDraweropen) {
            backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />
        }
    
    
    
    
    
    
        const { username, signOut, signUp, signIn } = this.props
        return (
					<Fragment>
						{/* <p> {username} </p> */}

						<div>
							{this.props.username ? (
								<button onClick={signOut}>Log Out</button>
							) : null}
						</div>

						<Route
							exact
							path="/sign-up"
							component={() => <SignUp signUp={signUp} />}
						/>
						<Route
							exact
							path="/sign-in"
							component={() => <SignIn signIn={this.props.signIn} />}
						/>
						<Toolbar drawToggleClickHandler={this.drawToggleClickHandler} />
						<SideDrawer
							close={this.prevstate}
							show={this.state.sideDraweropen}
							signIn={signIn}
							signUp={signUp}
							username={username}
							signOut={signOut}
							toggleShowSideDrawer={this.drawToggleClickHandler}
						/>
						{backdrop}
					</Fragment>
				);
        
    }
}


 
  export default Navbar;
