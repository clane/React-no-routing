import React, { Component } from 'react';
import './App.css';
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";
import Component4 from "./Component4.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Components with No Routing</h1>
			  <Component1/>
			  <Component2/>
			  <Component3/>
			  <Component4/>
      </div>
    );
  }
}

export default App;
