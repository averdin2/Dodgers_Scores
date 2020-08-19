import React, { Component } from 'react';
import Header from './components/Header';
import Count from './components/Count';
import Score from './components/Score';
import Runners from './components/Runners';
import RefreshButton from './components/RefreshButton';

import { Provider } from 'react-redux';
import store from './store';

import './styles/app.scss';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="content-container">
            <RefreshButton />
            <Score />
            <Count />
            <Runners />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
