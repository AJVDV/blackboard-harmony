import React, {Component} from 'react';

export default class StudentAccount extends Component{
    render() {
        return(
            <div className="student_account">
                <h2>Welcome Back RandomStudent#23537</h2>
                <h3>Here are your currently scheduled classes!</h3>
                    <ul>
                        <li>(probably will be a link to the class summary page)</li>
                        <li>(probably will be a link to the class summary page)</li>
                        <li>(probably will be a link to the class summary page)</li>
                        <li>(probably will be a link to the class summary page)</li>
                    </ul>
            </div>
        )
    }
}