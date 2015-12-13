import { MUC_RECEIVE_GROUPCHAT } from '../constants';
const defaultState = {
  messages: {}
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case MUC_RECEIVE_GROUPCHAT:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.message.id]: action.message
        }
      }
      messages
    default:
      return state;
  }
}
