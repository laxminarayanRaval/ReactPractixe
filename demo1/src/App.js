import React, { Component } from 'react';
import Dashboard from './components/users/Dashboard';
import SignIn from './components/users/SignIn';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SignIn />
        <Dashboard username='test-user' />
      </React.Fragment>
    );
  }
}

export default App;
