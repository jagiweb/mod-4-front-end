import React, { Fragment } from 'react'
import SignIn from './SignIn'
import { Route } from 'react-router-dom'

class Navbar extends React.Component {

    render() { 
        return ( 
   
            <Fragment>
                
                <Route exact path="/" component={() => <SignIn signIn={this.props.signIn}/>}/>
            </Fragment>
                
            

         );
    }
}
 
export default Navbar;