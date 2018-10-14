import React, { Component } from 'react';
import Home from './page/home/index';
import './App.css';
import Info from './components/Info/index'
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
