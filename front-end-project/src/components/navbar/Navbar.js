import React, { Fragment } from 'react'
import SignIn from './SignIn'
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Toolbar from '../Toolbar/Toolbar';
import SignUp from './SignUp'
import { Route, Link } from 'react-router-dom'


class Navbar extends React.Component {

    // render() { 
    //     const {username, signOut, signUp, signIn} = this.props
    //     return ( 
            
    //         <Fragment>

    //             <div>
    //                 <p> {username} </p>
    //                 <Link to="/">Home</Link>
    //                 -
    //                 <Link to="sign-in">Sign In</Link>
    //                 -
    //                 <Link to="sign-up">Sign Up</Link>
    //                 -
    //                 <div>{this.props.username ? <button onClick={signOut}>Log Out</button> : null}</div>
    //                 <Route exact path="/sign-in" component={() => <SignIn signIn={signIn}/>}/>

    //                 <Route exact path="/sign-up" component={() => <SignUp signUp={signUp}/>}/>

    //             </div>
    //         </Fragment>
                
        //  );
    state = {
        sideDraweropen: false
    }

    drawToggleClickHandler = () => {
        this.setState((prevstate) => {
            return { sideDraweropen: !prevstate.sideDraweropen }

        })
    }

    backdropClickHandler = () => {
        this.setState({ sideDraweropen: false })
    }

    
        
       
        
    render() {
            
        // return (
        let backdrop 

        if (this.state.sideDraweropen) {
            backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />
        }
    
    
    
    
    
    
        const { username, signOut, signUp, signIn } = this.props
        return (
					<Fragment>
						<div>
							<p> {username} </p>
							{/* <Link to="/">Home</Link>
							<Link to="sign-in">Sign In</Link> */}
							<div>
								{this.props.username ? (
									<button onClick={signOut}>Log Out</button>
								) : null}
							</div>
							<Route
								exact
								path="/sign-in"
								component={() => <SignIn signIn={signIn} />}
							/>

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
								show={this.state.sideDraweropen}
								signIn={signIn}
								signUp={signUp}
								username={username}
								signOut={signOut}
							/>
							{backdrop}
						</div>
					</Fragment>
				);
        
    }
}


 
  export default Navbar;
