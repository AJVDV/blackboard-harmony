import React, {Component} from 'react';
import Content from '../content/content';

export default class AdminAccount extends Component{
    render() {
        return(
            <Content className="admin_account">
                <h2>Welcome Back Large Incharge</h2>
                <h3>Here are links to all accounts and classes for evaluation!</h3>
                    <ul>
                        <li>(probably will be a link to the class summary page)</li>
                        <li>(link to a list of all classes)</li>
                        <li>(link to a list of all student accounts)</li>
                        <li>(link to a list of all teacher accounts)</li>
                    </ul>
            </Content>
        )
    }
}