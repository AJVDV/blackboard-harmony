import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Content from "../content/content"
import StudentSignup from '../signup/student-signup';
import TeacherSignup from '../signup/teacher-signup';
import StudentLogin from '../login/student-login';
import TeacherLogin from '../login/teacher-login';


export default class Lander extends Component {
    render() {
        return (
            <Content className="App">
              <div className="App-body">
              <h1>Welcome to Blackboard Harmony!</h1>
                <h2>A place where people come together for the joy of learing music.</h2>
                <p>
                  If this is the first time you are here, Welcome! Be sure to click the sign up for either student, or teacher to get started!
                </p>
                <Link to='/lander/student-signup'>Student Sign-Up</Link>
                <Link style={{ marginLeft: '.5rem' }} to='/lander/teacher-signup'>Teacher Sign-Up</Link>
                <Link style={{ marginLeft: '.5rem' }} to='/lander/student-login'>Student Login</Link>
                <Link style={{ marginLeft: '.5rem' }} to='/lander/teacher-login'>Teacher Login</Link>
                <Switch>
                    <Route path='/lander/student-signup' component={StudentSignup} />
                    <Route path='/lander/teacher-signup' component={TeacherSignup} />
                    <Route path='/lander/student-login' component={StudentLogin} />
                    <Route path='/lander/teacher-login' component={TeacherLogin} />
                </Switch>

              </div>
              <footer></footer>
            </Content>
        );
    }
}