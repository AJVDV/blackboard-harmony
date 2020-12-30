import React, { Component } from 'react';

class StudentSignup extends Component {
    render () {
        return(
            <div className="student_signup_form">
                <h2>Students Sign Up Here!</h2>
                <label htmlFor="first_name">First Name:</label>
                <input 
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    //value={this.state.first_name}
                    //onChange={e => this.firstNameChanged(e.target.value)}
                />
                <label htmlFor="last_name">Last Name:</label>
                <input 
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="last Name"
                    //value={this.state.last_name}
                    //onChange={e => this.lastNameChanged(e.target.value)}
                />
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Nickname or Handle"
                    //value={this.state.last_name}
                    //onChange={e => this.lastNameChanged(e.target.value)}
                />
                <label htmlFor="email">E-mail address:</label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    placeholder="example@fakemail.com"
                    //value={this.state.email}
                    //onChange={e => this.emailChanged(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Your Password Here"
                    //value={this.state.password}
                    //onChange={e => this.passwordChanged(e.target.value)}
                />
                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
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

export default StudentSignup;