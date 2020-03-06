import React, { Component } from 'react';
import './Modal.css';

export class ModalSignup extends Component {
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
							<input
								type="password"
								name="password"
								onChange={this.handleChange}
							/>
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

export default ModalSignup;
