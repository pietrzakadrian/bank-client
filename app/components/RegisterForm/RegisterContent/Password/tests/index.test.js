import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'locales';
import configureStore from 'configureStore';
import Password from '../index';
import './__mocks__/matchMedia';

describe('<Password />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a Password', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Password />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
