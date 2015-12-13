import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Room from './containers/Room';


export default (
  <Route path='/' component={App}>
    <Route path='/:room' component={Room} />
    <IndexRoute />
  </Route>
);
