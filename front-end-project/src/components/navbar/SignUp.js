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
      password: "",
      img_url: "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
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
    return (
			<div class="modal-main modal--change">
				<form onSubmit={this.handleSubmit}>
					<label>Userame:</label>
					<input type="text" name="username" onChange={this.handleChange} />
					<br />

					<label>Name:</label>
					<input type="text" name="name" onChange={this.handleChange} />
					<br />

					<label>Lastname:</label>
					<input type="text" name="lastname" onChange={this.handleChange} />
					<br />

					<label>Email:</label>
					<input type="email" name="email" onChange={this.handleChange} />
					<br />

					<label>Password:</label>
					<input type="password" name="password" onChange={this.handleChange} />
					<br />

					<label>Profile Picture:</label>
					<input
						type="text"
						name="img_url"
						placeholder="Image Url"
						onChange={this.handleChange}
					/>
					<br />

					<input type="submit" value="Sign Up" />
				</form>
			</div>
		);
  }
}

export default SignUp