import React from 'react';
import { render } from '@testing-library/react';
import 'utils/__tests__/__mocks__/matchMedia';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Form } from 'antd';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import configureStore from 'utils/configureStore';
import EmailAddress from '../index';

describe('<EmailAddress />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);
  const onValidateFields = () => null;

  it('should render a information', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Form>
            <EmailAddress onValidateFields={onValidateFields} />
          </Form>
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
