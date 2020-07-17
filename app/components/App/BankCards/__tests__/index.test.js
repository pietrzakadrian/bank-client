import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import BankCards from '../index';
import 'utils/__tests__/__mocks__/matchMedia';

describe('<BankCards />', () => {
  it('should render a BankCards', () => {
    const { container } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <BankCards />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
