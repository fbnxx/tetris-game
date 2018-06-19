import React, { Component } from 'react';

import './App.css';

import Game from'./Game';

import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Tetris dummy V 1.0</h1>
        </header>
        <Game/>
      </div>
    );
  }
}

export default App;
