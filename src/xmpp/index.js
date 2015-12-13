export { default as Component } from './component';
import { clientActionCreators } from '../lib/redux-xmpp';


export const bindToDispatch = function (client, dispatch) {
  client.on('*', console.log.bind(console));

  client.on('session:started', () => {
    dispatch({
      type: 'SESSION_STARTED',
    });
  })
}
