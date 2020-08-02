import React from 'react';
import { render } from '@testing-library/react';

import { Drawer } from '..';

describe('<Drawer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Drawer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
