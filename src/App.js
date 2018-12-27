import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from './components/slideshow';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routes/>
        </header>
      </div>
    );
  }
}

export default App;
