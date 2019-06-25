import { FETCH_VALUES } from './types';

export const fetchValues = () => dispatch => {
  fetch('http://gd2.mlb.com/components/game/mlb/year_2019/month_05/day_07/gid_2019_05_07_atlmlb_lanmlb_1/linescore.json')
    .then(res => res.json())
    .then(gameData => dispatch({
      type: FETCH_VALUES,
      payload: gameData.data.game
    }));
}