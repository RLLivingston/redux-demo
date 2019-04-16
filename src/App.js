import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import TitleList from './TitleList/TitleList';
import Cart from './Cart/Cart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Cart />
          <img src={logo} className="App-logo" alt="logo" />
          <TitleList />
        </header>
      </div>
    );
  }
}

export default connect(null)(App);
