import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { applyMiddleware, legacy_createStore } from 'redux';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers, { RootState } from './reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let store = legacy_createStore(
  reducers,
  undefined,
  applyMiddleware(thunk as ThunkMiddleware<RootState, any>)
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
