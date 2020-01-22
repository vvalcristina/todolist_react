import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Link extends Component {

 
  render(){
    console.log(this.props)
    return (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    );
  }
}

export default Link;
