import { combineReducers } from 'redux';
import clientReducer from './client';
import mucReducer from './muc';
import messageReducer from './message';

export default combineReducers({
  client: clientReducer,
  mucs: mucReducer,
  messages: messageReducer
});
