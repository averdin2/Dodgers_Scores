import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchValues } from '../actions/gameDataActions';
//import '../styles/count.scss';

class Count extends Component {

  // Going to use this to grab day's game id
  componentDidMount() {
    // fetch('http://gd2.mlb.com/components/game/mlb/year_2019/month_04/day_17/miniscoreboard.json')
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    this.props.fetchValues();
  }

  render() {
    return (
      <div className="container">
        <div className="item">
          <h3>Inning</h3>
            <p>{this.props.gameStatus === 'Final' ? 'Final' : this.props.inningState + ': ' + this.props.inning}</p>
        </div>
        <div className="item">
          <h3>Outs</h3>
            <p>{this.props.outs}</p>
        </div>
        <div className="item">
          <h3>Count</h3>
            <p>{this.props.balls}-{this.props.strikes}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  inningState: state.data.inningState,
  inning: state.data.inning,
  outs: state.data.outs,
  balls: state.data.balls,
  strikes: state.data.strikes,
  gameStatus: state.data.gameStatus
})

export default connect(mapStateToProps, { fetchValues })(Count);
