import React from 'react';
import { render } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from '../index';

describe('<PrivateRoute />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a PrivateRoute', () => {
    const component = <div />;
    const { container } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <PrivateRoute component={component} restricted />
        </ConnectedRouter>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
