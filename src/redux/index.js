import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import * as buffers from './buffers';
import * as router from './router';

const modules = [
  buffers,
  router,
];

export default function configureStore(initialState = {}, history) {
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, routerMiddleware(history));
  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('containers/DevTools').default.instrument();
    middleware = compose(middleware, devTools);
  }

  const reducers = modules.reduce((result, module) => {
    result[module.path] = module.reducer;
    return result;
  }, {});
  const rootReducer = combineReducers(reducers);

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(rootReducer, initialState);
  return store;
}
