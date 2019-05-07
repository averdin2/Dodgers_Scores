import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchScore } from '../actions/scoreActions';

class Score extends Component {
  componentDidMount() {
    this.props.fetchScore();
  }

  render() {
    return (
      <div className="container">
        <div className="item">
          <h3 className="home-team">{this.props.homeTeamName}</h3>
            <p>{this.props.homeTeamRuns}</p>
        </div>
        <div className="item">
          <h3 className="away-team">{this.props.awayTeamName}</h3>
            <p>{this.props.awayTeamRuns}</p>
        </div> 
      </div>
    )
  }
}

// *TODO*
// Score.propTypes = {
//   fetchScore: PropTypes.func.isRequired,
// }

const mapStateToProps = state => ({
  homeTeamName: state.score.homeTeamName,
  homeTeamRuns: state.score.homeTeamRuns,
  awayTeamName: state.score.awayTeamName,
  awayTeamRuns: state.score.awayTeamRuns
})

export default connect(mapStateToProps, { fetchScore })(Score);
