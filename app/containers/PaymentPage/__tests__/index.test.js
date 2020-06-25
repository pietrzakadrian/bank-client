import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from '../../../configureStore';
import PaymentPage from '../index';
import { DEFAULT_LOCALE } from '../../../locales';
import 'utils/__tests__/__mocks__/matchMedia';

describe('<PaymentPage />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render its PaymentPage', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <ConnectedRouter history={history}>
            <HelmetProvider>
              <PaymentPage />
            </HelmetProvider>
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
