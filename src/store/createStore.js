import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose(applyMiddleware(...middlewares));

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(reducers, enhancer);
};
