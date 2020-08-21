import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchValues } from '../actions/gameDataActions';

import '../styles/findscores.scss';

export class FindScores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameLink: '',
    };
  }
  render() {
    let handleFormChange = (e) => {
      this.setState({
        gameLink: e.target.value,
      });
    };

    let updateValues = () => {
      this.props.fetchValues(
        this.state.gameLink
        // 'https://gd2.mlb.com/components/game/mlb/year_2020/month_08/day_19/gid_2020_08_20_lanmlb_seamlb_1/linescore.json'
      );
    };
    return (
      <div className="updateContainer">
        <form className="form">
          <input
            type="text"
            placeholder="Enter Game Data Link"
            value={this.state.gameLink}
            onChange={handleFormChange}
          ></input>
        </form>
        <button className="btn" onClick={updateValues}>
          <h3>Refresh Scores</h3>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { fetchValues })(FindScores);
