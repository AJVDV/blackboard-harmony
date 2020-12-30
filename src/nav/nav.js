import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Content from '../content/content'
import StudentAccount from '../account/student-account'
import Lander from '../landingPage/lander'
import Search from '../class-search/search'
import TeacherAccount from '../account/teacher-account'
import ClassMain from '../class/classMain'
import AdminAccount from '../account/admin-account'

export default class Nav extends Component {
  render() {
    return (
        <div className="Nav">
            <div className='Nav'>
                <Link to='/student-account'>
                My Classes
                </Link>
                <Link style={{ marginLeft: '.5rem' }} to='/lander'>
                Landing Page
                </Link>
                <Link style={{ marginLeft: '.5rem' }} to='/search'>
                Class Search
                </Link>
                <Link style={{ marginLeft: '.5rem' }} to='/teacher'>
                Teacher Account
                </Link>
                <Link style={{ marginLeft: '.5rem' }} to="/class_summary">Class Summary</Link>
                <Link style={{ marginLeft: '.5rem' }} to='/admin'>
                Admin Account
                </Link>
                <Switch>
                    <Route path='/student-account' component={StudentAccount}/>
                    <Route path='/lander' component={Lander} />
                    <Route path='/search' component={Search} />
                    <Route path='/teacher' component={TeacherAccount} />
                    <Route path="/class_summary" component={ClassMain} />
                    <Route path="/admin" component={AdminAccount} />
                </Switch>
            </div>
        </div>
    )
  }
}