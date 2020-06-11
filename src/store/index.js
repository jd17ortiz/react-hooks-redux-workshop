import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from '../reducers';

const configureStore = () => {
  const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};

export default configureStore;
