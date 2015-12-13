import { SESSION_STARTED } from '../constants';

const defaultState = {
  connected: false,
  jid: null
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SESSION_STARTED:
      return {
        ...state,
        connected: true
      };
    default:
      return state;
  }
}
