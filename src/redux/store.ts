import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

function configureStore(initialState?: object) {
  // configure middlewares
  // const middlewares: any = [];
  // compose enhancers
  // const enhancer = compose(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
