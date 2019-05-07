import { FETCH_SCORE } from '../actions/types';

const initialState = {
  homeTeamName: '',
  homeTeamRuns: 0,
  awayTeamName: '',
  awayTeamRuns: 0
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_SCORE:
      return {
        ...state,
        homeTeamName: action.payload.home_team_name,
        homeTeamRuns: action.payload.home_team_runs,
        awayTeamName: action.payload.away_team_name,
        awayTeamRuns: action.payload.away_team_runs
      };
    default:
      return state;
  }
}