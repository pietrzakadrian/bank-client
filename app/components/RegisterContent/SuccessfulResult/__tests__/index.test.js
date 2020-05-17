import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'locales';
import configureStore from 'configureStore';
import 'containers/RegisterPage/tests/__mocks__/matchMedia';
import SuccessfulResult from '../index';
describe('<FirstName />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a SuccessfulResult', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <SuccessfulResult />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
