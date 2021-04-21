import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import { store, persistStore_ } from './store';

import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore_}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
