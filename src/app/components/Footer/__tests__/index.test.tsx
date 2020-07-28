import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from '..';

describe('<Footer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Footer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
