import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import Credits from '../index';
import 'utils/__tests__/__mocks__/matchMedia';

describe('<Credits />', () => {
  it('should render a Credits', () => {
    const { container } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Credits />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
