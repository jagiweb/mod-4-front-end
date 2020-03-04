import React, { Fragment } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Route, Link } from 'react-router-dom'


class Navbar extends React.Component {

    render() { 
        const {username, signOut, signUp, signIn} = this.props
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
                    <Route exact path="/sign-in" component={() => <SignIn signIn={signIn}/>}/>

                    <Route exact path="/sign-up" component={() => <SignUp signUp={signUp}/>}/>

                </div>
            </Fragment>
                
         );
    }
}
 
export default Navbar;