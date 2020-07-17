import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'utils/configureStore';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import HeaderAction from '../index';

describe('<HeaderAction />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a HeaderAction', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <HeaderAction />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
