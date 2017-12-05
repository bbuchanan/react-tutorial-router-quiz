import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AppContainer from '../src/Containers/AppContainer/AppContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
