import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import CreateClass from '../createClass/create-class';
import ClassMain from '../class/classMain';
import Content from '../content/content'

export default class TeacherAccount extends Component{
    render() {
        return(
            <Content className="teacher_account">
                <h2>Welcome Back Guitary McGuitarman</h2>
                <h3>Here are your currently scheduled classes!</h3>
                    <ul>
                        <li>
                            <Link to="/class_summary">Class Summary</Link>
                            <Route path="/class_summary" component={ClassMain} />
                        </li>
                        <li>(probably will be a link to the class summary page)</li>
                        <li>(probably will be a link to the class summary page)</li>
                        <li>(probably will be a link to the class summary page)</li>
                    </ul>
                <Link to="/teacher/create_class">Create Class</Link>
                <Route path="/teacher/create_class" component={CreateClass} />
            </Content>
        )
    }
}