import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoMaker from "./components/TodoMaker";
import TodoList from "./components/TodoList";
import RemovedTasksList from "./components/RemovedTasksList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Advance ToDo App</h1>
        <TodoMaker />
        <TodoList />
        <RemovedTasksList />
      </header>
    </div>
  );
};

export default App;
