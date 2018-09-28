import { createStore, applyMiddleware } from 'redux';
import { logger } from './logger/src/';
import { app } from '../reducers';
import { ENV } from '../utils/environment';
import getInitialState from './getInitialState';

export function configureStore (initialState = getInitialState()) {
  const middlewares = [];
  if (ENV.debugEnabled) {
    middlewares.push(logger);
  }

  return createStore(
    app,
    initialState,
    applyMiddleware(...middlewares)
  );
}
