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
            username: null,
            num: 24
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
        if (localStorage.token) {
          API.validate(localStorage.token)
            .then(json => this.signIn(json.username, json.token))
            
        }
        API.getPictures()
            .then(images => this.setState({
                images: images.hits
            }))
      }

      getMorePictures() {
          API.getMorePictures(this.state.num)
            .then(images => this.setState({
                images: images.hits,
                num: this.state.num + 12
              }))
          
          console.log(this.state.num)
      }

	signUp = (username, token) => {
		this.setState({
			username
		});
		localStorage.token = token;
	};

	signOut = () => {
		this.setState({
			username: null
		});
		localStorage.removeItem('token');
	};

    render() { 
        const {user, id, username, images} = this.state
        return ( 
            <Fragment>
                <Navbar editProfile={this.editProfile} user={user} id={id} signIn={this.signIn} signUp={this.signUp} username={username} signOut={this.signOut}/>
                <ImageContainer images={images}/>
                <button className='moreImages' onClick={() => this.getMorePictures()}>show more</button>
            </Fragment>
         );
    }
}

export default MainPage;
