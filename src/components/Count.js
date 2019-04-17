import React, { Component } from 'react';
//import '../styles/count.scss';

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inningState: 'Top',  // should default empty
      inning: 1,           // should default 0
      outs: 0,
      balls: 0,
      strikes: 0
    }
  }
  render() {
    return (
      <div className="container">
        <div className="item">
          <h3>Inning</h3>
            <p>{this.state.inningState}: <span>{this.state.inning}</span></p>
        </div>
        <div className="item">
          <h3>Outs</h3>
            <p>{this.state.outs}</p>
        </div>
        <div className="item">
          <h3>Count</h3>
            <p>{this.state.balls}-{this.state.strikes}</p>
        </div>
      </div>
    )
  }
}
