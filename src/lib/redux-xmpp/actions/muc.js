import { MUC_JOIN_START, MUC_JOIN_SUCCESS, MUC_JOIN_ERROR, MUC_RECEIVE_GROUPCHAT } from '../constants';

export const joinstart = function (jid) {
  return {
    type: MUC_JOIN_START,
    jid: jid
  }
}

export const joinSuccess = function (jid) {
  return {
    type: MUC_JOIN_SUCCESS,
    jid: jid
  }
}

export const joinError = function (jid, error) {
  return {
    type: MUC_JOIN_ERROR,
    jid: jid,
    error: error
  }
}

export const receiveGroupchat = function (jid, { id, from, body }) {
  return {
    type: MUC_RECEIVE_GROUPCHAT,
    jid,
    message: {
      id,
      from,
      body
    }
  };
}
