/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import * as serviceWorker from 'serviceWorker';
import { history } from 'utils/history';
import 'antd/dist/antd.css';
import 'sanitize.css/sanitize.css';
import { throttle, omit } from 'lodash';
import { saveState, loadState } from 'utils/helpers';

// Import root app
import { App } from 'app/containers/App';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

// Initialize languages
import './locales/i18n';

// Create redux store with history
const preloadedState = loadState();

const store = configureAppStore(preloadedState, history);
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

// Load and Save redux store to localStorage
store.subscribe(
  throttle(() => {
    saveState({
      global: omit(store.getState().global, [
        'messages',
        'notifications',
        'currencies',
        'openedMessage',
        'isOpenedMessage',
        'user',
      ]),
    });
  }, 1000),
);

interface Props {
  Component: typeof App;
}
const ConnectedApp = ({ Component }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HelmetProvider>
        <Component />
      </HelmetProvider>
    </ConnectedRouter>
  </Provider>
);
const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app/containers/App', './locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require('./app/containers/App').App;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
