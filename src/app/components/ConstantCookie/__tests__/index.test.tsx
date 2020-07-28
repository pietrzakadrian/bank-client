import React from 'react';
import { render } from '@testing-library/react';

import { ConstantCookie } from '..';

describe('<ConstantCookie  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ConstantCookie />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
