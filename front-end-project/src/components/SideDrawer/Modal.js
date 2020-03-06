
import React, { Component } from 'react';
import './Modal.css'
export class Modal extends Component {
    render() {
        return (
                <div class="modal-main modal--change" >
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <br />

                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />

                        <input type="submit" value="Sign In" />
                    </form>
                </div>
		);
    }
}

export default Modal;
