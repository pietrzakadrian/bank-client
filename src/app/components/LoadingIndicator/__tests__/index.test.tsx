import React from 'react';
import { render } from '@testing-library/react';

import LoadingIndicator from '..';

describe('<LoadingIndicator  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LoadingIndicator />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
