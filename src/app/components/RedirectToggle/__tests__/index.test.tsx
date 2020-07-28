import React from 'react';
import { render } from '@testing-library/react';

import { RedirectToggle } from '..';

describe('<RedirectToggle  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<RedirectToggle />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
