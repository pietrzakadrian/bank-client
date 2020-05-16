/**
 *
 * Tests for Footer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { createMemoryHistory } from 'history';
import Footer from '../index';
import { DEFAULT_LOCALE } from '../../../locales';
import configureStore from '../../../configureStore';

describe('<Footer />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a div', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Footer />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle click events', () => {
    const { getByText } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Footer />
        </IntlProvider>
      </Provider>,
    );

    const button = getByText('Privacy rules');
    fireEvent.click(button);
  });
});
