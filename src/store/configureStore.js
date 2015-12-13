import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(initialState = {}) {
  const logger = createLogger();
  const finalCreateStore = compose(
    applyMiddleware(
      thunk,
      logger
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  let store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer.default || nextRootReducer);
    });
  }

  return store;
}
