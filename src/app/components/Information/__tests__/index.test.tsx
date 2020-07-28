import React from 'react';
import { render } from '@testing-library/react';

import { Information } from '..';

describe('<Information  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Information />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
