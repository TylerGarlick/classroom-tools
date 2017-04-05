import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QueueList from './components/queue/QueueList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QueueList/>
      </div>
    );
  }
}

export default App;
