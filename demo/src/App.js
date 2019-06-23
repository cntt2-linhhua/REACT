
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function One() {
  return (
    <div>
      <h1>So 1 tap 1</h1>
      <h5>So 1 tap cuoi</h5>
    </div> 
    );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <hr/>
        </header>
      </div>
    );
  }
}
export default App;