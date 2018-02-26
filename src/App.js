import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Calender from './components/calender';
import Landing from './components/landing';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ (props) => <Landing {...props}/> }/>
        <Route path='/calender' render={ (props) => <Calender {...props}/> }/>
      </div>
    );
  }
}

export default App;
