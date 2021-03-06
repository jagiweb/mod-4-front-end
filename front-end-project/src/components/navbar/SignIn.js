import React from 'react'
import API from "../../Api"
import './ModalForm.css'


class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
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
    API.signIn(this.state)
        .then(json => this.props.signIn(json.username, json.token, json.user))
  }

  render() {

    // const showHideModal = this.props.modal ? 'modal display-block' : 'modal display-none'

    return (
			<div class="modal-main modal--change">
				<form onSubmit={this.handleSubmit}>
					<label>Username:</label>
					<input type="text" name="username" onChange={this.handleChange} />
					<br />

					<label>Password:</label>
					<input type="password" name="password" onChange={this.handleChange} />
					<br />

					<input type="submit" value="Sign In" />
				</form>
			</div>
		);
  }
}

export default SignIn