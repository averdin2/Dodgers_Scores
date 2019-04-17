import React, { Component } from 'react';
//import '../styles/runners.scss';

export default class Runners extends Component {
  constructor(props) {
    super(props);
    // State keeps track if there is a runner on base
    this.state = {
      firstBase: false,
      secondBase: true,
      thirdBase: false
    }
  }

  render() {
    // Style for on base or an empty base
    const onBaseStyle = {
      backgroundColor: 'yellow'
    };

    const emptyBaseStyle = {
      backgroundColor: 'gray'
    }

    return (
      <div className="container">
        <div className="item">
          <h3>1st Base</h3>
            <div id="one" className="circle" style={this.state.firstBase ? onBaseStyle : emptyBaseStyle}></div>
        </div>
        <div className="item">
          <h3>2nd Base</h3>
          <div id="two" className="circle" style={this.state.secondBase ? onBaseStyle : emptyBaseStyle}></div>
        </div>
        <div className="item">
          <h3>3rd Base</h3>
          <div id="three" className="circle" style={this.state.thirdBase ? onBaseStyle : emptyBaseStyle}></div>
        </div>
      </div>
    )
  }
}
