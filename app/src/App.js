import React, { Component } from "react";
import "./App.css";
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";
import Component4 from "./Component4.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div role="banner" aria-label="main banner">
          <h1>React Application without Routing</h1>
          <p>
            <a href="https://github.com/clane/React-no-routing">
              https://github.com/clane/React-no-routing
            </a>
          </p>
        </div>
        <div role="main" aria-label="components go here">
          <Component1 />
          <Component2 />
          <Component3 />
          <Component4 />
        </div>
      </div>
    );
  }
}

export default App;
