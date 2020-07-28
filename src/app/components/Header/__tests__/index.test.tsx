import React from 'react';
import { render } from '@testing-library/react';

import { Header } from '..';

describe('<Header  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Header />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
