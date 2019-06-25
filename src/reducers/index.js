import { combineReducers } from 'redux';
import gameDataReducer from './gameDataReducer';

export default combineReducers({
  data: gameDataReducer
})