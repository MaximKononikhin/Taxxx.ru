import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';

import {reducer as signUpReducer} from './sign-up-screen/reducer';
import {reducer as signInReducer} from './sign-in-screen/reducer';
import { createAPI } from '../api/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  signUpReducer,
  signInReducer
});

const api = createAPI();

const makeStore = (context) => createStore(
  rootReducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);

export const wrapper = createWrapper(makeStore);
