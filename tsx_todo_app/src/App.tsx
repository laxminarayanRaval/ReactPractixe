import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoMaker from "./components/TodoMaker";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Advance ToDo App</h1>
        <TodoMaker />
        <TodoList />
      </header>
    </div>
  );
};

export default App;
