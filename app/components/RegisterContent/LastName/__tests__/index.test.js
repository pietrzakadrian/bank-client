import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Form } from 'antd';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import configureStore from 'utils/configureStore';
import LastName from '../index';
import 'utils/__tests__/__mocks__/matchMedia';

describe('<LastName />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);
  const onValidateFields = () => null;

  it('should render a LastName', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Form>
            <LastName onValidateFields={onValidateFields} />
          </Form>
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
