import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoMaker from "./components/TodoMaker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Advance ToDo App</h1>
        <TodoMaker />
        <p>Hello Mr. Lx Complete your task.</p>
      </header>
    </div>
  );
}

export default App;
