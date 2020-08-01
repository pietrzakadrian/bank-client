import React from 'react';
import { render } from '@testing-library/react';

import { Privacy } from '..';

describe('<Privacy  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Privacy />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
