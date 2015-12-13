import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { rootReducer as xmppReducer } from '../lib/redux-xmpp';

export default combineReducers({
  form: formReducer,
  xmpp: xmppReducer
});
