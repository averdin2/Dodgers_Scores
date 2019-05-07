import { FETCH_SCORE } from './types';

export const fetchScore = () => dispatch => {
  fetch('http://gd2.mlb.com/components/game/mlb/year_2019/month_03/day_25/gid_2019_03_26_anamlb_lanmlb_1/linescore.json')
    .then(res => res.json())
    .then(scores => dispatch({
      type: FETCH_SCORE,
      payload: scores.data.game
    }));
}