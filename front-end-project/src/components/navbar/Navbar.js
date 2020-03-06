import React, { Fragment } from 'react'
import SignIn from './SignIn'
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Toolbar from '../Toolbar/Toolbar';
import SignUp from './SignUp'
import Profile from '../profile/Profile'
import { Route, Link } from 'react-router-dom'


class Navbar extends React.Component {
    state = {
        sideDraweropen: false,
        modal: false
    }


    showModal = () => {
        this.setState({modal: true})
    }

    hideModal = () => {
        this.setState({ modal: false })
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
        const {username, signOut, signUp, signIn, id, user, editProfile} = this.props
        const profileURL = `/update-profile`
        return (
					<Fragment>
						
                        {this.props.username ? (
                            <div><button onClick={signOut}>Log Out</button></div>
                        ) : null}
						
						{username ? <div><Link to={profileURL}>My Profile</Link></div> : null}
						
						<Route
							exact
							path="/sign-up"
							component={() => (
								    this.state.modal && <SignUp
									signUp={signUp}
									show={this.state.modal}
									handleClose={this.hideModal}
								/>
							)}
						/>
						<Route
							exact
							path="/sign-in"
							component={() => (
                                    this.state.modal && <SignIn
                                    show={this.state.modal}
                                    handleClose={this.hideModal}
                                    signIn={signIn}
                                />
							)}
						/>
						<Toolbar drawToggleClickHandler={this.drawToggleClickHandler} />

						<SideDrawer
							show={this.state.sideDraweropen}
							signIn={signIn}
							signUp={signUp}
							username={username}
							signOut={signOut}
							close={this.backdropClickHandler}
							showModal={this.showModal}
							hideModal={this.hideModal}
						/>
                        {backdrop}
                               
						
				
					</Fragment>
				);
    }
}
 
export default Navbar;