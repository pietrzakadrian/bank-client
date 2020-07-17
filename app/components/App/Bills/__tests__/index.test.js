import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'utils/configureStore';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import Bills from '../index';
import 'utils/__tests__/__mocks__/matchMedia';

describe('<Bills />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a Bills', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Bills />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
