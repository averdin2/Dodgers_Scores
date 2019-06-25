import { FETCH_VALUES } from '../actions/types';

const initialState = {
  homeTeamName: '',
  homeTeamRuns: 0,
  awayTeamName: '',
  awayTeamRuns: 0,
  // Count variables
  inningState: '',  
  inning: 0,           
  outs: 0,
  balls: 0,
  strikes: 0,
  gameStatus: '',
  // Runners Variables
  firstBase: '',
  secondBase: '',
  thirdBase: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_VALUES:
      return {
        ...state,
        homeTeamName: action.payload.home_team_name,
        homeTeamRuns: action.payload.home_team_runs,
        awayTeamName: action.payload.away_team_name,
        awayTeamRuns: action.payload.away_team_runs,
        inningState: action.payload.inning_state,
        inning: action.payload.inning,
        outs: action.payload.outs,
        balls: action.payload.balls,
        strikes: action.payload.strikes,
        gameStatus: action.payload.status,
        firstBase: action.payload.runner_on_1b,
        secondBase: action.payload.runner_on_2b,
        thirdBase: action.payload.runner_on_3b
      };
    default:
      return state;
  }
}