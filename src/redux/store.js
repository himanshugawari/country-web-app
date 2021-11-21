import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countryReducer } from './countryReducer';

export const store = createStore(
  countryReducer,
  composeWithDevTools(applyMiddleware())
);
