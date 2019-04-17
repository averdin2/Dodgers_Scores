import React, { Component } from 'react';
import Header from "./components/Header";
import Count from "./components/Count";
import Score from "./components/Score";
import Runners from "./components/Runners";
import './styles/main.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
          <Score />
          <Count />
          <Runners />
        </div>
        
      </div>
    );
  }
}

export default App;
