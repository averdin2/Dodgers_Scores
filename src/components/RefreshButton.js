import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchValues } from '../actions/gameDataActions';

import '../styles/button.scss';

export class RefreshButton extends Component {
  render() {
    let updateValues = () => {
      this.props.fetchValues(
        'https://gd2.mlb.com/components/game/mlb/year_2020/month_08/day_19/gid_2020_08_19_cinmlb_kcamlb_1/linescore.json'
      );
    };
    return (
      <div>
        <button className="btn" onClick={updateValues}>
          <h3>Refresh Scores</h3>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { fetchValues })(RefreshButton);
