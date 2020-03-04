import React from 'react'
import API from "../../Api"


class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      name: "",
      lastname: "",
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    API.signUp(this.state)
        .then(json => this.props.signUp(json.username, json.token))
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Userame:</label>
        <input type="text" name="username" onChange={this.handleChange}/><br/>

        <label>Name:</label>
        <input type="text" name="name" onChange={this.handleChange}/><br/>

        <label>Lastname:</label>
        <input type="text" name="lastname" onChange={this.handleChange}/><br/>

        <label>Email:</label>
        <input type="email" name="email" onChange={this.handleChange}/><br/>

        <label>Password:</label>
        <input type="password" name="password" onChange={this.handleChange}/><br/>

        <input type="submit" value="Sign Up"/>
      </form>
    )
  }
}

export default SignUp