import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchValues } from '../actions/gameDataActions';

class Score extends Component {
  // componentDidMount() {
  //   this.props.fetchValues(
  //     'https://gd2.mlb.com/components/game/mlb/year_2020/month_08/day_17/gid_2020_08_17_seamlb_lanmlb_1/linescore.json'
  //   );
  // }

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
    );
  }
}

// *TODO*
// Score.propTypes = {
//   fetchScore: PropTypes.func.isRequired,
// }

const mapStateToProps = (state) => ({
  homeTeamName: state.data.homeTeamName,
  homeTeamRuns: state.data.homeTeamRuns,
  awayTeamName: state.data.awayTeamName,
  awayTeamRuns: state.data.awayTeamRuns,
});

export default connect(mapStateToProps, { fetchValues })(Score);
