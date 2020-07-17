import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import configureStore from 'utils/configureStore';
import Subheader from '../index';

describe('<Subheader />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a information', () => {
    const messages = {
      title: {
        id: `test.title`,
        defaultMessage: 'title',
      },
    };

    const pageTitle = <FormattedMessage {...messages.title} />;
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Subheader pageTitle={pageTitle} />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
