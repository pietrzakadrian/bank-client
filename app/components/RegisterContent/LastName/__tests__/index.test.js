import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Form } from 'antd';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'locales';
import configureStore from 'configureStore';
import LastName from '../index';
import 'containers/RegisterPage/__tests__/__mocks__/matchMedia';

describe('<LastName />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a LastName', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Form>
            <LastName />
          </Form>
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
