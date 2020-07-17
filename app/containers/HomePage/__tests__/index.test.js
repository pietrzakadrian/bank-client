import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import configureStore from 'utils/configureStore';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HomePage from '../index';

describe('<HomePage />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage />
        </IntlProvider>
        ,
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
