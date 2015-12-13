import { combineReducers } from 'redux';
import clientReducer from './client';

export default combineReducers({
  client: clientReducer
});
