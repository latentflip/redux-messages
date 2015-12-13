import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'andlog';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Stanza from 'stanza.io';
import { bindToDispatch } from './xmpp';

import './styles/main.styl';

import Config from 'config';
logger.log('Config.env:', Config.env);

import { Router } from 'react-router';
import { createHistory } from 'history';
import routes from './routes';

const history = createHistory();
const store = configureStore();

localStorage.nick = localStorage.nick || `dummy-${Math.floor(Math.random()*1000)}`;

const client = Stanza.createClient({
  jid: 'anon@anon.talky.me',
  wsURL: 'wss://anon.talky.me/xmpp-websocket',
  transport: 'websocket',
  useStreamManagement: true,
  useStreamResumption: false,
  capsNode: 'talky.io',
  softwareVersion: {
    name: 'Talky'
  }
});

client.sm.allowResume = false;
bindToDispatch(client, store.dispatch);

client.connect();
window.client = client;

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), document.querySelector('#root'));
