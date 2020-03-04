import React, { Fragment } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Profile from '../profile/Profile'
import { Route, Link } from 'react-router-dom'


class Navbar extends React.Component {

    render() { 
        const {username, signOut, signUp, signIn, id, user, editProfile} = this.props
        const profileURL = `/update-profile`
        return ( 
            
            <Fragment>
                <div>
                    <p> {username} </p>
                    <Link to="/">Home</Link>
                    -
                    <Link to="sign-in">Sign In</Link>
                    -
                    <Link to="sign-up">Sign Up</Link>
                    -
                    <div>{this.props.username ? <button onClick={signOut}>Log Out</button> : null}</div>
                    -
                    <div>{username ? <Link to={profileURL}>My Profile</Link> : null}</div>
                    <Route exact path="/sign-in" component={() => <SignIn signIn={signIn}/>}/>

                    <Route exact path="/sign-up" component={() => <SignUp signUp={signUp}/>}/>

                    <Route exact path={profileURL} component={() => <Profile editProfile={editProfile}  user={user}/>}/>

                </div>
            </Fragment>
                
         );
    }
}
 
export default Navbar;