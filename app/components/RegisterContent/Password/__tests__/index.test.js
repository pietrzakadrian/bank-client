import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'locales';
import configureStore from 'configureStore';
import { Form } from 'antd';

import Password from '../index';
import 'containers/RegisterPage/__tests__/__mocks__/matchMedia';

describe('<Password />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a Password', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Form>
            <Password />
          </Form>
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
