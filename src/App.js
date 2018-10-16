import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/registration'
import Registration from './component/registration';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Registration</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Registration/>
        </header>
        
      </div>
    );
  }
}

export default App;
