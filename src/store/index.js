import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import persistReducers from './persistReducers';

const SagaMiddleware = createSagaMiddleware();

const middlewares = [SagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistStore_ = persistStore(store);

SagaMiddleware.run(rootSaga);

export { store, persistStore_ };
