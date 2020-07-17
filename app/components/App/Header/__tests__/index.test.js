import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'utils/configureStore';
import { DEFAULT_LOCALE } from 'utils/locales';
import { IntlProvider } from 'react-intl';
import Header from '../index';

describe('<Header />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Header />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
