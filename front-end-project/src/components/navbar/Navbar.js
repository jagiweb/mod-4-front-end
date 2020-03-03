import React, { Fragment } from 'react'
import SignIn from './SignIn'
import { Route, Link } from 'react-router-dom'


class Navbar extends React.Component {

    render() { 
        return ( 
   
            <Fragment>
                <div>
                    <Link to="sign-in">Sign In</Link>
                    <Route exact path="/sign-in" component={() => <SignIn signIn={this.props.signIn}/>}/>
                    {/* <Link to="sign-in">Sign In</Link> */}
                </div>
            </Fragment>
                
            

         );
    }
}
 
export default Navbar;