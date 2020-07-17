import React from 'react';
import { render } from '@testing-library/react';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'utils/configureStore';
import Header from '../index';

describe('<Header />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a div', () => {
    const { container } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
        </ConnectedRouter>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
