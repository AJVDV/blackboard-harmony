import React, { Component } from 'react';
import Nav from '../nav';

class TeacherSignup extends Component {
    render () {
        return(
            <div className="teacher_form">
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
                    placeholder="Preffered nickname or handle"
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
            </div>
        )
    }
}

export default TeacherSignup;