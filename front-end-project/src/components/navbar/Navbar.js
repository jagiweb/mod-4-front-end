import React, { Fragment } from 'react'
import SignIn from './SignIn'
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Toolbar from '../Toolbar/Toolbar';
import { Route, Link } from 'react-router-dom'


class Navbar extends React.Component {

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
        
        let backdrop 

        if (this.state.sideDraweropen) {
            backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />
        }
        return (
   
            <Fragment>
                <div>
                    <Link to="sign-in">Sign In</Link>
                    <Route exact path="/sign-in" component={() => <SignIn signIn={this.props.signIn} />} />
                    <Toolbar drawToggleClickHandler={this.drawToggleClickHandler} />
                    <SideDrawer show={this.state.sideDraweropen} /> 
                    {backdrop}
                    
                </div>
            </Fragment>
        );
        // }
    }
}
 
export default Navbar;