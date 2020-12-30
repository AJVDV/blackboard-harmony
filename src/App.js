
import './App.css';
import React, { Component } from 'react';
import Nav from './nav/nav';
import Content from './content/content';


export default class App extends Component {
  render() {
    return(
      <div className='App'>
        <main>
          <Content />
        </main>
        <footer><Nav /></footer>
      </div>
    )
  }
}
