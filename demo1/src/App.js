import React, { Component } from 'react';
import FetchData from './components/data/FetchData';
import InsertData from './components/data/InsertData';
import Dashboard from './components/users/Dashboard';
import SignIn from './components/users/SignIn';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {isAuthenticated: false,}
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.isAuthenticated && <SignIn onAuth={e => {this.setState({isAuthenticated: e})}} />}
        {this.state.isAuthenticated &&
         <>
         <Dashboard username='test-user' /> 
         <InsertData />
         <hr />
         <FetchData />
         </>
         }
      </React.Fragment>
    );
  }
}

export default App;
