import React, { Fragment }  from 'react';
import ImageContainer from './containers/ImageContainer'
import Navbar from './components/navbar/Navbar'
import API from './Api'
// import Api from './Api';


class MainPage extends React.Component {
    constructor() {
        super();
        this.state = { 
            images: []
         }
    }

    componentDidMount() {
        // If we have a token in localStorage, attempt to use it to validate ourselves against the server
        if (localStorage.token) {
          API.validate(localStorage.token)
          // Pass the username and token the server sends back to signIn
            .then(json => this.signIn(json.username, json.token))
        }
        API.getPictures()
            .then(images => this.setState({
                images: images.hits
            }))
      }


      signOut = () => {
        this.setState({
          username: null
        })
        localStorage.removeItem("token")
      }
    
      signIn = (username, token) => {
        // Set the state of username to be the username the server sent back
        this.setState({
          username
        })
        // Store the token the server sent back in localStorage, which is on the client-side

        localStorage.token = token
      }
    
      // Sign the user out by setting the username to null and removing the token key from localStorage
      signOut = () => {
        this.setState({
          username: null
        })
        localStorage.removeItem("token")
      }


    render() { 
        // console.log(this.state.images)
        return ( 
            <Fragment>
                <Navbar signIn={this.signIn}/>
                <ImageContainer images={this.state.images}/>
            </Fragment>
         );
    }
}
 
export default MainPage;