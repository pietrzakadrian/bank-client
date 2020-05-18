import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'locales';
import configureStore from 'configureStore';
import { Form } from 'antd';

import PinCode from '../index';
import 'utils/__tests__/__mocks__/matchMedia';

describe('<PinCode />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a PinCode', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Form>
            <PinCode />
          </Form>
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
