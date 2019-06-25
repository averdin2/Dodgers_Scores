import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchValues } from '../actions/gameDataActions';
//import '../styles/runners.scss';

class Runners extends Component {

  render() {
    // Style for on base or an empty base
    const onBaseStyle = {
      backgroundColor: 'yellow'
    };

    const emptyBaseStyle = {
      backgroundColor: 'gray'
    }

    // Check if value for base is empty then display color based on value
    return (
      <div className="container">
        <div className="item">
          <h3>1st Base</h3>
            <div id="one" className="circle" style={this.props.firstBase !== undefined ? onBaseStyle : emptyBaseStyle}></div>
        </div>
        <div className="item">
          <h3>2nd Base</h3>
          <div id="two" className="circle" style={this.props.secondBase !== undefined ? onBaseStyle : emptyBaseStyle}></div>
        </div>
        <div className="item">
          <h3>3rd Base</h3>
          <div id="three" className="circle" style={this.props.thirdBase !== undefined ? onBaseStyle : emptyBaseStyle}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  firstBase: state.data.firstBase,
  secondBase: state.data.secondBase,
  thirdBase: state.data.thirdBase
})

export default connect(mapStateToProps, { fetchValues })(Runners);
