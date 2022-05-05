import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

import Auth from "./components/Auth";
import Counter from "./components/Counter";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log('Auth;',isAuth)
  return (
    <div className="App">
      {!isAuth && <Auth />}
      {isAuth && <Counter />}
    </div>
  );
};

export default App;
