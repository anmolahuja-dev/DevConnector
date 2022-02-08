import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {}; // empty state

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//createStore method takes rootReducer,state and  and this window.__Redux.... is to enable redux dev tools
// and composeWithDevTools method lets us use middleware and redux dev tools together
export default store;
