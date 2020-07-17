import React from 'react';
import { render } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import configureStore from 'utils/configureStore';
import Savings from '../index';

describe('<Savings />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a Savings', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Savings />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
