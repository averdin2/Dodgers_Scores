import { FETCH_VALUES } from './types';

export const fetchValues = (link) => (dispatch) => {
  fetch(
    // 'https://gd2.mlb.com/components/game/mlb/year_2020/month_08/day_17/gid_2020_08_18_seamlb_lanmlb_1/linescore.json'
    link
  )
    .then((res) => res.json())
    .then((gameData) =>
      dispatch({
        type: FETCH_VALUES,
        payload: gameData.data.game,
      })
    );
};
