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

const so = [1,2,3,4,5,6,7,8,9];
const so2 =so.map((x)=>x*2+",");

const so3 = so.map((x)=>(
  <div>
    <li>So : {x}</li>
  </div>
)
);
class App2 extends Component {
  render() {
    return (
      <div>
       {so2} 
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
        <App2/>
        </header>
        <p className="App-intro">
         To get started, edit <core>src/App.js</core> and save to reload
        </p>
    </div>
  );
}

export default App;
