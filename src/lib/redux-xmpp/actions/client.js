import { SESSION_STARTED } from '../constants';

export const sessionStarted = function (jid) {
  return {
    type: SESSION_STARTED,
    jid: jid
  };
}
