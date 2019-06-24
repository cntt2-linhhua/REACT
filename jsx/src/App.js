import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
const a1 ="Linh";

class App1 extends Component {
  render() {
    return (
      <div>
        <h3>Toi ten la : {a1}</h3>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
            Display value
          </label>
        </div>
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <App1/>
        </header>
        <p className="App-intro">
         To get started, edit <core>src/App.js</core> and save to reload
        </p>
    </div>
  );
}

export default App;
