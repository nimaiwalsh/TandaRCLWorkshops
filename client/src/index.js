import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { PeristGate } from 'redux-persist';
import { store, persistor }  from './store';

import App from './containers/App';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
