import React, { Component } from 'react';

class StudentLogin extends Component {
    render () {
        return(
            <div className="student_signin_form">
                <h2>Existing Students Login Here!</h2>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Your Username"
                    //value={this.state.last_name}
                    //onChange={e => this.lastNameChanged(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input style={{ marginLeft: '.5rem' }}
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Your Password Here"
                    //value={this.state.password}
                    //onChange={e => this.passwordChanged(e.target.value)}
                />
                <label htmlFor="confirm_password">Confirm Password</label>
                <input style={{ marginLeft: '.5rem' }}
                    type="text"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password Here"
                    //value={this.state.confirmPassword}
                    //onChange={e => this.confirmPasswordChanged(e.target.value)}
                />
            </div>
        )
    }
}

export default StudentLogin;