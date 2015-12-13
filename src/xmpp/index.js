export { default as Component } from './component';
import { clientActionCreators, mucActionCreators } from '../lib/redux-xmpp';


export const bindToDispatch = function (client, dispatch) {
  client.on('*', (name, ...args) => {
    if (localStorage.logAll) {
      console.log(name, ...args);
    }
  });

  client.on('session:started', (jid) => {
    dispatch(clientActionCreators.sessionStarted(jid.full));
  });

  client.on('muc:available', (presence) => {
    dispatch(mucActionCreators.joinSuccess(presence.from.bare));
  });

  client.on('groupchat', (msg) => {
    dispatch(mucActionCreators.receiveGroupchat(msg.from.bare, {
      id: msg.id,
      from: msg.from.full,
      body: msg.body
    }));
  });
}
