import React, { Fragment, Component } from 'react'
import EditProfile from './EditProfile'
import { Route, Link } from 'react-router-dom'


class Profile extends Component {

    state = {
        edit: false
    }

    render() { 
        const {user, editProfile} = this.props
        // const profileURL = `/update-profile/${user.id}`
        return ( 
            <div>
                {this.state.edit && <EditProfile editProfile={editProfile} user={user} />}
                <img src={user.img_url}/>
                <h1>{user.username}</h1>
                <button onClick={() => this.setState({edit: !this.state.edit})}>Edit Profile</button>
                <h4>{user.name ? user.name : "No Value"}</h4>
                <h4>{user.lastname ? user.lastname : "No Value"}</h4>
                <h4>{user.email ? user.email : "No Value"}</h4>
                
            </div>
         );
    }
}
 
export default Profile;