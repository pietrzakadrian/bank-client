import React from 'react';
import { render } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import configureStore from 'utils/configureStore';
import BankInformation from '../index';

describe('<BankInformation />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a BankInformation', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <BankInformation />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
