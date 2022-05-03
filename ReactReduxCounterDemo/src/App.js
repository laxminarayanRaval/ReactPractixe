import React, { Component } from "react";
import "./App.css";

import CountAction from "./components/CountAction";
import CounterResult from "./components/CounterResult";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>rEduX Counter</h2>
          <CountAction val='+' type='increment' />
          <CountAction val='-' type='decrement' />
          <CountAction val='Reset' type='reset' />
          <CountAction val='Stop' type='stop' />
        </div>
        <CounterResult />
      </div>
    );
  }
}

export default App;
