/* eslint-disable global-require, import/no-extraneous-dependencies, import/newline-after-import */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

// Create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

// Action Sanitizer (to serialize error objects)
const actionSanitizer = action => {
  if (action.error) {
    const error = action.payload;

    const serializedError = {
      type: error.name,
      message: error.message,
      stack: error.stack,
    };

    return { ...action, payload: serializedError };
  }

  return action;
};

const composeEnhancers = composeWithDevTools({ actionSanitizer, name: 'GreenFoot' });

export const configureStore = initialState =>
  createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
