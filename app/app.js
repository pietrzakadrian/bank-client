/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import omit from 'lodash/omit';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'providers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved */

import { HelmetProvider } from 'react-helmet-async';
import { loadState, saveState } from 'providers/PersistStore';
import { throttle } from 'lodash';

import configureStore from 'utils/configureStore';

// Import i18n messages
import { translationMessages } from 'utils/i18n';

// Create redux store with history
const initialState = loadState();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

// Load and Save redux store to localStorage
store.subscribe(
  throttle(() => {
    saveState({
      language: store.getState().language,
      global: omit(store.getState().global, [
        'messages',
        'notifications',
        'currencies',
        'openedMessage',
        'isOpenedMessage',
      ]),
    });
  }, 1000),
);

const ConnectedApp = ({ messages }) => (
  <Provider store={store}>
    <LanguageProvider messages={messages}>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>
);

ConnectedApp.propTypes = {
  messages: PropTypes.object,
};

const render = (messages) => {
  ReactDOM.render(<ConnectedApp messages={messages} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['utils/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/pl.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    )
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
