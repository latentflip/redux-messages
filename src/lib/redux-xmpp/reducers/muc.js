import { MUC_JOIN_SUCCESS, MUC_RECEIVE_GROUPCHAT } from '../constants';

const defaultState = {
  mucList: [],
  mucs: {}
};

const addToSetImmutable = function (arr, val) {
  if (arr.indexOf(val) === -1) {
    return [...arr, val];
  }

  return arr;
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case MUC_JOIN_SUCCESS: {
      let { jid } = action;
      let { mucList, mucs } = state;

      return {
        ...state,
        mucList: addToSetImmutable(mucList, jid),
        mucs: {
          ...mucs,
          [jid]: {
            jid,
            messages: [],
            ...mucs[jid],
            joined: true
          }
        }
      };
    }

    case MUC_RECEIVE_GROUPCHAT: {
      let { jid, message } = action;
      let { mucs } = state;
      let muc = mucs[jid]
      let messages = muc.messages || [];

      return {
        ...state,
        mucs: {
          ...mucs,
          [jid]: {
            ...muc,
            messages: [
              ...messages,
              message.id
            ]
          }
        }
      };
    }

    default:
      return state;
  }
}
