import React from 'react'
import API from "../../Api"


class EditProfile extends React.Component {
    
  constructor({user}) {
      console.log(user)
    super()
    this.state = {
      username: user.username,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      img_url: user.img_url
    }
  }

  editProfile = (user, token) => {
    this.setState({
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        img_url: user.img_url
    })
    localStorage.token = token
}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    API.EditProfile(this.state, this.props.user.id)
        .then(json => this.editProfile(json, json.token))
  }

  render() {
    const {user} = this.props
    // console.log("here")
    return(
    // <div> {user.username}</div>
      <form onSubmit={this.handleSubmit}>
        <label>Userame:</label>
        <input type="text" name="username" placeholder={user.username} onChange={this.handleChange}/><br/>

        <label>Name:</label>
        <input type="text" name="name" placeholder={user.name} onChange={this.handleChange}/><br/>

        <label>Lastname:</label>
        <input type="text" name="lastname" placeholder={user.lastname} onChange={this.handleChange}/><br/>

        <label>Email:</label>
        <input type="email" name="email" placeholder={user.email} onChange={this.handleChange}/><br/>

        <label>Password:</label>
        <input type="password" name="password" placeholder="New Password?" onChange={this.handleChange}/><br/>

        <label>Profile Picture:</label>
        <input type="text" name="img_url" placeholder="Image Url" onChange={this.handleChange}/><br/>

        <input type="submit" value="Update"/>
      </form>
    )
  }
}

export default EditProfile