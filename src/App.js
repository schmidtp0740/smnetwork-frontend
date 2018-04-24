import React, { Component } from 'react';
import './App.css';
import {Login, Logged} from './Login'
import { IconButton, AppBar } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Signup from './Signup';
Logged.muiName = 'IconMenu';

class App extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <Signup/>
      </div>
    );
  }
}

export default App;
