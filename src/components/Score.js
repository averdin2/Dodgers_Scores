import React, { Component } from 'react';
//import '../styles/score.scss';

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeTeamName: '',
      homeTeamRuns: 0,
      awayTeamName: '',
      awayTeamRuns: 0
    }
  }

  componentDidMount() {
    fetch('http://gd2.mlb.com/components/game/mlb/year_2019/month_03/day_25/gid_2019_03_26_anamlb_lanmlb_1/linescore.json')
      .then(res => res.json())
      .then(data => 
        this.setState(
          {
            homeTeamName: data.data.game.home_team_name,
            homeTeamRuns: data.data.game.home_team_runs,
            awayTeamName: data.data.game.away_team_name,
            awayTeamRuns: data.data.game.away_team_runs
          }
        ))
  }

  render() {
    return (
      <div className="container">
        <div className="item">
          <h3 className="home-team">{this.state.homeTeamName}</h3>
            <p>{this.state.homeTeamRuns}</p>
        </div>
        <div className="item">
          <h3 className="away-team">{this.state.awayTeamName}</h3>
            <p>{this.state.awayTeamRuns}</p>
        </div> 
      </div>
    )
  }
}
