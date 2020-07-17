import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import Deposits from '../index';
import 'utils/__tests__/__mocks__/matchMedia';

describe('<Deposits />', () => {
  it('should render a Deposits', () => {
    const { container } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Deposits />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
