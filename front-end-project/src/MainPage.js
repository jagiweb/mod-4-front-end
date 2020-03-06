import React, { Fragment } from 'react';
import ImageContainer from './containers/ImageContainer';
import Navbar from './components/navbar/Navbar';
import API from './Api';
import './MoreImages.css'

// import Api from './Api';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = { 
            images: [],
            username: null
         }
    }

    signIn = (username, token, user) => {
        console.log(user)
        this.setState({
            username,
            user
        })
        localStorage.token = token
    }


    componentDidMount() {
        // // If we have a token in localStorage, attempt to use it to validate ourselves against the server
        if (localStorage.token) {
          API.validate(localStorage.token)
          // Pass the username and token the server sends back to signIn
            .then(json => this.signIn(json.username, json.token))
            // .then(json => console.log(json))
            
        }
        API.getPictures()
            .then(images => this.setState({
                images: images.hits
            }))
      }

	signUp = (username, token) => {
		this.setState({
			username
		});
		localStorage.token = token;
	};


	//   // Sign the user out by setting the username to null and removing the token key from localStorage
	signOut = () => {
		this.setState({
			username: null
		});
		localStorage.removeItem('token');
	};

    render() { 
        // console.log(this.state.images)
        const {user, id, username, images} = this.state
        return ( 
            <Fragment>
                <Navbar editProfile={this.editProfile} user={user} id={id} signIn={this.signIn} signUp={this.signUp} username={username} signOut={this.signOut}/>
                <ImageContainer images={images}/>
                <button className='moreImages'>show more</button>
            </Fragment>
         );
    }
}

export default MainPage;
