import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/home/HomePage'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component = {HomePage} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
