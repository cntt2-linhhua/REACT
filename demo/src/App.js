
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

var Two = function()
{
  return (
    <div>
    <h3> Cach so 2 </h3>
    </div>
  );
}


  var Three = () =>(
  <div>
     <h2> so 1 tap 1 </h2>	    
     <h3> so 1 tap 2 </h3>	    
     </div>	
     );

  class Four extends Component {
  render() {
    return (
      <div>
         <button> React JS component so 4 </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <Two/>
        <Three/>
        <hr/>
        <Four/>
        </header>
      </div>
    );
  }
}
export default App;